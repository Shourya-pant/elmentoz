import { motion } from 'motion/react';
import { Globe, Leaf, Recycle } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export default function Impact() {
  return (
    <section className="py-32 bg-bio-deep-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Aligned with <br />
                <span className="text-bio-lime italic font-serif">Global Goals</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl md:text-2xl text-bio-text-muted mb-16 leading-relaxed">
                Our mission goes beyond profit. We are directly contributing to the United Nations Sustainable Development Goals, creating a blueprint for a resilient future.
              </p>
            </Reveal>

            <div className="space-y-10">
              {[
                { title: "Zero Hunger", desc: "Scaling affordable, high-quality protein for a growing population.", icon: <Globe /> },
                { title: "Climate Action", desc: "Drastically reducing greenhouse gas emissions compared to traditional livestock.", icon: <Leaf /> },
                { title: "Responsible Consumption", desc: "Turning waste into value through a true circular economy.", icon: <Recycle /> }
              ].map((item, i) => (
                <div key={i}>
                  <Reveal delay={0.2 + i * 0.1} width="100%">
                    <div className="flex gap-8 items-start">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-bio-lime shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h4>
                        <p className="text-bio-text-muted text-lg md:text-xl leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] bg-bio-black/30 rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bio-black via-bio-deep-green/10 to-bio-black z-0" />

            {/* Staggered SDG Logos Container */}
            <div className="relative z-10 flex-1 w-full flex items-center justify-center pt-4 pb-12">
              <div className="relative w-full max-w-[400px] h-[350px]">

                {/* Goal #2: Zero Hunger */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-0 left-0 w-32 md:w-36 hover:scale-105 transition-transform duration-300 drop-shadow-2xl z-20"
                >
                  <img src="/Sustainable_Development_Goal_02ZeroHunger.svg.png" alt="SDG 2 Zero Hunger" className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
                </motion.div>

                {/* Goal #13: Climate Action */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 md:w-44 hover:scale-105 transition-transform duration-300 drop-shadow-2xl z-30"
                >
                  <img src="/Sustainable_Development_Goal_13Climate.svg.png" alt="SDG 13 Climate Action" className="w-full h-auto rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.5)]" />
                </motion.div>

                {/* Goal #12: Responsible Consumption */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-0 right-0 w-32 md:w-36 hover:scale-105 transition-transform duration-300 drop-shadow-2xl z-20"
                >
                  <img src="/Sustainable_Development_Goal_12ResponsibleConsumption.svg.png" alt="SDG 12 Responsible Consumption" className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
                </motion.div>

              </div>
            </div>

            <div className="relative z-10 glass-panel p-6 rounded-xl border-l-4 border-bio-lime backdrop-blur-md">
              <p className="text-lg font-serif italic text-white shadow-md leading-relaxed">
                "We are not just feeding the world; we are healing it."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
