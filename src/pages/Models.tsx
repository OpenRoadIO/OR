import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const models = [
  { name: 'Rachel', to: '/models/rachel', img: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Inna', to: '/models/inna', img: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Gigi', to: '/models/gigi', img: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Models() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-serif text-charcoal-800 text-center mb-16">Our Model Picks</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {models.map((m) => (
          <Link key={m.name} to={m.to} className="block group">
            <div className="overflow-hidden aspect-[3/4] mb-4">
              <img src={m.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="text-xl font-serif text-charcoal-800 text-center">{m.name}</h3>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}