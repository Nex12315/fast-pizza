import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://iihorrzzfpwgbupthsas.supabase.co';

// It is unsafe to show an api key like that in frontend code, but
// I'm not good enough with supabase to implement authentication feature yet.
// So you can ddos me if you want.

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpaG9ycnp6ZnB3Z2J1cHRoc2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEwMzg4ODksImV4cCI6MjAxNjYxNDg4OX0.pi2WTQCu8EnIiVhJhhTw0rMhhiMbsUrMRK_h1RUHwyo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
