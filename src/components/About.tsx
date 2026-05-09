/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone } from "lucide-react";

export default function About() {
  const highlightSkills = [
    { name: "Full-stack", icon: <Layout className="text-primary mb-2" size={32} />, desc: "React, Next.js, Node.js" },
    { name: "Database", icon: <Database className="text-primary mb-2" size={32} />, desc: "MongoDB, Supabase" },
    { name: "Responsive", icon: <Smartphone className="text-primary mb-2" size={32} />, desc: "PWA & Mobile-First" },
    { name: "Problem Solving", icon: <Code2 className="text-primary mb-2" size={32} />, desc: "100+ LeetCode solved" },
  ];

  const experience = [
    { 
      year: "Feb 2026", 
      role: "Corporate Platform Developer", 
      company: "Velrona Technology", 
      desc: "Developed Velrona.com, a live corporate platform featuring ventures showcase and investor relations. Built with modern UI/UX and backend integrations." 
    },
    { 
      year: "Jul 2025", 
      role: "Web Interface Developer", 
      company: "Luxor Holiday HomeStays", 
      desc: "Optimized responsive web interfaces using Vite and Node.js. Delivered smooth booking flows and improved mobile usability." 
    },
  ];

  const education = [
    {
      year: "2023 - 2027",
      degree: "B.E Computer Science and Engineering",
      institution: "KPR Institute of Engineering and Technology, Coimbatore",
      gpa: "7.27 GPA"
    }
  ];

  const certifications = [
    {
      name: "Red Hat Certified System Administrator (RHCSA)",
      date: "Jun 2025",
      desc: "Linux system administration: user management, storage config, network services, and enterprise security."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I'm Aravinthrajan K, a Computer Science student and a passionate Full-stack Developer. 
              My journey is driven by a deep interest in building scalable, real-world solutions that solve practical problems.
            </p>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              From automating garment business workflows to building live corporate platforms, I specialize in creating 
              performant web applications using the MERN stack and modern tools like Next.js and Supabase.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold border-l-4 border-primary pl-4 mb-4">Education</h4>
                {education.map((edu, idx) => (
                  <div key={idx} className="glass p-5 rounded-xl border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-lg">{edu.degree}</h5>
                      <span className="text-primary text-sm font-medium">{edu.year}</span>
                    </div>
                    <p className="text-foreground/70 text-sm mb-1">{edu.institution}</p>
                    <p className="text-primary text-sm font-semibold">{edu.gpa}</p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-bold border-l-4 border-accent pl-4 mb-4">Certifications</h4>
                {certifications.map((cert, idx) => (
                  <div key={idx} className="glass p-5 rounded-xl border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-bold text-lg">{cert.name}</h5>
                      <span className="text-accent text-sm font-medium">{cert.date}</span>
                    </div>
                    <p className="text-foreground/70 text-sm">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlightSkills.map((skill, index) => (
              <div key={index} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300 border border-border group hover:border-primary/50">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {skill.icon}
                </div>
                <h4 className="font-semibold text-lg mb-1">{skill.name}</h4>
                <p className="text-sm text-foreground/60">{skill.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center">Work Experience</h3>
          <div className="max-w-4xl mx-auto space-y-8 relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block"></div>
            
            {experience.map((item, index) => (
              <div key={index} className="relative md:flex items-center justify-between w-full">
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="glass p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary font-bold text-sm px-3 py-1 bg-primary/10 rounded-full">{item.year}</span>
                      <span className="text-foreground/50 text-xs font-mono">STIPEND: ₹10,000+</span>
                    </div>
                    <h4 className="text-xl font-bold mb-1">{item.role}</h4>
                    <span className="text-foreground/70 text-sm font-semibold block mb-4 italic">{item.company}</span>
                    <p className="text-foreground/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                <div className="absolute left-[-8px] md:left-1/2 md:-ml-[9px] top-8 md:top-1/2 md:-mt-[9px] w-[18px] h-[18px] rounded-full bg-primary border-4 border-background z-10 shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"></div>
                
                <div className={`hidden md:block md:w-[45%] ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


