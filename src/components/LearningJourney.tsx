import React from 'react';
import { learningJourneyData } from '../data/portfolioData';
import { Check, CircleDot, ArrowRight, Sparkles } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
            Curriculum & Trajectory
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            My Learning Journey
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A chronological and goal-oriented progression from foundational computer programming to aspiring AI engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-10">
          {learningJourneyData.map((item, index) => {
            const isCompleted = item.status === 'Completed';
            const isInProgress = item.status === 'In Progress';
            const isUpcoming = item.status === 'Upcoming';

            return (
              <div key={item.step} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                    isCompleted
                      ? 'bg-slate-900 text-white'
                      : isInProgress
                      ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                      : 'bg-white border-2 border-slate-300 text-slate-500'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : isInProgress ? (
                    <CircleDot className="w-3.5 h-3.5" />
                  ) : (
                    <span className="text-[10px]">{item.step}</span>
                  )}
                </div>

                {/* Content Box */}
                <div className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 shadow-xs group-hover:border-slate-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-slate-500">
                        {item.step}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    {/* Unboxed status indicator */}
                    <div className="flex items-center gap-1.5 text-xs">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isCompleted
                            ? 'bg-emerald-500'
                            : isInProgress
                            ? 'bg-blue-600 animate-pulse'
                            : 'bg-slate-400'
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          isCompleted
                            ? 'text-emerald-700'
                            : isInProgress
                            ? 'text-blue-700'
                            : 'text-slate-500'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {item.highlights.map((hl, i) => (
                        <div key={i} className="text-xs text-slate-500 flex items-start gap-1.5">
                          <span className="text-blue-600 font-bold shrink-0">·</span>
                          <span className="leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
