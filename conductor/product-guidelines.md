# Product Guidelines - Farhad Hoseyni Portfolio Website

## Voice and Tone
- **Professional and Objective**: Portfolio text, page descriptions, and codebase comments should remain professional, objective, clear, and direct.

## Design Principles
1. **Clean Visual Hierarchy**: Font choices, margins, and section headings should clearly guide the reader's attention through education, experience, and publications.
2. **Mobile-First Responsiveness**: All layout containers, grids, and components must adapt seamlessly to screen widths from small mobile devices (320px) to ultra-wide monitors.
3. **Interactive Responsiveness**: Interactive elements like nav links, mobile nav toggles, portfolio isotope filters, and publication detail modals must react instantly to user input.
4. **Optimized Asset Delivery**: Keep images compressed, leverage modern formats (e.g., WebP), and defer non-critical CSS/JS resources where possible to minimize page load times.
5. **Search Engine Optimization (SEO)**: Ensure unique title tags, descriptive meta keywords, proper semantic HTML tags, and accessible alt texts for all visual assets.

## Implementation & Code Constraints

### 1. Style Integrity and Customization
- Core layout styling should reside in `assets/css/main.css`.
- Rely on modern CSS features (e.g., Flexbox, Grid, custom properties) for styling enhancements.
- Avoid bloating the project with heavy external styling files; stick to the standard vendor Bootstrap configuration.

### 2. Accessibility (a11y) Rules
- **Interactive Elements**: All links, buttons, and form elements must have unique, descriptive IDs and proper ARIA labels where necessary.
- **Color Contrast**: Background-to-foreground text color contrasts must meet or exceed WCAG AA standards (4.5:1 ratio for normal text).
- **Focus Indicators**: Never remove default focus outlines (`:focus`) without providing a visible, custom alternative styling.

### 3. DOM Structuring and Scripting
- Scripts must be loaded asynchronously or at the end of the document (`<body>` closure) to prevent DOM-blocking and optimize initial render times.
- Ensure the mobile navigation toggle handles focus containment properly when active.
