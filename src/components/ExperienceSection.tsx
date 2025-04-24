import { Briefcase } from "lucide-react";
import {motion} from 'framer-motion'

export function ExperienceSection(){
    return <section id="experience" className="py-16 bg-[var(--experience-bg)] section-transition">
    <div className="container mx-auto px-4">
      <motion.div className="text-center mb-12">
        <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl font-bold">Work Experience</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-lg bg-background shadow-lg card-hover"
      >
        <h3 className="text-xl font-semibold">Full Stack Developer</h3>
        <p className="text-primary mb-2">Apareemita Humanitarians Association (NGO)</p>
        <p className="text-foreground/70 mb-2">Jan 2025 – Present</p>
        <ul className="list-disc list-inside text-foreground/70">
          <li>Solely developed and deployed the organization’s main website using TypeScript, Node.js,
          React, and Tailwind CSS</li>
          <li>Led all technical efforts to boost the NGO’s digital presence and improve user experience
          across devices.</li>
        </ul>
      </motion.div>
    </div>
  </section>
}