import { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Sparkles, Ticket, Timer, ChevronRight } from 'lucide-react';
import Button from '../components/Button';

export default function Promotions() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);
    
    setTimeout(() => {
      setIsSpinning(false);
      setResult('FREE ORIGINAL SPARK');
    }, 3000);
  };

  return (
    <div className="pt-20 bg-cream min-h-screen">
      {/* Hero Campaign */}
      <section className="relative py-32 bg-burgundy overflow-hidden">
        <div className="absolute inset-0 opacity-10 retro-grid" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-1 rounded-full mb-6">
              <Timer size={14} className="text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Limited Time Offer</span>
            </div>
            <h1 className="text-7xl md:text-9xl text-cream leading-none mb-8">
              SPARK <br /> <span className="text-gold">REWARDS</span>
            </h1>
            <p className="text-cream/70 text-lg mb-10 leading-relaxed">
              Join the inner circle and unlock exclusive flavors, legendary merch, 
              and daily chances to win. The mystery is better when shared.
            </p>
            <Button variant="secondary" size="lg">Join Rewards Program</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-gold/5 rounded-full border-4 border-gold/20 flex items-center justify-center relative">
              <motion.div 
                animate={isSpinning ? { rotate: 360 * 5 } : { rotate: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="w-full h-full rounded-full border-8 border-burgundy relative shadow-2xl"
              >
                {/* Wheel Segments */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <div 
                    key={deg} 
                    className="absolute top-0 left-1/2 w-1 h-1/2 bg-burgundy origin-bottom -translate-x-1/2"
                    style={{ transform: `rotate(${deg}deg)` }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-gold rounded-full border-4 border-burgundy flex items-center justify-center">
                     <Sparkles size={32} className="text-burgundy" />
                   </div>
                </div>
              </motion.div>
              
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-12 bg-gold clip-path-triangle z-20 shadow-lg" />
            </div>

            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
              <Button 
                onClick={handleSpin} 
                disabled={isSpinning}
                className="shadow-2xl"
              >
                {isSpinning ? 'Spinning...' : 'Spin to Win'}
              </Button>
              {result && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-gold font-display text-2xl"
                >
                  YOU WON: {result}!
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl text-burgundy mb-16">ACTIVE <span className="text-gold">CAMPAIGNS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative h-[400px] overflow-hidden rounded-sm border border-burgundy/10">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-10 text-cream">
                <div className="flex items-center gap-2 text-gold mb-4">
                  <Ticket size={16} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Golden Ticket Hunt</span>
                </div>
                <h3 className="text-4xl mb-4">FIND THE GOLDEN <br /> CAP</h3>
                <p className="text-cream/70 text-sm mb-6 max-w-xs">Look under the cap of any Crimson Spark bottle for a chance to win a trip to our flavor labs.</p>
                <Button variant="outline" className="border-cream text-cream hover:bg-cream hover:text-burgundy">Learn More</Button>
              </div>
            </div>

            <div className="group relative h-[400px] overflow-hidden rounded-sm border border-burgundy/10">
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-10 text-burgundy">
                <div className="flex items-center gap-2 text-burgundy mb-4">
                  <Gift size={16} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Merch Drop</span>
                </div>
                <h3 className="text-4xl mb-4">RETRO MERCH <br /> COLLECTION</h3>
                <p className="text-burgundy/70 text-sm mb-6 max-w-xs">Limited edition vintage-inspired apparel and accessories. Available now for rewards members.</p>
                <Button className="bg-burgundy text-cream">Shop Merch</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
