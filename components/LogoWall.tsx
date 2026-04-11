import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "Acme Corp", "GlobalTech", "Nexus Industries", "Apex Solutions", "Quantum Financial", 
  "Starlight Media", "Horizon Logistics", "Pinnacle Group", "Vanguard Systems", "Zenith Corp"
];

const LogoWall: React.FC = () => {
  return (
    <section className="py-12 bg-background border-b border-border/50 overflow-hidden relative z-20">
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
          Trusted by innovative teams worldwide
        </p>
      </div>

      <div className="flex relative">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="text-xl font-bold text-muted-foreground/40 hover:text-accent/80 transition-colors duration-300 cursor-default select-none tracking-tight"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoWall;