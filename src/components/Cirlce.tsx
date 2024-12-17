import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Circle = (
  props: ComponentPropsWithRef<"div"> & { animate: boolean },
) => {
  const { className, children, animate = false } = props;
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(
          "bg-zinc-900 size-[240px] inline-flex justify-center items-center rounded-full relative",
          className,
        )}
      >
        <motion.div
          className={twMerge(
            "outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute inset-0 rounded-full border-[6px] border-transparent ",
            animate && "border-t-fuchsia-500/40",
          )}
          animate={animate && { rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        {children}
      </div>
    </div>
  );
};
