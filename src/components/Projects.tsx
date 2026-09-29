import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectCodeModal } from './ProjectCodeModal';
import { Github, Play, Code2, ArrowUpRight, Copy, Check } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [repoCopiedId, setRepoCopiedId] = useState<string | null>(null);

  const handleCopyRepo = (project: ProjectItem) => {
    navigator.clipboard.writeText(project.githubUrl);
    setRepoCopiedId(project.id);
    setTimeout(() => setRepoCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
            Practical Applications
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Projects & Code Demonstrations
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Beginner-level Python projects designed to solidify core programming constructs, control flow, functions, and user interaction.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Name and unboxed category */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 shrink-0">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies - unboxed text with separators */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Technology:</span>
                  <span>{project.technologies.join(', ')}</span>
                  <span>·</span>
                  <span>Beginner Focus</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                {/* GitHub button / placeholder */}
                <button
                  onClick={() => handleCopyRepo(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors"
                  title="GitHub repository placeholder (Click to copy)"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{repoCopiedId === project.id ? 'Copied placeholder' : project.githubUrl}</span>
                </button>

                {/* Interactive Demo / Code Inspection */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs"
                >
                  <Play className="w-3 h-3 text-blue-400" />
                  <span>Interactive Demo & Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine student scope */}
        <div className="mt-8 p-4 bg-white border border-slate-200/70 rounded-lg text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            <strong>Authentic Scope:</strong> These projects honestly represent first-year programming practice and procedural Python fundamentals without simulated commercial bloat.
          </span>
          <span className="text-slate-500">All source scripts available in demo modals</span>
        </div>
      </div>

      {/* Code & Simulator Modal */}
      {selectedProject && (
        <ProjectCodeModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
