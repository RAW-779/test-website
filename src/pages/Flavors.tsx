import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Info, ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const flavors = [
  {
    id: 'original',
    name: 'Original Spark',
    description: 'The legendary blend of 23 mysterious flavors. A complex symphony of spices, fruits, and a hint of vanilla that has kept the world guessing since 1885.',
    notes: ['Spicy', 'Sweet', 'Mysterious'],
    color: '#720e1c',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'cherry',
    name: 'Cherry Blast',
    description: 'A bold fusion of our original mystery with a vibrant explosion of wild cherry. Perfectly balanced with a smooth vanilla finish.',
    notes: ['Fruity', 'Vibrant', 'Smooth'],
    color: '#8b1525',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'cream',
    name: 'Creamy Dream',
    description: 'The ultimate comfort drink. Our signature spark meets a rich, velvety cream base for a dessert-like experience in every sip.',
    notes: ['Velvety', 'Rich', 'Comforting'],
    color: '#fdfcf0',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1964&auto=format&fit=crop'
  }
];

export default function Flavors() {
  const [activeFlavor, setActiveFlavor] = useState(flavors[0]);

  return (
    <div className="pt-20 min-h-screen bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image Showcase */}
          <div className="relative aspect-square flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor.id}
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative z-10 w-full max-w-md"
              >
                <div 
                  className="absolute inset-0 rounded-full blur-[100px] opacity-20"
                  style={{ backgroundColor: activeFlavor.color }}
                />
                <img 
                  src={activeFlavor.image} 
                  alt={activeFlavor.name}
                  className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>

            {/* Decorative Elements */}
            <div className="absolute inset-0 retro-grid opacity-10" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-burgundy/5 px-4 py-1 rounded-full mb-6">
              <Sparkles size={14} className="text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-burgundy font-bold">Flavor Profile</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-7xl md:text-8xl text-burgundy leading-none mb-8">
                  {activeFlavor.name.split(' ')[0]} <br />
                  <span className="text-gold">{activeFlavor.name.split(' ')[1]}</span>
                </h1>
                <p className="text-ink/70 text-lg leading-relaxed mb-10 max-w-lg">
                  {activeFlavor.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  {activeFlavor.notes.map(note => (
                    <div key={note} className="flex items-center gap-2 border border-burgundy/10 px-6 py-2 rounded-sm bg-white">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-xs uppercase tracking-widest font-bold text-burgundy">{note}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Flavor Selector */}
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-burgundy/40 font-bold">Switch Flavor</p>
              <div className="flex gap-4">
                {flavors.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFlavor(f)}
                    className={`group relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeFlavor.id === f.id ? 'border-gold scale-110 shadow-xl' : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-transparent transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Button size="lg">Add to Cart</Button>
              <Button variant="outline" size="lg">Nutrition Info <Info size={18} /></Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <section className="py-32 bg-burgundy text-cream">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl mb-16">THE <span className="text-gold">23 FLAVOR</span> MATRIX</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Amaretto', 'Vanilla', 'Blackberry', 'Ginger', 'Cherry', 'Plum', 'Apricot', 'Caramel', 'Pepper', 'Anise', 'Sarsaparilla', 'Lemon'].map(flavor => (
              <div key={flavor} className="p-6 border border-cream/10 rounded-sm hover:bg-cream/5 transition-colors group">
                <p className="font-display text-gold group-hover:scale-110 transition-transform">{flavor}</p>
              </div>
            ))}
            <div className="p-6 border border-gold/20 rounded-sm bg-gold/10 flex items-center justify-center">
              <p className="font-display text-gold">+ 11 MORE SECRETS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
