# Website Update Guide based on New CV

Based on your newly provided CV (`cv-seyedmohammad-hoseyni-17-apri-1page.pdf`), your website needs several key updates to accurately reflect your current professional status, roles, and technical focus as an **AI & Robotics Engineer**.

Here is a step-by-step breakdown of how you should restructure and update `index.html`:

## 1. Hero & Header Section
*   **Name Update:** The current site uses "Farhad Hoseyni". You should update the `<title>`, header logo text, and main hero text to **Seyedmohammad Hoseyni** (or simply **Mohammad Hoseyni** if you prefer a shorter version for the header).
*   **Job Titles:** Update the `data-typed-items` in the Hero section from *"An Electrical Engineer, An AI Engineer"* to *"An AI & Robotics Engineer"*.
*   **Contact Links:** 
    *   Update the `mailto:` link to your new email: `s.hoseyni@student.utwente.nl`.
    *   (Optional) Add a phone icon link for `+31626417039`.
*   **CV Download Link:** Update the navigation link and "Download My CV" button in the About section to point to this new PDF file.

## 2. About Section
*   **Description:** Replace the existing paragraph with your new Summary:
    > "AI and Robotics Engineer specializing in deep learning, image processing, and scalable AI solutions. Adept at bridging multidisciplinary teams to achieve complex project goals. Published researcher passionate about Generative AI and continuous technological innovation."
*   **Add a Skills List:** You have a strong list of skills on the CV. You should add a visually appealing list or grid of badges in the About section containing:
    *   *Languages/Frameworks:* Python/C++, Matlab, PyTorch, ROS
    *   *Domains:* Machine Learning, Image Processing, Signal Processing, Generative AI, NLP/LLM VLM, Control Theory, Industrial Robotics
    *   *Other:* Embedded Systems, Software Deployment, Team Supervision

## 3. Education Section
*   **University of Twente:** Update the exact degree name to *"Master's of Software, Algorithm, AI and Robotics"* and ensure the timeline says *"Sep. 2025 - Sep 2027"*.
*   **K. N. Toosi University:** Update the timeline to *"Sep. 2019 - Sep. 2024"*.

## 4. NEW: Work Experience Section
Currently, your website has an "Experiences" section that actually lists your *Projects*. You need to create a brand new section dedicated to your actual employment history.
*   **Action:** Add a new `<section id="work-experience">` between Education and Projects.
*   **Content to Add:**
    *   **Fraunhofer Innovation Platform for Advanced Manufacturing** (Oct. 2025 - Present) — *Computer Vision And Robotic Engineer*
    *   **Smartory Labs** (Mar. 2023 - Sep. 2025) — *AI and Computer Vision Engineer*
    *   **APAC Research Group** (Jun. 2022 - Sep. 2025) — *Technical Manager & Computer Vision Engineer*

## 5. Projects Section (Currently named "Experiences")
*   **Rename:** Change the section title `<h2>` and navigation link from "Experiences" to **"Projects"** or **"Portfolio"**.
*   **Add New Projects:** You need to add cards/items for your latest work:
    *   *Generative AI and VLA Models for Robots* (SmolVLA, LeRobot SO-101, U-Net/ViT)
    *   *Class-Agnostic object counting from self-supervision* (YOLO, SAM, DINO, CLIP)
    *   *Machine learning based fault detector in the industrial setup* (SVM, Random Forest)
    *   *Mobile Robot Tracking & SLAM Integration* (RELbot, ROS, LiDAR)
*   **Cleanup:** Decide if you want to keep older projects (like MAX30100 or older hardware projects) or remove them to keep the focus strictly on AI & Robotics.

## 6. Publications Section
*   **Update Existing Items:**
    *   Update the *Brain Hemorrhage* paper status to reflect its publication at ICBME (Mar. 2026) with its DOI link: `https://doi.org/10.1109/ICBME68496.2025.11392202`.
    *   Ensure *Dental Cavity* reflects ICRoM (Jan. 2024).
    *   Ensure *AugmenTory* reflects arXiv (May 2024).
*   **Add/Remove:** Cross-reference the 5 publications currently on your website with the 3 listed on your CV. You may want to hide the "Pre-print" or "In Preparation" ones if they are no longer relevant, or keep them on the site for extra depth.

## Summary of Action Plan
1. Copy the new CV PDF into `assets/CV/`.
2. Do a find-and-replace in `index.html` for your name, email, and CV file path.
3. Build a new HTML block for the **Work Experience** timeline.
4. Rename the current Isotope grid from Experiences to **Projects**, and add the 4 new robotics/AI projects.