// app/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

// Use environment variables for safety
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Missing Supabase environment variables. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
}

// Create a single Supabase client for use in your app
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
