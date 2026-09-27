# T. Ramcharan Teja — Developer Portfolio & ATS Resume Suite

A modern, high-performance portfolio and recruiter-oriented ATS resume suite engineered with **React 19**, **Tailwind CSS v4**, and **Vite**.

---

## 🚀 Live Demo & Preview
- **Candidate:** T. Ramcharan Teja
- **University:** Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad (B.E. CSE, 2024–2028)
- **Current CGPA:** 9.21 / 10.0
- **JEE Mains Percentile:** 96.23 %ile (2024)
- **Intermediate (MPC):** 98.6% (Narayana Junior College)

---

## ✨ Features

- **Recruiter-Oriented Hero Section:**
  - Live availability badge (`Open to Software Engineering & AI/ML Internships`) with pulsing indicator.
  - Quick-copy email (`ramcharanthanneeru@gmail.com`) and phone (`8143034680`) with animated clipboard feedback.
  - Key academic stat cards (CGPA 9.21, 98.6% Intermediate, 96.23 %ile JEE Mains, 150+ LeetCode/HackerRank problems).
- **Interactive ATS Resume Modal:**
  - Standard single-page ATS-formatted resume layout.
  - Direct **Print / Save as PDF** support (`window.print()` with clean print media styles).
  - **Copy Plain Text** for job applications with one click.
  - Keyboard accessibility (ESC key to close, backdrop click).
- **Comprehensive Skills Matrix:**
  - Categorized into CS Core Subjects, Programming Languages, Web Technologies, AI/ML & Data Science, Developer Tools, and Software Engineering.
  - Interactive domain filters and proficiency badges (Core, Proficient, Advanced, Basics).
- **Engineering Projects Showcase:**
  - Category filters: All, AI / ML, Geospatial, Full-Stack Web.
  - Feature highlights from resume:
    1. **AI Dead Reckoning System:** Offline smartphone positioning using IMU sensors, LSTM motion learning, and Kalman/EKF sensor fusion.
    2. **Geospatial Watershed Analysis:** GIS-driven platform for processing and visualizing geo-coded images for watershed development.
    3. **NutriTrack — Calorie Tracker:** Responsive web app with client-side persistence (LocalStorage), workout logs, and Chart.js analytics.
    4. **Portfolio & ATS Resume Suite:** React 19 + Tailwind CSS v4 single page app.
  - Interactive **Architecture & Details Modal** detailing system flows, bullet points, and tech stacks.
- **Experience & Leadership Timeline:**
  - Highlights role as **Academic Tutor – IIT Foundation** at Brain Hub (JEE Foundation curriculum, Mathematics, Physics, Chemistry problem-solving workshops).
- **Education Section:**
  - Detailed cards for CBIT Hyderabad (B.E. CSE, CGPA 9.21) and Narayana Junior College (Intermediate MPC, 98.6%) with relevant coursework tags.
- **Certifications & Achievements:**
  - NPTEL — Programming with Generative AI (Elite).
  - Infosys Springboard — Machine Learning Foundation Certification.
  - Merit Certificate — Value Added C++ Course (CBIT).
  - JEE Mains 96.23 %ile, 98.6% Intermediate, 150+ problems solved.
- **Interactive Contact Form & Socials:**
  - Contact cards with copy buttons for email & phone.
  - Contact form with subject line and mailto composer trigger.
- **Dark Mode & Light Mode:**
  - Persistent theme stored in `localStorage`.
  - Seamless system preference detection (`prefers-color-scheme`).
- **Performance & Build Speed:**
  - Sub-600ms production builds with Vite and Tailwind CSS v4.
  - Zero linting warnings or errors (`oxlint`).

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Deployment Targets:** Vercel, Netlify, GitHub Pages

---

## 💻 Local Development

1. **Clone or navigate into the repository:**
   ```bash
   cd c:\Users\ramch\Desktop\Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Run linting:**
   ```bash
   npm run lint
   ```

5. **Generate production build:**
   ```bash
   npm run build
   ```
   Build artifacts are generated in the `dist/` directory.

---

## 🚢 Deploying to Vercel (Recommended)

1. Push your repository to your GitHub account (`https://github.com/ramcharanthanneeru/portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live at `https://<your-username>-portfolio.vercel.app`!
