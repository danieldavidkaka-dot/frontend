import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2, Layers } from 'lucide-react';
import Button from './ui/Button';
import { useLanguage } from '../utils/i18n';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onOpenTerminal?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col items-center pt-32 pb-20">
      {/* Clean Abstract Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-12 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-muted-foreground text-sm font-medium mb-8 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent"></span>
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6 leading-[1.1]"
        >
          {t.hero.title_start}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">{t.hero.title_highlight}</span>{t.hero.title_end ? t.hero.title_end : ''}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-base h-12 px-8 rounded-full"
            onClick={() => navigate('/auth')}
          >
            {t.hero.button_trial}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-base h-12 px-8 rounded-full bg-background"
            onClick={() => navigate('/chat')}
          >
            <MessageSquare className="mr-2 w-4 h-4" />
            {t.hero.button_chat_erp}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>{t.hero.check_no_card}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>{t.hero.check_trial}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span>{t.hero.check_cancel}</span>
          </div>
        </motion.div>

        {/* Dashboard Preview Image/Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 w-full max-w-5xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="rounded-xl border border-border/50 bg-card shadow-2xl overflow-hidden relative">
            <div className="h-12 border-b border-border/50 bg-muted/30 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-gold/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>
            <div className="p-8 aspect-[16/9] flex items-center justify-center bg-muted/10 relative overflow-hidden">
              {/* Decorative background elements for the mockup */}
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              
              <div className="text-center space-y-4 relative z-10 bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl">
                <Layers className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground">{t.hero.mockup_title}</h3>
                <p className="text-muted-foreground font-medium max-w-sm">
                  {t.hero.mockup_desc}
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <div className="h-2 w-12 bg-primary/40 rounded-full" />
                  <div className="h-2 w-8 bg-accent/40 rounded-full" />
                  <div className="h-2 w-16 bg-gold/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
