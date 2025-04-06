import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const resumeUrl = "/Avinash_Singh_Resume.pdf";

  // Check if the user is on a mobile device
  const isMobile = typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);

  return (
    <section id="resume" className="flex flex-col items-center justify-center px-6 py-12 space-y-6 bg-[var(--resume-bg)]">
      <motion.div className="text-center mb-12">
        <FileText className="w-14 h-14 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl font-bold tracking-wide">My Resume</h2>
      </motion.div>

      <motion.div
        className="w-full max-w-3xl border border-[var(--primary-light)] rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isMobile ? (
          <div className="flex flex-col items-center justify-center h-[500px] px-4 text-center bg-gray-100 dark:bg-gray-800">
            <p className="mb-4 text-lg font-semibold text-white max-w-xs">PDF preview is not supported on mobile.</p>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 text-white bg-[var(--primary)] rounded-lg shadow hover:bg-blue-800 transition"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Open Resume in New Tab
            </a>
          </div>

        ) : (
          <embed
            src={resumeUrl}
            type="application/pdf"
            className="w-full h-[500px] bg-[var(--background)]"
          />
        )}
      </motion.div>

      <motion.a
        href={resumeUrl}
        download="Avinash_Singh_Resume.pdf"
        className="inline-flex items-center px-6 py-2 text-white bg-[var(--primary)] rounded-lg shadow hover:bg-blue-800 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Download className="w-5 h-5 mr-2" />
        Download Resume
      </motion.a>
    </section>
  );
};

export default ResumeSection;
