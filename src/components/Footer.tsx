import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-base font-bold text-slate-900 tracking-tight">
              {profile.name}
            </p>
            <p className="text-xs text-slate-600 font-medium">
              AI Student • Aspiring AI Engineer
            </p>
            <p className="text-xs text-slate-500 italic">
              Built with curiosity and code.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={profile.githubUrl.startsWith('http') ? profile.githubUrl : '#contact'}
              target={profile.githubUrl.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedinUrl.startsWith('http') ? profile.linkedinUrl : '#contact'}
              target={profile.linkedinUrl.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors flex items-center gap-1 text-xs"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} {profile.name}. Student Developer Portfolio.</p>
          <p>B.Tech Artificial Intelligence · First Year</p>
        </div>
      </div>
    </footer>
  );
};
