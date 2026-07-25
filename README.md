# Your Portfolio — Starter

A personal portfolio built with Next.js 14 (App Router), TypeScript, and
Tailwind CSS. Dark, terminal-inspired design with an animated hero.

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18+ installed. Check with:

```bash
node -v
```

Then, inside this folder:

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser. Every file you save
updates the page instantly.

## 2. What to edit, in order

Every place you need to personalize is marked with an `// EDIT:` comment.
Go through these files top to bottom:

1. **`app/layout.tsx`** — page title & description (shows up in Google/tab)
2. **`components/Nav.tsx`** — your name/handle in the top bar
3. **`components/TerminalWindow.tsx`** — the `LINES` array: your intro,
   as if typed into a terminal
4. **`components/Hero.tsx`** — your headline and one-line bio
5. **`components/About.tsx`** — your real bio paragraph + your actual
   skills list
6. **`components/Project.tsx`** — the Chart GPT case study. This is the
   most important section. Fill in Problem / Approach / Challenges /
   Result honestly. Swap the placeholder screenshot box for a real
   screenshot or short GIF (drop the image in `public/` and reference it
   with `<img src="/your-image.png" />`). Add your live demo + GitHub
   links.
7. **`components/Contact.tsx`** — your real email, GitHub, LinkedIn

### Changing colors

All colors live in one place: `app/globals.css`, under `:root`. Change
the hex values there and the whole site updates — you don't need to hunt
through components.

### Adding a second project

Once you ship another project, copy the structure inside
`components/Project.tsx` — duplicate the card `<div>`, or split it into
its own component (e.g. `ProjectTwo.tsx`) and import it in `app/page.tsx`.
This is a good next exercise for learning the framework.

## 3. Deploy to Vercel (free)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project**, select your repo, click **Deploy**.
   Vercel auto-detects Next.js — no config needed.
4. You'll get a live URL like `your-repo.vercel.app`. You can later add a
   custom domain (e.g. `yourname.dev`) in the Vercel project settings.

Every time you `git push`, Vercel redeploys automatically.

## 4. Learning notes (since you're new to Next.js/React)

- `app/page.tsx` is the homepage. It just imports and stacks the section
  components in order — that's the whole "layout."
- Each file in `components/` is a self-contained piece of UI. This is
  the core React idea: build small pieces, compose them into a page.
- `"use client"` at the top of `TerminalWindow.tsx` means that component
  runs in the browser (needed because it uses animation/state). Most
  other components don't need this — they're static and render on the
  server, which is faster.
- Tailwind classes (`text-muted`, `px-6`, `rounded-xl`, etc.) are styling
  written directly in the markup instead of a separate CSS file. The
  names map to the color/spacing tokens defined in `tailwind.config.ts`
  and `globals.css`.
