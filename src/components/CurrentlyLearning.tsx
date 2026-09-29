import React from 'react';
import { currentlyLearningData } from '../data/portfolioData';
import { Sparkles, Terminal, Globe, Cpu, Wrench, Layers } from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'adv-python':
        return <Terminal className="w-4 h-4 text-blue-700" />;
      case 'web-dev':
        return <Globe className="w-4 h-4 text-blue-700" />;
      case 'ai-fundamentals':
        return <Cpu className="w-4 h-4 text-blue-700" />;
      case 'gen-ai':
        return <Sparkles className="w-4 h-4 text-blue-700" />;
      case 'problem-solving':
        return <Wrench className="w-4 h-4 text-blue-700" />;
      default:
        return <Layers className="w-4 h-4 text-blue-700" />;
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
            Current Focus
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Currently Learning
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            The specific areas and practices I dedicate daily study time toward in this semester.
          </p>
        </div>

        {/* Focus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentlyLearningData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs hover:border-slate-300 transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-50 rounded-md">
                      {getTopicIcon(item.id)}
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                      {item.category}
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Active Focus" />
                </div>

                <h3 className="text-base font-semibold text-slate-900 mt-3">
                  {item.topic}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Daily Practice</span>
                <span className="text-blue-700 font-medium">In Progress</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
