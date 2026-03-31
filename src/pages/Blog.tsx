import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Button from '../components/Button';

const posts = [
  {
    id: 1,
    title: 'The Mystery of the 23 Flavors: A Deep Dive',
    excerpt: 'For over a century, fans have tried to decode our secret recipe. Here are the most popular theories...',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop',
    date: 'March 15, 2026',
    author: 'Charles Spark',
    category: 'History'
  },
  {
    id: 2,
    title: 'How to Mix the Perfect Spark Mocktail',
    excerpt: 'Elevate your evening with these three creative recipes using Crimson Spark as a base.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop',
    date: 'March 10, 2026',
    author: 'Mixologist Mia',
    category: 'Lifestyle'
  },
  {
    id: 3,
    title: 'Behind the Scenes: The Cherry Blast Shoot',
    excerpt: 'Take a look at how we captured the vibrant energy of our latest flavor launch.',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1974&auto=format&fit=crop',
    date: 'March 05, 2026',
    author: 'Creative Team',
    category: 'Culture'
  }
];

export default function Blog() {
  return (
    <div className="pt-20 bg-cream min-h-screen">
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl text-burgundy mb-6">SPARK <span className="text-gold">CULTURE</span></h1>
            <p className="text-ink/60 max-w-2xl mx-auto">
              Stories, recipes, and deep dives into the world of Crimson Spark. 
              Stay inspired and stay curious.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden rounded-sm mb-6 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-burgundy px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-ink/40 font-bold">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl text-burgundy group-hover:text-gold transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-ink/60 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent text-gold">
                    Read Article <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mt-32 bg-burgundy rounded-sm overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 aspect-video lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1964&auto=format&fit=crop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gold mb-6">
                <Tag size={16} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Featured Story</span>
              </div>
              <h2 className="text-4xl md:text-6xl text-cream mb-6">THE ART OF THE <br /> <span className="text-gold">PERFECT SIP</span></h2>
              <p className="text-cream/70 mb-10 leading-relaxed">
                Discover the science behind the fizz and how we ensure every bottle of 
                Crimson Spark delivers the same legendary experience.
              </p>
              <Button variant="secondary" size="lg">Read Full Story</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
