# Repository Structure Reorganization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize the repository directory structure by moving project detail pages to `projects/`, templates to `templates/`, and organizing project assets into dedicated subfolders (`assets/img/projects/<project-slug>/`).

**Architecture:** Create target folders (`projects/`, `templates/`, `assets/img/projects/<slug>/`), move HTML files and project image assets, and update relative URLs (`href` and `src`) in `index.html` and project HTML files to match the new paths.

**Tech Stack:** HTML5, CSS3, JavaScript, Vanilla Git.

## Global Constraints

- Preserve all original file contents and functionality.
- Ensure all relative paths resolve accurately (`../assets/...` inside `projects/`, `projects/<Project>.html` in `index.html`).
- Ensure project images in `assets/img/projects/<project-slug>/` load cleanly without 404 errors.

---

### Task 1: Create Directory Structure & Move Project Detail HTML Pages

**Files:**
- Create: `projects/` directory
- Create: `templates/` directory
- Move:
  - `AugmenTory.html` -> `projects/AugmenTory.html`
  - `Dental.html` -> `projects/Dental.html`
  - `EOG.html` -> `projects/EOG.html`
  - `EmbeddedTracker.html` -> `projects/EmbeddedTracker.html`
  - `IAAA2024.html` -> `projects/IAAA2024.html`
  - `ICH.html` -> `projects/ICH.html`
  - `KAN.html` -> `projects/KAN.html`
  - `LeRobot.html` -> `projects/LeRobot.html`
  - `Max30100.html` -> `projects/Max30100.html`
  - `MeanFlow.html` -> `projects/MeanFlow.html`
  - `MoreProjects.html` -> `projects/MoreProjects.html`
  - `Others.html` -> `projects/Others.html`
  - `RELBot.html` -> `projects/RELBot.html`
  - `YoDINO.html` -> `projects/YoDINO.html`
  - `service-details.html` -> `templates/service-details.html`
  - `starter-page.html` -> `templates/starter-page.html`

- [x] **Step 1: Create `projects/` and `templates/` directories**

```bash
mkdir -p projects templates
```

- [x] **Step 2: Move HTML files to `projects/` and `templates/` using `git mv`**

```bash
git mv AugmenTory.html Dental.html EOG.html EmbeddedTracker.html IAAA2024.html ICH.html KAN.html LeRobot.html Max30100.html MeanFlow.html MoreProjects.html Others.html RELBot.html YoDINO.html projects/
git mv service-details.html starter-page.html templates/
```

- [x] **Step 3: Commit HTML file relocation**

```bash
git commit -m "refactor: move project detail HTML pages to projects/ and templates to templates/"
```

---

### Task 2: Create Subdivided Image Directories & Move Project Media

**Files:**
- Create subfolders under `assets/img/projects/`:
  - `augmentory/`, `dental/`, `eog/`, `embedded-tracker/`, `iaaa2024/`, `ich/`, `kan/`, `lerobot/`, `max30100/`, `meanflow/`, `others/`, `relbot/`, `yodino/`
- Create `assets/img/profile/` for main portrait images and icons.
- Move image files into their corresponding subfolders.

- [x] **Step 1: Create image subdirectories**

```bash
mkdir -p assets/img/profile assets/img/projects/augmentory assets/img/projects/dental assets/img/projects/eog assets/img/projects/embedded-tracker assets/img/projects/iaaa2024 assets/img/projects/ich assets/img/projects/kan assets/img/projects/lerobot assets/img/projects/max30100 assets/img/projects/meanflow assets/img/projects/others assets/img/projects/relbot assets/img/projects/yodino
```

- [x] **Step 2: Move profile and logo assets to `assets/img/profile/`**

```bash
git mv "assets/img/Main Portrait"* "assets/img/Mohamamd icon"* "assets/img/UT_Logo"* assets/img/profile/
```

- [x] **Step 3: Move project image assets into respective project subfolders**

```bash
git mv "assets/img/Projects/AugmenTory"* "assets/img/Projects/Augmentory"* assets/img/projects/augmentory/
git mv "assets/img/Projects/dental"* assets/img/projects/dental/
git mv "assets/img/Projects/EOG"* assets/img/projects/eog/
git mv "assets/img/Projects/embedded_tracker"* assets/img/projects/embedded-tracker/
git mv "assets/img/Projects/IAAA2024"* assets/img/projects/iaaa2024/
git mv "assets/img/Projects/brain_"* "assets/img/Projects/decision"* "assets/img/Projects/heatmap"* assets/img/projects/ich/
git mv "assets/img/Projects/KAN"* assets/img/projects/kan/
git mv "assets/img/Projects/lerobot"* assets/img/projects/lerobot/
git mv "assets/img/Projects/MAX30100"* assets/img/projects/max30100/
git mv "assets/img/Projects/meanflow"* assets/img/projects/meanflow/
git mv "assets/img/Projects/Other "* "assets/img/Projects/Others_"* "assets/img/Projects/APAC"* "assets/img/Projects/GradCam"* assets/img/projects/others/
git mv "assets/img/Projects/relbot"* assets/img/projects/relbot/
git mv "assets/img/Projects/yodino"* assets/img/projects/yodino/
rmdir assets/img/Projects
```

- [x] **Step 4: Commit image directory restructuring**

```bash
git commit -m "refactor: restructure assets/img into profile and per-project subdirectories"
```

---

### Task 3: Update Links in `index.html`

**Files:**
- Modify: `index.html`

- [x] **Step 1: Update project detail links from `href="<Project>.html"` to `href="projects/<Project>.html"`**
- [x] **Step 2: Update profile image links from `assets/img/<Image>` to `assets/img/profile/<Image>`**
- [x] **Step 3: Update project thumbnail and hover image links to point to `assets/img/projects/<slug>/<Image>`**
- [x] **Step 4: Commit `index.html` link updates**

```bash
git add index.html
git commit -m "fix: update index.html links and image paths for new directory structure"
```

---

### Task 4: Update Links in `projects/*.html`

**Files:**
- Modify: `projects/*.html` (All 14 project pages)

- [x] **Step 1: Update asset paths in all `projects/*.html` files from `assets/` to `../assets/`**
- [x] **Step 2: Update project image references to point to `../assets/img/projects/<slug>/...`**
- [x] **Step 3: Update homepage links from `href="index.html"` to `href="../index.html"`**
- [x] **Step 4: Commit project page link updates**

```bash
git add projects/
git commit -m "fix: update relative asset and navigation links in projects/*.html"
```

---

### Task 5: Verification & Path Audit

- [x] **Step 1: Check for remaining broken image links or stale references across all files**

```bash
grep -rn "assets/img/Projects/" index.html projects/
```

- [x] **Step 2: Verify git status is clean and all files exist**

```bash
git status
```
