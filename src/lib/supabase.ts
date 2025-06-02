import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Waitlist types - Updated to match your table structure
export interface WaitlistEntry {
  id: string // UUID
  email: string
  name: string
  created_at: string
  updated_at: string
}

// Waitlist API functions
export const waitlistApi = {
  // Add user to waitlist
  async addToWaitlist(email: string, name: string) {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          name
          // created_at and updated_at will be set automatically by your DB defaults
        }
      ])
      .select()

    if (error) {
      throw new Error(error.message)
    }

    return data[0]
  },

  // Check if email already exists
  async checkEmailExists(email: string) {
    const { data, error } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    if (error && error.code !== 'PGRST116') {
      throw new Error(error.message)
    }

    return !!data
  }
} 