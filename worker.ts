import { createClient } from '@supabase/supabase-js'

export interface Env {
  SUPABASE_URL: string
  SUPABASE_SERVICE_ROLE_KEY: string  // use service role in Workers — no browser auth
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,        // critical — no localStorage in Workers
        detectSessionInUrl: false,
      },
    })

    const { data, error } = await supabase
      .from('your_table')
      .select('*')
      .limit(10)

    if (error) return new Response(JSON.stringify({ error }), { status: 500 })
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  },
}
