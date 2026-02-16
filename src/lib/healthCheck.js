/**
 * Health check utilities for monitoring service status
 */

import { getSupabaseConfig } from './env';

const HEALTH_CHECK_CACHE_KEY = 'health_check_cache';
const HEALTH_CHECK_CACHE_DURATION = 30 * 1000; // Cache for 30 seconds

/**
 * Check Supabase health by testing REST API connectivity
 * @returns {Promise<boolean>} True if Supabase is operational
 */
async function checkSupabaseHealth() {
  try {
    const { url: supabaseUrl, anonKey: supabaseAnonKey } = getSupabaseConfig();
    
    if (!supabaseUrl || !supabaseAnonKey) {
      return false;
    }

    // Check Supabase by trying to access the REST API
    // We'll use a simple query to a system table or check the API version
    // Using OPTIONS request which is lightweight and checks connectivity
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'OPTIONS',
        headers: {
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      
      // Any response (even 404) means Supabase is reachable
      // 200, 204, 404 all indicate the service is up
      return response.status < 500;
    } catch (fetchError) {
      clearTimeout(timeoutId);
      // If it's an abort error, it's a timeout
      if (fetchError.name === 'AbortError') {
        return false;
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Supabase health check failed:', error);
    return false;
  }
}

/**
 * Check Vercel deployment health
 * Since we're already on Vercel, we can check if the site is responding
 * @returns {Promise<boolean>} True if Vercel deployment is operational
 */
async function checkVercelHealth() {
  try {
    // Check if we can reach the current origin
    // Using a lightweight endpoint or the root
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    try {
      const response = await fetch(window.location.origin, {
        method: 'HEAD',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response.ok;
    } catch (fetchError) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        return false;
      }
      throw fetchError;
    }
  } catch (error) {
    console.error('Vercel health check failed:', error);
    return false;
  }
}

/**
 * Perform comprehensive health check
 * @returns {Promise<{supabase: boolean, vercel: boolean, allOperational: boolean}>}
 */
export async function performHealthCheck() {
  // Check cache first
  const cached = localStorage.getItem(HEALTH_CHECK_CACHE_KEY);
  const cachedTime = localStorage.getItem(`${HEALTH_CHECK_CACHE_KEY}_time`);
  
  if (cached && cachedTime) {
    const timeDiff = Date.now() - parseInt(cachedTime);
    if (timeDiff < HEALTH_CHECK_CACHE_DURATION) {
      return JSON.parse(cached);
    }
  }

  // Perform checks in parallel
  const [supabaseHealthy, vercelHealthy] = await Promise.all([
    checkSupabaseHealth(),
    checkVercelHealth(),
  ]);

  const result = {
    supabase: supabaseHealthy,
    vercel: vercelHealthy,
    allOperational: supabaseHealthy && vercelHealthy,
    timestamp: Date.now(),
  };

  // Cache the result
  localStorage.setItem(HEALTH_CHECK_CACHE_KEY, JSON.stringify(result));
  localStorage.setItem(`${HEALTH_CHECK_CACHE_KEY}_time`, Date.now().toString());

  return result;
}
