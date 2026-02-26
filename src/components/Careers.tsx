import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export default function Careers() {
  return (
    <section className="py-32 bg-bio-black relative" id="careers">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-24 rounded-[3rem] border border-white/10 relative overflow-hidden group"
        >
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
            alt="Lab Environment"
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bio-black/80 via-bio-black/60 to-bio-black/80" />

          <Reveal width="100%" className="relative z-10 flex justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-normal tracking-[-0.04em] leading-[0.9] text-white mb-8">
              Find your place in <br />
              <span className="text-bio-lime">fixing the food system.</span>
            </h2>
          </Reveal>

          <Reveal width="100%" delay={0.1} className="relative z-10 flex justify-center">
            <p className="text-xl text-bio-text-muted mb-10 max-w-2xl mx-auto">
              We are looking for biologists, engineers, and visionaries who are ready to build the future of protein.
            </p>
          </Reveal>

          <Reveal width="100%" delay={0.2} className="relative z-10 flex justify-center">
            <a
              href="mailto:careers@elmentoz.com"
              className="group relative px-8 py-4 bg-white text-bio-black font-bold rounded-full overflow-hidden transition-all hover:bg-bio-lime inline-block"
            >
              <span className="relative flex items-center gap-2">
                View Open Positions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}
