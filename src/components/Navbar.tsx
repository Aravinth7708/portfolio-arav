/* eslint-disable */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Wrench, Briefcase, User, Mail } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Logic for active section
      const sections = ["home", "skills", "projects", "about", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Logic to hide navbar at the very bottom (footer)
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: <Home size={20} /> },
    { name: "Skills", href: "#skills", id: "skills", icon: <Wrench size={20} /> },
    { name: "Projects", href: "#projects", id: "projects", icon: <Briefcase size={20} /> },
    { name: "About", href: "#about", id: "about", icon: <User size={20} /> },
    { name: "Contact", href: "#contact", id: "contact", icon: <Mail size={20} /> },
  ];

  if (!mounted) return null;

  return (
    <header className={`fixed bottom-12 md:top-6 md:bottom-auto w-full z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-full border border-border px-1.5 py-1.5 flex items-center gap-1 shadow-2xl backdrop-blur-md pointer-events-auto"
      >
        <div className="flex items-center gap-0.5 md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.id)}
              className="relative px-3 md:px-6 py-2 md:py-2.5 text-[11px] md:text-sm font-bold transition-colors duration-300 rounded-full"
            >
              <span className={`relative z-10 transition-colors duration-300 ${activeSection === link.id ? 'text-white' : 'text-foreground/60 hover:text-foreground'}`}>
                <span className="hidden md:inline">{link.name}</span>
                <span className="inline md:hidden">{link.icon}</span>
              </span>
              {activeSection === link.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-foreground rounded-full z-0 shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* Theme-aware active text color */}
              <style jsx>{`
                .text-white { color: ${activeSection === link.id ? 'var(--background)' : 'inherit'}; }
              `}</style>
            </Link>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}


