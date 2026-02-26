import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { TextReveal } from './ui/Reveal';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bio-black" id="hero">
      {/* Dynamic Organic Background */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Nature Tech Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bio-black via-bio-black/50 to-bio-black z-10" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-bio-deep-green rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-bio-lime/20 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center h-full pt-20"
      >
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-6 mb-12"
          >
            <img
              src="/Elmentoz-ezgif.com-crop.gif"
              alt="Elmentoz Logo Animation"
              className="h-24 md:h-32 w-auto mix-blend-screen opacity-90 object-contain drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            />
            <img
              src="/Elmentoz-Typo-Log.png"
              alt="Elmentoz"
              className="h-10 md:h-16 w-auto mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-normal leading-[0.9] tracking-[-0.04em] mb-8 text-white">
            <TextReveal text="Nourishing" className="block" />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-bio-lime via-white to-bio-lime pb-4">
              <TextReveal text="The Planet" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-bio-text-muted leading-relaxed mb-12"
          >
            We are industrializing insect farming to solve the global protein crisis.
            A deep-tech revolution at the intersection of sustainability and the circular economy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#solution"
              className="group relative px-8 py-4 bg-bio-lime text-bio-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(204,255,0,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover Our Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#technologies"
              className="px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm"
            >
              View Technologies
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-bio-text-muted flex flex-col items-center gap-4"
      >
        <a href="#crisis" className="flex flex-col items-center gap-4 group">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-bio-lime to-transparent group-hover:h-16 transition-all duration-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-bio-lime/70 group-hover:text-bio-lime transition-colors">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
}
