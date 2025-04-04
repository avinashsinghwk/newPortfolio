import { ExternalLink, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Sistya Bank",
    description:
      "Banking application with user authentication, balance inquiry, money transfers, and transaction monitoring.",
    tech: ["Turborepo", "Next.js", "NextAuth", "Docker", "PostgreSQL", "Prisma", "TypeScript", "ShadCN"],
    image: "/project6.png",
    links: {
      website: "https://sistya-bank.vercel.app",
      github: "https://github.com/avinashsinghwk/sistya-bank",
    },
  },
  {
    title: "Medium Blog App",
    description:
      "Blog application with user authentication, blog creation, and reading blogs section features.",
    tech: ["Next.js", "Gemini API", "React.js", "TypeScript", "Node.js"],
    image: "/project1.png",
    links: {
      website: "https://medium-blog-frontend.vercel.app/",
      github: "https://github.com/avinashsinghwk/medium-Blog-frontend",
    },
  },
  {
    title: "Sistya Chat AI",
    description: "AI-powered chatbot that answers user queries and stores previous chats.",
    tech: ["Next.js", "Gemini API", "React.js", "TypeScript", "Node.js"],
    image: "/project5.png",
    links: {
      website: "https://sistya-chat.vercel.app",
      github: "https://github.com/avinashsinghwk/chat-bot-next",
    },
  },
  {
    title: "Cookie Auth App",
    description:
      "Authentication in Next.js using cookies with email verification and password recovery.",
    tech: ["PostgreSQL", "Prisma", "Nodemailer", "TypeScript", "Tailwind CSS", "JWT"],
    image: "/project7.png",
    links: {
      github: "https://github.com/avinashsinghwk/Authentication_In_Next_Using_Cookies",
    },
  },
  {
    title: "Tic Tac Toe",
    description:
      "Tic Tac Toe game with play with computer and friends feature",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/project3.png",
    links: {
      website: "https://sistya-tic-tac-toe.netlify.app/",
      github: "https://github.com/avinashsinghwk/Tic_Tac_Toe",
    },
  },
  {
    title: "Todo List",
    description:
      "Developed a todo list that save list in browser localstorage and ui screen friendly",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "/project4.png",
    links: {
      website: "https://sistya-todolist.netlify.app/",
      github: "https://github.com/avinashsinghwk/TodoList_HTML_CSS_JS",
    },
  },
];

export function ProjectSection() {
  return (
    <section id="projects" className="py-16 bg-[var(--projects-bg)] section-transition">
      <div className="container mx-auto px-4 lg:px-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg overflow-hidden bg-[var(--experience-bg)] shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative group">
                <img src={project.image} alt={project.title} className="w-full h-52 object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all 
                      ${techIndex === 0 ? "bg-primary text-white" : "bg-primary/10 hover:bg-blue-100 hover:text-black"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary-light"
                    >
                      <ExternalLink className="w-4 h-4" /> Website
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary-light"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}