import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, ExternalLink, Sparkles, Code2, Copy, Check } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroProps {
  profile: ProfileData;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyLink = (url: string, label: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Introduction */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Clean greeting kicker (unboxed text) */}
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for student collaborations & hackathons</span>
            </div>

            {/* Name and Headline */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-slate-700">
                Hi, I'm <span className="text-slate-950 font-semibold">{profile.name}</span>
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]" style={{ textWrap: 'balance' }}>
                {profile.heroHeadline}
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {profile.heroSupportingText}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
              >
                <span>View My Projects</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors shadow-xs"
              >
                <span>Connect With Me</span>
              </a>
            </div>

            {/* Social Links & Placeholders */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-4">
                <a
                  href={profile.githubUrl.startsWith('http') ? profile.githubUrl : '#contact'}
                  target={profile.githubUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-slate-950 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-slate-700" />
                  <span className="font-mono text-xs">{profile.githubUrl}</span>
                </a>

                <a
                  href={profile.linkedinUrl.startsWith('http') ? profile.linkedinUrl : '#contact'}
                  target={profile.linkedinUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-slate-950 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="font-mono text-xs">{profile.linkedinUrl}</span>
                </a>
              </div>

              {profile.githubUrl.includes('[') && (
                <span className="text-xs text-slate-500 italic">
                  (Editable placeholders)
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Clean Profile Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.name} - AI Student`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container if image cannot be rendered
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                    <Code2 className="w-8 h-8" />
                  </div>
                </div>

                <div className="space-y-1 min-w-0">
                  <h2 className="text-base font-semibold text-slate-900 truncate">
                    {profile.name}
                  </h2>
                  <p className="text-xs text-slate-600">First-Year B.Tech Student</p>
                  <p className="text-xs text-blue-700 font-medium">Artificial Intelligence</p>
                </div>
              </div>

              {/* Snapshot Attributes */}
              <div className="py-4 space-y-3 text-xs text-slate-600 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Degree & Year</span>
                  <span className="font-medium text-slate-900">B.Tech · 1st Year (2026)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Primary Language</span>
                  <span className="font-mono font-medium text-slate-900">Python</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Current Focus</span>
                  <span className="font-medium text-slate-900">AI & Web Foundations</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Activities</span>
                  <span className="font-medium text-slate-900">Hackathons & Ideathons</span>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-4 flex items-center gap-2 text-xs text-slate-600">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Currently building foundational projects & exploring GenAI.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
