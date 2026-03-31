import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Navigation, Phone, Clock, Star } from 'lucide-react';
import Button from '../components/Button';

const stores = [
  {
    id: 1,
    name: 'Spark Central Market',
    address: '456 Beverage Blvd, Austin, TX 78701',
    distance: '0.8 miles',
    rating: 4.9,
    hours: '8:00 AM - 10:00 PM',
    phone: '(512) 555-0123',
    type: 'Supermarket'
  },
  {
    id: 2,
    name: 'Retro Corner Store',
    address: '789 Vintage Way, Austin, TX 78704',
    distance: '1.2 miles',
    rating: 4.7,
    hours: '7:00 AM - 11:00 PM',
    phone: '(512) 555-0456',
    type: 'Convenience'
  },
  {
    id: 3,
    name: 'Crimson Gas & Sip',
    address: '101 Highway 35, Austin, TX 78741',
    distance: '2.5 miles',
    rating: 4.5,
    hours: 'Open 24 Hours',
    phone: '(512) 555-0789',
    type: 'Gas Station'
  }
];

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pt-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 h-[800px]">
          {/* Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-6 overflow-hidden">
            <div className="space-y-4">
              <h1 className="text-5xl text-burgundy">FIND THE <span className="text-gold">SPARK</span></h1>
              <p className="text-ink/60 text-sm">Enter your zip code or city to find the nearest Crimson Spark retailer.</p>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-burgundy/40" size={18} />
              <input 
                type="text" 
                placeholder="ZIP CODE OR CITY..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-burgundy/10 rounded-sm pl-12 pr-6 py-4 focus:outline-none focus:border-burgundy transition-colors font-display text-xs tracking-widest"
              />
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {stores.map((store) => (
                <motion.div 
                  key={store.id}
                  whileHover={{ x: 5 }}
                  className="bg-white p-6 border border-burgundy/5 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gold">{store.type}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-burgundy/40">{store.distance}</span>
                  </div>
                  <h3 className="text-xl text-burgundy mb-2 group-hover:text-gold transition-colors">{store.name}</h3>
                  <p className="text-xs text-ink/60 mb-4 flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    {store.address}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest font-bold text-ink/40">
                    <div className="flex items-center gap-2">
                      <Clock size={12} /> {store.hours}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={12} className="text-gold" fill="currentColor" /> {store.rating}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <Button size="sm" className="flex-1">Directions</Button>
                    <Button variant="outline" size="sm" className="px-3"><Phone size={14} /></Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2 bg-burgundy/5 rounded-2xl relative overflow-hidden border border-burgundy/10">
            {/* Mock Map UI */}
            <div className="absolute inset-0 retro-grid opacity-20" />
            
            {/* Map Markers */}
            {stores.map((store, i) => (
              <motion.div
                key={store.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="absolute"
                style={{ 
                  top: `${30 + i * 20}%`, 
                  left: `${40 + i * 15}%` 
                }}
              >
                <div className="relative group">
                  <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center text-gold shadow-2xl border-2 border-cream group-hover:scale-125 transition-transform cursor-pointer">
                    <MapPin size={20} />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <p className="text-[10px] font-bold text-burgundy uppercase">{store.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Controls */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-2">
              <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-burgundy hover:bg-gold hover:text-burgundy transition-colors">
                <Navigation size={20} />
              </button>
              <div className="flex flex-col bg-white rounded-full shadow-lg overflow-hidden">
                <button className="w-12 h-12 flex items-center justify-center text-burgundy hover:bg-burgundy/5 transition-colors border-b border-burgundy/10">+</button>
                <button className="w-12 h-12 flex items-center justify-center text-burgundy hover:bg-burgundy/5 transition-colors">-</button>
              </div>
            </div>

            {/* Map Overlay Info */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-burgundy/10 max-w-xs">
              <p className="text-xs font-bold text-burgundy uppercase mb-1">Current Location</p>
              <p className="text-[10px] text-ink/60 uppercase">Austin, Texas, United States</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
