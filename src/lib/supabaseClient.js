import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xtvafetdmggkohcoekoa.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0dmFmZXRkbWdna29oY29la29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MTQ5MjUsImV4cCI6MjAzODA5MDkyNX0.wS_GyN1NwPzgRY3D-PSEaRYotKbj1eNDmqo8XPfGTls';  // Remplacez par votre propre clé anonyme

export const supabase = createClient(supabaseUrl, supabaseKey);
