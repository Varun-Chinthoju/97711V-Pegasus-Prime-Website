# React Migration Plan for Team 97711V Pegasus Prime

## Background & Motivation
The objective is to upgrade the current Vanilla JS website to a high-end React application using Vite. This will allow for more complex state management (especially for the terminal and build interface) and much more sophisticated animations using `framer-motion`. The UI will be overhauled with modern design principles: gradients, glassmorphism, and high-quality color patterns.

## Scope & Impact
- Transition from Vanilla JS to React 18+.
- Implement a robust multi-file component structure.
- Redesign the UI with a "Pegasus" theme (Blues, Purples, and Cyan gradients).
- Upgrade animations to cinematic transitions using Framer Motion.

## Proposed Solution

1. **Tech Stack:**
   - **React:** For UI logic and componentization.
   - **Vite:** For a blazing-fast development and build process.
   - **Framer Motion:** For the "nice animations" and tab transitions.
   - **Lucide React:** For consistent, beautiful iconography.
   - **Vanilla CSS:** To maintain full control over the unique gradients and terminal styling.

2. **The 6 Core Tabs (React Version):**
   - **Home:** Hero section with animated gradient backgrounds and a "Pegasus" feel.
   - **Team:** Cards with hover effects and glassmorphism.
   - **Code (Terminal):** A functional terminal component that maintains a "command history" state and renders the MacBook UI.
   - **Build (Interactive Specs):** A sophisticated dashboard with custom-styled range sliders and a reactive SVG/CSS visualizer.
   - **Outreach:** An interactive timeline or masonry grid of events.
   - **Reach:** A clean, modern contact portal with animated entry.

## Implementation Plan

### Phase 1: Environment Setup
- [ ] Create `package.json` with React, Vite, Framer Motion, and Lucide.
- [ ] Configure `vite.config.js` for GitHub Pages deployment.
- [ ] Update `index.html` to serve as the entry point for the React app.

### Phase 2: Core Components & Layout
- [ ] Create `src/App.jsx` (Router and Layout shell).
- [ ] Create `src/components/Navbar.jsx` with active state tracking.
- [ ] Implement global styles in `src/index.css` (Gradients and Patterns).

### Phase 3: Feature Components
- [ ] **Terminal Component:** Re-implement the ZSH logic in `src/components/Terminal.jsx`.
- [ ] **Build Dashboard:** Re-implement the slider logic in `src/components/BuildDashboard.jsx`.
- [ ] **Content Views:** Create `Home.jsx`, `Team.jsx`, `Outreach.jsx`, and `Reach.jsx`.

### Phase 4: Animation & Polish
- [ ] Add `AnimatePresence` for smooth tab switching.
- [ ] Apply hover effects and entrance animations to all interactive elements.

### Phase 5: Build & Deployment
- [ ] Update `.github/workflows/deploy.yml` to run `npm run build` and deploy the `dist/` folder.

## Verification & Testing
- Verify that terminal state persists across tab switches.
- Ensure the `help` command triggers on the first mount of the Terminal component.
- Check that all sliders in the Build tab reactively update the visualizer.
- Confirm animations are smooth and consistent across the SPA.