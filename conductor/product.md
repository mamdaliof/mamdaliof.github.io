# Product Definition - Farhad Hoseyni Portfolio Website

## Vision
A personal portfolio website presenting professional achievements, projects, education, and publications in AI, computer vision, robotics, and electrical engineering.

## Problem Statement
Showcase portfolio work, academic background, and publications in a clean, high-performance, and accessible static web interface to recruiters, academic advisors, and collaborators.

## Target Users
- **Recruiters and Hiring Managers**: Reviewing professional experience and technical skills.
- **Academic Advisors and Professors**: Checking education, minor degrees, and published research.
- **Collaborators and Developers**: Viewing open-source libraries and project write-ups.

## Core Pages & Components

### 1. Main Landing Page (`index.html`)
- **Hero Section**: Dynamic typing animations (Typed.js) highlighting core engineering roles, portrait image, and direct social links (Email, LinkedIn, Telegram, GitHub).
- **About Section**: Professional summary, key fields of interest, and dynamic CV download button.
- **Education Section**: Cards displaying institutions (KNTU, University of Twente), dates, grades, and minor fields.
- **Experiences Section**: Portfolio grid utilizing Isotope filtering to categorize work between Academic and Industrial projects.
- **Publications Section**: Interactive list of research papers, abstracts, and modal viewer for illustrations/brief descriptions.
- **Contact/Footer Section**: Unified footer displaying social links and copyright notices.

### 2. Project Details Pages
- Custom details pages for major projects (e.g., `ICH.html` for Intracerebral Hemorrhage, `Dental.html` for Smartory, `AugmenTory.html` for polygon transforms, etc.) presenting detailed methodologies, architectures, and results.

## Key Metrics
- **Performance**: High Google Lighthouse score, specifically targeting optimized Largest Contentful Paint (LCP) and minimized Cumulative Layout Shift (CLS).
- **Accessibility**: 100% compliance on core accessibility axes (semantic tags, color contrast ratios, alt tags for images, keyboard navigability).
- **Responsiveness**: Smooth cross-device layout rendering verified across mobile, tablet, and desktop viewports.

## Key Goals
1. Maintain high page load speeds and optimize static assets (images, stylesheets, and vendor libraries).
2. Ensure full accessibility (a11y) across the main layout and interactive modals.
3. Keep the styling clean, modern, and aligned with standard portfolio aesthetics (vibrant accents, responsive layouts, subtle animations).
4. Organize project descriptions clearly with structured markdown configurations and dedicated pages.
5. Setup a reproducible workflow for adding new project sections or pages.
