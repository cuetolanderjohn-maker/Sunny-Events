# Sunny Events by Pam Official Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-end, responsive showcase website for Sunny Events by Pam featuring founder Pamela Gueta-Tanael, party categories, a 40+ supplier directory, 40 real celebration portfolio albums, verified client reviews, and direct email/messenger inquiry actions.

**Architecture:** Single-Page Application (SPA) built with Vite and React, styled with Tailwind CSS, utilizing componentized modules with haptic double-bezel cards, fluid cubic-bezier animations, and instantaneous in-memory search and filter operations.

**Tech Stack:** Vite, React 18 / 19, TypeScript, Tailwind CSS, Lucide React (`lucide-react`) & Phosphor Icons (`@phosphor-icons/react`), and Canvas/Confetti effects.

**Spec:** `docs/superpowers/specs/2026-10-22-sunny-events-website-design.md`

## Global Constraints
- Primary Email destination: `pamgueta@gmail.com`
- Facebook Page URL: `https://www.facebook.com/sunnyeventsbypam`
- Direct Phone / Mobile: `+63 923 659 9971` (0923 659 9971)
- Headquarters / Location: Pasig City, Metro Manila, Philippines
- Display H1 on desktop must not exceed 2 lines (`max-w-5xl`)
- Palette lock: Warm ivory foundation (`#FAFAF8`), pure white cards (`#FFFFFF`), warm amber accents (`#D97706` / `#B45309`), deep espresso text (`#181512` / `#292524`)
- Double-bezel (Doppelrand) card architecture with squircle radii on major cards

## Review Focus
1. Email inquiry submission: Ensure mailto URI encodes subject, event date, guest count, and message without truncation or malformed URI components.
2. Messenger deep-link: Valid fallback linking to `https://m.me/sunnyeventsbypam` or `https://www.facebook.com/sunnyeventsbypam`.
3. Supplier directory instant filtering: Instant case-insensitive matching across vendor names, category pills, and past event references without lag.
4. Event modal dialog: Full keyboard accessibility (`Escape` key close), background scroll locking, and mobile responsive layout.
5. Mobile layout collapse: Smooth collapse of all bento grids and split columns to single-column view on viewports `<768px`.

---

### Task 1: Project Scaffolding & Setup
**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/index.css`, `src/main.tsx`
- Modify: `.gitignore`

**Interfaces:**
- Produces: Working Vite + React + TypeScript + Tailwind development environment with build script.

- [ ] **Step 1: Initialize Vite React TypeScript project and dependencies**
  - Install dependencies: `react`, `react-dom`, `lucide-react`, `@phosphor-icons/react`, `canvas-confetti`, `@types/canvas-confetti`.
  - Configure Tailwind CSS and font styles in `src/index.css`.
- [ ] **Step 2: Verify project builds with `npm run build`**
  - Run build command to verify clean compilation.
- [ ] **Step 3: Commit initial scaffolding**
  - `git add . && git commit -m "chore: scaffold vite react typescript project with tailwind"`

---

### Task 2: Data Models & Static Datasets
**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/suppliers.ts`
- Create: `src/data/events.ts`
- Create: `src/data/testimonials.ts`

**Interfaces:**
- Produces:
  - `Supplier` type and `SUPPLIERS_DATA: Supplier[]` (40+ suppliers with categories and event credits)
  - `EventCelebration` type and `EVENTS_DATA: EventCelebration[]` (40 real celebration portfolio albums)
  - `Testimonial` type and `TESTIMONIALS_DATA: Testimonial[]` (verified client reviews)
  - `InquiryFormData` interface for the booking drawer

- [ ] **Step 1: Define TypeScript interfaces in `src/types/index.ts`**
  - Include `SupplierCategory` union (`catering`, `styling`, `photo-video`, `host-entertainment`, `cakes-sweets`, `food-carts`, `activities-rentals`, `venues`).
  - Include `PartyType` union (`1st-birthday`, `7th-birthday`, `kids-party`, `baptism-dedication`, `adult-milestone`, `wedding`, `corporate`).
- [ ] **Step 2: Populate `src/data/suppliers.ts`**
  - Populate 40+ suppliers categorized with their verified details from the Facebook dataset (M Catering, Verleo, Party Magic, JJ DIY, Hello Partyline, Shoot Happens, Pram & Cradle, Ivan the Magician, Sherwin Wizzo, D&D Delights, Cakes by Jackie, Kape Isabel, Potato Corner, GenZ Arcade, etc.).
- [ ] **Step 3: Populate `src/data/events.ts`**
  - Populate real events (Ember's 7th, Giorgio Bentlee's 1st, Caleb's 7th, Leon Henry's 1st, Anya's Conrad Dedication, Trent & Thalia, Lily's Sanrio Dreamland, etc.) with venues and supplier tags.
- [ ] **Step 4: Populate `src/data/testimonials.ts`**
  - Include Kristel Dianne Ramos-Santiago, Dezzy Evangelista, Karen Samantha Santos Robles, and parent reviews.
