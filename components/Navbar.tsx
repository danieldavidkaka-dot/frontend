import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../utils/i18n';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'capabilities', label: t.nav.capabilities },
    { id: 'architecture', label: t.nav.architecture },
    { id: 'use-cases', label: t.nav.use_cases },
    { id: 'testimonials', label: t.nav.testimonials },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="https://iili.io/q4wto4p.md.png" alt="INVODEX Logo" className="h-8 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Link 
            to="/auth" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.login}
          </Link>
          <Link to="/auth">
            <Button variant="default" size="sm" className="rounded-full px-6">
              {t.nav.signup}
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;