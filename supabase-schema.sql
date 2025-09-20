-- Create the contact_enquiries table
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at ON contact_enquiries(created_at);

-- Create an index on email for potential lookups
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_email ON contact_enquiries(email);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert contact enquiries
-- (This is appropriate for a contact form)
CREATE POLICY "Allow public to insert contact enquiries" ON contact_enquiries
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows only authenticated users to read contact enquiries
-- (You can modify this based on your needs)
CREATE POLICY "Allow authenticated users to read contact enquiries" ON contact_enquiries
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_contact_enquiries_updated_at
    BEFORE UPDATE ON contact_enquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();




