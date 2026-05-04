import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoWall from './components/LogoWall';
import Capabilities from './components/Capabilities';
import Architecture from './components/Architecture';
import Testimonials from './components/Testimonials';
import UseCases from './components/UseCases';
import Preloader from './components/Preloader';
import { useLanguage } from './utils/i18n';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const { t } = useLanguage();
  
  // 🎬 Solo mostramos el video introductorio en la PRIMERA visita de la sesión.
  // Al navegar a /chat y volver a /, no se repite. Cerrar la pestaña lo resetea.
  const [showPreloader, setShowPreloader] = useState(() => {
    return !sessionStorage.getItem('invodex_preloader_shown');
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('invodex_preloader_shown', 'true');
    setShowPreloader(false);
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <AnimatePresence>
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      
      {!showPreloader && (
        <>
          <Navbar />
          <Hero />
          <LogoWall />
          
          <Capabilities />
          <Architecture />
          <UseCases />
          <Testimonials />
          
          <footer className="py-8 bg-background border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2026 INVODEX Systems Inc. All rights reserved.</p>
          </footer>
        </>
      )}
    </main>
  );
};

export default App;