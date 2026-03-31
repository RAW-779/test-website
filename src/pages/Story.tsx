import { motion } from 'motion/react';
import { History, Target, Users, Award } from 'lucide-react';

const milestones = [
  {
    year: '1885',
    title: 'The Spark is Born',
    description: 'Pharmacist Charles Alderton creates the first unique blend in Waco, Texas.',
    icon: History
  },
  {
    year: '1904',
    title: 'World Fair Debut',
    description: 'Crimson Spark is introduced to the world at the St. Louis World Fair.',
    icon: Award
  },
  {
    year: '1963',
    title: 'The Diet Revolution',
    description: 'We launch one of the first sugar-free sodas that actually tastes like the original.',
    icon: Target
  },
  {
    year: '2026',
    title: 'The Future of Flavor',
    description: 'Continuing our legacy of mystery with sustainable practices and global reach.',
    icon: Users
  }
];

export default function Story() {
  return (
    <div className="pt-20 bg-cream min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 bg-burgundy text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-10 retro-grid" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-9xl mb-6"
          >
            OUR <span className="text-gold">LEGACY</span>
          </motion.h1>
          <p className="text-cream/70 max-w-2xl mx-auto text-lg leading-relaxed">
            More than a century of mystery, bold choices, and the perfect spark. 
            Discover how a small-town experiment became a global icon.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-burgundy/10 hidden md:block" />
        
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {milestones.map((m, i) => (
            <motion.div 
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-center md:text-right">
                {i % 2 !== 0 ? (
                   <div className="hidden md:block" />
                ) : (
                  <>
                    <span className="text-6xl font-display text-gold mb-4 block">{m.year}</span>
                    <h3 className="text-3xl text-burgundy mb-4">{m.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{m.description}</p>
                  </>
                )}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center text-gold shadow-2xl border-4 border-cream">
                  <m.icon size={24} />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                {i % 2 === 0 ? (
                   <div className="hidden md:block" />
                ) : (
                  <>
                    <span className="text-6xl font-display text-gold mb-4 block">{m.year}</span>
                    <h3 className="text-3xl text-burgundy mb-4">{m.title}</h3>
                    <p className="text-ink/60 leading-relaxed">{m.description}</p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl text-burgundy mb-12">THE <span className="text-gold">SPARK</span> PHILOSOPHY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h4 className="text-2xl text-burgundy">BE BOLDLY UNIQUE</h4>
              <p className="text-ink/60 leading-relaxed">
                We don't try to fit in. We celebrate the quirks, the mysteries, and the 
                unexpected blends that make life interesting.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl text-burgundy">HONOR THE MYSTERY</h4>
              <p className="text-ink/60 leading-relaxed">
                Some things are better left unexplained. Our 23 flavors are a secret we've 
                kept for over 140 years, and we intend to keep it that way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
