import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react'

const PageScroll = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end end"],
  })

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  )
  
  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  )

  return (
    <main>
      <section className='h-dvh pt-20 flex justify-center items-start'>
        <h2 className='font-thin text-5xl'>Scroll Down</h2>
      </section>
       {/* TEXT SCROLL ANIMATION */}
       <section ref={textRef} className="flex flex-col gap-10 mb-10">
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
          className="text-5xl tracking-wide text-shade-100 text-center"
        >
          Just Keep Scrolling
        </motion.h1>

        <motion.p style={{ translateX: paragraphOneValue }} className="text-shade-100 font-thin text-xl  mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          molestias molestiae impedit nulla vitae! Corporis pariatur similique
          qui. Ea et ab eligendi hic unde dicta nemo sit provident molestias
          ullam magnam recusandae sunt illo adipisci fugit, quia dignissimos?
          Voluptatibus et voluptates atque perspiciatis qui expedita tempore
          eius ad fugiat veritatis.
        </motion.p>
        <motion.p style={{ translateX: paragraphTwoValue }} className="text-shade-100 font-thin text-xl  mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          molestias molestiae impedit nulla vitae! Corporis pariatur similique
          qui. Ea et ab eligendi hic unde dicta nemo sit provident molestias
          ullam magnam recusandae sunt illo adipisci fugit, quia dignissimos?
          Voluptatibus et voluptates atque perspiciatis qui expedita tempore
          eius ad fugiat veritatis.
        </motion.p>
      </section>
    </main>
  )
}

export default PageScroll