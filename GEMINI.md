# Farhad Hoseyni - Portfolio Project

Personal portfolio website for Farhad Hoseyni, an Electrical and AI Engineer. The site showcases his background, education, experience, and publications.

## Project Overview

-   **Type:** Static Personal Portfolio Website
-   **Tech Stack:** HTML5, CSS3, JavaScript (ES6+)
-   **Framework:** Bootstrap v5.3.3
-   **Libraries:**
    -   [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/) - Scroll animations
    -   [Typed.js](https://mattboldt.com/demos/typed-js/) - Typing animation in hero section
    -   [Swiper](https://swiperjs.com/) - Touch sliders
    -   [GLightbox](https://biati-digital.github.io/glightbox/) - Lightbox for images/videos
    -   [Isotope](https://isotope.metafizzy.co/) - Filterable portfolio layout
    -   [Font Awesome](https://fontawesome.com/) & [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon sets
-   **Template:** Based on [Folio](https://bootstrapmade.com/folio-bootstrap-portfolio-template/) from BootstrapMade.

## Directory Structure

-   `index.html`: Main landing page.
-   `assets/`: Core website assets.
    -   `css/`: Custom stylesheets (`main.css`).
    -   `js/`: Custom JavaScript logic (`main.js`).
    -   `img/`: Website images, icons, and project-specific visuals.
    -   `vendor/`: Third-party libraries and frameworks.
    -   `CV/`: Professional documents (CVs and Transcripts).
-   `forms/`: Placeholder for contact form processing (PHP-based).
-   `*.html`: Additional project-specific detail pages (e.g., `AugmenTory.html`, `Dental.html`, `KAN.html`).

## Development Guidelines

### Core Logic
The primary site behavior is managed in `assets/js/main.js`. This file handles:
-   Scroll behavior and sticky header toggles.
-   Mobile navigation toggling.
-   Initialization of AOS, Typed.js, Swiper, GLightbox, and Isotope.
-   Portfolio image hover effects.
-   Scrollspy for the navigation menu.

### Styling
All custom styling is located in `assets/css/main.css`. It follows a standard CSS structure, overriding Bootstrap defaults where necessary.

### Adding Projects
1.  Add project images to `assets/img/Projects/`.
2.  Update the portfolio section in `index.html`.
3.  Use the `data-hover` attribute on portfolio images for the hover effect handled in `main.js`.
4.  Create a detailed HTML page (e.g., `NewProject.html`) using `service-details.html` or `starter-page.html` as a template if a detail page is required.

### Deployment
This project is configured for GitHub Pages (evidenced by the `CNAME` file and repository name `mamdaliof.github.io`). Deployment is as simple as pushing changes to the main branch.

## Key Commands
Since this is a static site, there are no build or test scripts.
-   **To View:** Open `index.html` in any modern web browser.
-   **To Edit:** Use any text editor or IDE. Changes to HTML/CSS/JS are reflected upon browser refresh.
