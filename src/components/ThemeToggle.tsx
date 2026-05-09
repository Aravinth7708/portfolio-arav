'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="fixed top-0 right-10 z-[100] flex flex-col items-center group cursor-pointer" onClick={toggleTheme}>
      {/* The Hanging String */}
      <motion.div 
        initial={false}
        animate={{ 
          height: isDark ? 60 : 90,
          backgroundColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-[1.5px]"
      />
      
      {/* The Bulb / Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ y: 10 }}
        animate={{ 
          y: 0,
          background: isDark 
            ? "radial-gradient(circle at 30% 30%, #3a3a4a 0%, #1a1a2a 100%)" 
            : "radial-gradient(circle at 30% 30%, #fff9c4 0%, #fbc02d 100%)",
          boxShadow: isDark 
            ? "0 5px 15px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.1)" 
            : "0 5px 25px rgba(251,192,45,0.4), inset 0 1px 3px rgba(255,255,255,0.5)"
        }}
        className="w-8 h-8 rounded-full relative flex items-center justify-center shadow-xl border border-white/5"
      >
        {/* Glow effect for Light Mode */}
        {!isDark && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full bg-yellow-300/20 blur-lg"
          />
        )}

        {/* Inner Highlight for the sphere */}
        <div className="absolute top-1.5 left-2 w-2 h-2 bg-white/20 rounded-full blur-[1px]" />
      </motion.div>

      {/* The Pull Indicator (Chevron) */}
      <motion.div
        animate={{ 
          y: [0, 3, 0],
          color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)"
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="mt-2"
      >
        <svg width="12" height="8" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L8 8L14 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Theme Label */}
      <span className={`text-[7px] font-black uppercase tracking-[0.2em] mt-2 transition-colors duration-500 ${isDark ? 'text-white/10' : 'text-black/20'}`}>
        {isDark ? "OFF" : "ON"}
      </span>
    </div>
  );
}
