import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Search, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const allProducts = [
  {
    id: '1',
    name: 'Original Spark',
    flavor: '23 Mysterious Spices',
    price: '$2.49',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop',
    color: '#720e1c',
    category: 'Original'
  },
  {
    id: '2',
    name: 'Cherry Blast',
    flavor: 'Wild Cherry & Vanilla',
    price: '$2.49',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1974&auto=format&fit=crop',
    color: '#8b1525',
    category: 'Fruit'
  },
  {
    id: '3',
    name: 'Creamy Dream',
    flavor: 'Velvet Vanilla Cream',
    price: '$2.49',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1964&auto=format&fit=crop',
    color: '#fdfcf0',
    category: 'Cream'
  },
  {
    id: '4',
    name: 'Zero Spark',
    flavor: 'Zero Sugar, Full Mystery',
    price: '$2.49',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop',
    color: '#1a1a1a',
    category: 'Zero Sugar'
  },
  {
    id: '5',
    name: 'Midnight Berry',
    flavor: 'Blackberry & Sage',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1974&auto=format&fit=crop',
    color: '#4a148c',
    category: 'Limited Edition'
  },
  {
    id: '6',
    name: 'Golden Ginger',
    flavor: 'Spiced Ginger & Honey',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1964&auto=format&fit=crop',
    color: '#d4af37',
    category: 'Specialty'
  }
];

const categories = ['All', 'Original', 'Fruit', 'Cream', 'Zero Sugar', 'Limited Edition', 'Specialty'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.flavor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl text-burgundy mb-4"
          >
            OUR <span className="text-gold">COLLECTION</span>
          </motion.h1>
          <p className="text-ink/60 max-w-2xl mx-auto">
            Explore our full range of mysterious blends, from the timeless classics 
            to our latest daring experiments.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-display tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-burgundy text-cream shadow-lg' 
                    : 'bg-burgundy/5 text-burgundy hover:bg-burgundy/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-burgundy/40" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH FLAVORS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-burgundy/10 rounded-full pl-12 pr-6 py-3 focus:outline-none focus:border-burgundy transition-colors font-display text-xs tracking-widest"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-20">
            <p className="text-burgundy/40 font-display text-xl">NO FLAVORS FOUND MATCHING YOUR SEARCH</p>
            <Button variant="outline" className="mt-6" onClick={() => {setActiveCategory('All'); setSearchQuery('');}}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="mt-20 text-center">
            <Button variant="outline" size="lg">
              Load More Flavors <ChevronDown size={18} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
