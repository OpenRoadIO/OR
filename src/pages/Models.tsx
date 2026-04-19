/*(import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const models = [
  { name: 'Rachel Inna', to: '/models/rachel-inna', img: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Gigi', to: '/models/gigi', img: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Models() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="editorial-heading text-5xl text-center mb-16 text-charcoal-800">Our Model Picks</h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
      >
        {models.map((m) => (
          <motion.div 
            key={m.name} 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link to={m.to} className="block group">
              <div className="overflow-hidden aspect-[4/5] mb-6 shadow-xl">
                <img src={m.img} className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-serif text-charcoal-800 text-center uppercase tracking-widest">{m.name}</h3>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
