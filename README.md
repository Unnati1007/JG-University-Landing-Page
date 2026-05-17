# JG University Landing Page Redesign 🎓🚀

A premium, highly interactive, and visually stunning landing page for JG University, built as part of the Frontend Web Developer Internship Assignment for **Coding Jr**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-f05597?logo=framer)

---

## 🌐 Live Demo & Submission Links

- **Live Production URL:** [https://jg-university-landing-page-uj.vercel.app/](https://jg-university-landing-page-uj.vercel.app/)
- **GitHub Repository:** [https://github.com/Unnati1007/jg-university-landing-page-uj](https://github.com/Unnati1007/jg-university-landing-page-uj)
- **Original Site Inspiration:** [https://jguni.in/](https://jguni.in/)

---

## 🚀 Overview

This project is a comprehensive redesign and architectural enhancement of the JG University web portal. The primary goal was to elevate the user interface (UI) and user experience (UX) to industry-leading standards. By introducing modern design aesthetics like glassmorphism, curated typography, subtle particle backgrounds, and fluid scroll-linked animations, the portal creates an immersive and professional first impression for aspiring tech leaders.

---

## ✨ Key Features & Architectural Highlights

- **Premium Glassmorphism & UI Design:** Dynamic navigation bar with an advanced multi-column Mega Menu, soft gradient accents, and curated shadow elevations.
- **Fluid & Staggered Animations:** Seamless micro-interactions, fade-ups, and horizontal road animations built with Framer Motion.
- **Subtle Particle Background:** Calibrated tsparticles integration with optimized particle density and hover grab interactivity for clean, non-distracting aesthetics.
- **Interactive Component Filters:** Instantaneous, zero-reload tab filtering across academic programs (UG, PG, Ph.D.) and hardware-inspired iPad mockup sliders for campus tours.
- **Flawless Mobile Responsiveness:** Fully adaptive CSS grid layouts, equal-height flex containers (`items-stretch`), and a smooth sliding mobile drawer menu.
- **High-Conversion Touchpoints:** Sleek inquiry dialog modals (`AdmissionModal`) and persistent floating quick-action widgets (`FloatingActions`).

---

## 📁 Folder Structure

```text
jg-university-landing/
├── public/                     # Static media assets (Logos, leader portraits, textures)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global Tailwind directives & custom CSS tokens
│   │   ├── layout.tsx          # Root Next.js layout & metadata
│   │   └── page.tsx            # Main landing page component assembly
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx      # Sticky Header & Interactive Glassmorphic Mega Menu
│   │   │
│   │   ├── sections/           # Modular landing page sections
│   │   │   ├── Hero.tsx        # Hero banner with video stories & main CTA
│   │   │   ├── HeroRightSide.tsx
│   │   │   ├── WelcomeSection.tsx # About Us & vision introduction
│   │   │   ├── Programs.tsx    # Filterable academic courses (Blackboard aesthetic)
│   │   │   ├── SalientFeatures.tsx
│   │   │   ├── Strengths.tsx   # Core values & success pillars
│   │   │   ├── Campus.tsx      # iPad mockup interactive facility tour
│   │   │   ├── Leaders.tsx     # Executive leadership bios (Equal height grid)
│   │   │   ├── Faculty.tsx     # Staggered academic scholars showcase
│   │   │   ├── Partners.tsx    # Marquee corporate partner logos
│   │   │   ├── Testimonials.tsx # Student reviews & quotes
│   │   │   ├── CTA.tsx         # Final admission action banner
│   │   │   └── Footer.tsx      # Multi-column directory & compliance links
│   │   │
│   │   └── ui/                 # Reusable UI primitives & effects
│   │       ├── AdmissionModal.tsx
│   │       ├── CarTransition.tsx # Animated horizontal road separator
│   │       ├── FloatingActions.tsx # Quick-action contact widget
│   │       └── ParticleBackground.tsx # Soft background particles
│   │
│   └── lib/
│       └── utils.ts            # Helper utilities (cn, styling mergers)
│
├── tailwind.config.ts          # Tailwind CSS design system configuration
├── tsconfig.json               # TypeScript strict compiler rules
└── package.json                # Project dependencies & scripts
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/) & [tsParticles](https://particles.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 💻 Running Locally

To run this project on your local development environment:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Unnati1007/jg-university-landing-page-uj.git
   cd jg-university-landing-page-uj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 👨‍💻 Submission Details

- **Candidate Name:** Unnati Jadon
- **Submission Date:** 17 May, 2026
- **Submitted To:** Vikas (`vikas@codingjr.online`)

---
*Developed with dedication for the Coding Jr Frontend Web Developer Internship Assignment.*