- [ ] **Step 5: Verify types with `npx tsc --noEmit` and commit**
  - `git add src/types src/data && git commit -m "feat: add typed datasets for suppliers, events, and reviews"`

---

### Task 3: Floating Island Navigation & Mobile Menu
**Files:**
- Create: `src/components/Navbar.tsx`

**Interfaces:**
- Consumes: Call-to-action handler to trigger `InquiryDrawer`.
- Produces: `<Navbar onOpenInquiry={() => void} />`

- [ ] **Step 1: Implement desktop floating island nav pill**
  - Glassmorphism backdrop blur (`bg-white/90 backdrop-blur-md`).
  - Active location pill: Pasig & Metro Manila.
  - Links: `Story`, `Services`, `Suppliers`, `Celebrations`, `Reviews`.
  - Direct call button (`tel:+639236599971`) and "Inquire" button.
- [ ] **Step 2: Implement responsive mobile drawer/menu**
  - Smooth hamburger icon morphing to close button.
  - Full-width mobile navigation panel with direct contact links.
- [ ] **Step 3: Test and commit**
  - `git add src/components/Navbar.tsx && git commit -m "feat: add floating island navbar with mobile menu"`

---

### Task 4: Hero Section & Quick Action Chapter
**Files:**
- Create: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `onOpenInquiry: () => void`.
- Produces: `<Hero onOpenInquiry={onOpenInquiry} />`

- [ ] **Step 1: Implement Hero container and typography**
  - Eyebrow badge: `PASIG & METRO MANILA ON-THE-DAY COORDINATION`.
  - H1 headline restricted to max 2 lines: *"Worry No More. Celebrate Like a Guest on Your Own Event."*
  - Supporting copy highlighting Pamela Gueta-Tanael's hands-on coordination.
- [ ] **Step 2: Implement nested CTA buttons and proof badges**
  - Primary button: "Book Your Celebration" with button-in-button circular arrow.
  - Secondary button: "Browse Suppliers & Events" linking to `#suppliers`.
  - Floating proof strip: `850+ Celebrations`, `100% 5-Star Reviews`, `Featured on Party Doll Manila`.
- [ ] **Step 3: Test and commit**
  - `git add src/components/Hero.tsx && git commit -m "feat: add hero section with 2-line headline and proof badges"`

---

### Task 5: Founder Spotlight (Pamela Gueta-Tanael & D&D Delights)
**Files:**
- Create: `src/components/FounderStory.tsx`

**Interfaces:**
- Produces: `<FounderStory onOpenInquiry={onOpenInquiry} />`

- [ ] **Step 1: Implement Pamela Gueta-Tanael's profile and philosophy**
  - Double-bezel card structure with ambient lighting.
  - Highlight Pamela's role as lead coordinator and timeline director.
  - Highlight client appreciation for her lightning-fast response times.
- [ ] **Step 2: Feature Sister Brand D&D Delights (Dan & Dean Delights)**
  - Detail custom themed cookies, cupcakes, and party DIY cookie decorating kits.
- [ ] **Step 3: Highlight the On-Site Coordination Crew roles**
  - Lead Day-of Director, Registration & Ushers, Food & Buffet Ushers, Souvenir & Favors Team, Game Masters.
- [ ] **Step 4: Test and commit**
  - `git add src/components/FounderStory.tsx && git commit -m "feat: add founder story and D&D delights spotlight"`

---

### Task 6: Party Types Gapless Bento Grid
**Files:**
- Create: `src/components/PartyTypes.tsx`

**Interfaces:**
- Produces: `<PartyTypes onSelectType={(type: string) => void} />`

- [ ] **Step 1: Implement CSS Grid with `grid-flow-dense`**
  - 6 Interlocking cards:
    1. First Birthdays (Flagship specialization)
    2. Grand 7th Birthdays (Themed stage productions & multiple food carts)
    3. Baptisms & Dedications (Intimate gatherings & church coordinates)
    4. Kids & Toddler Celebrations (Ages 2-6 with soft play & activities)
    5. Adult Jubilees & Weddings (60th/70th birthdays & romantic weddings)
    6. Corporate & Family Days (Office celebrations & family days)
- [ ] **Step 2: Add interactive hover physics and quick inquiry triggers**
  - Clicking any party type scrolls to the portfolio or opens pre-filled inquiry.
- [ ] **Step 3: Test and commit**
  - `git add src/components/PartyTypes.tsx && git commit -m "feat: add party types gapless bento grid"`

---

### Task 7: Interactive Supplier Directory
**Files:**
- Create: `src/components/Suppliers.tsx`

**Interfaces:**
- Consumes: `SUPPLIERS_DATA` from `src/data/suppliers.ts`.
- Produces: `<Suppliers onSelectSupplier={...} />`

- [ ] **Step 1: Implement category filter pills and live search bar**
  - Category filters: All, Catering, Styling, Photo & Video, Hosts & Magicians, Cakes & Sweets, Food Carts, Activities, Venues.
  - Real-time search filter matching vendor name or past events.
