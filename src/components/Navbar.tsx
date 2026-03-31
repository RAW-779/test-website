import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Flavors', path: '/flavors' },
  { name: 'Our Story', path: '/story' },
  { name: 'Promos', path: '/promos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-burgundy shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-burgundy font-display text-xl">C</span>
          </div>
          <span className={cn(
            "font-display text-2xl tracking-tighter transition-colors",
            scrolled ? "text-cream" : "text-burgundy"
          )}>
            CRIMSON SPARK
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium uppercase tracking-widest transition-colors hover:text-gold',
                location.pathname === link.path 
                  ? 'text-gold' 
                  : scrolled ? 'text-cream' : 'text-burgundy'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/locator" 
            className={cn(
              "p-2 rounded-full transition-colors hover:bg-gold/20",
              scrolled ? "text-cream" : "text-burgundy"
            )}
          >
            <MapPin size={20} />
          </Link>
          <button className={cn(
            "p-2 rounded-full transition-colors hover:bg-gold/20",
            scrolled ? "text-cream" : "text-burgundy"
          )}>
            <ShoppingCart size={20} />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? "text-cream" : "text-burgundy"} />
            ) : (
              <Menu className={scrolled ? "text-cream" : "text-burgundy"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-burgundy p-6 md:hidden shadow-2xl border-t border-cream/10"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-display tracking-widest text-cream hover:text-gold transition-colors',
                  location.pathname === link.path && 'text-gold'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
