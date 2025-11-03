import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseUrl = 'https://szuvgtkbqemkdvajuvkt.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dXZndGticWVta2R2YWp1dmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNTA5NDYsImV4cCI6MjA3NzcyNjk0Nn0.hnp_VhDHXQdGiU5vv0EiCV0xbKqFuIhH_IprDbzHhe8";

/**
 * Creates and exports a Supabase client instance configured with
 * environment variables.
 *
 * This client can be imported and used throughout the application for
 * authentication and database operations.
 */
export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  },
);
