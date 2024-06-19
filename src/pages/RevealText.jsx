import React from "react";
import Reveal from "../components/ui/Reveal";
import Transition from "../components/ui/Transition";

const RevealText = () => {
  return (
    <main>
      <section>
        <h2>Reveal Texts</h2>
      </section>

      <section className="flex min-h-[calc(100dvh-12rem)] flex-col items-center justify-center gap-2 sm:flex-row">
        <Reveal>
          <h3 className="font-thin">Heading One.</h3>
        </Reveal>
        <Reveal>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            architecto excepturi nesciunt reiciendis eum recusandae quae? Vitae,
            accusantium facilis.
          </p>
        </Reveal>
      </section>

      <section className="flex min-h-dvh flex-col items-center justify-center gap-2 sm:flex-row">
        <Reveal>
          <h3 className="font-thin">Heading Two.</h3>
        </Reveal>
        <Reveal>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            architecto excepturi nesciunt reiciendis eum recusandae quae? Vitae,
            accusantium facilis.
          </p>
        </Reveal>
      </section>
    </main>
  );
};

export default Transition(RevealText);
