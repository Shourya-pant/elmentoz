import { motion } from 'motion/react';
import { Reveal } from './ui/Reveal';

export default function CEOMessage() {
  return (
    <section className="py-32 bg-bio-dark relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 flex justify-center md:justify-end shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-bio-lime/20 blur-3xl rounded-[40px] scale-95" />
              <div className="w-[300px] h-[380px] md:w-[420px] md:h-[520px] xl:w-[480px] xl:h-[600px] rounded-[40px] overflow-hidden border-4 border-bio-lime/50 p-2 shadow-[0_0_50px_rgba(204,255,0,0.1)] relative z-10 bg-bio-black">
                <div className="w-full h-full rounded-[32px] overflow-hidden">
                  <img
                    src="/j-DAS.png"
                    alt="Dr. Jayashankar Das"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-7/12 text-center md:text-left"
          >
            <Reveal width="100%">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-serif font-normal tracking-[-0.04em] mb-12 leading-[0.9] text-white">
                "Every 10 seconds, a child dies from hunger. Our agrifood systems are broken and demand urgent repair. Embracing a circular economy approach, we can restore our land to sustainably produce the food we need."
              </h2>
            </Reveal>

            <Reveal width="100%" delay={0.3}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6 print:hidden">
                <div className="w-16 h-[2px] bg-bio-lime/50 hidden md:block mt-4" />
                <div>
                  <div className="text-2xl md:text-3xl font-serif text-white mb-2">
                    Dr. Jayashankar Das
                  </div>
                  <div className="text-xs md:text-sm text-bio-lime uppercase tracking-[0.2em] font-bold">
                    Founder & CEO, Elmentoz Research
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
