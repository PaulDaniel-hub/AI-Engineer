import React from 'react';
import { activitiesData } from '../data/portfolioData';
import { Lightbulb, Trophy, CheckCircle, Users } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
            Collaborative Engagement
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Experience & Activities
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Academic initiatives, team innovation sprints, and problem-solving events undertaken during my first year.
          </p>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activitiesData.map((activity) => (
            <div
              key={activity.id}
              className="bg-white border border-slate-200/90 rounded-xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
                      {activity.id === 'hackathons' ? (
                        <Users className="w-5 h-5" />
                      ) : (
                        <Lightbulb className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {activity.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {activity.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-500 font-mono">
                    Student Activity
                  </span>
                </div>

                {/* Primary Description */}
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  {activity.description}
                </p>

                {/* Practical Takeaways */}
                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-3">
                    Key Practical Competencies Gained
                  </h4>
                  <ul className="space-y-2.5">
                    {activity.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Team & Peer Collaboration</span>
                <span>Active First-Year Participant</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Representation Notice */}
        <div className="mt-8 p-4 bg-slate-50 border border-slate-200/70 rounded-lg text-xs text-slate-600 flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
          <span>
            <strong>Note on Experience:</strong> As a first-year student, my experience centers around collaborative hackathons, ideations, and self-directed software development rather than commercial corporate employment.
          </span>
        </div>
      </div>
    </section>
  );
};
