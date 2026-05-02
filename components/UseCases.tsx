import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../utils/i18n';
import { FileText, Code2, LineChart, ShieldCheck } from 'lucide-react';
import { Card } from './ui/Card';

const UseCases: React.FC = () => {
  const { t } = useLanguage();

  const cases = [
    {
      icon: <FileText className="w-8 h-8" />,
      color: 'primary',
      ...t.useCases.items[0]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      color: 'accent',
      ...t.useCases.items[1]
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      color: 'gold',
      ...t.useCases.items[2]
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'cobalt',
      ...t.useCases.items[3]
    }
  ];

  const getHoverClasses = (color: string) => {
    switch(color) {
      case 'accent': return 'hover:border-accent/30 group-hover:text-accent group-hover:bg-accent/10';
      case 'gold': return 'hover:border-gold/30 group-hover:text-gold group-hover:bg-gold/10';
      case 'cobalt': return 'hover:border-cobalt/30 group-hover:text-cobalt group-hover:bg-cobalt/10';
      default: return 'hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/10';
    }
  };

  const getBorderHoverClass = (color: string) => {
    switch(color) {
      case 'accent': return 'hover:border-accent/30';
      case 'gold': return 'hover:border-gold/30';
      case 'cobalt': return 'hover:border-cobalt/30';
      default: return 'hover:border-primary/30';
    }
  };

  const getIconHoverClass = (color: string) => {
    switch(color) {
      case 'accent': return 'group-hover:bg-accent/10 group-hover:text-accent';
      case 'gold': return 'group-hover:bg-gold/10 group-hover:text-gold';
      case 'cobalt': return 'group-hover:bg-cobalt/10 group-hover:text-cobalt';
      default: return 'group-hover:bg-primary/10 group-hover:text-primary';
    }
  };

  const getTextHoverClass = (color: string) => {
    switch(color) {
      case 'accent': return 'group-hover:text-accent';
      case 'gold': return 'group-hover:text-gold';
      case 'cobalt': return 'group-hover:text-cobalt';
      default: return 'group-hover:text-primary';
    }
  };

  return (
    <section id="use-cases" className="py-24 bg-muted/30 relative overflow-hidden border-t border-border/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,rgba(8,74,142,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,74,142,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-muted-foreground text-sm font-medium mb-6 shadow-sm">
            {t.useCases.label}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            {t.useCases.title_real} <span className="text-primary">{t.useCases.title_apps}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card 
                variant="outline"
                className={`h-full p-8 bg-card border-border hover:shadow-lg transition-all duration-300 group ${getBorderHoverClass(useCase.color)}`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-muted text-muted-foreground flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 ${getIconHoverClass(useCase.color)}`}>
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold text-foreground mb-3 transition-colors ${getTextHoverClass(useCase.color)}`}>
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
