import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif mb-12"
      >
        About OpenRoadIO
      </motion.h1>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-charcoal-500 text-lg space-y-6"
      >
        <p>OpenRoadIO is the synthesis of technology and human potential.</p>
        <p>We build for those who reject the status quo and demand elite performance from every facet of their lives.</p>
      </motion.div>
    </motion.div>
  );
}