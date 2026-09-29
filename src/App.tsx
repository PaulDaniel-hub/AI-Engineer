import React, { useState, useEffect } from 'react';
import { initialProfileData } from './data/portfolioData';
import { ProfileData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { LearningJourney } from './components/LearningJourney';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConfigDrawer } from './components/ConfigDrawer';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('student_portfolio_profile');
      if (saved) {
        return { ...initialProfileData, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to default
    }
    return initialProfileData;
  });

  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const handleUpdateProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('student_portfolio_profile', JSON.stringify(updated));
    } catch {
      // Ignore storage errors in sandbox
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Navigation Bar */}
      <Navbar profile={profile} onOpenConfig={() => setIsConfigOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero profile={profile} />

        {/* 2. About Me */}
        <About profile={profile} />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects Showcase */}
        <Projects />

        {/* 5. Experience & Activities */}
        <Experience />

        {/* 6. Learning Journey Timeline */}
        <LearningJourney />

        {/* 7. Currently Learning Focus */}
        <CurrentlyLearning />

        {/* 8. Contact Section */}
        <Contact profile={profile} />
      </main>

      {/* Minimal Footer */}
      <Footer profile={profile} />

      {/* Profile Details Customization Drawer */}
      <ConfigDrawer
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
}
