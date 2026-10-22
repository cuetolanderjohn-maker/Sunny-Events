# Design Specification: Sunny Events by Pam Website

- **Project:** Sunny Events by Pam Official Website
- **Date:** 2026-10-22
- **Status:** Approved / Ready for Implementation Planning
- **Author:** Antigravity Engineering & Design Team
- **Source Dataset:** Facebook Page (`https://www.facebook.com/sunnyeventsbypam`)

---

## 1. Executive Summary & Brand Foundation

**Sunny Events by Pam** is an event coordination and planning service based in Pasig, Metro Manila, Philippines, founded and operated by **Pamela Gueta-Tanael** (Pam Gueta). Operating under the guiding philosophy:
> *"Worry no more and enjoy like a guest on your own event."*

The business specializes in **On-The-Day (OTD) Coordination**, timeline direction, and event logistics primarily for children's milestones (1st and 7th birthdays), family celebrations (baptisms, dedications, debuts, and 60th/70th jubilees), weddings, and corporate gatherings across Metro Manila, Rizal, and Southern Luzon.

The website serves as a high-converting digital home and comprehensive portfolio to:
1. Introduce Pamela Gueta-Tanael, her dedicated on-site crew, and sister venture **D&D Delights (Dan & Dean Delights)**.
2. Showcase the diverse event types handled (1st Birthdays, 7th Birthdays, Baptisms/Dedications, Toddler Parties, Weddings, Adult Milestones, Corporate Family Days).
3. Display the extensive network of 40+ curated suppliers across catering, styling, photo/video, entertainment, food carts, cakes, and venues.
4. Feature documented portfolios from 40 real celebration albums.
5. Provide frictionless reach-out channels to Pamela via direct email (`pamgueta@gmail.com`), Facebook Page/Messenger, and direct phone/Viber (`+63 923 659 9971`).

---

## 2. Visual Architecture & Design Directives

### 2.1 Aesthetic Language & Theme Tokens
- **Theme Archetype:** *Warm Sunny Luxury & Joyful Editorial*
- **Color Calibration:**
  - Background Base: Warm porcelain ivory (`#FAFAF8`) with pure white card cores (`#FFFFFF`).
  - Text & Inks: Rich espresso black (`#181512` for primary headers, `#292524` for subheads, `#57534E` for body text) ensuring strict WCAG AAA contrast.
  - Accent Color: Warm Sunlit Gold & Honey Amber (`#D97706` / `#B45309`) with delicate peach-amber highlights (`#FEF3C7`).
  - Subtle Border Rings: Micro-hairline warm rings (`ring-1 ring-amber-950/5` and `border-stone-200/80`).
- **Typography:**
  - Display / H1: Wide, commanding grotesk with tight tracking (`tracking-tight md:tracking-tighter`). Desktop H1 strictly restricted to 2 lines max with container constraint (`max-w-5xl`).
  - Subheadings: Balanced editorial styling with comfortable line-height.
  - Body: Readable, relaxed tone with `max-w-[65ch]`.
- **Haptic Double-Bezel (Doppelrand) Architecture:**
  - All primary interactive cards and showcase containers utilize a dual-nested frame: an outer enclosure with subtle warm tinting and rounded squircle radii (`rounded-3xl p-2 bg-stone-900/[0.03] ring-1 ring-stone-900/5`) holding an inner core (`rounded-[calc(1.5rem-0.25rem)] bg-white p-6 shadow-sm`).
- **Button-in-Button Pattern:**
  - Primary CTA buttons feature a nested circular trailing icon wrapper (`w-8 h-8 rounded-full bg-amber-500/20 text-amber-900 flex items-center justify-center`) that animates on hover.

---

## 3. Core Page Sections & Feature Specifications

### 3.1 Navigation (Floating Glass Island)
- **Component:** Floating detached pill container centered at top (`fixed top-4 inset-x-0 z-50 max-w-5xl mx-auto px-6 py-3 rounded-full bg-white/85 backdrop-blur-md border border-stone-200/70 shadow-sm`).
- **Elements:**
  - Brand Mark: Sun icon + "Sunny Events by Pam" wordmark with Pasig location indicator.
  - Navigation Links: `Story`, `Services`, `Suppliers`, `Celebrations`, `Reviews`.
  - Actions: Direct Call pill (`+63 923 659 9971`) and "Inquire Now" button launching the Inquiry Drawer.
  - Mobile: Clean animated hamburger menu expanding to a full-screen blurred modal with touch-friendly navigation links.

