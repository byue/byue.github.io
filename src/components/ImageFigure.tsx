import { motion, useReducedMotion } from "framer-motion";
import type { PhotoAsset } from "../data/profile";
import { getResponsiveImageProps } from "../utils/images";

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
  const responsiveImageProps = getResponsiveImageProps(image.url, {
    sizes: "(min-width: 1024px) 34vw, (min-width: 768px) 46vw, 92vw",
    widths: [360, 480, 640, 768, 960, 1200],
    defaultWidth: 768,
    quality: 62,
  });

  return (
    <figure className={className}>
      <div className="group overflow-hidden bg-neutral-200">
        <motion.img
          src={responsiveImageProps.src}
          srcSet={responsiveImageProps.srcSet}
          sizes={responsiveImageProps.sizes}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className={imageClassName}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
          whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reducedMotion ? undefined : { scale: 1.02 }}
        />
      </div>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">{image.caption}</figcaption>
    </figure>
  );
}
