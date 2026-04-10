import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Clothing', to: '/clothing' },
  { label: 'Beauty', to: '/beauty' },
  { label: 'Supplements', to: '/supplements' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-cream-100 border-b border-cream-300 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link
          to="/"
          className={`font-serif text-xl tracking-widest transition-colors duration-300 ${
            transparent ? 'text-cream-100' : 'text-forest-700'
          }`}
        >
          OpenRoadIO
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase font-sans transition-colors duration-200 border-b pb-0.5 ${
                  transparent
                    ? isActive
                      ? 'text-cream-100 border-cream-100'
                      : 'text-cream-300 border-transparent hover:text-cream-100 hover:border-cream-100'
                    : isActive
                    ? 'text-forest-700 border-forest-700'
                    : 'text-charcoal-500 border-transparent hover:text-forest-700 hover:border-forest-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`lg:hidden transition-colors duration-200 ${
            transparent ? 'text-cream-100' : 'text-charcoal-700'
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-cream-100 border-t border-cream-300 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase font-sans transition-colors duration-200 ${
                  isActive ? 'text-forest-700' : 'text-charcoal-500 hover:text-forest-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
