import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const stages = [
  { id: 'scanning', label: 'Scanning Commits...', color: 'bg-yellow-400' },
  { id: 'verifying', label: 'Verifying Identity...', color: 'bg-blue-400' },
  { id: 'minting', label: 'Minting cNFT...', color: 'bg-solana-green' },
];

export default function ProgressFlow({ activeStage }: { activeStage: number }) {
  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-end mb-2">
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Current Process</div>
          <motion.div 
            key={activeStage}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight"
          >
            {stages[activeStage]?.label || 'Ready to Verify'}
          </motion.div>
        </div>
        <div className="text-2xl font-mono font-bold text-white/20">
          0{activeStage + 1} / 03
        </div>
      </div>

      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden relative border border-white/10">
        <motion.div 
          initial={{ width: '0%' }}
          animate={{ width: `${((activeStage + 1) / 3) * 100}%` }}
          className={cn(
            "h-full transition-colors duration-500 relative",
            stages[activeStage]?.color || 'bg-white/20'
          )}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse" />
          <div className="absolute inset-0 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {stages.map((stage, idx) => (
          <div key={stage.id} className="space-y-2">
            <div className={cn(
              "h-1 rounded-full transition-all duration-500",
              idx <= activeStage ? stage.color : "bg-white/10"
            )} />
            <div className={cn(
              "text-[10px] uppercase tracking-widest font-bold transition-colors duration-500",
              idx === activeStage ? "text-white" : "text-white/20"
            )}>
              {stage.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
