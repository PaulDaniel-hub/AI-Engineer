import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code, Globe, Cpu, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code className="w-4 h-4 text-blue-700" />;
      case 'web-dev':
        return <Globe className="w-4 h-4 text-blue-700" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-blue-700" />;
      default:
        return <Wrench className="w-4 h-4 text-blue-700" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
              Technical Focus
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Skills & Emerging Competencies
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Honest representation of what I currently know, practice, and actively explore as a first-year student.
            </p>
          </div>

          {/* Interactive filter segmented controls (Functional button elements per design rules) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                  <div className="p-1.5 bg-blue-50 rounded-md">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List - Clean unboxed text layout, NO fake percentages */}
                <div className="mt-4 space-y-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-2.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-medium text-slate-900">
                          {skill.name}
                        </span>

                        {/* Unboxed level indicator */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          <span className="font-medium text-slate-700">
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {skill.note && (
                        <p className="text-xs text-slate-500 mt-1">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiet footer note */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{category.skills.length} competencies listed</span>
                <span className="text-slate-500">No fabricated percentages</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
