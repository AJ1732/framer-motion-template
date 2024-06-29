import Reveal3 from "../../components/ui/text/Reveal3";

const Reveal3Text = () => {
  return (
    <section className="min-h-80 space-y-10">
      <header>
        <span className="font-semibold uppercase text-neutral-500">
          Reveal Text 3
        </span>
      </header>

      <article className="flex flex-col items-start justify-center gap-2 sm:flex-row">
        <p>
          <Reveal3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
            architecto excepturi nesciunt reiciendis eum recusandae quae? Vitae,
            accusantium facilis.
          </Reveal3>
        </p>
      </article>
    </section>
  );
};
export default Reveal3Text;
