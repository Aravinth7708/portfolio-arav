"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, 
  SiDjango, SiMysql, SiFirebase, SiSupabase, SiGit, 
  SiFigma, SiRedux, SiDocker, SiVercel, SiC, SiCplusplus,
  SiOpenjdk, SiMongodb
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const categories = ["ALL", "FRONTEND", "BACKEND", "PROGRAMMING", "DATABASE", "TOOLS"];

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" />, category: "FRONTEND" },
  { name: "CSS", icon: <SiCss className="text-[#1572B6]" />, category: "FRONTEND" },
  { name: "Javascript", icon: <SiJavascript className="text-[#F7DF1E]" />, category: "FRONTEND" },
  { name: "Typescript", icon: <SiTypescript className="text-[#3178C6]" />, category: "FRONTEND" },
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, category: "FRONTEND" },
  { name: "Next.js", icon: <SiNextdotjs className="dark:text-white text-black" />, category: "FRONTEND" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, category: "FRONTEND" },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, category: "BACKEND" },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" />, category: "BACKEND" },
  { name: "Java", icon: <SiOpenjdk className="text-[#ED8B00]" />, category: "PROGRAMMING" },
  { name: "C Programming", icon: <SiC className="text-[#A8B9CC]" />, category: "PROGRAMMING" },
  { name: "DSA", icon: <FaBrain className="text-[#FFD700]" />, category: "PROGRAMMING" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, category: "DATABASE" },
  { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" />, category: "DATABASE" },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, category: "DATABASE" },
  { name: "Git", icon: <SiGit className="text-[#F05032]" />, category: "TOOLS" },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, category: "TOOLS" },
  { name: "Vercel", icon: <SiVercel className="dark:text-white text-black" />, category: "TOOLS" },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" />, category: "FRONTEND" },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" />, category: "TOOLS" },
];

// Add multiple categories to some skills for better filtering
const categorizedSkills = skills.map(skill => {
  const cats = [skill.category];
  if (skill.name === "Javascript" || skill.name === "Typescript" || skill.name === "Python") {
    cats.push("PROGRAMMING");
  }
  return { ...skill, categories: cats };
});

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredSkills = activeCategory === "ALL" 
    ? categorizedSkills 
    : categorizedSkills.filter(skill => skill.categories.includes(activeCategory));

  const stats = [
    { label: "FRONTEND", count: 8 },
    { label: "BACKEND", count: 2 },
    { label: "PROGRAMMING", count: 6 },
    { label: "DATABASE", count: 3 },
    { label: "TOOLS", count: 4 },
  ];

  return (
    <section id="skills" className="py-24 bg-background text-foreground overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none dark:opacity-100 opacity-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none dark:opacity-100 opacity-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-gray-700"></div>
              <span className="text-gray-500 text-[10px] tracking-[0.4em] font-bold uppercase">Technical Expertise</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            >
              Skills & <span className="text-gray-600">Technologies</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-muted-foreground max-w-xl text-lg leading-relaxed"
            >
              A comprehensive toolkit of modern technologies I work with to build exceptional digital experiences.
            </motion.p>
          </div>

          {/* Stats Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="relative">
              <span className="text-[140px] font-black leading-none opacity-[0.03] text-foreground select-none">20</span>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center sm:text-right w-full pr-4">
                <span className="block text-4xl font-black tracking-tighter">20</span>
                <span className="text-[9px] tracking-[0.2em] text-gray-500 font-bold uppercase">Technologies</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1 h-1 rounded-full bg-gray-700"></div>
                  <span className="text-[10px] tracking-widest text-gray-500 font-bold uppercase whitespace-nowrap">
                    {stat.label} <span className="text-gray-400 ml-1">({stat.count})</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Moving Tech Bar */}
        <div className="mb-24 -mx-4 overflow-hidden relative py-6 border-y border-transparent">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...categorizedSkills, ...categorizedSkills].map((skill, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <span className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors duration-500">{skill.icon}</span>
                <span className="text-[10px] font-black tracking-[0.2em] text-muted-foreground/30 group-hover:text-muted-foreground transition-colors duration-500 uppercase">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-[10px] font-black tracking-[0.2em] border transition-all duration-500 rounded-sm uppercase ${
                activeCategory === cat 
                ? "bg-foreground text-background border-foreground shadow-[0_0_20px_rgba(var(--foreground),0.1)]" 
                : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat} <span className={`ml-2 ${activeCategory === cat ? "opacity-50" : "opacity-30"}`}>
                {cat === "ALL" ? "20" : stats.find(s => s.label === cat)?.count || ""}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="p-8 bg-card border border-border rounded-xl transition-all duration-700 group-hover:border-primary/30 group-hover:bg-secondary/10 flex items-center gap-8 overflow-hidden">
                  <div className="text-4xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-[5deg] z-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-bold tracking-tight text-muted-foreground group-hover:text-foreground transition-colors duration-700 z-10">
                    {skill.name}
                  </span>
                  
                  {/* Subtle hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl pointer-events-none"></div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white/[0.02] rounded-full blur-xl group-hover:bg-white/[0.05] transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;
