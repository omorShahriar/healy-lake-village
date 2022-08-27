import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://ymcbammfxvergxwancnw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltY2JhbW1meHZlcmd4d2FuY253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk4ODc0NDYsImV4cCI6MTk3NTQ2MzQ0Nn0.Cbt97qTmmqI6zi2GxKSpvvite2XYCbU8H_hCRIzXUso"
);
