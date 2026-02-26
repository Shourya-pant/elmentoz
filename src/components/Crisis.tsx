import { motion, useScroll, useTransform, useInView, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.5, // Faster duration
        ease: "circOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return controls.stop;
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
}

export default function Crisis() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const stats = [
    { 
      value: 144000, 
      suffix: " MT",
      label: "Food lost every hour", 
      sub: "A staggering waste of resources that could feed nations." 
    },
    { 
      value: 783, 
      suffix: " Million",
      label: "People go hungry", 
      sub: "While we waste 1/3 of global food production." 
    },
    { 
      value: 80, 
      suffix: "%",
      label: "Cropland feeds animals", 
      sub: "An inefficient system prioritizing livestock over humans." 
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-bio-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold"
          >
            The Global <span className="text-bio-amber italic font-serif">Crisis</span>
          </motion.h2>
          <div className="h-1 w-32 bg-bio-amber mt-6" />
        </div>

        <div className="relative w-full">
          <motion.div style={{ x }} className="flex gap-12 px-6 md:px-24 w-max">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="w-[85vw] md:w-[60vw] lg:w-[40vw] shrink-0 glass-panel p-12 md:p-16 rounded-[2rem] border-l-8 border-bio-amber relative group hover:bg-bio-amber/5 transition-colors duration-500 flex flex-col justify-center"
              >
                <div className="absolute top-8 right-8 text-bio-amber/10 font-mono text-8xl font-bold opacity-20 select-none">
                  0{i + 1}
                </div>
                <h3 className="text-6xl md:text-8xl font-bold text-bio-text mb-6 tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-2xl md:text-3xl text-bio-amber font-medium mb-4">{stat.label}</p>
                <p className="text-xl text-bio-text-muted leading-relaxed max-w-md">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
