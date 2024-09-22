import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 25%"],
  });

  const timelineProgress = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const timelineOpacityTransform = useTransform(timelineProgress.scrollYProgress, [0, 0.1, 0.2], [0, 0.25, 1]);

  return (
    <div className="w-full bg-black font-sans md:px-10" ref={containerRef}>
      <motion.div
        style={{
          opacity: timelineOpacityTransform,
        }}
      >
        {/*Hero Bar Goes here*/}

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-[20vh] md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-30 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[rem10]">
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-light text-white">
                  {item.title} {/*left side*/}
                </h3>
              </div>
              <div className="relative pl-20 pr-4 md:pl-1 w-full flex items-center text-white">
                {item.content}{" "} {/*right side*/}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-sky-500 via-indigo-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
