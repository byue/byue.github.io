import { motion, useReducedMotion } from "framer-motion";
import type { PhotoAsset } from "../data/profile";

type ImageFigureProps = {
  image: PhotoAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ImageFigure({
  image,
  className,
  imageClassName,
  priority = false,
}: ImageFigureProps) {
  const reducedMotion = useReducedMotion();

  return (
    <figure className={className}>
      <div className="group overflow-hidden bg-neutral-200">
        <motion.img
          src={image.url}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          className={imageClassName}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
          whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reducedMotion ? undefined : { scale: 1.02 }}
        />
      </div>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">{image.caption}</figcaption>
    </figure>
  );
}
