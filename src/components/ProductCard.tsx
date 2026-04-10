interface ProductCardProps {
  name: string;
  price: string;
  tag: string;
  image: string;
}

export default function ProductCard({ name, price, tag, image }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden aspect-[3/4] mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-cream-100 text-forest-700 text-xs tracking-widest uppercase font-sans px-3 py-1">
            {tag}
          </span>
        </div>
        <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <button className="btn-primary text-xs py-2 px-6">Quick View</button>
        </div>
      </div>
      <div className="px-1">
        <h3 className="font-serif text-charcoal-800 text-lg mb-1">{name}</h3>
        <p className="text-forest-600 text-sm font-sans">{price}</p>
      </div>
    </div>
  );
}
