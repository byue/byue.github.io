import { motion, useReducedMotion } from "framer-motion";

type EditorialRuleProps = {
  className?: string;
};

export function EditorialRule({ className }: EditorialRuleProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={className}
      initial={reducedMotion ? { opacity: 1 } : { scaleX: 0, opacity: 0.4 }}
      whileInView={reducedMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left" }}
    />
  );
}
