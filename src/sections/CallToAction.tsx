import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
import { Circle } from "../components/Cirlce";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section className="py-60 overflow-hidden" ref={sectionRef}>
      <div className="container text-center">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} reverse duration={50} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle animate className="absolute left-0 -top-[400px]">
              <motion.img
                src="/assets/images/cuboid.png"
                alt=""
                className="size-[140px]"
                style={{ rotate }}
              />
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle animate className="absolute -left-[600px] -top-[70px]">
              <motion.img
                src="/assets/images/cylinder.png"
                alt=""
                className="size-[140px]"
                style={{ rotate }}
              />
            </Circle>
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
            Ready to <span className="block"> get started?</span>
          </h2>
          <p className="mx-auto text-xl lg:text-2xl text-zinc-400 mt-8 max-w-sm">
            Start building using blockchain technology, with Blockforge
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
