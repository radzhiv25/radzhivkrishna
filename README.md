# Portfolio Template

A single-page portfolio built with **React**, **Vite**, and **Tailwind CSS**. Use it as a template for your own site: swap in your projects, experience, and links, then deploy.

**Live example:** [radzhivkrishna.vercel.app](https://radzhivkrishna.vercel.app)

---

## Tech stack

| Category   | Tech |
|-----------|------|
| Framework | React 18, Vite |
| Routing   | React Router 6 |
| Styling   | Tailwind CSS |
| Motion    | Framer Motion |
| Icons     | react-icons, Lucide React |
| Analytics | Vercel Analytics (optional) |
| Backend   | Supabase (optional: visitor count, health badge) |

---

## Quick start

```bash
git clone https://github.com/radzhiv25/radzhivkrishna.git my-portfolio
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Using this as a template

### 1. Content you’ll want to change

| File | Purpose |
|------|--------|
| **`src/projectData.js`** | Projects: name, description, image, link, slug, skills, category. Used for the “Proof of Work” grid and `/project/:slug` detail pages. |
| **`src/experienceData.js`** | Experience entries: title, company, dates, description, responsibilities, responsibilitiesMobile (short copy for small screens), techStack. |
| **`src/components/CombinedPage.jsx`** | Hero copy (name, intro, highlighted words), skills in the hero, GitHub username for the activity calendar. |
| **`src/components/SplashScreen.jsx`** | Splash message and “made with” line. |
| **`src/components/Navbar.jsx`** | Site name, logo, nav links, resume PDF path (`/RajeevFrontendResumeNew.pdf` → your file in `public/`). |
| **`src/components/Footer.jsx`** | Email, social links (LinkedIn, GitHub, Twitter, Dribbble), copyright name. |
| **`src/components/FloatingResume.jsx`** | Resume link label and PDF path. |
| **`public/`** | Favicon, resume PDF, any images referenced in projectData. |

### 2. Optional: visitor count & status badge

The footer can show a **visitor count** and an **“All systems operational”** badge (Supabase + Vercel health check). Both need a Supabase project.

1. Create a project at [supabase.com](https://supabase.com).
2. Add an Edge Function (e.g. `increment-visitor`) that increments a counter and returns the new count; expose it via Supabase’s function URL.
3. In the repo root, create a `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

4. Redeploy. The app will call the function on load and show the count in the footer; the status badge will show green when Supabase and the deployment are reachable.

If you don’t set these env vars, the app still runs; visitor count and health check will fall back or show a neutral state.

### 3. Optional: Vercel Analytics

To enable Vercel Analytics, keep `@vercel/analytics` and the `<Analytics />` usage in `App.jsx`. Remove them if you’re not deploying on Vercel or don’t want analytics.

---

## Project structure

```text
src/
  App.jsx              Routes, splash, layout
  main.jsx             Entry (React + Router + ThemeProvider)
  index.css            Tailwind + global styles, fonts
  projectData.js       Project list (grid + detail pages)
  experienceData.js    Experience list (accordion)
  components/
    CombinedPage.jsx   Home: hero, intro, experience, projects, GitHub calendar
    Navbar.jsx         Header, nav, theme toggle
    Footer.jsx         Contact, socials, visitor count, status badge
    Experience.jsx     Accordion (desktop + mobile copy)
    ProjectCard.jsx    Project tile
    ProjectGlimpse.jsx Preview strip + “View All Projects”
    SplashScreen.jsx   First-load splash
    BackToTop.jsx      Scroll-to-top button
    FloatingResume.jsx Floating resume link
    StatusBadge.jsx    Supabase/Vercel health (footer)
    VisitorCount.jsx   Footer visitor count
    Skills.jsx         Tools/technologies strip
    AnimatedAsciiArt.jsx  Hero avatar effect
    ui/                e.g. animated-theme-toggler
  pages/
    ProjectDetail.jsx  /project/:slug
    NotFound.jsx       404
  lib/
    env.js             Env helpers (VITE_SUPABASE_*)
    visitorCount.js    Fetch/cache visitor count
    healthCheck.js     Supabase/Vercel health
    skillIcons.jsx     Skill → icon mapping
    asciiConverter.js  ASCII art utility
    utils.js           e.g. cn (clsx + tailwind-merge)
  context/
    ThemeContext.jsx   Dark/light theme
public/                Static assets, resume PDF
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Vite) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run ESLint |

---

## Deployment (e.g. Vercel)

1. Push the repo to GitHub (or connect your Git provider).
2. In Vercel, import the repo and set:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
3. If you use visitor count or the status badge, add in Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy. Your portfolio will be live at `*.vercel.app` (or your custom domain).

---

## Security (public repo)

- **Do not commit** `.env` or any file with real keys (`.env` should be in `.gitignore`).
- Only **public/anon** Supabase keys belong in frontend env; never use the service role key in the client.
- Run `npm run lint` before pushing.

---

## License

No license is set by default. Add a `LICENSE` file (e.g. MIT) if you want to define reuse terms.
