import { useState } from "react";
import {
  FileText,
  Mail,
  Phone,
  Sparkles,
  MapPin,
  Check,
  Copy,
  ChevronRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";

export const Hero = ({ personal, stats, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background glowing gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-medium mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.status.text}</span>
          </div>

          {/* Main Title / Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          {/* Subtitle / Headline */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4 max-w-3xl">
            {personal.tagline}
          </p>

          {/* Location & University Tag */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              {personal.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Chaitanya Bharathi Institute of Technology (CBIT)
            </span>
          </div>

          {/* Short Bio */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
            {personal.shortBio}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-xs hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>ATS Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Connect & Copy Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm mb-12">
            {/* Copy Email */}
            <button
              onClick={() => copyToClipboard(personal.socials.email, "email")}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              title="Click to copy email address"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-500" />
              <span>{personal.socials.email}</span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>

            <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />

            {/* Copy Phone */}
            <button
              onClick={() => copyToClipboard(personal.socials.phoneRaw, "phone")}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              title="Click to copy phone number"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{personal.socials.phone}</span>
              {copiedPhone ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>

            <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />

            {/* Social Links */}
            <div className="flex items-center gap-1">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                title="LeetCode / Coding Profile"
              >
                <LeetcodeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Key Stat Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700/60 transition-all duration-200 group text-left"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-700 dark:text-slate-400 mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
