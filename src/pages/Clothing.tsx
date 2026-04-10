import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'Forest Linen Overshirt',
    price: '$148',
    tag: 'New',
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Trail Merino Sweater',
    price: '$195',
    tag: 'Bestseller',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Grove Wide-Leg Trouser',
    price: '$165',
    tag: 'Essential',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Canopy Organic Tee',
    price: '$68',
    tag: 'Organic',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Moss Denim Jacket',
    price: '$248',
    tag: 'Limited',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Terrain Cargo Pant',
    price: '$178',
    tag: 'New',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Clothing() {
  return (
    <div className="bg-cream-100 pt-20">
      <div
        className="relative h-72 md:h-96 flex items-end"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-12">
          <p className="section-label text-forest-300 mb-3">The Wardrobe</p>
          <h1 className="font-serif text-cream-100 text-5xl md:text-6xl">Clothing</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <p className="text-charcoal-400 font-sans text-sm">
            {products.length} pieces
          </p>
          <div className="flex gap-4">
            {['All', 'New Arrivals', 'Bestsellers', 'Organic'].map((f) => (
              <button
                key={f}
                className="text-xs tracking-widest uppercase font-sans text-charcoal-400 hover:text-forest-700 transition-colors duration-200 first:text-forest-700 first:border-b first:border-forest-700 pb-0.5"
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>

      <div className="bg-cream-200 py-20 text-center">
        <p className="section-label mb-4">The Standard</p>
        <h2 className="editorial-heading text-3xl md:text-4xl mb-6 max-w-xl mx-auto">
          Every garment tells a story of the land.
        </h2>
        <p className="text-charcoal-400 max-w-md mx-auto text-sm leading-relaxed">
          Ethically sourced, naturally dyed, and crafted to endure — our clothing is made for a life lived outdoors and indoors, with equal intention.
        </p>
      </div>
    </div>
  );
}
