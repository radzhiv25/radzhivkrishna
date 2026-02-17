# Rajeev Krishna Portfolio

Personal portfolio built with React + Vite, featuring project showcases, experience timeline, theme toggle, animated hero, visitor count, and Supabase-backed integrations.

## Live

- Portfolio: `https://radzhivkrishna.vercel.app` (if deployed on Vercel)

## Tech Stack

- React 18 + Vite
- React Router
- Tailwind CSS
- Framer Motion
- Supabase (client + Edge Functions)
- Vercel Analytics

## Features

- Interactive single-page portfolio experience
- Dedicated project detail route: `/project/:slug`
- Splash screen with localStorage timing
- Visitor count integration (`increment-visitor` Edge Function)
- Contact form with Supabase persistence
- Theme switching (light/dark)

## Project Structure

```text
src/
  components/      UI sections and reusable components
  context/         Theme context
  lib/             Supabase/env/helper utilities
  pages/           Route-level pages
  projectData.js   Project content source
  experienceData.js
```

## Environment Variables

Create `.env` at the project root:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Notes:
- Only use public/anon keys in frontend code.
- Never commit service-role keys or private tokens.

## Local Development

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run preview
npm run lint
```

## Supabase

This repo includes:

- SQL schemas:
  - `supabase-schema.sql`
  - `supabase-schema-visitor-count.sql`
- Edge functions:
  - `supabase/functions/increment-visitor/index.ts`
  - `supabase/functions/send-contact-email/index.ts`

Deploy functions with Supabase CLI after setting project + secrets.

## Deployment

Recommended: Vercel.

- Build command: `npm run build`
- Output directory: `dist`
- Add the same `VITE_*` environment variables in Vercel project settings.

## Security Checklist (Public Repo)

- `.env` and secrets are excluded from git
- No hardcoded private API keys
- Use least-privilege Supabase policies (RLS)
- Run `npm run lint` before releases

## License

No license is currently defined. Add `LICENSE` (for example MIT) if you want explicit reuse terms.
