"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Labour Management System",
      description: "A full-stack system for real-world garment businesses. Automates salary calculations and real-time attendance tracking with performance dashboards and analytics. Built as a mobile-responsive PWA.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "PWA", "Analytics"],
      github: "https://github.com/Aravinth7708",
      demo: "#"
    },
    {
      id: 2,
      title: "Retail Insights System",
      description: "Comprehensive POS and inventory system using React and Supabase. Features real-time transaction tracking, secure admin control, and automated PDF reporting. Optimized for fast-paced retail environments.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
      tags: ["React", "Supabase", "PDF Export", "Tailwind CSS"],
      github: "https://github.com/Aravinth7708",
      demo: "#"
    },
    {
      id: 3,
      title: "Car Rental Webpage",
      description: "A high-performance responsive car rental web app with optimized UI/UX. Features efficient booking workflows and cross-device compatibility for a seamless user experience.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop",
      tags: ["Next.js", "Framer Motion", "UI/UX", "Responsive"],
      github: "https://github.com/Aravinth7708",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass rounded-2xl overflow-hidden border border-border hover:border-primary/50 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-secondary/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-4 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <FaGithub size={18} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors ml-auto"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors font-medium"
          >
            View More on GitHub <FaGithub size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
