import { motion } from 'motion/react';
import { ArrowDown, Clock, CloudFog, Zap, Leaf } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export default function Solution() {
  return (
    <section className="py-32 bg-bio-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bio-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal width="100%" className="flex justify-center">
            <h2 className="text-bio-lime font-mono text-sm tracking-widest uppercase mb-4">
              The Elmentoz Solution
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.1} className="flex justify-center">
            <h3 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-normal tracking-[-0.04em] leading-[0.9] mb-8 text-white">
              Nature's Most Efficient <br />
              <span className="text-bio-lime">Bioconverter</span>
            </h3>
          </Reveal>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

          {/* Main Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-panel p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden group flex flex-col justify-between min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bio-lime/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

            {/* Added Hover Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="/spider-flu.png"
                alt="Black Soldier Fly"
                className="w-full h-full max-md:object-contain max-md:object-right-bottom object-cover object-[90%_center] opacity-15 md:opacity-10 group-hover:max-md:opacity-100 group-hover:opacity-60 scale-105 group-hover:scale-100 transition-all duration-1000 origin-right"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bio-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-bio-lime/20 flex items-center justify-center text-bio-lime mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg group-hover:text-bio-lime transition-colors duration-500">Black Soldier Fly Technology</h4>
              <p className="text-lg md:text-xl text-bio-text-white max-w-xl leading-relaxed drop-shadow-md bg-bio-black/30 md:bg-transparent p-4 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none border border-white/5 md:border-transparent">
                We harness the incredible efficiency of BSF larvae to convert organic waste into high-value protein and oil. A zero-waste process that mimics nature's own recycling system.
              </p>
            </div>
            <div className="relative z-10 mt-8 transition-transform duration-700 group-hover:translate-x-2">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-bio-lime text-bio-lime text-sm font-bold uppercase tracking-wider bg-bio-black/50 backdrop-blur-md shadow-[0_0_20px_rgba(204,255,0,0.2)] group-hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-shadow">
                Circular Economy
              </div>
            </div>
            {/* Abstract Visual */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[60%] bg-bio-lime/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>

          {/* Carbon Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-bio-lime/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bio-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-6 right-6 text-white/5 group-hover:text-bio-lime/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <CloudFog className="w-16 h-16 md:w-20 md:h-20" />
            </div>

            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-bio-black border border-white/10 flex items-center justify-center shrink-0">
                    <CloudFog className="w-4 h-4 text-bio-lime" />
                  </div>
                  <div className="text-sm font-bold text-bio-text-muted uppercase tracking-wider group-hover:text-bio-lime transition-colors">Carbon Footprint</div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500">1 <span className="text-2xl font-normal text-bio-text-muted">kg</span></div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-bio-lime font-bold">
                  <div className="w-8 h-8 rounded-full bg-bio-lime/10 flex items-center justify-center">
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </div>
                  <span className="text-lg">84% vs Traditional</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Time Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-[2rem] border border-white/5 hover:border-bio-amber/50 hover:shadow-[0_0_30px_rgba(255,191,0,0.15)] transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bio-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-6 right-6 text-white/5 group-hover:text-bio-amber/20 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500">
              <Clock className="w-16 h-16 md:w-20 md:h-20" />
            </div>

            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-bio-black border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-bio-amber" />
                  </div>
                  <div className="text-sm font-bold text-bio-text-muted uppercase tracking-wider group-hover:text-bio-amber transition-colors">Production Cycle</div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500">14 <span className="text-2xl font-normal text-bio-text-muted">Days</span></div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-bio-amber font-bold">
                  <div className="w-8 h-8 rounded-full bg-bio-amber/10 flex items-center justify-center">
                    <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </div>
                  <span className="text-lg">10x Faster</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Land Use Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-3 glass-panel p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-bio-lime/50 hover:shadow-[0_0_40px_rgba(204,255,0,0.1)] transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-bio-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
              <div className="w-16 h-16 rounded-full bg-bio-deep-green border border-bio-lime/20 flex items-center justify-center text-bio-lime shrink-0 group-hover:scale-110 group-hover:bg-bio-lime group-hover:text-bio-black transition-all duration-500 shadow-[0_0_15px_rgba(204,255,0,0.2)] group-hover:shadow-[0_0_30px_rgba(204,255,0,0.6)]">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 group-hover:text-bio-lime transition-colors duration-300">Minimal Land Usage</h4>
                <p className="text-bio-text-muted text-lg md:text-xl md:max-w-md group-hover:text-white transition-colors duration-300">Vertical farming allows us to produce protein with 99% less land than beef.</p>
              </div>
            </div>

            <div className="text-left md:text-right shrink-0 relative z-10 w-full md:w-auto pt-6 md:pt-0 border-t border-white/10 md:border-transparent mt-4 md:mt-0">
              <div className="text-5xl md:text-6xl font-bold text-white group-hover:-translate-y-1 transition-transform duration-500">99%</div>
              <div className="text-bio-lime text-sm uppercase tracking-wider font-bold mt-2">Less Land Required</div>
            </div>

            {/* Background flourish */}
            <div className="absolute -right-10 -bottom-10 text-white/5 group-hover:scale-150 group-hover:text-white/10 group-hover:rotate-45 transition-all duration-1000">
              <Leaf className="w-64 h-64" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
