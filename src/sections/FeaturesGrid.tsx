import { useRef } from "react";
import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";
import { motion, useScroll, useTransform } from "framer-motion";

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
];

export const FeaturesGrid = () => {
  // Scroll animations for first 2 Images
  const torusKnotRef = useRef(null);
  const firstHemisphereRef = useRef(null);
  const { scrollYProgress: torusKnotScrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ["start end", "end start"],
  });
  const torusKnotTraslateY = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [100, -100],
  );
  const torusKnotRotate = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [30, -30],
  );
  const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ["start end", "end start"],
  });
  const firstHemisphereTraslateY = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [50, -50],
  );
  const firstHemisphereRotate = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [-20, -50],
  );
  // Scroll animations for Second 2 Images
  const coneRef = useRef(null);
  const { scrollYProgress: coneScrollYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });
  const coneTraslateY = useTransform(coneScrollYProgress, [0, 1], [100, -100]);
  const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]);
  const secondHemisphereRef = useRef(null);
  const { scrollYProgress: secondHemisphereScrollYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });
  const secondHemisphereTraslateY = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [50, -50],
  );
  const secondHemisphereRotate = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [-20, 10],
  );

  return (
    <section className=" py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          {/* 1. Empowering the future */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Content */}
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of Blockchian.
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                BlockForge provides robust and secure infrastructure to support
                the next generation of decentralized applications.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-fuchsia-500/10">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item} </span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            {/* image */}
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <motion.img
                  src="/assets/images/torus-knot.png"
                  alt="Torus Knot 3D Image"
                  className="size-96 max-w-none"
                  ref={torusKnotRef}
                  style={{
                    translateY: torusKnotTraslateY,
                    rotate: torusKnotRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D Image"
                  className="absolute size-96 max-w-none top-3/4 -z-10 scale-x-[-1]"
                  ref={firstHemisphereRef}
                  style={{
                    translateY: firstHemisphereTraslateY,
                    rotate: firstHemisphereRotate,
                  }}
                />
              </div>
            </div>
          </div>

          {/*2. Blockforge Leads the way*/}
          <div className="grid md:grid-cols-3 gap-8">
            {/* images */}
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0`">
                <motion.img
                  src="/assets/images/cone.png"
                  alt="Cone 3D shape"
                  className="size-96  rotate-12 max-w-none"
                  ref={coneRef}
                  style={{ translateY: coneTraslateY, rotate: coneRotate }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D shape"
                  className="absolute top-3/4 -z-10"
                  ref={secondHemisphereRef}
                  style={{
                    translateY: secondHemisphereTraslateY,
                    rotate: secondHemisphereRotate,
                  }}
                />
              </div>
            </div>
            {/* Content */}
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforge leads the way
              </h2>
              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p>
                  BlockForge is dedicated to supporting the evolution of Web3
                  applications by delivering the necessary infrastructure and
                  security for Web3.
                </p>
                <p>
                  Blockforge champions Web3 for everyone. As a decentralized
                  blockchain scaling platform, Blockforge enables developers to
                  create scalable, user-friendly dApps with low costs and robust
                  security.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
