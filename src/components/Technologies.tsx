import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Cpu, Droplet, Zap, ArrowRight } from 'lucide-react';

const technologies = [
  {
    id: 0,
    icon: <Cpu className="w-6 h-6" />,
    title: "Alternative Protein",
    desc: "High-grade insect protein meal suitable for aquaculture, poultry, and pet feed. Rich in essential amino acids and highly digestible.",
    stat: "60% Protein Content",
    image: "/alt-protein.png" // User provided Abstract powder/texture
  },
  {
    id: 1,
    icon: <Droplet className="w-6 h-6" />,
    title: "Low FFA Oil",
    desc: "Advanced extraction technology yielding high-quality insect oil with low Free Fatty Acids. A sustainable alternative to palm and coconut oil.",
    stat: "< 1% Free Fatty Acids",
    image: "/low-ffa-oil.png" // User provided Oil/Liquid texture
  },
  {
    id: 2,
    icon: <Zap className="w-6 h-6" />,
    title: "ELGROW Unit",
    desc: "Our proprietary modular farming unit designed for automated, scalable, and climate-controlled insect rearing. Plug-and-play infrastructure.",
    stat: "95% Automation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" // Tech/Industrial
  }
];

export default function Technologies() {
  const [activeTech, setActiveTech] = useState(0);

  return (
    <section className="py-32 bg-bio-black" id="technologies">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Core <span className="text-bio-lime">Technologies</span></h2>
          <p className="text-bio-text-muted max-w-2xl">
            Our proprietary stack enables us to produce consistent, high-quality ingredients at an industrial scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Interactive List */}
          <div className="lg:col-span-5 space-y-4">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                onMouseEnter={() => setActiveTech(tech.id)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border group ${activeTech === tech.id
                    ? 'bg-white/5 border-bio-lime/50'
                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold flex items-center gap-3 ${activeTech === tech.id ? 'text-white' : 'text-bio-text-muted'}`}>
                    <span className={activeTech === tech.id ? 'text-bio-lime' : 'opacity-50'}>{tech.icon}</span>
                    {tech.title}
                  </h3>
                  <ArrowRight className={`w-5 h-5 transition-opacity lg:opacity-0 ${activeTech === tech.id ? 'lg:opacity-100 text-bio-lime' : ''}`} />
                </div>
                <p className={`text-sm leading-relaxed transition-colors mb-4 ${activeTech === tech.id ? 'text-bio-text' : 'text-bio-text-muted/50'}`}>
                  {tech.desc}
                </p>

                {/* Mobile/Tablet Inline Preview */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeTech === tech.id ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="h-48 rounded-xl relative overflow-hidden p-6 flex flex-col justify-end">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bio-black via-bio-black/50 to-transparent" />
                    <div className="relative z-10">
                      <div className="text-2xl font-bold text-white mb-1">{tech.stat}</div>
                      <div className="text-xs text-bio-text-muted">Key Metric</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Dynamic Preview */}
          <div className="hidden lg:block lg:col-span-7 relative h-[500px] rounded-3xl overflow-hidden border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-12 flex flex-col justify-end"
              >
                <img
                  src={technologies[activeTech].image}
                  alt={technologies[activeTech].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bio-black via-bio-black/20 to-transparent" />

                {/* Procedural Noise Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-block px-4 py-2 rounded-full bg-bio-lime/10 text-bio-lime border border-bio-lime/20 mb-4 font-mono text-sm">
                    Key Metric
                  </div>
                  <div className="text-6xl font-bold text-white mb-2">
                    {technologies[activeTech].stat}
                  </div>
                  <div className="text-bio-text-muted">Performance Benchmark</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
