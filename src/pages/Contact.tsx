import { useState } from 'react';
import { Mail, Instagram, Twitter, Facebook, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    'w-full bg-transparent border border-cream-400 focus:border-forest-500 outline-none px-5 py-4 text-charcoal-700 font-sans text-sm placeholder-charcoal-300 transition-colors duration-200 rounded-sm';

  return (
    <div className="bg-cream-100 pt-20">
      <div
        className="relative h-64 md:h-80 flex items-end"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/55" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-12">
          <p className="section-label text-forest-300 mb-3">Reach Out</p>
          <h1 className="font-serif text-cream-100 text-5xl md:text-6xl">Contact Us</h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="section-label mb-6">Say Hello</p>
              <h2 className="editorial-heading text-3xl mb-6">We would love to hear from you.</h2>
              <p className="text-charcoal-400 leading-relaxed text-sm">
                Whether you have a question about our products, a collaboration idea, or just want to share where your own road has taken you — our door is open.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-forest-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-sans text-charcoal-400 mb-1">Email</p>
                  <a href="mailto:hello@openroadio.com" className="text-forest-700 hover:text-forest-600 transition-colors duration-200 text-sm">
                    hello@openroadio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-forest-600" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-sans text-charcoal-400 mb-1">Studio</p>
                  <p className="text-charcoal-600 text-sm">Portland, Oregon · Pacific Northwest</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase font-sans text-charcoal-400 mb-5">Follow the Journey</p>
              <div className="flex gap-5">
                {[
                  { Icon: Instagram, label: 'Instagram', href: '#' },
                  { Icon: Twitter, label: 'Twitter', href: '#' },
                  { Icon: Facebook, label: 'Facebook', href: '#' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 border border-cream-400 hover:border-forest-500 hover:text-forest-600 text-charcoal-400 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-cream-300 px-8">
                <div className="w-16 h-16 bg-forest-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-forest-600" />
                </div>
                <h3 className="editorial-heading text-2xl mb-4">Message Received</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed max-w-sm">
                  Thank you for reaching out. One of our team will be in touch within 1-2 business days.
                </p>
                <button
                  className="btn-outline mt-8"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase font-sans text-charcoal-400">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase font-sans text-charcoal-400">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase font-sans text-charcoal-400">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>Select a topic</option>
                    <option>Product Inquiry</option>
                    <option>Order Support</option>
                    <option>Collaboration</option>
                    <option>Press & Media</option>
                    <option>General</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase font-sans text-charcoal-400">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={7}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary w-full justify-center text-center transition-opacity duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-charcoal-800 py-16 text-center px-6">
        <p className="text-forest-400 text-xs tracking-widest uppercase font-sans mb-4">Response Time</p>
        <p className="font-serif text-cream-100 text-2xl mb-3">We respond within 1-2 business days.</p>
        <p className="text-charcoal-300 text-sm">For urgent orders, please email us directly at hello@openroadio.com</p>
      </section>
    </div>
  );
}
