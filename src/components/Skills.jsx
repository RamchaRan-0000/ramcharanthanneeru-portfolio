import React, { useState } from "react";
import {
  Layers,
  Terminal,
  Globe,
  Brain,
  Wrench,
  Sparkles,
  Code2,
} from "lucide-react";

export const Skills = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const iconMap = {
    Layers: Layers,
    Terminal: Terminal,
    Globe: Globe,
    Brain: Brain,
    Wrench: Wrench,
    Sparkles: Sparkles,
  };

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case "Core":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800";
      case "Advanced":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
      case "Proficient":
        return "bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800";
      case "Intermediate":
        return "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800";
      case "Basics":
      case "Foundational":
        return "bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800";
      case "Language":
        return "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-200 dark:border-rose-800";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  const filteredCategories =
    selectedCategory === "all"
      ? skills
      : skills.filter((cat) => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Core Competencies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            A comprehensive overview of programming languages, CS core subjects, web technologies, AI/ML tools, and software engineering practices.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedCategory === "all"
                  ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/25"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700"
              }`}
            >
              All Domains
            </button>
            {skills.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat.category
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/25"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Layers;
            return (
              <div
                key={idx}
                className="flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
              >
                {/* Card Title */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-sm`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <span className="text-xs text-slate-700 dark:text-slate-400">
                      {cat.items.length} key skills
                    </span>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span
                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
