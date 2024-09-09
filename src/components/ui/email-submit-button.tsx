"use client";
import * as React from "react";
import { cn } from "../../lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const EmailSubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, disabled, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[1px] rounded-lg transition duration-300 group/input"
      >
        <button
          disabled={disabled}
          type={type}
          className={cn(`flex-none h-10 w-full border-none bg-zinc-800 text-white
                         shadow-input rounded-md px-3 text-sm
                         file:border-0 file:bg-transparent 
                         file:text-sm file:font-medium placeholder:text-neutral-400
                         focus-visible:outline-none focus-visible:ring-[2px]
                         focus-visible:ring-neutral-400
                         disabled:cursor-not-allowed disabled:opacity-50
                         shadow-[0px_0px_1px_1px_var(--neutral-700)]
                         group-hover/input:shadow-none transition duration-400
                         inline-block resize-none`,
                         className
                    )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
EmailSubmitButton.displayName = "EmailSubmitButton";

export { EmailSubmitButton };
