import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variáveis de ambiente do Supabase não encontradas.');
}

// Inicializa o cliente do Supabase para comunicação com a API e banco de dados
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
