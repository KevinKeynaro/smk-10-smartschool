import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Membaca buku rahasia .env kita yang ada di luar
dotenv.config();

// Mengambil alamat dan kunci dari file .env
// (kita beri tahu TypeScript kalau ini pasti berupa teks/string)
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

// Membuat jembatan ajaib ke database Supabase milikmu
export const supabase = createClient(supabaseUrl, supabaseKey);