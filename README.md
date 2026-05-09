# PocketPlayer Landing Page

Marketing landing page for [PocketPlayer](https://github.com/albertolicea00/PocketPlayer) — the open-source, independent Apple Watch music player.

## Stack

| Tool | Purpose |
|------|---------|
| [Tailwind CSS v3 (CDN)](https://tailwindcss.com) | Utility-first styling |
| [Alpine.js v3 (CDN)](https://alpinejs.dev) | Reactivity & UI state |
| Vanilla HTML/JS | i18n, dark mode, form handling |

No build step required. Open `index.html` directly in a browser or deploy to any static host.

## Features

- **Dark / Light mode** — toggle in the navbar, defaults to dark
- **Language switcher** — Spanish (default) and English
- **Neon design system** — built around `#B2F4FF · #00182F · #1567A8 · #002641`
- **14 sections**: Hero, Preview, Features, What you can do, How it works, User Manual, Privacy, Compatibility, Advantages, FAQ, Roadmap, Notify/Newsletter, Final CTA, Footer
- **Beta notify form** — email capture (wire up to Mailchimp / ConvertKit / your own backend)
- **Newsletter form** — separate subscription flow
- **Social links** — Telegram, GitHub, X/Twitter, Reddit
- **Similar apps** section

## Sections

| # | Section | Anchor |
|---|---------|--------|
| 1 | Hero / Header | `#hero` |
| 2 | Tagline (inside Hero) | — |
| 3 | Primary CTA (inside Hero) | — |
| 4 | App preview mockups | `#preview` |
| 5 | Main features | `#features` |
| 6 | What you can do | `#whatyoucando` |
| 7 | How it works | `#howto` |
| — | User manual | `#manual` |
| 8 | Privacy & security | `#privacy` |
| 9 | Compatibility | `#compatibility` |
| 10 | Advantages vs competitors | `#advantages` |
| 11 | FAQ | `#faq` |
| 12 | Roadmap | `#roadmap` |
| — | Notify / Newsletter / Social | `#notify` |
| 13 | Final CTA | — |
| 14 | Footer | — |

## Adding real mockup images

Look for the HTML comments `<!-- IMAGEN REEMPLAZABLE -->` in `index.html`. Each one describes:

- **What to show**: specific screen or view
- **Recommended dimensions**: pixel size for that device
- **How to get it**: Xcode Simulator screenshot or Figma design

Replace the CSS-drawn placeholder `<div>` with an `<img>` tag pointing to your screenshot.

## Wiring up the email forms

Both the "Notify me" and "Newsletter" forms call `submitNotify()` / `submitNewsletter()` in Alpine.js. Replace the `// TODO` comments in those functions with your preferred provider:

```js
// Mailchimp example
async submitNotify() {
  await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email: this.notifyEmail, list: 'beta' }),
    headers: { 'Content-Type': 'application/json' },
  })
  this.notifyOk = true
  this.notifyEmail = ''
},
```

## Deployment

Deploy to any static host:

```bash
# Vercel
vercel --prod

# Netlify drop
netlify deploy --dir . --prod

# GitHub Pages (gh-pages branch)
git subtree push --prefix PocketPlayer_landing origin gh-pages
```

## Contributing

See the main app's [CONTRIBUTING.md](../PocketPlayer_app/CONTRIBUTING.md).

## License

MIT © Alberto Licea
