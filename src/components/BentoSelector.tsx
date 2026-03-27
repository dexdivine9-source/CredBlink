import { motion } from 'motion/react';
import { Code2, Palette, PenTool, TrendingUp } from 'lucide-react';
import { Category, CATEGORIES } from '../types';
import { cn } from '../lib/utils';

const icons = {
  code: Code2,
  design: Palette,
  writing: PenTool,
  growth: TrendingUp
};

interface BentoSelectorProps {
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

export default function BentoSelector({ activeCategory, onSelect }: BentoSelectorProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto relative">
      {Object.values(CATEGORIES).map((cat) => {
        const Icon = icons[cat.id];
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="relative group h-32 md:h-40 glass rounded-3xl p-6 flex flex-col justify-between items-start transition-all duration-500 overflow-hidden"
            style={{
              borderColor: isActive ? cat.color : 'rgba(255,255,255,0.1)',
              boxShadow: isActive ? `0 0 20px ${cat.color}33` : 'none'
            }}
          >
            {/* Background Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at center, ${cat.color}, transparent)` }}
            />

            {/* Layout Transition Highlight Ring (Simulated with absolute positioning on each tile for simplicity, or we can use layoutId) */}
            {isActive && (
              <motion.div
                layoutId="highlight-ring"
                className="absolute inset-0 border-2 rounded-3xl z-10 pointer-events-none"
                style={{ borderColor: cat.color }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}

            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
              <Icon 
                className="w-6 h-6 transition-colors duration-500" 
                style={{ color: isActive ? cat.color : 'rgba(255,255,255,0.4)' }}
              />
            </div>

            <div className="space-y-1">
              <div className="text-xs uppercase tracking-widest font-bold text-white/40">{cat.id}</div>
              <div className="text-lg font-bold tracking-tight">{cat.label}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
