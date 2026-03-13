# Website Rewrite Plan for Team 97711V Pegasus Prime

## Background & Motivation
The objective is to completely rebuild the team's website from scratch to create a modern, immersive, and interactive Single Page Application (SPA) using Vanilla JavaScript, HTML, and CSS. The site will have 6 distinct tabs: Home, Team, Code, Build, Outreach, and Reach. Navigation between tabs will feature smooth, dynamic animations while preserving the state of complex tabs.

## Scope & Impact
This is a comprehensive rewrite. The current implementation (multiple standalone HTML files and their linked CSS/JS) will be entirely deleted to make way for the new modular SPA structure.

## Proposed Solution

1. **Architecture (Vanilla SPA):**
   - A single `index.html` will serve as the app shell, holding the global navigation bar and a container for the page views.
   - A custom JavaScript router will handle tab switching, applying CSS transitions (e.g., slide and fade) to seamlessly swap the active view without reloading the page. This ensures complex state (like terminal history) is maintained.

2. **The 6 Core Tabs:**
   - **Home:** A sleek landing page introducing Team 97711V Pegasus Prime.
   - **Team:** A styled grid showcasing the team members.
   - **Code (The Terminal):** A full-screen simulated macOS terminal window running a custom ZSH-like environment. On load, it will automatically execute the `help` command, displaying a list of 50 custom commands (a mix of unix basics, robot stats, team trivia, and easter eggs).
   - **Build (Interactive Specs):** A highly customized UI featuring interactive sliders (e.g., Flywheel RPM, Intake Speed, Drivetrain Torque) that dynamically adjust visual elements or specification readouts on the screen in real-time.
   - **Outreach:** A showcase of the team's community involvement and STEM promotion.
   - **Reach:** A dedicated contact page featuring social media links and ways to get in touch or sponsor the team.

## Implementation Plan

### Phase 1: Clean Slate & Initialization
- [ ] Delete all legacy root HTML files (`index.html`, `build.html`, `code.html`, `outreach.html`, `team.html`), `css/style.css`, and `js/main.js`.
- [ ] Establish the new directory structure (e.g., separating JS modules, CSS styling, and HTML templates).

### Phase 2: Core SPA Framework
- [ ] Create the new `index.html` with the main navigation and a view container.
- [ ] Develop `js/router.js` to handle view switching and trigger entrance/exit animations.
- [ ] Write `css/animations.css` and `css/main.css` to govern layout and smooth transitions.

### Phase 3: The Code Tab (Terminal Interface)
- [ ] Implement the macOS terminal UI (window controls, full-screen styling).
- [ ] Develop the simulated terminal logic (`js/terminal.js`) capable of parsing input, maintaining history, and rendering output.
- [ ] Populate the 50 commands for the `help` output and their corresponding logic.

### Phase 4: The Build Tab (Interactive UI)
- [ ] Create the custom slider UI components.
- [ ] Write the JavaScript logic to link slider values to a visual "specs" representation, giving users a hands-on feel for the robot's engineering.

### Phase 5: Content Integration (Home, Team, Outreach, Reach)
- [ ] Build out the HTML structure and CSS styling for the remaining static/informative views.
- [ ] Add the contact and social media elements to the Reach page.

## Verification & Testing
- Verify that navigating away from the Code tab and back does not clear the terminal history.
- Ensure the `help` command automatically fires when the Code tab is first visited.
- Test the Build tab sliders to confirm they update the UI dynamically.
- Confirm that the animations run smoothly at 60fps on tab switch.