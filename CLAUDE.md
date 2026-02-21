# Design Agent Guidelines

You are designing React components inside an Astro + React + Tailwind CSS project.
The project uses Astro for SSG with React components hydrated via `client:load`.

## Project Structure

- `src/components/` — React components (`.jsx` + companion `.css`)
- `src/pages/` — Astro page files
- `src/layouts/Layout.astro` — Main layout (injects theme CSS variables)
- `siteConfig.json` — All site content data
- `sitePlan.json` — Site architecture and component definitions
- `tailwind.config.js` — Tailwind config with theme token mappings

## Styling System

### Tailwind CSS Classes (for layout, spacing, sizing)
Use Tailwind utility classes in JSX for layout, spacing, sizing, and responsive design.

### CSS Variables (for ALL colors — NEVER hardcode hex)
These CSS variables are injected at runtime via Layout.astro from siteConfig.json.

**⚠️ NEVER hardcode hex color values.** Use `var(--primary-color)` etc. everywhere.

| Variable | Tailwind Token | Purpose |
|----------|---------------|---------|
| `var(--primary-color)` | `text-primary`, `bg-primary` | Brand primary color |
| `var(--secondary-color)` | `text-secondary`, `bg-secondary` | Brand secondary color |
| `var(--accent-color)` | `text-accent`, `bg-accent` | Accent highlights |
| `var(--bg-page)` | `bg-background` | Page background |
| `var(--bg-surface)` | `bg-surface` | Card/container background |
| `var(--text-primary)` | `text-text-primary` | Default text on light backgrounds |
| `var(--text-secondary)` | `text-text-secondary` | Secondary/muted text on light backgrounds |
| `var(--text-inverse)` | `text-text-inverse` | Text on dark/colored backgrounds (usually white) |
| `var(--border-color)` | `border-border` | Borders and dividers |

### Font Families
- Headings: `font-heading` (Tailwind class)
- Body: `font-body` (Tailwind class)

### Companion CSS Files
Use the companion `.css` file for `@keyframes`, complex gradients, hover effects, decorative pseudo-elements, and clip-paths.

### Custom Breakpoints
- `mobile`: 320px
- `small`: 640px
- `mid`: 768px
- `large`: 1024px

## Contrast Rules (NON-NEGOTIABLE)

1. **Light background** (`--bg-page`, `--bg-surface`, white, light grays) → text MUST use `--text-primary` or `--text-secondary`
2. **Dark/colored background** (`--primary-color`, dark gradients, image overlays) → text MUST use `--text-inverse` (white)
3. **NEVER** put `--text-primary` on a `--primary-color` background — they are often the same color
4. **NEVER** put `--primary-color` text on a `--primary-color` background
5. **Gradient backgrounds**: if any part of the gradient is dark, ALL text over it must be `--text-inverse`
6. **Image backgrounds**: ALWAYS add a dark scrim/overlay (e.g., `bg-black/60`) and use `--text-inverse`
7. **Body text** must be at full opacity — never below 0.8

## Design Quality

You have full creative freedom. Make every layout and visual decision yourself.

The only quality criteria that matter for this component to pass review:

1. **Text is readable** — every piece of text can be read at a glance. No text blends into its background.
2. **Content is rendered** — all data from props appears on screen. No empty cards, no missing sections.
3. **Layout works** — no overflow, no elements overlapping, proper spacing. Looks finished, not broken.
4. **Responsive** — works at both 1440px (desktop) and 375px (mobile).

Design taste, visual style, and creative choices are entirely yours. There is no correct answer for how the component should look — make it look great for the niche and the content.

## Animation Safety Rules

These prevent broken screenshots:

1. **Entrance animations are safe** — fade-in, slide-up (20px→0), scale 0.95→1. They settle quickly.
2. **Decorative-only motion is safe** — floating orbs, pulsing glows, gradient shifts on backgrounds.
3. **AVOID animations that move content elements between different positions** — no orbiting, no large translateY on card grids, no rotating content containers. These leave elements in mid-animation positions at screenshot time, causing apparent overlaps.

## Available Stock Images

- `/images/image1.webp` through `/images/image8.webp`
- Use for backgrounds, section visuals, illustrations
- Always add a dark scrim/overlay when placing text over images

## File Scope

You may ONLY edit:
- `src/components/{ComponentName}.jsx`
- `src/components/{ComponentName}.css`

Do NOT create any other files.

## Self-Review Process

After writing the component:
1. Navigate to the page URL and take a screenshot
2. Check: can you read every piece of text?
3. Check: is all the content from the data rendered?
4. Check: does the layout look clean — no overflow, no overlap, proper spacing?
5. If anything fails those three checks, fix it and re-screenshot before signaling completion

## Completion Signal

`COMPONENT_{COMPONENTNAME}_COMPLETE` (e.g., `COMPONENT_HEADER_COMPLETE`)


## Resolved Theme: Ocean Trust

This is the ACTIVE color palette for this project. All CSS variables resolve to these values:

| CSS Variable | Value | Use For |
|-------------|-------|---------|
| `--primary-color` | #0C2D5E | Brand color, accent backgrounds, CTA buttons |
| `--secondary-color` | #1A5276 | Supporting brand color, highlights |
| `--accent-color` | #0E7C46 | Hover states, small highlights |
| `--bg-page` | #F7F9FC | Default page/section background |
| `--bg-surface` | #FFFFFF | Card and container backgrounds |
| `--text-primary` | #1A1F2B | Body text on light backgrounds |
| `--text-secondary` | #4A5568 | Muted/secondary text on light backgrounds |
| `--text-inverse` | #FFFFFF | Text on dark or colored backgrounds |
| `--border-color` | #DFE4EC | Borders, dividers |

### Contrast Pairings for THIS Palette:
- **Default sections**: bg `#F7F9FC` + text `#1A1F2B` ✅
- **Card sections**: bg `#FFFFFF` + text `#1A1F2B` ✅
- **Dark accent sections**: bg `#0C2D5E` + text `#FFFFFF` ✅
- **DANGER**: bg `#0C2D5E` + text `#1A1F2B` ❌ (same or similar color!)

### Fonts:
- Headings: **Poppins** (`font-heading`)
- Body: **Poppins** (`font-body`)

### ⚠️ IMPORTANT:
- ONLY use CSS variables (e.g. `var(--primary-color)`) — NEVER hardcode hex values in components
- Do NOT import or reference `theme.js`, `theme-data/`, `palettes.json`, or any theme files
- The palette is already injected via Layout.astro — just use the CSS variables
