# Repository Structure Reorganization Design

## Overview
Reorganize the repository structure to eliminate root directory clutter, establish a clear directory hierarchy for project detail pages and templates, and structure project images into dedicated per-project folders.

## Goals
1. Move project detail HTML pages into a dedicated `projects/` folder.
2. Move starter/template pages into a dedicated `templates/` folder.
3. Organize `assets/img/Projects/` into per-project subfolders (`assets/img/projects/<project-slug>/`).
4. Update all relative links (`href` and `src`) in `index.html` and project HTML files.

## Target Directory Layout

```
mamdaliof.github.io/
├── index.html                   # Main landing page
├── CNAME
├── GEMINI.md
├── WEBSITE_UPDATE_GUIDE.md
├── projects/                    # All project detail pages
│   ├── AugmenTory.html
│   ├── Dental.html
│   ├── EOG.html
│   ├── EmbeddedTracker.html
│   ├── IAAA2024.html
│   ├── ICH.html
│   ├── KAN.html
│   ├── LeRobot.html
│   ├── Max30100.html
│   ├── MeanFlow.html
│   ├── MoreProjects.html
│   ├── Others.html
│   ├── RELBot.html
│   └── YoDINO.html
├── templates/                   # Page templates
│   ├── service-details.html
│   └── starter-page.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── img/
│   │   ├── profile/             # Profile photos & university logos
│   │   ├── publications/        # Publication thumbnails & modals
│   │   └── projects/            # Per-project media subfolders
│   │       ├── augmentory/
│   │       ├── dental/
│   │       ├── eog/
│   │       ├── embedded-tracker/
│   │       ├── iaaa2024/
│   │       ├── ich/
│   │       ├── kan/
│   │       ├── lerobot/
│   │       ├── max30100/
│   │       ├── meanflow/
│   │       ├── others/
│   │       ├── relbot/
│   │       └── yodino/
│   ├── CV/
│   └── vendor/
└── docs/
    └── superpowers/specs/
```

## Path Adjustments & Link Updates

### 1. Root `index.html`
- Links to project detail pages update from `href="<Project>.html"` to `href="projects/<Project>.html"`.
- Image paths update from `assets/img/Projects/<image>` to `assets/img/projects/<project-slug>/<image>`.

### 2. Project Detail Pages (`projects/*.html`)
- Navigation back to main page updates from `index.html` to `../index.html`.
- Asset paths update from `assets/...` to `../assets/...`.
- Images update from `assets/img/Projects/...` to `../assets/img/projects/<project-slug>/...`.

### 3. JavaScript (`assets/js/main.js`)
- Ensure isotope, swiper, glightbox, and hover script paths work with updated relative paths if any dynamic path resolution exists.

## Verification Plan
1. Check that all HTML files exist in their target locations.
2. Verify all image links resolve without broken images (404s).
3. Verify navigation links between `index.html` and project pages (`projects/*.html`).
