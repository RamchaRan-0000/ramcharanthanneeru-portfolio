import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Sparkles } from "lucide-react";

export const Education = ({ education }) => {
  return (
    <section id="education" className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Strong foundations in Computer Science and Engineering at CBIT with consistent academic distinction.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      {edu.score}
                    </span>
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-400">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {edu.degree}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-700 dark:text-slate-400 gap-1 shrink-0">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Coursework */}
              {edu.coursework && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                    <BookOpen className="w-4 h-4 text-indigo-500" />
                    <span>Relevant Coursework & Subjects</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {edu.highlights && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{edu.highlights}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