### 3.2 Hero Chapter (Attention)
- **Eyebrow:** `PASIG & METRO MANILA ON-THE-DAY COORDINATION` (pill badge).
- **H1 Headline:** *"Worry No More. Celebrate Like a Guest on Your Own Event."* (Strictly 2 lines on desktop).
- **Subtext:** Professional timeline management, supplier orchestration, and on-site coordination for children's milestones, birthdays, and family celebrations.
- **CTAs:**
  - Primary: `Plan Your Event` (opens pre-filled inquiry drawer).
  - Secondary: `Explore Our Suppliers & Past Events` (smooth-scrolls to directory).
- **Proof Strip:** Floating verified metric badges:
  - `850+ Celebrations Coordinated`
  - `100% 5-Star Recommended`
  - `Featured on Party Doll Manila`
  - `Pasig • Metro Manila • Rizal • South`

### 3.3 Founder & Team Spotlight (The People Behind Sunny Events)
- **Profile:** **Pamela Gueta-Tanael** ("Pam").
- **Story & Approach:**
  - Hands-on coordinator praised by overseas parents for structured, calm guidance and rapid responses.
  - Special feature on **D&D Delights (Dan & Dean Delights)**: Pamela's custom dessert & bakery venture offering themed cookies, cupcakes, and party cookie decorating activity kits.
- **The On-Site Coordination Crew:**
  - Lead Day-of Director (runs program timeline, AV cues, and stage coordination).
  - Assistant Coordinators (oversees registration, guest seating, buffet flow, and supplier ingress/egress).
  - Kids Activity & Souvenir Coordinator (manages game masters, food carts, and giveaway distribution).

### 3.4 Party Types & Formats (Interest - Gapless Bento)
- **Layout:** CSS Grid with `grid-flow-dense` and interlocking card heights:
  1. **1st Birthday Celebrations:** The flagship specialization with 20+ documented celebrations. Focus on toddler comfort, guest logistics, and themed visual setups.
  2. **Grand 7th Birthdays:** Full-scale production coordination with stage backdrops, character mascots, and multiple food carts.
  3. **Baptisms, Christenings & Dedications:** Intimate reception coordination (e.g. Conrad Hotel S Maison, Greenmeadows, Valle Verde).
  4. **Toddler Celebrations (Ages 2 to 6):** Soft play, slime bars, game booths, and interactive bubble entertainment.
  5. **Adult Jubilees & Weddings:** 60th/70th birthdays, anniversaries, and elegant wedding receptions (e.g. Tree House Mansion).
  6. **Corporate Family Days:** Employee fun days and corporate milestones with structured activity booths (e.g. JTI, ILMT).

### 3.5 Interactive Supplier Directory (Desire)
- **Search & Filters:**
  - Filter pills: `All`, `Catering`, `Styling & Decor`, `Photo & Video`, `Hosts & Entertainment`, `Cakes & Sweets`, `Food Carts`, `Activities & Rentals`, `Venues`.
  - Search Input: Instant debounced text filter searching vendor names, specialties, or event history.
- **Verified Supplier Cards:**
  - Displays vendor name, category tag, key specializations, and events coordinated with Sunny Events.
  - Covers 40+ key industry partners including:
    - *Catering:* M Catering, Verleo Catering, MDG Catering, Hizon's Catering, 8 Spoons.
    - *Styling:* Party Magic, JJ DIY Party Needs Rentals, Kids Party Hub, Hello Partyline by Jhellie Santos, Designs On Us, Blissful Blooms, Style Me Sweetie.
    - *Photo & Video:* Shoot Happens, Pram & Cradle, Photoman, Little Moments, JK Photos, Prelude by CamZar, Ben & Kali Studio.
    - *Hosts & Performers:* Ivan the Magician, The Sherwin Wizzo Show, Iankoy, Handsome James, Madison Events, Team Gen, Mascot Dreamers Entertainment, Mandaluyong Children's Choir.
    - *Cakes & Sweets:* D&D Delights (custom party cookies & DIY kits), Cakes by Jackie / Bespoke by Jackie Florendo, The Chemist Bakeshop, OC's Kitchen.
    - *Food Carts:* Kape Isabel, Matteo's Brew, Potato Corner, Nacho King, Dairy Queen, Sorbelato, Los Churreros, Sumilang Ice Cream.
    - *Activities & Rentals:* GenZ Arcade, Kidz at Fun Mobile Playground, Happi Game Booth, Slimebar.
    - *Venues:* Valle Verde 6 Clubhouse, 3rd Greenmeadows, Wack Wack Golf & Country Club, Corinthian Gardens, LŌLA CAFÉ S Maison Conrad Hotel, Priscilla Crystal Palace.

