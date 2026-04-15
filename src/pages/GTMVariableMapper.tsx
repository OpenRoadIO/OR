import React from 'react';
import './GTMVariableMapper.css'; // Make sure to create and import this CSS file!

const GTMVariableMapperLanding: React.FC = () => {
  return (
    <div className="gtm-landing-wrapper">
      <main className="gtm-container">
        
        {/* 1. HERO SECTION */}
        <section className="gtm-hero">
          <div className="gtm-badge">Google Chrome Extension</div>
          <h1>GTM Variable <span className="gtm-accent">Mapper</span></h1>
          <p>Stop the DataLayer excavation. Instantly map complex, nested ecommerce objects into ready-to-use Google Tag Manager variables.</p>
        </section>

        {/* 2. DEMO & SCREENSHOTS SECTION */}
        <section className="gtm-media-section">
          
          {/* Video Demo Placeholder */}
          {/* REPLACE THIS DIV with your YouTube/Loom iframe when ready */}
          <div className="gtm-video-placeholder">
            [ Insert Demo Video Embed Here (16:9) ]
          </div>

          {/* Screenshots Grid */}
          <div className="gtm-screenshots-grid">
            {/* Screenshot 1 */}
            {/* REPLACE THIS DIV with: <img src="/your-image.png" className="gtm-real-screenshot" alt="UI Screenshot 1" /> */}
            <div className="gtm-screenshot-placeholder">
              [ Insert UI Screenshot 1 ]
            </div>
            
            {/* Screenshot 2 */}
            {/* REPLACE THIS DIV with: <img src="/your-image2.png" className="gtm-real-screenshot" alt="UI Screenshot 2" /> */}
            <div className="gtm-screenshot-placeholder">
              [ Insert Pro License UI Screenshot 2 ]
            </div>
          </div>

        </section>

        {/* 3. DETAILED DESCRIPTION SECTION */}
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

        {/* 4. CREATOR / LINKEDIN SECTION */}
        <section className="gtm-profile-section">
          <h3>Developed by Henri Singh</h3>
          <p>Digital Implementation & Tracking Specialist</p>
          
          {/* REPLACE href link with your actual LinkedIn profile URL */}
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
