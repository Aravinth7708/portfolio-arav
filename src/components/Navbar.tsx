/* eslint-disable */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  if (!mounted) return null;

  return (
    <header className="fixed bottom-12 md:top-6 md:bottom-auto w-full z-50 flex justify-center px-4 pointer-events-none">
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
                {link.name}
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


