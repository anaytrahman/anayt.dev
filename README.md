# Anayt Rahman — Angular Portfolio

A premium, fully responsive developer portfolio built with **Angular 16** (standalone components), **SCSS**, and **Bootstrap 5**.

## Getting Started

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

For a production build:

```bash
npm run build:prod
```

Output is generated in `dist/portfolio`.

## Project Structure

```
src/
  app/
    components/        # One folder per section (navbar, hero, about, skills, ...)
    shared/
      interfaces/       # Strongly typed models (Skill, Project, Experience, ...)
      data/             # portfolio-data.ts — single source of truth for content
      directives/        # ScrollRevealDirective (IntersectionObserver reveal-on-scroll)
      services/          # ScrollSpyService (active nav-link tracking)
    app.component.*
    app.config.ts        # Standalone providers (router, animations)
    app.routes.ts
  styles/
    _variables.scss       # Colors, spacing, typography tokens
    _mixins.scss
    _base.scss
    _typography.scss
    _buttons.scss
    _cards.scss
    _spacing.scss
    _animations.scss
    _utilities.scss
    _responsive.scss
  styles.scss              # Forwards all partials
```

## Personalizing the Content

Everything you'll want to change lives in **one file**:
`src/app/shared/data/portfolio-data.ts`

- `SKILLS` — icon, name, and proficiency percentage
- `EXPERIENCES` — your work history
- `PROJECTS` — swap in real screenshots (`assets/images/`), live URLs, and GitHub links
- `SERVICES`, `ACHIEVEMENTS`, `SOCIAL_LINKS`, `NAV_LINKS`

## Assets To Replace

- `src/assets/resume.pdf` — your actual resume (used by the navbar + hero download buttons)
- `src/assets/images/profile-placeholder.jpg` — hero photo
- `src/assets/images/about-placeholder.jpg` — about section photo
- `src/assets/images/project-placeholder-*.jpg` — project screenshots
- `src/favicon.ico`

## Design System

Colors, spacing, radii, and shadows are defined once as SCSS variables in
`src/styles/_variables.scss`, so retheming the whole site means editing a
handful of values in one place.

## Notes

- Built as a single-page app; navigation uses smooth-scroll anchors (`#about`, `#skills`, etc.) rather than routed pages.
- The contact form is wired up with Angular Reactive Forms + validation; the actual submit handler (`ContactComponent.onSubmit`) is a placeholder — connect it to your email API of choice (e.g. Formspree, EmailJS, or your own backend).
- Skill progress bars, timeline, and achievement counters animate in via `IntersectionObserver`, so they only run once each element scrolls into view.
