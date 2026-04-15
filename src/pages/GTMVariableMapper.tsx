import React from 'react';
import './GTMVariableMapper.css';

const GTMVariableMapperLanding: React.FC = () => {
  return (
    <div className="gtm-landing-wrapper">
      {/* Decorative background glow */}
      <div className="gtm-bg-glow"></div>

      <main className="gtm-container">
        
        {/* --- HERO SECTION --- */}
        <section className="gtm-hero">
          <div className="gtm-badge">Google Chrome Extension</div>
          <h1>GTM Variable <span className="gtm-accent">Mapper</span></h1>
          <p className="gtm-subtitle">
            Stop the DataLayer excavation. Instantly map complex, nested ecommerce objects into ready-to-use Google Tag Manager variables.
          </p>
          
          <div className="gtm-cta-container">
            {/* Replace href with your actual Chrome Store Link once published */}
            <a href="#" className="gtm-btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" className="gtm-chrome-icon">
                <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 18A8.253 8.253 0 013.75 12c0-1.28.293-2.492.813-3.571l3.529 6.11A5.253 5.253 0 0012 17.25c1.472 0 2.8-.605 3.756-1.583L12 20.25zM17.25 12a5.25 5.25 0 00-5.25-5.25c-1.42 0-2.707.561-3.66 1.474l-2.613-4.526A8.217 8.217 0 0112 3.75c3.84 0 7.07 2.635 8.019 6.223l-5.69 3.284A5.228 5.228 0 0017.25 12zm-5.25 3.75a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
              </svg>
              Available in the Chrome Web Store
            </a>
          </div>
        </section>

        {/* --- SCREENSHOTS SHOWCASE --- */}
        <section className="gtm-showcase">
          <div className="gtm-screenshot-card">
            {<img src="public/Screenshot 2026-04-15 204626.png" className="gtm-real-screenshot" alt="Mapper UI" /> */}
            <div className="gtm-screenshot-placeholder">
              <span>App Interface Screenshot</span>
            </div>
          </div>
          <div className="gtm-screenshot-card offset-card">
            {/* REPLACE THIS DIV with: <img src="/your-image2.png" className="gtm-real-screenshot" alt="Pro UI" /> */}
            <div className="gtm-screenshot-placeholder">
              <span>Pro License UI Screenshot</span>
            </div>
          </div>
        </section>

        {/* --- FEATURES GRID --- */}
        <section className="gtm-features-section">
          <h2 className="gtm-section-title">Why you need this tool</h2>
          
          <div className="gtm-features-grid">
            <div className="gtm-feature-card">
              <div className="gtm-feature-icon">⚡</div>
              <h3>Smart Parsing</h3>
              <p>Paste any valid Tag Assistant payload, and instantly identify Event Names, Transaction IDs, Values, and Items.</p>
            </div>
            
            <div className="gtm-feature-card">
              <div className="gtm-feature-icon">🎯</div>
              <h3>Array Handling</h3>
              <p>Automatically maps exact index-based paths for complex ecommerce arrays (e.g., <code>ecommerce.items.0.item_id</code>).</p>
            </div>

            <div className="gtm-feature-card">
              <div className="gtm-feature-icon">🛡️</div>
              <h3>Unbreakable Sanitizer</h3>
              <p>Cleans up messy console outputs, missing quotes, and commented code to generate valid JSON automatically.</p>
            </div>

            <div className="gtm-feature-card">
              <div className="gtm-feature-icon">💎</div>
              <h3>Freemium Power</h3>
              <p>Extract event names completely free. Upgrade to Pro for deep nested variable mapping and 1-click CSV exports.</p>
            </div>
          </div>
        </section>

        {/* --- PROFILE SECTION --- */}
        <section className="gtm-profile-section">
          <p className="gtm-created-by">Designed & Developed by</p>
          <h3 className="gtm-creator-name">Henri Singh</h3>
          <p className="gtm-creator-title">Digital Implementation & Tracking Specialist</p>
          
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
