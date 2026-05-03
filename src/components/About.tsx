/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone } from "lucide-react";

export default function About() {
  const skills = [
    { name: "soon", icon: <Layout className="text-primary mb-2" size={32} />, desc: "soon" },
    { name: "soon", icon: <Database className="text-primary mb-2" size={32} />, desc: "soon" },
    { name: "soon", icon: <Smartphone className="text-primary mb-2" size={32} />, desc: "soon" },
    { name: "soon", icon: <Code2 className="text-primary mb-2" size={32} />, desc: "soon" },
  ];

  const experience = [
    { year: "2023 - Present", role: "soon", company: "soon", desc: "soon" },
    { year: "2021 - 2023", role: "soon", company: "soon", desc: "soon" },
    { year: "2019 - 2021", role: "soon", company: "soon", desc: "soon" },
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">A bit about my journey</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate developer with over 5 years of experience in crafting digital solutions.
              My journey started with simple HTML/CSS websites, and today I build complex, scalable web applications
              using the latest technologies.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source,
              or enjoying a good cup of coffee while reading about tech innovations. I believe in continuous
              learning and always strive to deliver the highest quality of work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <div key={index} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                {skill.icon}
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
          <h3 className="text-2xl font-semibold mb-8 text-center">Experience</h3>
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[50%] -ml-0.5 w-0.5 h-full bg-border"></div>
                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>
                  <div className="glass p-6 rounded-2xl md:w-5/12 shadow-sm border border-border hover:border-primary/50 transition-colors">
                    <span className="text-primary font-medium text-sm block mb-1">{item.year}</span>
                    <h4 className="text-xl font-bold mb-1">{item.role}</h4>
                    <span className="text-foreground/70 text-sm font-medium block mb-3">{item.company}</span>
                    <p className="text-foreground/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

