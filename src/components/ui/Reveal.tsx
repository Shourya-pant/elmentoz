import { motion, useInView, useAnimation } from 'motion/react';
import { useEffect, useRef, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  duration = 0.5,
  y = 75,
  className = ""
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const TextReveal = ({ text, className = "" }: { text: string, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className={className} ref={ref}>
      <span className="sr-only">{text}</span>
      <motion.span 
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"} 
        transition={{ staggerChildren: 0.05 }} 
        aria-hidden
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.2em] align-bottom pb-1">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "100%" },
                visible: { y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </div>
  );
};
