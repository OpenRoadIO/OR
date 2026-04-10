import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sun, Wind } from 'lucide-react';

const categories = [
  {
    title: 'Clothing',
    subtitle: 'Wear the forest',
    to: '/clothing',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Beauty',
    subtitle: 'Glow naturally',
    to: '/beauty',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Supplements',
    subtitle: 'Nourish within',
    to: '/supplements',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Nature-Sourced',
    desc: 'Every product is inspired by and drawn from the natural world around us.',
  },
  {
    icon: Sun,
    title: 'Intentional Living',
    desc: 'We craft for those who choose to live with purpose, beauty, and clarity.',
  },
  {
    icon: Wind,
    title: 'Clean Standards',
    desc: 'Transparency is our baseline. No compromises on quality or ethics.',
  },
];

export default function Home() {
  return (
    <div className="bg-cream-100">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/55" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-forest-300 text-xs tracking-widest uppercase font-sans mb-6 animate-pulse">
            Nature-Luxe Living
          </p>
          <h1 className="font-serif text-cream-100 text-5xl md:text-7xl lg:text-8xl leading-none mb-8 text-balance">
            Open the Road<br />
            <span className="italic text-cream-300">to yourself.</span>
          </h1>
          <p className="text-cream-300 text-lg md:text-xl font-sans leading-relaxed max-w-xl mx-auto mb-12">
            A curated sanctuary of clothing, beauty, and wellness rooted in the rhythm of the natural world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clothing" className="btn-primary">
              Explore the Collection
            </Link>
            <Link to="/about" className="border border-cream-300 text-cream-200 px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-cream-100 hover:text-forest-700 transition-all duration-300 inline-block">
              Our Story
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-cream-300/50" />
          <span className="text-cream-400 text-xs tracking-widest uppercase font-sans">Scroll</span>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">The Collection</p>
          <h2 className="editorial-heading text-4xl md:text-5xl">
            Curated for the <span className="italic">conscious</span> soul
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.to}
              to={cat.to}
              className="group relative overflow-hidden aspect-[3/4] block"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-forest-300 text-xs tracking-widest uppercase font-sans mb-2">
                  {cat.subtitle}
                </p>
                <h3 className="font-serif text-cream-100 text-3xl mb-4">{cat.title}</h3>
                <div className="flex items-center gap-2 text-cream-300 text-xs tracking-widest uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Shop Now</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-24 bg-forest-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-forest-300 text-xs tracking-widest uppercase font-sans mb-6">Our Philosophy</p>
              <h2 className="font-serif text-cream-100 text-4xl md:text-5xl leading-tight mb-8">
                The wilderness<br />
                <span className="italic">within you.</span>
              </h2>
              <p className="text-cream-300 text-lg leading-relaxed mb-6">
                OpenRoadIO was born from a singular belief: that nature is not a destination, but a way of being. We create products that honor this truth — grounding you in the earth while elevating your everyday.
              </p>
              <p className="text-cream-400 leading-relaxed mb-10">
                From the thread of each garment to the botanicals in every serum, we trace every ingredient back to its source. Nothing hidden. Nothing wasted.
              </p>
              <Link to="/about" className="border border-cream-300 text-cream-200 px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-cream-200 hover:text-forest-700 transition-all duration-300 inline-block">
                Read Our Story
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nature lifestyle"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-forest-600 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-4">What We Stand For</p>
          <h2 className="editorial-heading text-4xl">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-8 border border-cream-300 hover:border-forest-400 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-forest-50 rounded-full mb-6">
                <Icon size={24} className="text-forest-600" />
              </div>
              <h3 className="font-serif text-charcoal-800 text-xl mb-4">{title}</h3>
              <p className="text-charcoal-400 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative py-32 px-6 text-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/60" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label text-forest-300 mb-6">Ready to Begin?</p>
          <h2 className="font-serif text-cream-100 text-4xl md:text-6xl mb-8 leading-tight">
            Your road starts here.
          </h2>
          <Link to="/clothing" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
