import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import {motion} from 'framer-motion'

export function ContactSection(){
    return <section id="contact" className="py-16 bg-[var(--contact-bg)] section-transition">
    <div className="container mx-auto px-4">
      <motion.div  className="text-center mb-12">
        <Send className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl font-bold">Contact</h2>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="mailto:abhinashsinghwk2@gmail.com"
            className="flex items-center gap-2 text-lg hover:text-primary transition-colors bg-background p-4 rounded-lg shadow-lg"
          >
            <Mail className="w-6 h-6" />
            abhinashsinghwk2@gmail.com
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="tel:9122643372"
            className="flex items-center gap-2 text-lg hover:text-primary transition-colors bg-background p-4 rounded-lg shadow-lg"
          >
            <Phone className="w-6 h-6" />
            +91 9122643372
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://github.com/avinashsinghwk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg hover:text-primary transition-colors bg-background p-4 rounded-lg shadow-lg"
          >
            <Github className="w-6 h-6" />
            GitHub
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/avinash-kumar-singh-a27769239"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg hover:text-primary transition-colors bg-background p-4 rounded-lg shadow-lg"
          >
            <Linkedin className="w-6 h-6" />
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
}