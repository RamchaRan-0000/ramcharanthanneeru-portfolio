import { Award, Trophy } from "lucide-react";

export const CertificationsAchievements = ({
  certifications,
  achievements,
}) => {
  return (
    <section
      id="certifications"
      className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Certifications & Achievements
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified technical credentials in Generative AI, Machine Learning, and C++, alongside competitive national entrance and academic milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-indigo-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Technical Certifications
              </h3>
            </div>

            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      {cert.issuer}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1.5">
                      {cert.title}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                    {cert.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-medium text-indigo-600 dark:text-indigo-400">
                    Domain: {cert.category}
                  </span>
                  <span>{cert.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Key Academic & Competitive Achievements
              </h3>
            </div>

            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-amber-300 dark:hover:border-amber-700/60 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      {item.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1.5">
                      {item.title}
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400">
                      {item.metric}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.detail}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-400 flex items-center justify-between">
                  <span>Awarded / Recognized by</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {item.issuer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