- [ ] **Step 2: Render double-bezel supplier cards**
  - Display category tag, key highlights, past collaborative events, and verified partner badge.
  - Graceful empty state when search returns 0 results with "Clear Filter" button.
- [ ] **Step 3: Test and commit**
  - `git add src/components/Suppliers.tsx && git commit -m "feat: add interactive supplier directory with search and filters"`

---

### Task 8: Real Celebrations Portfolio & Event Detail Modal
**Files:**
- Create: `src/components/Portfolio.tsx`
- Create: `src/components/EventModal.tsx`

**Interfaces:**
- Consumes: `EVENTS_DATA` from `src/data/events.ts`.
- Produces: `<Portfolio onOpenEventModal={(event) => void} />` and `<EventModal event={selectedEvent} onClose={...} />`

- [ ] **Step 1: Implement filterable portfolio grid**
  - Displays real celebrations (Ember's PopMart 7th, Giorgio Bentlee's 1st, Caleb's 7th, Leon Henry's 1st, Anya's Conrad Dedication, Lily's Sanrio 7th, etc.).
  - Card displays celebrant, milestone badge, venue, and supplier count badge.
- [ ] **Step 2: Implement Event Detail Modal**
  - Accessible modal dialog showing complete supplier roll-call (Caterer, Stylist, Host, Photo/Video, Cake, Food Carts).
  - Keyboard `Escape` and backdrop click dismissals.
- [ ] **Step 3: Test and commit**
  - `git add src/components/Portfolio.tsx src/components/EventModal.tsx && git commit -m "feat: add portfolio showcase and event detail modal"`

---

### Task 9: Verified Client Testimonials Slider
**Files:**
- Create: `src/components/Testimonials.tsx`

**Interfaces:**
- Consumes: `TESTIMONIALS_DATA` from `src/data/testimonials.ts`.
- Produces: `<Testimonials />`

- [ ] **Step 1: Render verbatim client reviews**
  - Kristel Dianne Ramos-Santiago (overseas mom preparing in 2 months).
  - Dezzy Evangelista (South Manila milestone).
  - Karen Samantha Santos Robles (stress-free guest experience).
  - Parent raqchick and vendor Beverly Sansano Juan.
- [ ] **Step 2: Add star ratings, client locations, and smooth navigation**
- [ ] **Step 3: Test and commit**
  - `git add src/components/Testimonials.tsx && git commit -m "feat: add client testimonials section"`

---

### Task 10: Interactive Inquiry Drawer & Reach-Out Footer Hub
**Files:**
- Create: `src/components/InquiryDrawer.tsx`
- Create: `src/components/Footer.tsx`

**Interfaces:**
- Produces: `<InquiryDrawer isOpen={isOpen} onClose={onClose} initialEventType={...} />` and `<Footer onOpenInquiry={...} />`

- [ ] **Step 1: Implement slide-out interactive Party Builder Drawer**
  - Form fields: Name, Email, Phone/Viber, Event Type, Target Date, Target Venue/City, Approximate Guest Count, Selected Services (OTD Coordination, Full Planning, Game Master, D&D Delights Cookie Kits).
- [ ] **Step 2: Connect direct reach-out triggers**
  - "Send Email to Pam" button generating a pre-filled mailto to `pamgueta@gmail.com`.
  - "Chat on Facebook Messenger" button deep-linking to `https://m.me/sunnyeventsbypam`.
  - Direct Phone dialer for `+63 923 659 9971`.
  - Confetti celebration burst on form submission.
- [ ] **Step 3: Implement Footer chapter**
  - Contact cards, service coverage map (Pasig, QC, BGC, Mandaluyong, South, Rizal), copyright, and social links.
- [ ] **Step 4: Test and commit**
  - `git add src/components/InquiryDrawer.tsx src/components/Footer.tsx && git commit -m "feat: add inquiry drawer and reach-out footer"`

---

### Task 11: End-to-End Assembly, Styling & Build Verification
**Files:**
- Modify: `src/App.tsx`, `index.html`

- [ ] **Step 1: Assemble all sections in `src/App.tsx`**
  - Wire state between Navbar, Hero, PartyTypes, Suppliers, Portfolio, Testimonials, InquiryDrawer, and EventModal.
- [ ] **Step 2: Set page metadata, title, and favicon in `index.html`**
  - Set title: *"Sunny Events by Pam | Premier Event & OTD Coordination Pasig & Metro Manila"*.
  - Set meta descriptions, OpenGraph tags, and theme color.
- [ ] **Step 3: Run comprehensive verification checks**
  - Run TypeScript compile check: `npx tsc --noEmit`.
  - Run production build: `npm run build`.
  - Verify zero bundle errors and zero console warnings.
- [ ] **Step 4: Commit and finalize**
  - `git add . && git commit -m "feat: assemble complete sunny events by pam official website"`
