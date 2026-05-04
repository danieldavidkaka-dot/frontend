import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../utils/i18n';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
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

        {/* Desktop Navigation */}
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

        <div className="flex items-center gap-3">
          <LanguageSelector />
          
          {/* Desktop Auth Buttons */}
          <Link 
            to="/auth" 
            className="hidden sm:inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.login}
          </Link>
          <Link to="/auth" className="hidden sm:inline-block">
            <Button variant="default" size="sm" className="rounded-full px-6">
              {t.nav.signup}
            </Button>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-lg"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile-only divider + auth buttons */}
              <div className="pt-3 mt-2 border-t border-border/50 flex flex-col gap-2">
                <Link 
                  to="/auth" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors sm:hidden"
                >
                  {t.nav.login}
                </Link>
                <Link 
                  to="/auth" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="sm:hidden"
                >
                  <Button variant="default" size="sm" className="w-full rounded-lg">
                    {t.nav.signup}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;