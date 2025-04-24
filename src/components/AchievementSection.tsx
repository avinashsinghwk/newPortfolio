import { Award } from "lucide-react";
import { motion } from "framer-motion";

export function AchievementSection() {
  return (
    <section id="achievements" className="py-16 bg-[var(--achievement-bg)] section-transition">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12">
          <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold">Achievements</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg bg-background shadow-lg card-hover"
        >
          <p className="text-primary mb-2">Represented School & Awarded Certificate of Recognition</p>
          <p className="text-foreground/70 mb-4">
            Selected to represent the school at the district-level science exhibition and awarded with the certificate.
          </p>
          <a
            href="https://drive.google.com/file/d/127l9ekAcAwVkcoL3DviiftGmtWlEUG2a/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            View Certificate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
