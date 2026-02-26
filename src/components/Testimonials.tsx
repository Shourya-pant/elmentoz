import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Quote } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const testimonials = [
  {
    quote: "We have realised the impact Elmentoz is trying to bring through its groundbreaking work in CO2 reduction and minimising water footprints through industrialising insect protein in a sustainable manner",
    author: "Sylvie Russell",
    role: "COO, Cambridge Cleantech, Cambridge, UK",
    image: "/sylvie-russel.png"
  },
  {
    quote: "Elmentoz moves with a great vision in India addressing food security challenges and pioneering waste management solutions.",
    author: "Dr. Johan Frostegard",
    role: "Professor of Medicine, Karolinska Institute, Stockholm, Sweden",
    image: "/johan frostegard.jpg"
  },
  {
    quote: "Glad to see the cleantech startup Elmentoz Research for their innovative use of BSF protein, reducing import reliance of animal feed protein and promoting sustainability in India",
    author: "Dr. Mrityunjay Suar",
    role: "CEO, KIIT-TBI & Chairman, BCKIC, PSA, Bhubaneswar",
    image: "/mritunjay saur.jpg"
  },
  {
    quote: "The company specialising in alternative protein is not only contributing to a sustainable future and addressing food security challenges but also making strides in introducing innovative poultry feed solutions.",
    author: "Debadatta Sahu",
    role: "Managing Director, GCCPL, Bhubaneswar, IND",
    image: "/debadatta sahu.jpg"
  },
  {
    quote: "I am very much impressed with strong proteomics team of Elmentoz working on AMP-fortified insect protein solutions for sustainable poultry and aqua feed.",
    author: "Dr Sachin Kote",
    role: "Group Leader, Clinical Peptidomics, International Centre for Cancer Vaccine Science, Poland",
    image: "/sachin kote.png"
  },
  {
    quote: "At the forefront of sustainable aqua solutions, Elmentoz offers nutrient-rich feed with insect protein,promoting optimal health and maximising productivity across the entire aquaculture segment.",
    author: "Ralph Rosell",
    role: "COO, Nordia Fresh",
    image: "/ralph rossel.png"
  },
  {
    quote: "I am thrilled to see innovations in the Indian cleantech sector, where Elmentoz is tackling food security issues with alternative feed protein, restoring land, and transforming waste management.",
    author: "Dr. Rajiv Ahuja",
    role: "Director, IIT ROPAR",
    image: "/rajiv ahuja.png"
  },
  {
    quote: "In a world where protein security is crucial, Elmentoz’s insect-derived proteins provide a stable and sustainable food source, mitigating protein shortages. Their biodiesel innovations enhance energy security, reducing fossil fuel dependence and promoting sustainability. This dual approach safeguards food and energy supplies, fortifying the planet’s climate resilience.",
    author: "Prof. Leon Schurgers",
    role: "Vice-chair of the department of Biochemistry, CARIM, Germany",
    image: "/leon schrugers.png"
  },
  {
    quote: "Having followed Elmentoz’s journey, I can attest to their revolutionary impact on sustainability. By developing insect-based animal feed proteins and biodiesel, they significantly enhance carbon resilience and promote a greener future. Their innovative approach secures a sustainable supply of both protein and energy, essential for global resilience.",
    author: "Dr. Shailesh Samal",
    role: "Founder and CEO, Inflannova, Sweden",
    image: "/shailesh samal.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-bio-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* Text Content - Left Side on Desktop */}
          <div className="w-full lg:w-4/12 text-center lg:text-left">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Global <br className="hidden lg:block" /><span className="text-bio-lime italic font-serif">Recognition</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-bio-text-muted mb-12 leading-relaxed">
                Leading experts and institutions recognize our contribution to the future of food systems and sustainability.
              </p>
            </Reveal>
          </div>

          {/* Slider - Right Side on Desktop */}
          <div className="w-full lg:w-8/12 w-full flex items-center justify-center relative mt-4 lg:mt-0">
            {/* Custom Navigation Button - Prev */}
            <div className="hidden sm:flex swiper-button-prev-custom w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-full items-center justify-center cursor-pointer hover:bg-white/10 hover:border-bio-lime/50 transition-all group shadow-xl ml-0 mr-4 shrink-0 relative z-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-bio-lime"><path d="m15 18-6-6 6-6" /></svg>
            </div>

            <Reveal delay={0.2} className="w-full max-w-full flex justify-center">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px]"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i} className="flex items-center justify-center">
                    <div className="glass-panel p-8 md:p-14 rounded-[32px] bg-bio-black border border-white/20 shadow-2xl w-full h-[480px] md:h-[540px] flex flex-col justify-between">
                      <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar">
                        <Quote className="text-bio-lime w-16 h-16 mb-8 opacity-80" />
                        <p className="text-lg md:text-xl xl:text-2xl leading-relaxed text-white">"{t.quote}"</p>
                      </div>
                      <div className="flex items-center gap-5 mt-8 pt-8 border-t border-white/10 shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-28 rounded-full overflow-hidden border-2 border-bio-lime flex-shrink-0">
                          <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-white text-lg md:text-2xl truncate">{t.author}</div>
                          <div className="text-sm md:text-lg text-bio-lime mt-1 line-clamp-2 leading-tight">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Reveal>

            {/* Custom Navigation Button - Next */}
            <div className="hidden sm:flex swiper-button-next-custom w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-full items-center justify-center cursor-pointer hover:bg-white/10 hover:border-bio-lime/50 transition-all group shadow-xl ml-4 mr-0 shrink-0 relative z-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-bio-lime"><path d="m9 18 6-6-6-6" /></svg>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 32px;
          background: #000; /* Force fully opaque background behind the card to hide stacked text */
        }
        .swiper-slide-shadow {
           background: rgba(0,0,0,0.8);
        }
        .swiper-pagination-bullet {
          background: #CCFF00 !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper {
          padding-bottom: 50px !important;
          padding-top: 20px !important;
          overflow: visible !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(204, 255, 0, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(204, 255, 0, 0.8);
        }
      `}</style>
    </section>
  );
}
