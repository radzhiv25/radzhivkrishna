-- Run this in the Supabase SQL Editor to enable gallery likes.
-- Table: one row per like (allows future per-user/session if needed).

create table if not exists gallery_likes (
  id uuid primary key default gen_random_uuid(),
  filename text not null,
  created_at timestamptz default now()
);

create index if not exists gallery_likes_filename_idx on gallery_likes(filename);

alter table gallery_likes enable row level security;

-- Allow anonymous insert (anyone can like) and select (to show counts)
drop policy if exists "Allow anon insert" on gallery_likes;
create policy "Allow anon insert" on gallery_likes
  for insert to anon with check (true);

drop policy if exists "Allow anon select" on gallery_likes;
create policy "Allow anon select" on gallery_likes
  for select to anon using (true);

-- RPC: returns one row per filename with its like count (images with 0 likes are omitted)
create or replace function get_gallery_like_counts()
returns table(filename text, like_count bigint)
language sql
security definer
as $$
  select filename, count(*)::bigint from gallery_likes group by filename;
$$;
