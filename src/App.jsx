import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { portfolioData } from "./data/portfolioData";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { CertificationsAchievements } from "./components/CertificationsAchievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeModal } from "./components/ResumeModal";

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar
          personal={portfolioData.personal}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero
            personal={portfolioData.personal}
            stats={portfolioData.stats}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* About Section */}
          <About about={portfolioData.about} />

          {/* Skills Section */}
          <Skills skills={portfolioData.skills} />

          {/* Projects Section */}
          <Projects projects={portfolioData.projects} />

          {/* Experience Section */}
          <Experience experience={portfolioData.experience} />

          {/* Education Section */}
          <Education education={portfolioData.education} />

          {/* Certifications & Achievements Section */}
          <CertificationsAchievements
            certifications={portfolioData.certifications}
            achievements={portfolioData.achievements}
          />

          {/* Contact Section */}
          <Contact personal={portfolioData.personal} />
        </main>

        {/* Footer */}
        <Footer personal={portfolioData.personal} />

        {/* ATS Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          data={portfolioData}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
