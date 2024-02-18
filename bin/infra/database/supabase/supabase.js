const supabaseClient = require("@supabase/supabase-js");
require('dotenv').config();

const SUPABASE_URL = "https://bwstuipaunilvlgodbzq.supabase.co"
const SUPABASE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3c3R1aXBhdW5pbHZsZ29kYnpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3OTg0MjEsImV4cCI6MjAyMjM3NDQyMX0.dDRT8SkJho2JYSuK0DGbW1drdybzZp7Nf88SU3kK96A"

const supabase = supabaseClient.createClient(SUPABASE_URL, SUPABASE_TOKEN)

module.exports = supabase