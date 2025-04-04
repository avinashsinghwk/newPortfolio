import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-[var(--hero-bg)] section-transition py-12 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-6"
        >
          <div className="text-lg sm:text-xl font-bold text-foreground hero-title">
            Hello, I am
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight hero-title">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Avinash Kumar Singh
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 hero-description">
            Full Stack Web Developer from Rafiganj, Bihar
          </p>
          <p className="text-base sm:text-lg text-foreground/70 hero-description">
            Passionate about building dynamic, user-friendly web applications with cutting-edge technologies. 
            I strive to deliver clean, maintainable, and scalable code.
          </p>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center md:justify-start gap-4 mt-4"
          >
            {[
              { href: "https://github.com/avinashsinghwk", icon: Github },
              { href: "https://www.linkedin.com/in/avinash-kumar-singh-a27769239", icon: Linkedin },
              { href: "mailto:abhinashsinghwk2@gmail.com", icon: Mail },
              { href: "tel:9122643372", icon: Phone },
            ].map(({ href, icon: Icon }, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary text-white hover:bg-primary-light transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative flex justify-center md:justify-end"
>
  {/* Floating Color Animation */}
  <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-25 animate-float"></div>

  {/* Profile Image */}
  <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
    <img
      src="/my-img.jpg"
      alt="Avinash Kumar Singh - Profile Picture"
      className="w-full h-full rounded-full object-cover border-4 border-[var(--foreground)] shadow-xl hero-image"
      loading="lazy"
      decoding="async"
    />
  </div>
</motion.div>

      </div>
    </section>
  );
}