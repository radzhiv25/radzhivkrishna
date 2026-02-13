/**
 * Visitor count API utilities
 */

import { getSupabaseConfig } from './env'

const VISITOR_COUNT_KEY = 'visitor_count';
const VISITOR_COUNT_TIMESTAMP = 'visitor_count_timestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

/**
 * Get visitor count from Supabase Edge Function
 * @returns {Promise<number>} Current visitor count
 */
export async function getVisitorCount() {
  try {
    const { url: supabaseUrl, anonKey: supabaseAnonKey } = getSupabaseConfig();
    
    if (!supabaseUrl || !supabaseAnonKey) {
      return 0;
    }

    // Check cache first
    const cached = localStorage.getItem(VISITOR_COUNT_KEY);
    const cachedTime = localStorage.getItem(VISITOR_COUNT_TIMESTAMP);
    
    if (cached && cachedTime) {
      const timeDiff = Date.now() - parseInt(cachedTime);
      if (timeDiff < CACHE_DURATION) {
        return parseInt(cached);
      }
    }

    const apiUrl = `${supabaseUrl}/functions/v1/increment-visitor`;
    
    // Call the Edge Function
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch visitor count: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.success) {
      // Cache the result
      localStorage.setItem(VISITOR_COUNT_KEY, data.count.toString());
      localStorage.setItem(VISITOR_COUNT_TIMESTAMP, Date.now().toString());
      
      return data.count;
    }

    return 0;
  } catch (error) {
    // Return cached value if available, otherwise 0
    const cached = localStorage.getItem(VISITOR_COUNT_KEY);
    return cached ? parseInt(cached) : 0;
  }
}

/**
 * Get visitor count without incrementing (for display purposes)
 * @returns {Promise<number>} Current visitor count
 */
export async function fetchVisitorCount() {
  try {
    const { url: supabaseUrl } = getSupabaseConfig();
    
    if (!supabaseUrl) {
      return 0;
    }

    // Check cache first
    const cached = localStorage.getItem(VISITOR_COUNT_KEY);
    const cachedTime = localStorage.getItem(VISITOR_COUNT_TIMESTAMP);
    
    if (cached && cachedTime) {
      const timeDiff = Date.now() - parseInt(cachedTime);
      if (timeDiff < CACHE_DURATION) {
        return parseInt(cached);
      }
    }

    // You could create a separate read-only endpoint, or use the same one
    // For now, we'll just return cached value
    return cached ? parseInt(cached) : 0;
  } catch (error) {
    return 0;
  }
}
