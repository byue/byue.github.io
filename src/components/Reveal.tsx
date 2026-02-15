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
  const inView = useInView(ref, { once: false, margin: "-12% 0px" });
  const reducedMotion = useReducedMotion();
  const hiddenState = reducedMotion
    ? { opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" }
    : {
        opacity: 0,
        y,
        filter: "blur(10px)",
        clipPath: "inset(0 0 100% 0)",
      };
  const visibleState = { opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hiddenState}
      animate={inView ? visibleState : hiddenState}
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
