import { motion, AnimatePresence } from 'motion/react';
import { Twitter, MessageCircle, Repeat2, Heart, Share, ExternalLink, Code2, Palette, PenTool, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Category, CATEGORIES } from '../types';

const icons = {
  Code2,
  Palette,
  PenTool,
  Rocket: TrendingUp
};

interface BlinkPreviewProps {
  category: Category;
  username: string;
}

export default function BlinkPreview({ category, username }: BlinkPreviewProps) {
  const info = CATEGORIES[category];
  const Icon = icons[info.blinkIcon as keyof typeof icons];

  return (
    <div className="w-full max-w-xl mx-auto mt-20">
      {/* Twitter Header Simulation */}
      <div className="flex items-center gap-3 mb-6 px-4">
        <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
          <img src={`https://picsum.photos/seed/${username || 'default'}/100/100`} alt="avatar" referrerPolicy="no-referrer" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-lg">@{username || 'dev'}</span>
            <CheckCircle2 className="w-4 h-4 text-solana-purple fill-current" />
          </div>
          <div className="text-sm text-white/40 font-medium">Just verified my {category} credentials! 🚀</div>
        </div>
      </div>

      {/* The Blink Card */}
      <motion.div 
        layout
        className="bg-white rounded-3xl overflow-hidden text-black shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/20"
      >
        <div 
          className="relative h-56 flex items-center justify-center overflow-hidden transition-colors duration-1000"
          style={{ background: `linear-gradient(135deg, ${info.color}44 0%, ${info.color}88 100%)` }}
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={category}
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
              transition={{ type: 'spring', bounce: 0.4 }}
              className="w-32 h-32 glass rounded-[2.5rem] flex items-center justify-center border-white/40 shadow-2xl"
            >
              <Icon className="w-16 h-16 text-white" />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <AnimatePresence mode="wait">
              <motion.h4 
                key={category}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-2xl font-black leading-tight tracking-tight"
              >
                {info.blinkTitle}
              </motion.h4>
            </AnimatePresence>
            <p className="text-gray-500 text-sm leading-relaxed">
              Verified {category} contributions for <span className="font-mono font-bold text-black">@{username || 'user'}</span>. This badge is a compressed NFT on Solana.
            </p>
          </div>

          <div className="flex gap-3">
            <button 
              className="flex-1 text-white py-4 rounded-2xl font-black text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
              style={{ backgroundColor: info.color }}
            >
              Mint Badge
            </button>
            <button className="px-5 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors">
              <ExternalLink className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Powered by CredBlink</span>
            <div className="flex items-center gap-2 text-[10px] font-black text-solana-purple">
              <div className="w-2 h-2 rounded-full bg-solana-purple animate-pulse" />
              SOLANA ACTION
            </div>
          </div>
        </div>
      </motion.div>

      {/* Twitter Actions Simulation */}
      <div className="flex justify-between mt-6 px-12 text-white/20">
        <MessageCircle className="w-6 h-6" />
        <Repeat2 className="w-6 h-6" />
        <Heart className="w-6 h-6" />
        <Share className="w-6 h-6" />
      </div>
    </div>
  );
}
