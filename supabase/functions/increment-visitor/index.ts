import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Get CORS headers dynamically based on origin
function getCorsHeaders(origin: string | null) {
  // Allow localhost for development and all origins for production
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5174',
    'https://radzhiv.dev',
    'https://www.radzhiv.dev',
  ]
  
  const originHeader = origin && allowedOrigins.includes(origin) 
    ? origin 
    : '*'
  
  return {
    'Access-Control-Allow-Origin': originHeader,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
  }
}

serve(async (req) => {
  const origin = req.headers.get('origin')
  const corsHeaders = getCorsHeaders(origin)
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      status: 200,
      headers: corsHeaders 
    })
  }

  try {
    // Get client IP and User Agent from request
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'
    const userAgent = req.headers.get('user-agent') || 'unknown'
    
    // Create a simple hash for unique visitor tracking (IP + User Agent)
    const visitorHash = await createHash(clientIP + userAgent)

    // Create Supabase client with service role for admin operations
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Check if this visitor has been counted before (within last 24 hours)
    const { data: existingVisitor } = await supabaseClient
      .from('visitor_logs')
      .select('id')
      .eq('visitor_hash', visitorHash)
      .gte('visited_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .single()

    let newCount: number

    // Only increment if this is a new visitor (or hasn't visited in 24 hours)
    if (!existingVisitor) {
      // Log the visitor
      await supabaseClient
        .from('visitor_logs')
        .insert([
          {
            visitor_hash: visitorHash,
            ip_address: clientIP,
            user_agent: userAgent,
            visited_at: new Date().toISOString()
          }
        ])
        .select()

      // Increment the count atomically
      const { data, error } = await supabaseClient.rpc('increment_visitor_count')

      if (error) {
        throw new Error(`Failed to increment count: ${error.message}`)
      }

      newCount = data || 0
    } else {
      // Visitor already counted, just return current count
      const { data: countData } = await supabaseClient
        .from('visitor_count')
        .select('count')
        .single()

      newCount = countData?.count || 0
    }

    return new Response(
      JSON.stringify({
        success: true,
        count: newCount,
        isNewVisitor: !existingVisitor
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})

// Simple hash function for visitor identification
async function createHash(str: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}
