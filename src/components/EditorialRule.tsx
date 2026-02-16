import { motion, useReducedMotion } from "framer-motion";

type EditorialRuleProps = {
  className?: string;
};

export function EditorialRule({ className }: EditorialRuleProps) {
  const reducedMotion = useReducedMotion();
  const resolvedClassName = className ? `block ${className}` : "block";

  return (
    <motion.span
      aria-hidden="true"
      className={resolvedClassName}
      initial={reducedMotion ? { opacity: 1 } : { scaleX: 0, opacity: 1, originX: 0 }}
      whileInView={reducedMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1, originX: 0 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: reducedMotion ? 0.01 : 1.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left center" }}
    />
  );
}
