import { motion } from 'motion/react';
import { Reveal } from './ui/Reveal';

export default function Products() {
  return (
    <section className="py-32 bg-bio-deep-green relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bio-black/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <Reveal>
            <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif font-normal tracking-[-0.04em] leading-[0.9] mb-6 text-white/90">Our <span className="text-bio-lime">Products</span></h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden"
          >
            <img
              src="/Elgrowpremium_proteina_sustainable_highprotein_fee_delpmaspu.png"
              alt="ELGROW Premium Protein"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bio-black via-bio-black/50 to-bio-black/10 z-10 transition-colors duration-500 group-hover:bg-bio-black/30" />
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-10" />

            <div className="absolute bottom-0 left-0 p-10 z-20 w-full bg-gradient-to-t from-bio-black to-transparent">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-3xl font-bold">ELGROW <br />Premium Protein</h3>
                <span className="text-bio-amber font-mono text-xl">01</span>
              </div>
              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                <p className="text-bio-text-muted pt-4 border-t border-white/10">
                  A sustainable, high-protein feed ingredient derived from Black Soldier Fly larvae.
                  Perfect for aquaculture and livestock, offering a superior amino acid profile.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden"
          >
            <img
              src="/Elgrowoilrich_in_lauric_acid_this_insect_oil_is_a__delpmaspu.png"
              alt="ELGROW Oil"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bio-black via-bio-black/50 to-bio-black/10 z-10 transition-colors duration-500 group-hover:bg-bio-black/30" />
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-10" />

            <div className="absolute bottom-0 left-0 p-10 z-20 w-full bg-gradient-to-t from-bio-black to-transparent">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-3xl font-bold">ELGROW <br />Oil</h3>
                <span className="text-bio-lime font-mono text-xl">02</span>
              </div>
              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                <p className="text-bio-text-muted pt-4 border-t border-white/10">
                  Rich in lauric acid, this insect oil is a powerful energy source for animals
                  and a sustainable alternative to coconut and palm oils in industrial applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
