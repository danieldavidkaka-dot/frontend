import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../utils/i18n';
import { MessageSquare, Zap, Activity, Briefcase, Megaphone, Code, Search, ShieldAlert } from 'lucide-react';

const Benchmarks: React.FC = () => {
  const { t } = useLanguage();

  const commands = [
    { icon: <Zap className="w-5 h-5" />, color: 'primary', ...t.benchmarks.commands[0] },
    { icon: <Activity className="w-5 h-5" />, color: 'accent', ...t.benchmarks.commands[1] },
    { icon: <Briefcase className="w-5 h-5" />, color: 'gold', ...t.benchmarks.commands[2] },
    { icon: <Megaphone className="w-5 h-5" />, color: 'cobalt', ...t.benchmarks.commands[3] },
    { icon: <Code className="w-5 h-5" />, color: 'primary', ...t.benchmarks.commands[4] },
    { icon: <Search className="w-5 h-5" />, color: 'accent', ...t.benchmarks.commands[5] },
    { icon: <ShieldAlert className="w-5 h-5" />, color: 'gold', ...t.benchmarks.commands[6] },
  ];

  const getBorderHoverClass = (color: string) => {
    switch(color) {
      case 'accent': return 'hover:border-accent/30';
      case 'gold': return 'hover:border-gold/30';
      case 'cobalt': return 'hover:border-cobalt/30';
      default: return 'hover:border-primary/30';
    }
  };

  const getIconClass = (color: string) => {
    switch(color) {
      case 'accent': return 'bg-accent/10 text-accent';
      case 'gold': return 'bg-gold/10 text-gold';
      case 'cobalt': return 'bg-cobalt/10 text-cobalt';
      default: return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="benchmarks" className="py-24 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            {t.benchmarks.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.benchmarks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commands.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 bg-card border border-border rounded-xl flex gap-4 items-start hover:shadow-md transition-all duration-300 group ${getBorderHoverClass(c.color)}`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5 ${getIconClass(c.color)}`}>
                {c.icon}
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">{c.cmd}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benchmarks;
