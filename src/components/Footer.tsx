import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Leaf } from 'lucide-react';

const storeLinks = [
  { label: 'Clothing', to: '/clothing' },
  { label: 'Beauty', to: '/beauty' },
  { label: 'Supplements', to: '/supplements' },
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Home', to: '/' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@openroadio.com' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-charcoal-600 pb-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl text-cream-100 tracking-widest block mb-4">
              OpenRoadIO
            </Link>
            <div className="flex items-center gap-2 text-forest-400 mb-4">
              <Leaf size={14} />
              <span className="text-xs tracking-widest uppercase font-sans">Nature-Luxe Living</span>
            </div>
            <p className="text-charcoal-300 text-sm leading-relaxed">
              Rooted in nature. Elevated by intention. A lifestyle brand for the conscious explorer.
            </p>
          </div>

          <div>
            <h4 className="text-cream-200 text-xs tracking-widest uppercase font-sans mb-5">Shop</h4>
            <ul className="space-y-3">
              {storeLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-charcoal-300 hover:text-cream-200 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream-200 text-xs tracking-widest uppercase font-sans mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-charcoal-300 hover:text-cream-200 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream-200 text-xs tracking-widest uppercase font-sans mb-5">Connect</h4>
            <div className="flex gap-4 mb-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-charcoal-300 hover:text-forest-400 transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-charcoal-300 text-sm">hello@openroadio.com</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-400 text-xs font-sans">
            &copy; {new Date().getFullYear()} OpenRoadIO. All rights reserved.
          </p>
          <p className="text-charcoal-500 text-xs font-sans tracking-widest uppercase">
            Crafted with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
