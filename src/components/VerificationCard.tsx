import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ChevronDown, Check, Loader2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const skills = ['React', 'Rust', 'Anchor', 'Solana SDK', 'TypeScript'];

export default function VerificationCard({ onGenerate, key }: { onGenerate: (username: string, skill: string) => void; key?: string }) {
  const [username, setUsername] = useState('');
  const [skill, setSkill] = useState(skills[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!username) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      onGenerate(username, skill);
    }, 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass rounded-[2rem] p-8 md:p-10 w-full max-w-md relative z-10"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-solana-green/20 flex items-center justify-center">
          <Github className="text-solana-green w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">Verify Creds</h3>
      </div>

      <div className="space-y-6">
        {/* Username Input */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/40 font-semibold ml-1">GitHub Username</label>
          <div className="relative group">
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. solana-dev"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-solana-green/50 transition-all placeholder:text-white/20"
            />
            <div className="absolute inset-0 rounded-2xl bg-solana-green/5 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
          </div>
        </div>

        {/* Skill Dropdown */}
        <div className="space-y-2 relative">
          <label className="text-xs uppercase tracking-widest text-white/40 font-semibold ml-1">Skill to Verify</label>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between hover:bg-white/10 transition-all"
          >
            <span className="font-medium">{skill}</span>
            <ChevronDown className={cn("w-5 h-5 text-white/40 transition-transform", isOpen && "rotate-180")} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 right-0 mt-2 glass rounded-2xl overflow-hidden z-50 shadow-2xl"
              >
                {skills.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSkill(s);
                      setIsOpen(false);
                    }}
                    className="w-full px-5 py-3 text-left hover:bg-white/10 flex items-center justify-between group"
                  >
                    <span>{s}</span>
                    {skill === s && <Check className="w-4 h-4 text-solana-green" />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Generate Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGenerate}
          disabled={!username || isGenerating}
          className={cn(
            "w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3",
            username && !isGenerating 
              ? "bg-solana-gradient text-obsidian shadow-[0_0_30px_rgba(20,241,149,0.3)]" 
              : "bg-white/5 text-white/20 cursor-not-allowed"
          )}
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Blink"
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
