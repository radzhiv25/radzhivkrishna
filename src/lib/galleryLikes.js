import { getSupabaseConfig } from "./env";

/**
 * Add a like for a gallery image. Stores in Supabase gallery_likes table.
 * @param {string} filename - Image filename (e.g. "20251002_143350.jpg")
 * @returns {Promise<void>}
 */
export async function addLike(filename) {
  const { url, anonKey } = getSupabaseConfig();
  if (!url || !anonKey) return;

  const res = await fetch(`${url}/rest/v1/gallery_likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ filename }),
  });
  if (!res.ok) throw new Error("Failed to add like");
}

/**
 * Fetch like counts for all gallery images. Uses Supabase RPC get_gallery_like_counts.
 * Run the SQL in supabase/gallery_likes.sql first.
 * @returns {Promise<Record<string, number>>} Map of filename -> like count
 */
export async function getLikeCounts() {
  const { url, anonKey } = getSupabaseConfig();
  if (!url || !anonKey) return {};

  const res = await fetch(`${url}/rest/v1/rpc/get_gallery_like_counts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
    body: "{}",
  });
  if (!res.ok) return {};

  const rows = await res.json();
  const map = {};
  if (Array.isArray(rows)) {
    for (const r of rows) {
      if (r?.filename != null) map[r.filename] = Number(r.like_count) || 0;
    }
  }
  return map;
}
