import { motion } from 'framer-motion';

export default function GTMVariableMapper() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-20 px-6 max-w-4xl mx-auto"
    >
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Stop Digging Through the DataLayer. Start Mapping in Seconds.
        </h1>
        <p className="text-xl text-gray-600">
          The ultimate Chrome Extension for GTM Specialists. Extract, sanitize, and copy complex variable paths from any DataLayer or eventModel with one click.
        </p>
      </header>

      <section className="mb-20">
        <img src="gtm-mapper-logo.jpg" alt="GTM Variable Mapper" className="w-full rounded-lg shadow-xl mb-12" />
        
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Why GTM Variable Mapper?</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">The "Unbreakable" Parser:</h3>
            <p className="text-gray-600">Paste messy code, GTAG arrays, or even Tag Assistant snippets. We clean it and find the paths automatically.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Universal Support:</h3>
            <p className="text-gray-600">Built specifically for GA4, Shopify, WooCommerce, and custom eventModel schemas.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">One-Click Clipboard:</h3>
            <p className="text-gray-600">No more typing ecommerce.items.0.item_id. Just click the path and paste it directly into GTM.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Built by an Analyst, for Analysts:</h3>
            <p className="text-gray-600">Designed to shave hours off your container setup and debugging.</p>
          </div>
        </div>
      </section>

      <section className="text-center p-12 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-8">Download Section</h2>
        <h3 className="text-xl font-semibold mb-6">Get the Extension</h3>
        
        <div className="mb-12">
            <a href="#" className="btn-disabled" onClick={(e) => { e.preventDefault(); alert('We are currently under review by Google! Follow me on LinkedIn for the launch alert.'); }}>
                ⏬ Download from Chrome Web Store
            </a>
            <p className="mt-4 text-sm text-gray-500 italic">Status: ⏳ Coming Soon — We are currently in the final review stage with Google!</p>
        </div>
        
        <div className="border-t pt-8">
          <h3 className="text-xl font-bold mb-4">Want to be the first to get Pro access?</h3>
          <p className="text-gray-600 mb-6">Enter your email below to get an exclusive 50% Discount Code the moment we go live.</p>
          <div className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-3 border border-gray-300 rounded-l-lg w-64" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700">Get 50% Discount</button>
          </div>
        </div>
      </section>

      <style>{`
        .btn-disabled {
            background-color: #cccccc;
            color: #666666;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 5px;
            cursor: not-allowed;
            display: inline-block;
            font-weight: bold;
        }
      `}</style>
    </motion.div>
  );
}