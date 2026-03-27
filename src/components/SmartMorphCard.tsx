import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Category, CATEGORIES } from '../types';
import { cn } from '../lib/utils';
import { Loader2, ArrowRight } from 'lucide-react';

interface SmartMorphCardProps {
  category: Category;
  onGenerate: (value: string) => void;
}

export default function SmartMorphCard({ category, onGenerate }: SmartMorphCardProps) {
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const info = CATEGORIES[category];

  useEffect(() => {
    setInputValue('');
  }, [category]);

  const handleGenerate = () => {
    if (!inputValue) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      onGenerate(inputValue);
    }, 2000);
  };

  return (
    <motion.div 
      layout
      className="glass rounded-[2.5rem] p-10 w-full max-w-2xl mx-auto mt-12 relative overflow-hidden group shadow-2xl"
    >
      {/* Background Glow */}
      <div 
        className="absolute inset-0 opacity-10 blur-[100px] transition-colors duration-1000"
        style={{ background: `radial-gradient(circle at center, ${info.color}, transparent)` }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-end gap-6">
        <div className="flex-1 space-y-4 w-full">
          <label className="text-xs uppercase tracking-[0.2em] text-white/40 font-black ml-1">
            {info.inputLabel}
          </label>
          
          <div className="relative h-16 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0"
              >
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={info.placeholder}
                  className="w-full h-full bg-white/5 border border-white/10 rounded-2xl px-6 text-xl font-medium focus:outline-none focus:ring-2 transition-all placeholder:text-white/20"
                  style={{ 
                    '--tw-ring-color': `${info.color}88` 
                  } as any}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGenerate}
          disabled={!inputValue || isGenerating}
          className={cn(
            "h-16 px-10 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3",
            inputValue && !isGenerating 
              ? "text-obsidian shadow-lg" 
              : "bg-white/5 text-white/20 cursor-not-allowed"
          )}
          style={{ 
            backgroundColor: inputValue && !isGenerating ? info.color : 'rgba(255,255,255,0.05)',
            boxShadow: inputValue && !isGenerating ? `0 0 30px ${info.color}66` : 'none'
          }}
        >
          {isGenerating ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              Generate <ArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
