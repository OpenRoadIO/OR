import ProductCard from '../components/ProductCard';

const products = [
  {
    name: 'Adaptogen Daily Blend',
    price: '$78',
    tag: 'Bestseller',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Forest Mushroom Complex',
    price: '$95',
    tag: 'New',
    image: 'https://images.pexels.com/photos/5945559/pexels-photo-5945559.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Green Earth Powder',
    price: '$62',
    tag: 'Essential',
    image: 'https://images.pexels.com/photos/6550840/pexels-photo-6550840.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sleep & Restore Tincture',
    price: '$88',
    tag: 'Limited',
    image: 'https://images.pexels.com/photos/4047742/pexels-photo-4047742.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Clarity Nootropic Blend',
    price: '$110',
    tag: 'New',
    image: 'https://images.pexels.com/photos/4021783/pexels-photo-4021783.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Mineral Replenishment',
    price: '$55',
    tag: 'Organic',
    image: 'https://images.pexels.com/photos/3626748/pexels-photo-3626748.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Supplements() {
  return (
    <div className="bg-cream-100 pt-20">
      <div
        className="relative h-72 md:h-96 flex items-end"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-12">
          <p className="section-label text-forest-300 mb-3">The Nourishment</p>
          <h1 className="font-serif text-cream-100 text-5xl md:text-6xl">Supplements</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <p className="text-charcoal-400 font-sans text-sm">
            {products.length} formulas
          </p>
          <div className="flex gap-4">
            {['All', 'Adaptogens', 'Nootropics', 'Minerals'].map((f) => (
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

      <div className="bg-cream-200 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { number: '100%', label: 'Third-Party Tested' },
            { number: 'Zero', label: 'Synthetic Additives' },
            { number: 'Wild-Crafted', label: 'Botanicals Used' },
          ].map(({ number, label }) => (
            <div key={label}>
              <p className="font-serif text-forest-700 text-4xl mb-2">{number}</p>
              <p className="text-charcoal-400 text-xs tracking-widest uppercase font-sans">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
