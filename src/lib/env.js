/**
 * Centralized environment variable configuration
 * Uses Vite's import.meta.env for frontend code
 */

/**
 * Get Supabase URL from environment variables
 * @returns {string} Supabase project URL
 */
export function getSupabaseUrl() {
  const url = import.meta.env.VITE_SUPABASE_URL;
  if (!url) {
    console.warn('VITE_SUPABASE_URL is not set in environment variables');
  }
  return url;
}

/**
 * Get Supabase Anon Key from environment variables
 * @returns {string} Supabase anon/public key
 */
export function getSupabaseAnonKey() {
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!key) {
    console.warn('VITE_SUPABASE_ANON_KEY is not set in environment variables');
  }
  return key;
}

/**
 * Get all Supabase configuration
 * @returns {{url: string, anonKey: string}} Supabase config object
 */
export function getSupabaseConfig() {
  return {
    url: getSupabaseUrl(),
    anonKey: getSupabaseAnonKey(),
  };
}

/**
 * Check if environment variables are properly configured
 * @returns {boolean} True if all required env vars are set
 */
export function isEnvConfigured() {
  return !!(getSupabaseUrl() && getSupabaseAnonKey());
}
