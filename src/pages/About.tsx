import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Sage Whitmore',
    title: 'Founder & Creative Director',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'River Callahan',
    title: 'Head of Formulation',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Fern Adaline',
    title: 'Lead Designer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const milestones = [
  { year: '2018', text: 'Founded in a small cabin in the Pacific Northwest with one intention: make products that deserve to exist.' },
  { year: '2020', text: 'Launched our first botanical skincare line, entirely wild-crafted and zero-waste in packaging.' },
  { year: '2022', text: 'Expanded into ethical apparel, partnering with fair-trade weavers across three continents.' },
  { year: '2024', text: 'Introduced our wellness supplements line, setting a new benchmark for transparency in the industry.' },
];

export default function About() {
  return (
    <div className="bg-cream-100 pt-20">
      <div
        className="relative h-72 md:h-[500px] flex items-end"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-16">
          <p className="section-label text-forest-300 mb-3">Our Story</p>
          <h1 className="font-serif text-cream-100 text-5xl md:text-7xl leading-tight max-w-2xl">
            Born from the <span className="italic">open road.</span>
          </h1>
        </div>
      </div>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-6">The Beginning</p>
            <h2 className="editorial-heading text-3xl md:text-4xl mb-8 max-w-md">
              A brand rooted in something real.
            </h2>
          </div>
          <div className="space-y-6 text-charcoal-500 leading-relaxed">
            <p>
              OpenRoadIO began not with a business plan, but with a question: why does living well have to feel at odds with living honestly? We were tired of beauty products that lied about their ingredients, supplements that buried their sourcing, and clothing brands that made sustainability a marketing tactic rather than a moral baseline.
            </p>
            <p>
              So we set out to build something different. A brand that trusts you enough to tell you everything — where each ingredient comes from, who made each garment, and why every formula is the way it is.
            </p>
            <p>
              We took our cue from nature: efficient, purposeful, nothing wasted. That philosophy runs through everything we make.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest-700 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-forest-300 text-xs tracking-widest uppercase font-sans mb-4">The Journey</p>
            <h2 className="font-serif text-cream-100 text-4xl">How we got here.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map(({ year, text }) => (
              <div key={year} className="border-t border-forest-500 pt-6">
                <p className="font-serif text-forest-300 text-3xl mb-4">{year}</p>
                <p className="text-cream-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Nature philosophy"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-32 bg-cream-300 hidden lg:flex items-center justify-center p-6">
              <p className="font-serif text-forest-700 text-center text-sm leading-snug italic">
                "Nature is not a backdrop. It is the truth."
              </p>
            </div>
          </div>
          <div>
            <p className="section-label mb-6">Our Philosophy</p>
            <h2 className="editorial-heading text-3xl md:text-4xl mb-8">
              Wellness is not a destination.
            </h2>
            <div className="space-y-5 text-charcoal-500 leading-relaxed">
              <p>
                We believe wellness is a daily practice rooted in how you choose to inhabit the world. It is the fabric you put against your skin, the formula you press into your cheek, the supplement you take before the sun rises.
              </p>
              <p>
                Every OpenRoadIO product is designed to slow you down, tune you in, and reconnect you to the body and the earth you came from.
              </p>
              <p>
                That is not a mission statement. It is the lens through which every decision gets made.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-cream-300">
        <div className="text-center mb-16">
          <p className="section-label mb-4">The People</p>
          <h2 className="editorial-heading text-4xl">The team behind the brand.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map(({ name, title, image }) => (
            <div key={name} className="text-center">
              <div className="relative overflow-hidden aspect-square mb-6 mx-auto max-w-xs">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-charcoal-800 text-xl mb-1">{name}</h3>
              <p className="text-charcoal-400 text-xs tracking-widest uppercase font-sans">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-200 py-20 text-center px-6">
        <p className="section-label mb-6">Join the Road</p>
        <h2 className="editorial-heading text-3xl md:text-4xl mb-8 max-w-xl mx-auto">
          Ready to live with more intention?
        </h2>
        <Link to="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
