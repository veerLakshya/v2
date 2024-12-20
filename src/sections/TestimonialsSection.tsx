import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "The user experience is phenomenal and the support team is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: "Product Manager - Blocklink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It\'s a game-changer for our team!",
    name: "Noel Baldwin",
    title: "Lead Developer - BitBridge",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The integration process was seamless, and the performance improvements were beyond our expectations.",
    name: "Harry Bender",
    title: "CTO - CryptoSolutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((data, index) => (
            <motion.blockquote
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={
                {
                  // once: true
                }
              }
              transition={{
                delay: 0.5 * index,
                ease: "easeInOut",
                duration: 1,
              }}
              className={twMerge(index === 2 ? "md:hidden lg:block" : "", "")}
            >
              <p className="font-heading text-3xl lg:text-4xl font-black">
                &ldquo;{data.text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  {/* Image */}
                  <div className="">
                    <div
                      className="size-16 bg-zinc-700 rounded-full"
                      style={{
                        backgroundImage: `url(${data.avatarImage})`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </div>
                  {/* Name and role */}
                  <div className="">
                    <div className="text-lg not-italic font-black">
                      {data.name}
                    </div>
                    <div className="text-zinc-400 not-italic">{data.title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
