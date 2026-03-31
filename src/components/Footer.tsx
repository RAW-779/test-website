import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-burgundy font-display text-lg">C</span>
              </div>
              <span className="font-display text-xl tracking-tighter text-cream">
                CRIMSON SPARK
              </span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed">
              Crafting unique, bold, and mysteriously delicious beverages since 1885. 
              Join the spark and discover your favorite flavor.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-gold mb-6 tracking-widest">Explore</h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li><Link to="/products" className="hover:text-gold transition-colors">All Products</Link></li>
              <li><Link to="/flavors" className="hover:text-gold transition-colors">Flavors</Link></li>
              <li><Link to="/story" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/promos" className="hover:text-gold transition-colors">Campaigns</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-gold mb-6 tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link to="/locator" className="hover:text-gold transition-colors">Store Locator</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold mb-6 tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <span>hello@crimsonspark.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <span>1-800-SPARK-IT</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                <span>123 Beverage Blvd, Austin, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© 2026 Crimson Spark Beverage Co. All Rights Reserved.</p>
          <p>Designed with Spark and Passion.</p>
        </div>
      </div>
    </footer>
  );
}
