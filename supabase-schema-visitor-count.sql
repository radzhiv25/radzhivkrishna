-- Create visitor_count table to store the total count
CREATE TABLE IF NOT EXISTS visitor_count (
  id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1), -- Only one row allowed
  count BIGINT DEFAULT 0 NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial row if it doesn't exist
INSERT INTO visitor_count (id, count) 
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

-- Create visitor_logs table to track unique visitors (optional, for preventing duplicate counts)
CREATE TABLE IF NOT EXISTS visitor_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_hash VARCHAR(255) NOT NULL UNIQUE, -- Hash of IP + User Agent
  visited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Create index on visitor_hash for quick lookups
CREATE INDEX IF NOT EXISTS idx_visitor_logs_hash ON visitor_logs(visitor_hash);
CREATE INDEX IF NOT EXISTS idx_visitor_logs_visited_at ON visitor_logs(visited_at);

-- Enable RLS
ALTER TABLE visitor_count ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_logs ENABLE ROW LEVEL SECURITY;

-- Allow public to read visitor count
CREATE POLICY "Allow public to read visitor count" ON visitor_count
  FOR SELECT USING (true);

-- Allow public to update visitor count (will be done via Edge Function with service role)
CREATE POLICY "Allow public to update visitor count" ON visitor_count
  FOR UPDATE USING (true);

-- Allow public to insert visitor logs
CREATE POLICY "Allow public to insert visitor logs" ON visitor_logs
  FOR INSERT WITH CHECK (true);

-- Function to increment visitor count atomically
CREATE OR REPLACE FUNCTION increment_visitor_count()
RETURNS BIGINT AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE visitor_count 
  SET count = count + 1, updated_at = NOW()
  WHERE id = 1
  RETURNING count INTO new_count;
  
  -- If no row exists, create it
  IF new_count IS NULL THEN
    INSERT INTO visitor_count (id, count) VALUES (1, 1)
    RETURNING count INTO new_count;
  END IF;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
