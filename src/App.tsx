import React from 'react';
import { Heart, Brain, Users, Video, Calendar, ChevronRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;