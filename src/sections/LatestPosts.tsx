import { Card } from "../components/Card";
import type { CollectionEntry } from "astro:content";
import { getPostColorFromCategory } from "../utils/postutils";
import { Tag } from "../components/Tag";
import { CutCornerButton } from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export const LatestPosts = (props: {
  latestPosts: CollectionEntry<"blog">[];
}) => {
  const { latestPosts } = props;
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });
  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);
  return (
    <section className="py-60">
      <div className="container">
        <div className=" mx-auto max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-center">
            Your portal to everything blockchain.
          </h2>
          <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
            Keep up with the newest trends, updates, insights in the blockchain
            world, updated weekly.
          </p>
        </div>
        {/* Cards */}
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Odd index Cards */}
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(postIndex % 2 && "md:hidden")}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              ),
            )}
          </div>
          {/* Even index Cards */}
          <motion.div
            className="hidden md:flex md:flex-col md:gap-8 mt-16"
            ref={targetRef}
            style={{
              marginTop,
            }}
          >
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(postIndex % 2 != 1 && "md:hidden")}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              ),
            )}
          </motion.div>
        </div>
        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};
