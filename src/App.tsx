import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BentoSelector from './components/BentoSelector';
import SmartMorphCard from './components/SmartMorphCard';
import BlinkPreview from './components/BlinkPreview';
import ProgressTracer from './components/ProgressTracer';
import { Category } from './types';
import { ShieldCheck, Zap, ArrowDown } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('code');
  const [username, setUsername] = useState('');
  const [step, setStep] = useState<'select' | 'input' | 'generate'>('select');

  const handleSelect = (category: Category) => {
    setActiveCategory(category);
    setStep('input');
    setUsername('');
  };

  const handleGenerate = (value: string) => {
    setUsername(value);
    setStep('generate');
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-solana-gradient flex items-center justify-center shadow-lg">
            <Zap className="text-obsidian w-6 h-6 fill-current" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">CredBlink</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs font-black uppercase tracking-[0.3em] text-white/40">
          <a href="#" className="hover:text-white transition-colors">Protocol</a>
          <a href="#" className="hover:text-white transition-colors">Blinks</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
        </div>
        <button className="glass px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
          Launch App
        </button>
      </nav>

      <main className="pt-32 pb-60 px-6">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solana-green/10 border border-solana-green/20 text-solana-green text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <ShieldCheck className="w-4 h-4" />
            Proof of Professional Mastery
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
          >
            VERIFY YOUR <br />
            <span className="text-gradient italic">REPUTATION</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            The universal bridge for developers, designers, writers, and growth hackers. Mint your skills on Solana and share them as interactive Blinks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-12"
          >
            <ArrowDown className="w-8 h-8 mx-auto text-white/20 animate-bounce" />
          </motion.div>
        </section>

        {/* Bento Selector */}
        <section className="mb-20">
          <BentoSelector activeCategory={activeCategory} onSelect={handleSelect} />
        </section>

        {/* Smart Morph Card */}
        <section className="mb-40">
          <SmartMorphCard category={activeCategory} onGenerate={handleGenerate} />
        </section>

        {/* Blink Preview */}
        <section className="relative">
          <div className="absolute inset-0 bg-solana-purple/10 blur-[150px] rounded-full -z-10" />
          <AnimatePresence mode="wait">
            {step === 'generate' && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.9 }}
                className="perspective-1000"
              >
                <BlinkPreview category={activeCategory} username={username} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Progress Tracer */}
      <ProgressTracer category={activeCategory} step={step} />

      <footer className="p-12 border-t border-white/5 text-center text-white/10 text-[10px] font-black uppercase tracking-[0.5em]">
        © 2026 CredBlink Protocol • Built on Solana • Universal Edition v2
      </footer>
    </div>
  );
}
