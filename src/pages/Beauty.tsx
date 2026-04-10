import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'Forest Dew Face Oil',
    price: '$88',
    tag: 'Bestseller',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Moss Clay Cleanser',
    price: '$54',
    tag: 'New',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Botanical Serum No.3',
    price: '$112',
    tag: 'Limited',
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Earth Ritual Body Balm',
    price: '$72',
    tag: 'Essential',
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Wild Honey Lip Treatment',
    price: '$38',
    tag: 'New',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Cedar Toning Mist',
    price: '$65',
    tag: 'Organic',
    image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Beauty() {
  return (
    <div className="bg-cream-100 pt-20">
      <div
        className="relative h-72 md:h-96 flex items-end"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-12">
          <p className="section-label text-forest-300 mb-3">The Ritual</p>
          <h1 className="font-serif text-cream-100 text-5xl md:text-6xl">Beauty</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <p className="text-charcoal-400 font-sans text-sm">
            {products.length} products
          </p>
          <div className="flex gap-4">
            {['All', 'Skincare', 'Body', 'Botanical'].map((f) => (
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

      <div className="bg-forest-700 py-20 text-center">
        <p className="text-forest-300 text-xs tracking-widest uppercase font-sans mb-4">Our Promise</p>
        <h2 className="font-serif text-cream-100 text-3xl md:text-4xl mb-6 max-w-xl mx-auto leading-tight">
          Beauty that begins in the earth and ends in you.
        </h2>
        <p className="text-cream-300 max-w-md mx-auto text-sm leading-relaxed">
          No synthetic fragrances. No harmful fillers. Every formula is botanical, bioavailable, and built to work in harmony with your skin's natural intelligence.
        </p>
      </div>
    </div>
  );
}
