import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { name, email, message } = await req.json()

        // Create Supabase client
        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        )

        // Store in database
        const { error: dbError } = await supabaseClient
            .from('contact_enquiries')
            .insert([
                {
                    name,
                    email,
                    message,
                    created_at: new Date().toISOString()
                }
            ])

        if (dbError) {
            throw new Error(`Database error: ${dbError.message}`)
        }

        // Send email using Resend (you'll need to set up Resend)
        const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { background: #f9f9f9; padding: 10px; border-radius: 3px; margin-top: 5px; }
            .message { background: #e8f4f8; padding: 15px; border-radius: 5px; border-left: 4px solid #2196F3; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 New Contact Form Submission</h2>
              <p>You have received a new message through your website contact form.</p>
            </div>
            
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${email}</div>
            </div>
            
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="message">${message}</div>
            </div>
            
            <div class="field">
              <div class="label">⏰ Submitted:</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>
            
            <hr style="margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              This email was sent from your website contact form. 
              You can reply directly to this email to respond to ${name}.
            </p>
          </div>
        </body>
      </html>
    `

        // For now, we'll use a simple email service
        // You can replace this with Resend, SendGrid, or any other email service
        const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                user_id: 'YOUR_USER_ID', // Replace with your EmailJS user ID
                template_params: {
                    name,
                    email,
                    message,
                    html_content: emailHtml
                }
            })
        })

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Contact form submitted and email sent successfully'
            }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200
            }
        )

    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                error: error.message
            }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 400
            }
        )
    }
})



