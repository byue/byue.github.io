import { type ReactNode, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={
        reducedMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y,
              filter: "blur(10px)",
              clipPath: "inset(0 0 100% 0)",
            }
      }
      animate={
        inView || reducedMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" }
          : undefined
      }
      transition={{
        duration: reducedMotion ? 0.01 : 0.85,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
