import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Get CORS headers dynamically based on origin
function getCorsHeaders(origin: string | null) {
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5174',
    'https://radzhiv.dev',
    'https://www.radzhiv.dev',
  ]
  const originHeader = origin && allowedOrigins.includes(origin) ? origin : '*'
  return {
    'Access-Control-Allow-Origin': originHeader,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
  }
}

// Normalize IP for Postgres inet: first valid IPv4 from x-forwarded-for, or null
function normalizeIpForInet(raw: string): string | null {
  const first = raw.split(',')[0].trim()
  if (!first || first === 'unknown') return null
  const ipv4 = /^(\d{1,3}\.){3}\d{1,3}$/
  if (ipv4.test(first)) return first
  return null
}

// Parse OS from User-Agent (simple detection)
function parseOS(ua: string): string {
  if (!ua || ua === 'unknown') return 'Unknown'
  const u = ua.toLowerCase()
  if (u.includes('windows')) return 'Windows'
  if (u.includes('mac os') || u.includes('macintosh')) return 'macOS'
  if (u.includes('iphone') || u.includes('ipad')) return 'iOS'
  if (u.includes('android')) return 'Android'
  if (u.includes('linux')) return 'Linux'
  if (u.includes('cros')) return 'Chrome OS'
  return 'Other'
}

// Parse platform: Mobile, Tablet, or Desktop
function parsePlatform(ua: string): string {
  if (!ua || ua === 'unknown') return 'Unknown'
  const u = ua.toLowerCase()
  if (u.includes('mobile') && !u.includes('ipad')) return 'Mobile'
  if (u.includes('tablet') || u.includes('ipad')) return 'Tablet'
  return 'Desktop'
}

// Fetch country from IP (ip-api.com, no key, 45 req/min)
async function getCountryFromIp(ip: string): Promise<string | null> {
  try {
    const res = await fetch(`http://ip-api.com/json/${encodeURIComponent(ip)}?fields=country`, { signal: AbortSignal.timeout(3000) })
    if (!res.ok) return null
    const data = await res.json()
    return data?.country ?? null
  } catch {
    return null
  }
}

serve(async (req) => {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)

  if (req.method === 'OPTIONS') {
    return new Response('ok', { status: 200, headers: corsHeaders })
  }

  try {
    const rawIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || ''
    const userAgent = req.headers.get('user-agent') || 'unknown'

    const clientIPForInet = normalizeIpForInet(rawIp)
    const firstIp = rawIp.split(',')[0].trim() || 'unknown'

    const visitorHash = await createHash(firstIp + userAgent)

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: existingVisitor } = await supabaseClient
      .from('visitor_logs')
      .select('id')
      .eq('visitor_hash', visitorHash)
      .gte('visited_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .maybeSingle()

    let newCount: number

    if (!existingVisitor) {
      const os = parseOS(userAgent)
      const platform = parsePlatform(userAgent)
      const country = clientIPForInet ? await getCountryFromIp(clientIPForInet) : null

      const row: Record<string, unknown> = {
        visitor_hash: visitorHash,
        user_agent: userAgent,
        visited_at: new Date().toISOString(),
        os,
        platform,
        country,
      }

      if (clientIPForInet !== null) {
        row.ip_address = clientIPForInet
      }

      const { data: insertData, error: insertError } = await supabaseClient
        .from('visitor_logs')
        .insert([row])
        .select('id')
        .single()

      if (insertError) {
        throw new Error(`Failed to log visitor: ${insertError.message}`)
      }

      const { data, error } = await supabaseClient.rpc('increment_visitor_count')
      if (error) {
        throw new Error(`Failed to increment count: ${error.message}`)
      }
      newCount = data ?? 0
    } else {
      const { data: countData } = await supabaseClient
        .from('visitor_count')
        .select('count')
        .single()
      newCount = countData?.count ?? 0
    }

    return new Response(
      JSON.stringify({
        success: true,
        count: newCount,
        isNewVisitor: !existingVisitor,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})

async function createHash(str: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}
