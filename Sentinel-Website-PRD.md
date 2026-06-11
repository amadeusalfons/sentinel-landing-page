# 🛡️ Sentinel — Website PRD

> **Sentinel** is a SaaS platform for **customer service automation**, an **integrated dashboard**, and **AI solutions**. This PRD defines the marketing website, built by adapting four [21st.dev](https://21st.dev) components into a single, cohesive landing page with a consistent navy / black / gray identity.

## 1. Overview

The Sentinel website is a conversion-focused marketing landing page. Its job is to communicate what Sentinel does, build trust, and drive sign-ups / demo requests. We are reusing four prebuilt [21st.dev](https://21st.dev) (shadcn) components for speed and visual polish, but **all copy, palette, and typography are rewritten to fit Sentinel** so the page feels native rather than templated.

| Field | Value |
| --- | --- |
| Product | Sentinel |
| Category | Customer service automation · Integrated dashboard · AI solutions |
| Surface | Public marketing website (landing page) |
| Tech stack | Next.js (React) + shadcn/ui + Tailwind CSS v4 + lucide-react + GSAP |
| Status | Draft for review |

## 2. Goals & success metrics

- [ ] Clearly explain Sentinel's three pillars (automation, dashboard, AI) above the fold
- [ ] Establish credibility through a partners / trusted-by section
- [ ] Drive a single primary action: **Start free trial** / **Book a demo**
- [ ] Maintain visual consistency (one font, one palette) across every reused component

| Metric | Target |
| --- | --- |
| Hero → CTA click-through | ≥ 8% |
| Demo / trial conversion | ≥ 3% of visitors |
| Bounce rate | < 45% |
| Largest Contentful Paint | < 2.5s |

## 3. Audience

- **Support & CX leaders** evaluating automation to deflect tickets and cut response times
- **Ops / RevOps teams** who want one integrated dashboard instead of stitched-together tools
- **Technical buyers** assessing AI capabilities, security, and configurability

## 4. Design system

For consistency, every reused component is overridden to share **one typeface** and **one palette**. The source components ship with different fonts (Manrope, Plus Jakarta Sans) and brand colors — these are replaced.

### Typography

> 🔤 Use **Plus Jakarta Sans** as the single global font across all sections (already imported by the footer component). Remove the per-component `fontFamily` overrides (e.g. Manrope in the partners grid) and set the font once on the `<body>` / root layout.

| Role | Style |
| --- | --- |
| Display / H1 | Plus Jakarta Sans, 800–900, tight tracking |
| Headings H2–H3 | Plus Jakarta Sans, 600–700 |
| Body | Plus Jakarta Sans, 400–500 |

### Color palette (navy · black · gray)

| Token | Hex | Use |
| --- | --- | --- |
| `--background` | `#0A0A0A` | Page background (near-black) |
| `--navy` (primary) | `#0B1E3F` | Primary brand / hero accents, buttons |
| `--navy-600` | `#15356B` | Hover / gradient stops |
| `--foreground` | `#F5F6F8` | Primary text on dark |
| `--muted-foreground` | `#9CA3AF` | Secondary text, labels |
| `--border` | `#1F2937` | Dividers, card outlines |
| `--card` | `#101317` | Card / panel surfaces |

> 🎨 Map these into the shadcn theme tokens (`--primary`, `--secondary`, `--accent`) so component-level references like `var(--primary)` and `var(--brand)` resolve to the navy scale automatically. Pixel-grid `pixelColors` and per-logo brand colors should be swapped to navy/gray tints so the partners section matches the palette.

## 5. Page structure

Four sections, top to bottom, each mapped to one [21st.dev](https://21st.dev) component.

| # | Section | 21st.dev component | Install |
| --- | --- | --- | --- |
| 1 | Hero | `hero-odyssey` | `npx shadcn@latest add https://21st.dev/r/erikvalencia1/hero-odyssey` |
| 2 | Features | `features-4` | `npx shadcn@latest add https://21st.dev/r/meschacirung/features-4` |
| 3 | Partners | `pixel-logo-grid` | `npx shadcn@latest add https://21st.dev/r/smammar100/pixel-logo-grid` |
| 4 | CTA + Footer | `motion-footer` | `npx shadcn@latest add https://21st.dev/r/easemize/motion-footer` |

---

### Section 1 — Hero · `hero-odyssey`

**Purpose:** Lead with Sentinel's value proposition and the primary CTA, set against the dark navy hero treatment.

**Adapted copy**

> - **Eyebrow:** AI-powered customer service
> - **Headline:** Resolve more, faster — with Sentinel
> - **Subhead:** Sentinel automates customer support, unifies every channel into one integrated dashboard, and puts AI to work on your hardest conversations.
> - **Primary CTA:** Start free trial
> - **Secondary CTA:** Book a demo

**Adaptation notes**

- Keep the component's layout, animation, and glow treatment; recolor the gradient/glow to the navy scale (`--navy` → `--navy-600`).
- Ensure the two CTAs route to `/signup` and `/demo`.

---

### Section 2 — Features · `features-4`

**Purpose:** Explain Sentinel's capabilities in a 6-cell grid. Reuse the icon + heading + description structure exactly; rewrite all text.

**Section header**

> - **H2:** Everything your support team needs
> - **Sub:** Sentinel brings automation, a unified dashboard, and AI into one platform — so your team spends less time switching tools and more time helping customers.

**Adapted feature cells** (icon → content)

| Icon | Title | Description |
| --- | --- | --- |
| `Zap` | Service automation | Auto-triage, route, and resolve repetitive tickets so your team focuses on high-value conversations. |
| `Cpu` | Integrated dashboard | One place to see every channel, queue, and SLA — no more stitching tools together. |
| `Fingerprint` | Enterprise security | SOC 2-ready controls, SSO, and role-based access to keep customer data safe. |
| `Pencil` | Customizable workflows | Build rules, macros, and routing logic that match how your team actually works. |
| `Settings2` | Full control | Granular settings and audit trails give admins complete oversight. |
| `Sparkles` | Built for AI | AI drafts replies, summarizes threads, and surfaces insights across every conversation. |

**Adaptation notes**

- Keep the `divide-x divide-y border` grid and the lucide icons listed above.
- Recolor borders to `--border` and text to the palette tokens; drop the placeholder "Lyra" copy.

---

### Section 3 — Partners · `pixel-logo-grid`

**Purpose:** Build trust with a "Trusted by" logo grid and the animated pixel-hover effect.

**Adapted copy**

> - **Badge:** Trusted by support teams
> - **Heading:** Powering customer service for modern, fast-moving teams

**Adaptation notes**

- Replace the sample brand logos with Sentinel's actual customer / integration logos when available; until then, use neutral placeholders.
- Override `pixelColors` and per-logo brand colors to navy/gray tints (e.g. `#0B1E3F`, `#15356B`, `#9CA3AF`) so the section matches the palette instead of multicolor brand logos.
- Set the section font to Plus Jakarta Sans (remove the inline Manrope override).

---

### Section 4 — CTA + Footer · `motion-footer`

**Purpose:** Final conversion moment plus footer navigation, using the cinematic scroll-reveal treatment.

**Adapted copy**

> - **Giant background word:** SENTINEL
> - **Heading:** Ready to automate your support?
> - **Primary buttons:** Start free trial · Book a demo
> - **Secondary links:** Privacy Policy · Terms of Service · Support
> - **Marquee items:** Faster resolutions ✦ Unified dashboard ✦ AI-assisted replies ✦ Enterprise security ✦ Customizable workflows
> - **Copyright:** © 2026 Sentinel. All rights reserved.

**Adaptation notes**

- Replace the "Download iOS / Android" app-store buttons with **Start free trial** and **Book a demo** (Sentinel is web-based).
- Swap the "SOBERS" giant text and "Volvox" credits for Sentinel branding.
- The component uses `--primary` / `--secondary` for the aurora glow — these resolve to the navy palette via the theme tokens, so no further color work is needed.
- GSAP + ScrollTrigger are required dependencies for this component.

## 6. Technical notes

- All four components are shadcn registry items; install in order and place in a single page route (e.g. `app/page.tsx`).
- Define the palette and font once in `globals.css` / the Tailwind theme so every component inherits them — this is what guarantees the visual consistency the brand requires.
- Dependencies: `lucide-react` (icons), `gsap` + `ScrollTrigger` (footer), `@/lib/utils` `cn` helper (shared).
- Respect `prefers-reduced-motion` (already handled in the pixel grid; verify for hero and footer animations).

## 7. Open questions

- [ ] Final primary CTA — free trial, demo, or both?
- [ ] Which real customer / integration logos can we show in the partners section?
- [ ] Do we need a pricing or testimonials section before launch?
- [ ] Confirm Plus Jakarta Sans as the global font (vs. Manrope).
