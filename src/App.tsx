import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import GTMVariableMapper from './pages/GTMVariableMapper';
import GTMDataPrivacy from './GTMDataPrivacy';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/rachel-inna" element={<Rachel />} />
            <Route path="/models/gigi" element={<Gigi />} />
            <Route path="/GTMVariableMapper" element={<GTMVariableMapper />} />
            <Route path="/GTMVariableMapper/privacy" element={<GTMDataPrivacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
