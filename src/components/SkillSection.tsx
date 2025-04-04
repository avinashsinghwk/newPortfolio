import { motion } from "framer-motion";
import { Code, Globe, Database, Server, Cloud, Settings } from "lucide-react";

const categoryIcons: Record<string, JSX.Element> = {
  "Languages": <Code className="w-6 h-6 text-primary" />, 
  "Web Development": <Globe className="w-6 h-6 text-primary" />, 
  "Backend & APIs": <Server className="w-6 h-6 text-primary" />, 
  "Databases & ORM": <Database className="w-6 h-6 text-primary" />, 
  "Cloud & Deployment": <Cloud className="w-6 h-6 text-primary" />, 
  "DevOps & CI/CD": <Settings className="w-6 h-6 text-primary" />,
};

export function SkillSection() {
  const skillsData = [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "C"],
    },
    {
      category: "Web Development",
      skills: ["Next.js", "React.js", "Recoil", "ShadCN", "MUI", "Tailwind CSS", "CSS", "HTML"],
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express", "Hono"],
    },
    {
      category: "Databases & ORM",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
    },
    {
      category: "Cloud & Deployment",
      skills: ["AWS (EC2, S3, CloudFront)", "Cloudflare", "Vercel"],
    },
    {
      category: "DevOps & CI/CD",
      skills: ["Turborepo", "Docker", "GitHub Actions", "Git & GitHub", "Yarn", "pnpm"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--skills-bg)] section-transition">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div  className="text-center mb-12">
          <Code className="w-14 h-14 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-bold tracking-wide">Technical Skills</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              transition={{ delay: index * 0.15 }}
              className="p-6 rounded-xl bg-background shadow-lg hover:shadow-2xl transition-all duration-300"
              aria-label={`Skill category: ${category.category}`}
            >
              <div className="flex items-center gap-2 mb-4">
                {categoryIcons[category.category]}
                <h3 className="text-xl font-semibold tracking-wide text-primary">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all 
                      ${
                        skillIndex === 0
                          ? "bg-primary text-white"
                          : "bg-primary/10 hover:bg-blue-100 hover:text-black"
                      }`}
                    aria-label={`Skill: ${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
