import { motion } from 'motion/react';
import { Category, CATEGORIES } from '../types';
import { cn } from '../lib/utils';

interface ProgressTracerProps {
  category: Category;
  step: 'select' | 'input' | 'generate';
}

export default function ProgressTracer({ category, step }: ProgressTracerProps) {
  const info = CATEGORIES[category];
  const progress = step === 'select' ? 33 : step === 'input' ? 66 : 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-8 md:p-12 pointer-events-none">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          <span className={cn(step === 'select' && "text-white")}>Select Category</span>
          <span className={cn(step === 'input' && "text-white")}>Input Identity</span>
          <span className={cn(step === 'generate' && "text-white")}>Generate on Solana</span>
        </div>
        
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            className="h-full transition-colors duration-1000 relative"
            style={{ backgroundColor: info.color }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse" />
            <div 
              className="absolute inset-0 blur-[4px]" 
              style={{ backgroundColor: info.color }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
