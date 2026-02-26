import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Crisis from './components/Crisis';
import Solution from './components/Solution';
import Technologies from './components/Technologies';
import Products from './components/Products';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import CEOMessage from './components/CEOMessage';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-bio-black min-h-screen text-bio-text selection:bg-bio-lime selection:text-bio-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-bio-lime origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-bio-black/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center transition-all">
        <a href="#hero" className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/Elmentoz-ezgif.com-crop.gif"
            alt="Elmentoz Logo Animation"
            className="h-10 w-auto mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <img
            src="/Elmentoz-Typo-Log.png"
            alt="Elmentoz"
            className="h-5 w-auto mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity mt-1"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {['Crisis', 'Solution', 'Technologies', 'Products', 'Impact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-bio-text-muted hover:text-bio-lime transition-colors uppercase tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#footer"
            className="px-6 py-2 border border-white/20 rounded-full text-sm text-white hover:bg-white hover:text-black transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile/Tablet Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-bio-black pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Crisis', 'Solution', 'Technologies', 'Products', 'Impact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-bio-lime transition-colors uppercase tracking-wide"
                >
                  {item}
                </a>
              ))}
              <a
                href="#footer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-bio-lime text-bio-black font-bold rounded-full inline-block"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <div id="hero"><Hero /></div>
        <div id="crisis"><Crisis /></div>
        <div id="solution"><Solution /></div>
        <div id="technologies"><Technologies /></div>
        <div id="products"><Products /></div>
        <div id="impact"><Impact /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="ceo"><CEOMessage /></div>
        <div id="careers"><Careers /></div>
      </main>

      <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;
