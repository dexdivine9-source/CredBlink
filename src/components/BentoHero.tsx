import { motion } from 'motion/react';
import { Github, Shield, Zap, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function BentoHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 p-4 md:p-8 max-w-7xl mx-auto mt-20">
      {/* Main Headline Cell */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-3 md:row-span-2 glass rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-solana-purple/20 blur-[100px] -mr-32 -mt-32 group-hover:bg-solana-purple/30 transition-colors duration-500" />
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6">
          YOUR CODE IS <br />
          <span className="text-gradient italic">YOUR CURRENCY</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
          The GitHub-to-Blink bridge. Verify your contributions, mint your reputation, and share your skills directly on X via Solana Actions.
        </p>
      </motion.div>

      {/* Stats Cell */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="glass rounded-3xl p-6 flex flex-col justify-between"
      >
        <Shield className="text-solana-green w-8 h-8" />
        <div>
          <div className="text-3xl font-bold tracking-tight">100%</div>
          <div className="text-sm text-white/40 uppercase tracking-widest">On-Chain Proof</div>
        </div>
      </motion.div>

      {/* Integration Cell */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass rounded-3xl p-6 flex flex-col justify-between bg-solana-purple/5"
      >
        <Zap className="text-solana-purple w-8 h-8" />
        <div>
          <div className="text-3xl font-bold tracking-tight">0.1s</div>
          <div className="text-sm text-white/40 uppercase tracking-widest">Blink Generation</div>
        </div>
      </motion.div>

      {/* Global Reach Cell */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="md:col-span-2 glass rounded-3xl p-8 flex items-center gap-6 overflow-hidden relative"
      >
        <div className="flex -space-x-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-12 h-12 rounded-full border-2 border-obsidian bg-white/10 flex items-center justify-center overflow-hidden">
              <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
        <div className="text-lg font-medium text-white/80">
          Trusted by <span className="text-solana-green">5,000+</span> developers worldwide.
        </div>
      </motion.div>

      {/* GitHub Cell */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="md:col-span-2 glass rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-4">
          <Github className="w-10 h-10" />
          <span className="text-xl font-semibold">Connect GitHub</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
          →
        </div>
      </motion.div>
    </section>
  );
}
