import { GraduationCap } from "lucide-react";
import {motion} from 'framer-motion'

export function EducationSection(){
    return <section id="education" className="py-16 bg-[var(--education-bg)] section-transition">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-12">
        <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl font-bold">Education</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-lg bg-background shadow-lg card-hover"
      >
        <h3 className="text-xl font-semibold">Bachelor of Computer Applications</h3>
        <p className="text-primary mb-2">Mirza Ghalib College, Gaya</p>
        <p className="text-foreground/70">Graduating: September 2024</p>
      </motion.div>
    </div>
  </section>
}