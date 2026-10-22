# Sunny Events by Pam

> **"Worry No More. Celebrate Like a Guest on Your Own Event."**  
> Official web platform, celebration portfolio archive, and automated Facebook synchronization pipeline for **Sunny Events by Pam**, founded and orchestrated by **Pamela Gueta-Tanael**.

[![Live on Vercel](https://img.shields.io/badge/Live_Site-sunnyeventsbypam.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sunnyeventsbypam.vercel.app)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

---

## Live Deployment

- **Production URL**: [https://sunnyeventsbypam.vercel.app](https://sunnyeventsbypam.vercel.app)
- **GitHub Repository**: [https://github.com/cuetolanderjohn-maker/Sunny-Events](https://github.com/cuetolanderjohn-maker/Sunny-Events)
- **Backup GitHub Pages**: [https://cuetolanderjohn-maker.github.io/Sunny-Events/](https://cuetolanderjohn-maker.github.io/Sunny-Events/)

---

## About Sunny Events by Pam

Founded by **Pamela Gueta-Tanael**, **Sunny Events by Pam** brings over 8 years of premier On-The-Day (OTD) and milestone event coordination across Metro Manila and destination venues. The team specializes in handling master timelines, backstage supplier synchronization, and on-site logistics so celebrants and families can fully immerse themselves in their milestone moments.

### Core Offerings

1. **Event Coordination**: Full on-site squad managing master minute-by-minute timelines, supplier sync (caterers, stylists, photo/video, hosts), guest reception, stage cueing, and item turnovers.
2. **D&D Delights (Dennis & Dean)**: Sister venture specializing in handcrafted custom royal-icing sugar cookies and interactive DIY children's cookie-decorating craft activity kits.
3. **Children Seat Rent**: Sanitized, child-proportioned tables and chairs with on-site delivery, arrangement, and teardown for kiddie birthday celebrations and play corners.

---

## Key Features

- **Automated Facebook Celebration Synchronization**:
  - Automatically queries the [Sunny Events Facebook Page](https://www.facebook.com/sunnyeventsbypam) using Meta Graph API endpoints.
  - Parses album titles, cover images, photo counts, venues, and supplier credits.
  - Appends new events directly into `src/data/events.ts` via GitHub Actions (`.github/workflows/sync-facebook-events.yml`) scheduled daily at 00:00 UTC (8:00 AM PHT).
- **Celebration Portfolio Archive**:
  - 53+ documented real celebrations with authentic Facebook photo counts, milestone badges, and supplier roll-calls.
  - Search filter by celebrant, theme, milestone, or venue, plus edge-bleeding touch-pan mobile category pills.
- **Backstage Supplier Network Directory**:
  - Curated directory of verified partner caterers, stylists, photographers, hosts, and cake makers with sample event credits.
- **Multi-Channel Inquiry Dispatch Hub**:
  - Guarantees direct delivery to `pamgueta@gmail.com`.
  - Includes pre-filled one-click dispatch via Web Gmail, default mail clients (Apple Mail, Outlook), direct Facebook Messenger chat with Pamela, and a one-click clipboard copy for Viber/WhatsApp.
- **Editorial UX & Mobile Optimization**:
  - Single-layer agency cards with calibrated borders.
  - Seamless 3-tab segmented control for services on mobile screens.
  - Zero generic AI sparkle badge clutter, following high-contrast editorial typography standards.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| **Build Tool** | [Vite 6](https://vite.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/vite` |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Effects** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Automation** | Node.js + GitHub Actions |
| **Hosting** | [Vercel](https://vercel.com) (Edge CDN with automated SSL) |

---

## Project Structure

```text
sunny-events-website/
├── .github/
│   └── workflows/
│       ├── deploy.yml                 # GitHub Pages deployment workflow
│       └── sync-facebook-events.yml   # Scheduled daily Facebook album sync
├── public/
│   ├── sunny-events-logo.png          # Official sunflower logo (square)
│   └── sunny-events-logo-500.png      # High-resolution emblem
├── scripts/
│   ├── deploy.js                      # One-click deployment script
│   └── sync-facebook-events.js        # Meta Graph API synchronization script
├── src/
│   ├── components/
│   │   ├── EventModal.tsx             # Celebration detail popup with supplier credits
│   │   ├── Footer.tsx                 # Reach-out hub and quick navigation
│   │   ├── Hero.tsx                   # Wide editorial hero with sunflower medallion
│   │   ├── InquiryDrawer.tsx          # Multi-channel booking & dispatch drawer
│   │   ├── Navbar.tsx                 # Floating glass island navbar
│   │   ├── Portfolio.tsx              # Filterable celebrations grid & album links
│   │   ├── Services.tsx               # 3 core offerings with mobile segmented tabs
│   │   ├── Suppliers.tsx              # Coordinated supplier roster
│   │   └── Testimonials.tsx           # Verified client reviews and overseas client stories
│   ├── data/
│   │   ├── events.ts                  # Documented celebration archive (53 events)
│   │   ├── suppliers.ts               # Supplier network directory
│   │   └── testimonials.ts            # Client reviews and ratings
│   ├── types/
│   │   └── index.ts                   # TypeScript interfaces and milestone categories
│   ├── App.tsx                        # Main page assembler
│   ├── index.css                      # Global Tailwind CSS definitions
│   └── main.tsx                       # React application entry point
├── netlify.toml                       # Netlify build configuration
├── package.json                       # Project scripts and dependencies
├── vercel.json                        # Vercel SPA routing configuration
└── vite.config.ts                     # Vite bundler configuration
```

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cuetolanderjohn-maker/Sunny-Events.git
   cd Sunny-Events
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds optimized production bundle into `dist/`. |
| `npm run preview` | Previews the compiled production build locally. |
| `npm run sync:events` | Runs the Facebook album scraper/sync script locally and updates `src/data/events.ts`. |
| `npm run deploy:vercel` | Builds and deploys the production site directly to Vercel. |
| `npm run deploy` | Builds and deploys to the GitHub Pages `gh-pages` branch. |

---

## Direct Contact Channels

- **Founder & Lead Coordinator**: Pamela Gueta-Tanael
- **Email**: [pamgueta@gmail.com](mailto:pamgueta@gmail.com)
- **Official Facebook**: [facebook.com/sunnyeventsbypam](https://www.facebook.com/sunnyeventsbypam)
- **Messenger**: [m.me/sunnyeventsbypam](https://m.me/sunnyeventsbypam)
- **Phone / Viber**: `+63 923 659 9971`
- **Location**: Pasig City, Metro Manila, Philippines

---

## License

This project is proprietary and created for **Sunny Events by Pam**. All brand assets, logos, and event imagery belong to Sunny Events by Pam and Pamela Gueta-Tanael.
