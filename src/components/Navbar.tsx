import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["About", "Skills", "Projects", "Experience", "Contact", "Resume"];

  const sidebarVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50, transition: { duration: 0.2 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  return (
    <nav className="sticky top-0 z-50 w-full h-16 bg-[var(--navbar-bg)] border-b dark:border-gray-600">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
        >
          Avinash K S
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Menu Button (Hidden When Sidebar Opens) */}
        <div className={`md:hidden flex items-center space-x-4 ${isOpen ? "hidden" : ""}`}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <motion.button
            onClick={() => setIsOpen(true)}
            className="text-foreground z-50 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay (Covers Everything Behind Sidebar) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 h-screen w-3/4 sm:w-2/5 bg-background shadow-lg p-6 flex flex-col z-50"
            >
              {/* Sidebar Header (Logo + Close Button) */}
              <div className="flex items-center justify-between w-full mb-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Avinash K S
                </h1>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-foreground"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Centering Menu Items */}
              <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                {menuItems.map((item) => (
                  <motion.a
                    key={item}
                    variants={itemVariants}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
