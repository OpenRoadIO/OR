import React from 'react';
import './GTMVariableMapper.css'; 

const GTMVariableMapperLanding: React.FC = () => {
  return (
    <div className="gtm-landing-wrapper">
      <main className="gtm-container">
        
        {/* HERO SECTION */}
        <section className="gtm-hero">
          <div className="gtm-badge">Google Chrome Extension</div>
          <h1>GTM Variable <span className="gtm-accent">Mapper</span></h1>
          <p>Stop the DataLayer excavation. Instantly map complex, nested ecommerce objects into ready-to-use Google Tag Manager variables.</p>
        </section>

        {/* DEMO & SCREENSHOTS SECTION */}
        <section className="gtm-media-section">
          
          {/* Video Demo Placeholder */}
          <div className="gtm-video-placeholder">
            [ Insert Demo Video Embed Here (16:9) ]
          </div>

          {/* Screenshots Grid */}
          <div className="gtm-screenshots-grid">
            <div className="gtm-screenshot-placeholder">
              [ Insert UI Screenshot 1 ]
            </div>
            
            <div className="gtm-screenshot-placeholder">
              [ Insert Pro License UI Screenshot 2 ]
            </div>
          </div>
        </section>

        {/* DETAILED DESCRIPTION SECTION */}
        <section className="gtm-description-box">
          <h2>How It Works</h2>
          <p>GTM Variable Mapper is designed for tracking specialists and developers who waste hours manually writing dot-notation paths for nested DataLayer variables.</p>
          
          <ul className="gtm-feature-list">
            <li><strong>Smart Parsing:</strong> Paste any valid Tag Assistant payload, and the extension instantly identifies the Event Name, Transaction IDs, Values, and Items.</li>
            <li><strong>Array Handling:</strong> Automatically maps index-based paths for complex ecommerce arrays (e.g., <code>ecommerce.items.0.item_id</code>).</li>
            <li><strong>Unbreakable Sanitizer:</strong> Cleans up messy console outputs, missing quotes, and commented code to generate valid JSON automatically.</li>
            <li><strong>Freemium Model:</strong> Extract event names for free. Upgrade to the Pro tier for full nested variable mapping and CSV export capabilities.</li>
          </ul>
        </section>

        {/* CREATOR / LINKEDIN SECTION */}
        <section className="gtm-profile-section">
          <h3>Developed by Henri Singh</h3>
          <p>Digital Implementation & Tracking Specialist</p>
          
          <a 
            href="https://www.linkedin.com/in/YOUR-ID-HERE" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gtm-linkedin-btn"
          >
            Connect on LinkedIn
          </a>
        </section>

      </main>
    </div>
  );
};

export default GTMVariableMapperLanding;
