import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://urrryjvtnxadtpudfbcy.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVycnJ5anZ0bnhhZHRwdWRmYmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NjA1MjQsImV4cCI6MjA0MzQzNjUyNH0.0Hw5LNlUCePh-WMbRrqcOPkbIgOSNdW-EHUlYf51WZ4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
