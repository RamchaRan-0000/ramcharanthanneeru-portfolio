import {
  X,
  Printer,
  Copy,
  Check,
} from "lucide-react";

export const ResumeModal = ({ isOpen, onClose, data }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = `
${data.personal.name}
${data.personal.location} | ${data.personal.socials.email} | ${data.personal.socials.phone} | GitHub: ${data.personal.socials.github} | LinkedIn: ${data.personal.socials.linkedin}

PROFESSIONAL SUMMARY
${data.personal.shortBio}

EDUCATION
Chaitanya Bharathi Institute of Technology (CBIT)
Bachelor of Engineering in Computer Science and Engineering; CGPA: 9.21 / 10.0
Hyderabad, Telangana | Aug. 2024 - July 2028

Narayana Junior College
Intermediate - Mathematics, Physics, Chemistry (MPC); Percentage: 98.6%
Hyderabad, Telangana | 2022 - 2024

TECHNICAL SKILLS
- CS Core Subjects: Data Structures, Database Management Systems (DBMS), Operating Systems, Computer Networks, OOP, Algorithms
- Languages: Java, C++, Python, C, SQL, JavaScript (ES6+)
- Web Technologies: HTML5, CSS3, Bootstrap 5, JavaScript, React.js (Basics), Vue.js (Basics), Node.js (Basics), REST APIs
- AI/ML: Machine Learning Fundamentals, Generative AI Fundamentals, LSTM, Sensor Fusion, AI-based Fraud Detection
- Developer Tools: Git, GitHub, VS Code, GitHub Pages, Jupyter Notebook, Google Colaboratory, Terminal/Bash
- Software Engineering: Agile, SDLC, Version Control, Debugging, Unit Testing (Basics), Problem Solving

EXPERIENCE
Academic Tutor - IIT Foundation | Brain Hub
- Tutored secondary school students preparing for the competitive JEE foundation curriculum in Mathematics, Physics, and Chemistry.
- Deconstructed complex problem-solving methodologies and strengthened core conceptual understanding through structured practice sessions.
- Monitored individual student performance, designed custom assignment sets, and conducted targeted doubt-clearing workshops.

PROJECTS
AI Dead Reckoning System | Python, LSTM, Kalman Filter, IMU Sensors, Sensor Fusion
- Developed an offline AI-based smartphone positioning system to estimate movement when GPS signals are unavailable in tunnels and urban canyons.
- Processed accelerometer and gyroscope data using sensor-fusion techniques and motion constraints to improve position estimation.
- Explored LSTM-based motion learning and Kalman/EKF-style filtering for robust on-device dead-reckoning.

Geospatial Watershed Analysis | Python, GIS, Geospatial Analysis, Geo-Coded Images
- Designed a solution using geospatial techniques to visualize and analyze geo-coded images for watershed development.
- Planned workflows to combine field imagery with geographic context for monitoring watershed assets and development activities.
- Focused on map-based visualization, spatial analysis, and interpretable insights for watershed planning and monitoring.

NutriTrack - Calorie Tracker | HTML, CSS, JavaScript, Bootstrap, Chart.js
- Developed a responsive web application with authentication, calorie-goal calculation, meal and workout tracking, and interactive Chart.js visualizations.
- Implemented client-side data persistence using Local Storage and deployed the application using GitHub Pages.
- Applied responsive web design and JavaScript-based application logic to deliver an interactive user experience.

CERTIFICATIONS
- NPTEL - Programming with Generative AI
- Infosys Springboard - Machine Learning Foundation Certification
- Merit Certificate - Value Added C++ Course (CBIT)

ACHIEVEMENTS
- Secured 96.23 percentile in JEE Mains 2024.
- Secured 98.6% in Intermediate academics.
- CGPA: 9.21/10 at CBIT.
- Solved 150+ coding problems across LeetCode and HackerRank.
- Languages: English, Telugu, Hindi.
    `.trim();

    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[94vh] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              ATS-Standard Resume Preview
            </h3>
            <span className="hidden sm:inline-block text-xs text-slate-700 dark:text-slate-400">
              • Recruiter-Optimized Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              title="Copy plain text for job applications"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="text-center pb-4 border-b-2 border-slate-900">
            <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-slate-900">
              {data.personal.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-700 mt-2 font-medium">
              <span>{data.personal.location}</span>
              <span>•</span>
              <a
                href={`mailto:${data.personal.socials.email}`}
                className="hover:underline text-indigo-700"
              >
                {data.personal.socials.email}
              </a>
              <span>•</span>
              <span>{data.personal.socials.phone}</span>
              <span>•</span>
              <a
                href={data.personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-indigo-700"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={data.personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-indigo-700"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-4 pb-3 border-b border-slate-300">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              {data.personal.shortBio}
            </p>
          </div>

          {/* Education */}
          <div className="mt-4 pb-3 border-b border-slate-300">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Education
            </h2>
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-slate-900">
                    Chaitanya Bharathi Institute of Technology (CBIT)
                  </span>
                  <span className="text-slate-700">Hyderabad, Telangana</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-slate-800">
                  <span>
                    Bachelor of Engineering in Computer Science and Engineering;{" "}
                    <strong className="not-italic font-semibold">
                      CGPA: 9.21 / 10.0
                    </strong>
                  </span>
                  <span>Aug. 2024 – July 2028</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-slate-900">
                    Narayana Junior College
                  </span>
                  <span className="text-slate-700">Hyderabad, Telangana</span>
                </div>
                <div className="flex justify-between items-baseline text-xs italic text-slate-800">
                  <span>
                    Intermediate – Mathematics, Physics, Chemistry (MPC);{" "}
                    <strong className="not-italic font-semibold">
                      Percentage: 98.6%
                    </strong>
                  </span>
                  <span>2022 – 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-4 pb-3 border-b border-slate-300">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-800">
              <p>
                <strong className="font-semibold text-slate-900">
                  CS Core Subjects:
                </strong>{" "}
                Data Structures, Database Management Systems (DBMS), Operating
                Systems, Computer Networks, OOP, Algorithms
              </p>
              <p>
                <strong className="font-semibold text-slate-900">
                  Languages:
                </strong>{" "}
                Java, C++, Python, C, SQL, JavaScript (ES6+)
              </p>
              <p>
                <strong className="font-semibold text-slate-900">
                  Web Technologies:
                </strong>{" "}
                HTML5, CSS3, Bootstrap 5, JavaScript, React.js (Basics), Vue.js
                (Basics), Node.js (Basics), REST APIs
              </p>
              <p>
                <strong className="font-semibold text-slate-900">AI/ML:</strong>{" "}
                Machine Learning Fundamentals, Generative AI Fundamentals, LSTM,
                Sensor Fusion, AI-based Fraud Detection
              </p>
              <p>
                <strong className="font-semibold text-slate-900">
                  Developer Tools:
                </strong>{" "}
                Git, GitHub, VS Code, GitHub Pages, Jupyter Notebook, Google
                Colaboratory, Terminal/Bash
              </p>
              <p>
                <strong className="font-semibold text-slate-900">
                  Software Engineering:
                </strong>{" "}
                Agile, SDLC, Version Control, Debugging, Unit Testing (Basics),
                Problem Solving
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-4 pb-3 border-b border-slate-300">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Experience
            </h2>
            <div>
              <div className="flex justify-between items-baseline text-xs">
                <span className="font-bold text-slate-900">
                  Academic Tutor – IIT Foundation | Brain Hub
                </span>
                <span className="text-slate-700">Hyderabad, Telangana</span>
              </div>
              <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-slate-800 leading-relaxed">
                <li>
                  Tutored secondary school students preparing for the competitive
                  JEE foundation curriculum in Mathematics, Physics, and
                  Chemistry.
                </li>
                <li>
                  Deconstructed complex problem-solving methodologies and
                  strengthened core conceptual understanding through structured
                  practice sessions.
                </li>
                <li>
                  Monitored individual student performance, designed custom
                  assignment sets, and conducted targeted doubt-clearing
                  workshops.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-4 pb-3 border-b border-slate-300">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Projects
            </h2>
            <div className="space-y-3">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                  <span>
                    AI Dead Reckoning System |{" "}
                    <span className="font-normal italic text-slate-700">
                      Python, LSTM, Kalman Filter, IMU Sensors, Sensor Fusion
                    </span>
                  </span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs text-slate-800 leading-relaxed">
                  <li>
                    Developed an offline AI-based smartphone positioning system to
                    estimate movement when GPS signals are unavailable in tunnels
                    and urban canyons.
                  </li>
                  <li>
                    Processed accelerometer and gyroscope data using sensor-fusion
                    techniques and motion constraints to improve position
                    estimation.
                  </li>
                  <li>
                    Explored LSTM-based motion learning and Kalman/EKF-style
                    filtering for robust on-device dead-reckoning.
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                  <span>
                    Geospatial Watershed Analysis |{" "}
                    <span className="font-normal italic text-slate-700">
                      Python, GIS, Geospatial Analysis, Geo-Coded Images
                    </span>
                  </span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs text-slate-800 leading-relaxed">
                  <li>
                    Designed a solution using geospatial techniques to visualize
                    and analyze geo-coded images for watershed development.
                  </li>
                  <li>
                    Planned workflows to combine field imagery with geographic
                    context for monitoring watershed assets and development
                    activities.
                  </li>
                  <li>
                    Focused on map-based visualization, spatial analysis, and
                    interpretable insights for watershed planning and monitoring.
                  </li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                  <span>
                    NutriTrack — Calorie Tracker |{" "}
                    <span className="font-normal italic text-slate-700">
                      HTML, CSS, JavaScript, Bootstrap, Chart.js
                    </span>
                  </span>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs text-slate-800 leading-relaxed">
                  <li>
                    Developed a responsive web application with authentication,
                    calorie-goal calculation, meal and workout tracking, and
                    interactive Chart.js visualizations.
                  </li>
                  <li>
                    Implemented client-side data persistence using Local Storage
                    and deployed the application using GitHub Pages.
                  </li>
                  <li>
                    Applied responsive web design and JavaScript-based application
                    logic to deliver an interactive user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-4 pb-3 border-b border-slate-300">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-800">
              <li>
                <strong className="font-semibold">NPTEL</strong> — Programming
                with Generative AI
              </li>
              <li>
                <strong className="font-semibold">Infosys Springboard</strong> —
                Machine Learning Foundation Certification
              </li>
              <li>
                <strong className="font-semibold">Merit Certificate</strong> —
                Value Added C++ Course (CBIT)
              </li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="mt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              Achievements & Languages
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-800">
              <li>
                Secured <strong className="font-semibold">96.23 percentile</strong> in JEE Mains 2024.
              </li>
              <li>
                Secured <strong className="font-semibold">98.6%</strong> in Intermediate academics.
              </li>
              <li>
                Current CGPA: <strong className="font-semibold">9.21/10.0</strong> at CBIT.
              </li>
              <li>
                Solved <strong className="font-semibold">150+ coding problems</strong> across LeetCode and HackerRank.
              </li>
              <li>
                Languages: <span className="font-semibold">English, Telugu, Hindi</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
