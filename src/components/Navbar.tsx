import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Clothing', to: '/clothing' },
  { label: 'Beauty', to: '/beauty' },
  { label: 'Supplements', to: '/supplements' },
  { label: 'Models', to: '/models' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header className="bg-white border-b border-cream-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="inline-block bg-[#E3541C] text-white px-4 py-1 italic font-black text-2xl tracking-tighter uppercase">
          OPENROADIO
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="relative px-2 py-1 text-sm uppercase tracking-widest text-charcoal-600 hover:text-forest-700 transition"
            >
              <motion.span whileHover={{ scale: 1.1 }} className="block">{link.label}</motion.span>
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-forest-700"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </NavLink>
          ))}
        </nav>
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}