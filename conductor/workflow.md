# Workflow Guidelines - Farhad Hoseyni Portfolio Website

## Development Methodology
- **Spec-driven development with checklist checkpoints**: For every feature, page expansion, layout redesign, or asset updates, create a spec (`spec.md`) and a checklist plan (`plan.md`) under a new track folder (`conductor/tracks/<track-id>/`).
- **Standardized Checklists**: Track progress via task registers and keep track lists current.

## Git Branching & Commit Strategy
- **Feature Branches**: Work on feature branches corresponding to the active track (e.g., `track/setup-conductor`, `track/project-page-update`).
- **Branch Merging**: Merge changes into `master` only after all layout, style, and cross-browser validations are complete.
- **Commit Logs**: Make descriptive commits referencing the specific track ID.

## Verification & Auditing Policies

### 1. Local Preview & Server Check
- Start a simple local server to verify that links, images, layout styling, and scripts run correctly without console errors:
  ```bash
  # Python 3
  python3 -m http.server 8000
  ```

### 2. Browser Audits & Performance Check
- **Accessibility Debugging**: Run devtools accessibility checks to ensure semantic structure, aria-attributes, and contrast ratios are compliant.
- **Core Web Vitals Check**: Inspect Largest Contentful Paint (LCP) performance for background images and typography assets using DevTools performance profiles.
- **Console Log Monitoring**: Verify that third-party scripts (AOS, Isotope, GLightbox) initialize cleanly without throwing errors or blocking initial page rendering.
