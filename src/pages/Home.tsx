import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles, ChevronRight, Star } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: '1',
    name: 'Original Spark',
    flavor: '23 Mysterious Spices',
    price: '$2.49',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop',
    color: '#720e1c'
  },
  {
    id: '2',
    name: 'Cherry Blast',
    flavor: 'Wild Cherry & Vanilla',
    price: '$2.49',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1974&auto=format&fit=crop',
    color: '#8b1525'
  },
  {
    id: '3',
    name: 'Creamy Dream',
    flavor: 'Velvet Vanilla Cream',
    price: '$2.49',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1964&auto=format&fit=crop',
    color: '#fdfcf0'
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-burgundy z-0">
          <div className="absolute inset-0 opacity-20 retro-grid" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/4 w-full h-full bg-gold/20 rounded-full blur-[120px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-1 rounded-full mb-6">
              <Sparkles size={14} className="text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">The Original Spark Since 1885</span>
            </div>
            <h1 className="text-7xl md:text-9xl text-cream leading-[0.85] mb-8">
              UNLEASH <br />
              <span className="text-gold">THE SPARK</span>
            </h1>
            <p className="text-cream/70 text-lg max-w-md mb-10 leading-relaxed">
              Experience the legendary blend of 23 mysterious flavors. Bold, quirky, 
              and undeniably unique. It's not just a drink, it's a legacy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Shop Now <ArrowRight size={18} /></Button>
              <Button variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-burgundy">
                Our Story
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-[100px] animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop" 
              alt="Crimson Spark Can"
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl text-burgundy leading-none mb-4">
                CHOOSE YOUR <br /> <span className="text-gold">VIBE</span>
              </h2>
              <p className="text-ink/60 max-w-md">
                From the original mystery to bold new fusions, find the perfect spark for your day.
              </p>
            </div>
            <Button variant="ghost" className="group">
              View All Products <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                name={product.name}
                flavor={product.flavor}
                price={product.price}
                image={product.image}
                color={product.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Message / Story Snippet */}
      <section className="relative py-32 bg-burgundy overflow-hidden">
        <div className="absolute inset-0 opacity-10 retro-grid" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gold/10 rounded-2xl overflow-hidden border border-gold/20 p-4">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop" 
                alt="Vintage Soda Shop"
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold p-8 rounded-full flex items-center justify-center text-center rotate-12 shadow-2xl">
              <p className="font-display text-burgundy text-xl leading-tight">ESTABLISHED <br /> 1885</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-cream"
          >
            <h2 className="text-5xl md:text-7xl mb-8">A LEGACY OF <br /> <span className="text-gold">MYSTERY</span></h2>
            <div className="space-y-6 text-cream/70 text-lg leading-relaxed">
              <p>
                Born in a small pharmacy in Texas, Crimson Spark was never meant to be "just another soda." 
                It was a daring experiment in flavor—a complex symphony of 23 distinct ingredients that 
                defied categorization.
              </p>
              <p>
                Today, we carry that same spirit of bold curiosity. We don't follow trends; we create 
                experiences that spark the imagination and satisfy the soul.
              </p>
            </div>
            <Button variant="secondary" size="lg" className="mt-10">
              Read Our Full Story
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl text-burgundy mb-4">WHAT THE <span className="text-gold">SPARKERS</span> SAY</h2>
            <p className="text-ink/60">Join millions of fans worldwide who've found their spark.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 border border-burgundy/5 shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex gap-1 text-gold mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-ink/80 italic mb-8 leading-relaxed">
                  "I've tried every soda out there, but nothing compares to the complex, 
                  bold taste of Crimson Spark. It's my daily ritual."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-burgundy/10 rounded-full" />
                  <div>
                    <p className="font-bold text-burgundy uppercase text-xs tracking-widest">Alex Johnson</p>
                    <p className="text-[10px] text-ink/40 uppercase">Verified Fan</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl text-burgundy mb-6">GET THE <span className="text-cream">INSIDE SPARK</span></h2>
          <p className="text-burgundy/70 mb-10 text-lg">
            Subscribe for exclusive drops, secret flavors, and legendary rewards.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="flex-1 bg-cream/50 border-2 border-burgundy/20 px-6 py-4 rounded-sm focus:outline-none focus:border-burgundy transition-colors font-display tracking-widest"
            />
            <Button variant="primary" size="lg" className="md:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="mt-6 text-[10px] text-burgundy/40 uppercase tracking-widest">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </section>
    </div>
  );
}
