import { createClient, SupabaseClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL;
const rawKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

function sanitizeString(val: unknown): string {
  if (typeof val !== 'string') return '';
  return val.trim().replace(/^["']|["']$/g, '');
}

const supabaseUrl = sanitizeString(rawUrl);
const supabasePublishableKey = sanitizeString(rawKey);

function isValidHttpUrl(urlString: string): boolean {
  if (!urlString) return false;
  if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) return false;
  if (
    urlString.includes('placeholder') ||
    urlString.includes('SUPABASE_URL') ||
    urlString.includes('your-project') ||
    urlString === 'http://' ||
    urlString === 'https://'
  ) {
    return false;
  }
  try {
    const parsed = new URL(urlString);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidKey(keyString: string): boolean {
  if (!keyString) return false;
  if (
    keyString === 'SUPABASE_PUBLISHABLE_KEY' ||
    keyString === 'SUPABASE_ANON_KEY' ||
    keyString.includes('placeholder') ||
    keyString.includes('your-anon-key')
  ) {
    return false;
  }
  return true;
}

export const hasSupabaseConfig: boolean = Boolean(
  isValidHttpUrl(supabaseUrl) && isValidKey(supabasePublishableKey)
);

function createSafeSupabaseClient(): SupabaseClient | null {
  if (!hasSupabaseConfig) {
    return null;
  }

  try {
    return createClient(supabaseUrl, supabasePublishableKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    });
  } catch (error) {
    console.warn('Supabase initialization failed, falling back to local storage session:', error);
    return null;
  }
}

export const supabase: SupabaseClient | null = createSafeSupabaseClient();

