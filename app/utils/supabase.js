import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_ANON_KEY);