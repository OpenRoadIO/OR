import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Beauty from './pages/Beauty';
import Supplements from './pages/Supplements';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/OR">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
