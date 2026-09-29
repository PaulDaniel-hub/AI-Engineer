import React from 'react';
import { Target, Terminal, Compass, Users2, BrainCircuit, Rocket } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface AboutProps {
  profile: ProfileData;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const highlights = [
    {
      icon: Terminal,
      title: 'Python Foundations',
      description: 'Strengthening programming logic, data handling, and algorithmic problem solving.',
    },
    {
      icon: Compass,
      title: 'Web Exploration',
      description: 'Understanding how user interfaces and web applications connect and interact.',
    },
    {
      icon: BrainCircuit,
      title: 'Introductory GenAI',
      description: 'Exploring prompts, intelligent utilities, and foundational artificial intelligence models.',
    },
    {
      icon: Users2,
      title: 'Hackathons & Ideathons',
      description: 'Brainstorming practical technology solutions in competitive collaborative environments.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
            About Me
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1" style={{ textWrap: 'balance' }}>
            Building strong foundations in artificial intelligence and modern software development
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            {profile.aboutBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Long-term ambition statement */}
            <div className="pt-3 border-l-2 border-blue-600 pl-4 my-4 bg-white/60 p-3 rounded-r-lg border border-slate-200/60">
              <p className="text-xs uppercase font-medium tracking-wide text-slate-500">
                Long-Term Vision
              </p>
              <p className="text-sm sm:text-base font-medium text-slate-900 mt-0.5">
                To evolve from student foundations into an impactful AI Engineer capable of designing resilient, ethical, and practical intelligent systems.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Element & Key Focus Blocks */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual element: AI concepts illustration */}
            <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-white shadow-xs">
              <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                <img
                  src={profile.illustrationUrl}
                  alt="Abstract AI and computational foundations illustration"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-500 bg-slate-50">
                  <BrainCircuit className="w-10 h-10 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-slate-700">Foundational Artificial Intelligence</span>
                  <span className="text-xs text-slate-500">Algorithms · Logic · Generative Systems</span>
                </div>
              </div>
              <div className="p-3 text-xs text-slate-500 flex items-center justify-between border-t border-slate-100">
                <span>Computational Thinking</span>
                <span>·</span>
                <span>Active Learning</span>
                <span>·</span>
                <span>B.Tech AI 2026</span>
              </div>
            </div>

            {/* Structured key focus pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3.5 bg-white border border-slate-200/80 rounded-lg hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <IconComponent className="w-4 h-4 text-blue-700 shrink-0" />
                      <h3 className="text-xs font-semibold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
