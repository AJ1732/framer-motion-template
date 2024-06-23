import Reveal from "../../components/ui/text/Reveal";

const RevealText = () => {
  return (
    <section className="min-h-80 space-y-10">
      <header>
        <span className="font-semibold uppercase text-neutral-500">
          Reveal Text
        </span>
      </header>

      <article className="flex flex-col items-start justify-center gap-2 sm:flex-row">
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
      </article>
    </section>
  );
};

export default RevealText;
