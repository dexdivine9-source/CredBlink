import { motion } from 'motion/react';
import { Twitter, MessageCircle, Repeat2, Heart, Share, ExternalLink } from 'lucide-react';

export default function BlinkMockup({ username, skill }: { username: string; skill: string }) {
  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Twitter Header */}
      <div className="flex items-center gap-3 mb-4 px-4">
        <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
          <img src={`https://picsum.photos/seed/${username}/100/100`} alt="avatar" referrerPolicy="no-referrer" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-bold">@{username}</span>
            <div className="w-4 h-4 bg-solana-purple rounded-full flex items-center justify-center">
              <CheckIcon className="w-2.5 h-2.5 text-white" />
            </div>
          </div>
          <div className="text-sm text-white/40">Just minted my {skill} dev badge! 🚀</div>
        </div>
      </div>

      {/* The Blink Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl overflow-hidden text-black shadow-2xl"
      >
        <div className="relative h-48 bg-gradient-to-br from-solana-purple to-solana-green flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <motion.div 
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-32 h-32 glass rounded-3xl flex items-center justify-center border-white/40"
          >
            <div className="text-4xl font-black text-white">{skill[0]}</div>
          </motion.div>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h4 className="text-xl font-bold leading-tight">CredBlink: {skill} Verification</h4>
            <p className="text-gray-500 text-sm mt-1">
              Verified GitHub contributions for <span className="font-mono font-bold text-black">@{username}</span>. This badge is a compressed NFT on Solana.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              Mint Badge
            </button>
            <button className="px-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Powered by CredBlink</span>
            <div className="flex items-center gap-1 text-[10px] font-bold text-solana-purple">
              <div className="w-1.5 h-1.5 rounded-full bg-solana-purple animate-pulse" />
              SOLANA ACTION
            </div>
          </div>
        </div>
      </motion.div>

      {/* Twitter Actions */}
      <div className="flex justify-between mt-4 px-8 text-white/40">
        <MessageCircle className="w-5 h-5" />
        <Repeat2 className="w-5 h-5" />
        <Heart className="w-5 h-5" />
        <Share className="w-5 h-5" />
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
