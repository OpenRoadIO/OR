import React from 'react';
// Original import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
//temp redirect
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
// -- Components --
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// -- Main Website Pages --
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Beauty from './pages/Beauty';
import Supplements from './pages/Supplements';
import About from './pages/About';
import Contact from './pages/Contact';
import Models from './pages/Models';
import Rachel from './pages/models/Rachel';
import Inna from './pages/models/Inna';
import Gigi from './pages/models/Gigi';

// -- GTM Extension Pages --
import GTMVariableMapper from './pages/GTMVariableMapper';
import GTMDataPrivacy from "./pages/privacy"; 


// 1. We create an inner component to handle the layout and URL checking
const AppContent = () => {
  const location = useLocation();
  
  // Check if the user is on the new GTM landing page
 const isGTMLandingPage = location.pathname.startsWith('/GTMVariableMapper');

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hide Navbar ONLY on the GTM Landing Page */}
      {!isGTMLandingPage && <Navbar />}
      
      <main className="flex-1">
        <Routes>
          {/* Your Original Routes */}
          {/*<Route path="/" element={<Home />} />*/}
          {/* 👇 TEMPORARY REDIRECT 👇 */}
          <Route path="/" element={<Navigate to="/GTMVariableMapper/privacy" replace />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/rachel-inna" element={<Rachel />} />
          <Route path="/models/gigi" element={<Gigi />} />
          
          {/* Your New GTM Routes */}
          <Route path="/GTMVariableMapper" element={<GTMVariableMapper />} />
          <Route path="/GTMVariableMapper/privacy" element={<GTMDataPrivacy />} />
        </Routes>
      </main>

      {/* Hide Footer ONLY on the GTM Landing Page */}
      {!isGTMLandingPage && <Footer />}
      
    </div>
  );
};

// 2. The main App wraps everything in your HashRouter
function App() {
  return (
    <Router basename="/OR/">
      <AppContent />
    </Router>
  );
}

export default App;
