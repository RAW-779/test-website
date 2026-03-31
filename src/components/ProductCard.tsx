import { motion } from 'motion/react';
import { Plus, Info } from 'lucide-react';
import Button from './Button';

interface ProductCardProps {
  key?: string;
  id?: string;
  name: string;
  flavor: string;
  price: string;
  image: string;
  color: string;
  category?: string;
}

export default function ProductCard({ name, flavor, price, image, color }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white border border-burgundy/10 p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Background Accent */}
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-10 transition-transform group-hover:scale-150"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10">
        <div className="aspect-[3/4] mb-6 overflow-hidden flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={image}
            alt={name}
            className="w-full h-full object-contain drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-burgundy/60 font-bold">{flavor}</p>
          <h3 className="text-2xl font-display text-burgundy tracking-tight">{name}</h3>
          <p className="text-xl font-display text-gold">{price}</p>
        </div>

        <div className="mt-6 flex gap-2">
          <Button size="sm" className="flex-1">
            <Plus size={16} />
            Add
          </Button>
          <Button variant="outline" size="sm" className="px-3">
            <Info size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
