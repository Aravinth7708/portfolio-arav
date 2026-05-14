/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code2 } from "lucide-react";
import Link from "next/link";
import {
  SiMongodb,
  SiGit,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiJenkins
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import DecryptedText from "./DecryptedText";

export default function Hero() {
  const icons = [
    { Icon: SiMongodb, color: "#47A248", delay: 0 },
    { Icon: SiGit, color: "#F05032", delay: 0.1 },
    { Icon: SiReact, color: "#61DAFB", delay: 0.2 },
    { Icon: SiTypescript, color: "#3178C6", delay: 0.3 },
    { Icon: SiNextdotjs, color: "", delay: 0.4 },
    { Icon: SiNodedotjs, color: "#339933", delay: 0.5 },
    { Icon: SiPython, color: "#3776AB", delay: 0.6 },
    { Icon: SiDocker, color: "#2496ED", delay: 0.7 },
    { Icon: SiKubernetes, color: "#326CE5", delay: 0.8 },
    { Icon: FaAws, color: "#FF9900", delay: 0.9 },
    { Icon: VscAzure, color: "#0078D4", delay: 1.0 },
    { Icon: SiJenkins, color: "#D24939", delay: 1.1 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl dark:opacity-20 opacity-0 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl dark:opacity-20 opacity-0 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl dark:opacity-20 opacity-0 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <br className="hidden sm:block" />
              <DecryptedText
                text="Aravinthrajan K"
                animateOn="view"
                speed={50}
                maxIterations={15}
                sequential={true}
                parentClassName="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                className="text-transparent"
                encryptedClassName="text-transparent"
              />
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-foreground/80 mt-2">
              Creative Full-Stack Developer
            </h2>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto lg:mx-0">
              Computer Science student and Full-stack Developer specializing in building 
              high-performance web applications and corporate platforms with modern UI/UX.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link href="#projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  View My Work <ArrowRight size={18} />
                </motion.button>
              </Link>

              <Link href="/resume" target="_blank" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors border border-border"
                >
                  Download CV <Download size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Orbit Design */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            {/* Center Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute z-20 w-40 h-40 bg-card rounded-full border border-border shadow-2xl flex flex-col items-center justify-center"
            >
              <Code2 size={48} className="text-foreground mb-2" />
              <span className="text-xs font-medium text-foreground/60 tracking-wider">DevOps & MLOps</span>
            </motion.div>

            {/* Orbit Rings */}
            <div className="absolute w-[250px] h-[250px] border border-border/50 rounded-full"></div>
            <div className="absolute w-[400px] h-[400px] border border-border/30 rounded-full"></div>
            <div className="absolute w-[550px] h-[550px] border border-border/10 rounded-full"></div>

            {/* Orbiting Icons */}
            {icons.map((item, index) => {
              // Distribute icons across two rings
              const isOuterRing = index % 2 === 0;
              const radius = isOuterRing ? 200 : 125;
              const angle = (index * 360) / icons.length;
              const radian = (angle * Math.PI) / 180;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x, y }}
                  transition={{ duration: 0.8, delay: item.delay, type: "spring" }}
                  className="absolute z-10 w-16 h-16 bg-card rounded-2xl border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                  style={{
                    boxShadow: item.color ? `0 10px 30px -10px ${item.color}40` : undefined,
                  }}
                >
                  <item.Icon
                    size={32}
                    color={item.color || undefined}
                    className={!item.color ? "text-foreground" : ""}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-sm text-foreground/60 mb-2 font-medium">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

