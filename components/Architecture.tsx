import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../utils/i18n';
import { Layers, Cpu, Network, TerminalSquare, MessageSquare, Mail, ArrowDown } from 'lucide-react';

const Architecture: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="architecture" className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,rgba(242,122,24,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,122,24,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-muted-foreground text-sm font-medium mb-6 shadow-sm">
            <Network className="w-4 h-4 text-primary" />
            {t.architecture.label}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            {t.architecture.title_swarm} <span className="text-primary">{t.architecture.title_intelligence}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.architecture.description}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {/* Layer 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group"
            >
              <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-20 md:pl-0">
                <h3 className="text-2xl font-bold text-foreground mb-3">{t.architecture.layer1_title}</h3>
                <div className="text-base text-muted-foreground leading-relaxed">{t.architecture.layer1}</div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center z-10 shadow-sm group-hover:border-accent/50 group-hover:shadow-md transition-all duration-300">
                <TerminalSquare className="w-8 h-8 text-accent" />
              </div>
              
              <div className="md:w-1/2 order-3 hidden md:block" />
            </motion.div>
            
            {/* Layer 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group"
            >
              <div className="md:w-1/2 order-1 hidden md:block" />
              
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center z-10 shadow-sm group-hover:border-gold/50 group-hover:shadow-md transition-all duration-300">
                <MessageSquare className="w-8 h-8 text-gold" />
              </div>
              
              <div className="md:w-1/2 order-2 pl-20 md:pl-0">
                <h3 className="text-2xl font-bold text-foreground mb-3">{t.architecture.layer2_title}</h3>
                <div className="text-base text-muted-foreground leading-relaxed">{t.architecture.layer2}</div>
              </div>
            </motion.div>

            {/* Layer 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group"
            >
              <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-20 md:pl-0">
                <h3 className="text-2xl font-bold text-foreground mb-3">{t.architecture.layer3_title}</h3>
                <div className="text-base text-muted-foreground leading-relaxed">{t.architecture.layer3}</div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center z-10 shadow-sm group-hover:border-cobalt/50 group-hover:shadow-md transition-all duration-300">
                <Layers className="w-8 h-8 text-cobalt" />
              </div>
              
              <div className="md:w-1/2 order-3 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