### 3.6 Real Celebrations Portfolio
- Interactive filterable portfolio showcasing real events extracted from the Facebook albums:
  - *Ember Frostine's 7th Birthday* (Space Molly PopMart theme at Wack Wack, featured on Party Doll Manila)
  - *Giorgio Bentlee's 1st Birthday* (The Clubhouse at 3rd Greenmeadows)
  - *Caleb's 7th Birthday* (Valle Verde 6 Clubhouse)
  - *Leon Henry's 1st Birthday* (Valle Verde 6 Clubhouse)
  - *Anya's Dedication* (LŌLA CAFÉ, S Maison Conrad Hotel)
  - *Trent & Thalia's Celebrations* (Corinthian Gardens Clubhouse)
  - *Lily's Sanrio Dreamland 7th* (Priscilla Crystal Palace)
  - *Belinda's 60th & Art's 70th Jubilees*
- **Event Detail Modal:** Clicking any celebration opens an expanded modal dialog displaying the full coordinated supplier roster for that specific event.

### 3.7 Verified Client Testimonials
- Verbatim reviews from actual clients:
  - **Kristel Dianne Ramos-Santiago:** Highlighting stress-free coordination for an overseas family preparing in just 2 months.
  - **Dezzy Evangelista:** Complimenting well-organized execution for Luna Minerva's South Manila dedication and 1st birthday.
  - **Karen Samantha Santos Robles:** Praising the ability to arrive at the venue without worry and enjoy the party as a guest.
  - **Parent "raqchick":** *"for doing everything else and just making us feel like birthday din namen."*
  - **Vendor Endorsement (Beverly Sansano Juan):** Highlighting Pamela's dedication and strong work ethic.

### 3.8 Interactive Reach-Out Hub & Inquiry Drawer (Action)
- **Direct Contact Options:**
  - Email: `pamgueta@gmail.com`
  - Facebook Page: `https://www.facebook.com/sunnyeventsbypam`
  - Phone / Mobile: `+63 923 659 9971`
  - Location: Pasig City, Metro Manila
- **Party Inquiry Form:**
  - Fields: Client Name, Email, Phone/Viber, Event Type, Target Date, Target Venue/City, Approximate Guest Count, Services Desired (OTD Coordination, Full Planning, Game Master, D&D Delights Cookie Kits), Special Requests.
  - Dual Output Submission:
    1. *Send Email Inquiry:* Automatically formats a professional email draft addressed to `pamgueta@gmail.com`.
    2. *Chat on Messenger:* Pre-formats an inquiry message and launches `https://m.me/sunnyeventsbypam`.

---

## 4. Technical Architecture & File Structure

```
sunny-events-website/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js (or @tailwindcss/vite plugin)
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types/
│   │   └── index.ts          # Interfaces for Supplier, Event, Testimonial, InquiryForm
│   ├── data/
│   │   ├── suppliers.ts      # 40+ structured suppliers with categories and notes
│   │   ├── events.ts         # Portfolio celebrations with venues and vendor tags
│   │   └── testimonials.ts   # Client reviews and quotes
│   ├── components/
│   │   ├── Navbar.tsx        # Floating glass pill navigation with mobile menu
│   │   ├── Hero.tsx          # Attention chapter with 2-line H1 and quick pills
│   │   ├── FounderStory.tsx  # Pamela Gueta-Tanael bio & D&D Delights spotlight
│   │   ├── PartyTypes.tsx    # Gapless bento grid of party categories
│   │   ├── Suppliers.tsx     # Filterable supplier directory with real-time search
│   │   ├── Portfolio.tsx     # Real celebration showcases with modal trigger
│   │   ├── EventModal.tsx    # Detailed popup showing full supplier roll-call
│   │   ├── Testimonials.tsx  # Verbatim reviews carousel / bento
│   │   ├── InquiryDrawer.tsx # Interactive slide-out party builder & contact form
│   │   └── Footer.tsx        # High-contrast action chapter & contact links
```

---

## 5. Quality, Performance & Verification Criteria

1. **Responsive Behavior:** 100% fluid from 320px mobile screens up to 4K displays. No horizontal overflow or layout breakage.
2. **Accessibility & Contrast:** All text and button interactions comply with WCAG AA/AAA standards. No invisible buttons or low-contrast text.
3. **Typography Rule:** H1 on desktop strictly complies with the 2-line maximum rule.
4. **Interactive Integrity:** Real-time search in the supplier directory updates instantaneously; category pills filter without page refresh; event modal opens and closes with keyboard `Escape` or backdrop click.
5. **Direct Actions:** Email, Facebook, and Phone links trigger real system actions (`mailto:`, `https://www.facebook.com/sunnyeventsbypam`, `tel:`).
