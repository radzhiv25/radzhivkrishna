# Contact Form Setup Instructions

This project now includes shadcn/ui components and Supabase integration for the contact form.

## Prerequisites

1. A Supabase account and project
2. Node.js and npm installed

## Setup Steps

### 1. Supabase Setup

1. Go to [Supabase](https://supabase.com) and create a new project
2. In your Supabase project dashboard, go to the SQL Editor
3. Run the SQL script from `supabase-schema.sql` to create the contact_enquiries table
4. Go to Settings > API to get your project URL and anon key

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with your actual Supabase credentials.

### 3. Install Dependencies

The required dependencies have already been installed:
- `@supabase/supabase-js` - Supabase client
- `lucide-react` - Icons for shadcn/ui
- `class-variance-authority` - For component variants

### 4. Components Added

The following shadcn/ui components have been added:
- `Button` - Styled button component
- `Input` - Styled input component
- `Textarea` - Styled textarea component
- `Label` - Styled label component
- `Card` - Card container with header, content, and footer

### 5. Features

- **Form Validation**: Using react-hook-form with Zod schema validation
- **Database Storage**: Messages are stored in Supabase database
- **Modern UI**: Clean, accessible form using shadcn/ui components
- **Error Handling**: Proper error states and user feedback
- **Responsive Design**: Works on both desktop and mobile devices
- **Console Logging**: Form data is logged to browser console for debugging

### 6. Database Schema

The `contact_enquiries` table includes:
- `id` - UUID primary key
- `name` - User's name
- `email` - User's email
- `message` - User's message
- `created_at` - Timestamp when record was created
- `updated_at` - Timestamp when record was last updated

### 7. Security

- Row Level Security (RLS) is enabled
- Public can insert contact enquiries
- Only authenticated users can read enquiries (configurable)

## Usage

The contact form will now:
1. Validate user input using Zod schema
2. Store the enquiry in your Supabase database
3. Log the data to browser console for debugging
4. Show success/error messages to the user
5. Reset the form after successful submission

## Troubleshooting

1. **Supabase connection issues**: Check your environment variables
2. **Form submission errors**: Check the browser console for detailed error messages
3. **Styling issues**: Ensure Tailwind CSS is properly configured
4. **Database errors**: Verify the table was created correctly in Supabase
