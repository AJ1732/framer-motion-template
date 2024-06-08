import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const PageScroll = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"],
  );

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"],
  );

  return (
    <main>
      <section className="flex h-dvh items-start justify-center pt-20">
        <h2 className="text-5xl font-thin">Scroll Down</h2>
      </section>
      {/* TEXT SCROLL ANIMATION */}
      <section ref={textRef} className="mb-10 flex flex-col gap-10">
        <motion.h1
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="text-center text-5xl tracking-wide text-shade-100"
        >
          Just Keep Scrolling
        </motion.h1>

        <motion.p
          style={{ translateX: paragraphOneValue }}
          className="mx-auto text-xl font-thin text-shade-100"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          molestias molestiae impedit nulla vitae! Corporis pariatur similique
          qui. Ea et ab eligendi hic unde dicta nemo sit provident molestias
          ullam magnam recusandae sunt illo adipisci fugit, quia dignissimos?
          Voluptatibus et voluptates atque perspiciatis qui expedita tempore
          eius ad fugiat veritatis.
        </motion.p>
        <motion.p
          style={{ translateX: paragraphTwoValue }}
          className="mx-auto text-xl font-thin text-shade-100"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          molestias molestiae impedit nulla vitae! Corporis pariatur similique
          qui. Ea et ab eligendi hic unde dicta nemo sit provident molestias
          ullam magnam recusandae sunt illo adipisci fugit, quia dignissimos?
          Voluptatibus et voluptates atque perspiciatis qui expedita tempore
          eius ad fugiat veritatis.
        </motion.p>
      </section>
    </main>
  );
};

export default PageScroll;
