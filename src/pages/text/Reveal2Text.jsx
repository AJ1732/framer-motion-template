import Reveal2 from "../../components/ui/text/Reveal2";

const Reveal2Text = () => {
  return (
    <section className="min-h-80 space-y-10">
      <header>
        <span className="font-semibold uppercase text-neutral-500">
          Reveal Text 2
        </span>
      </header>

      <article className="flex flex-col items-start justify-center gap-2 sm:flex-row">
        <Reveal2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla
          architecto excepturi nesciunt reiciendis eum recusandae quae? Vitae,
          accusantium facilis.
        </Reveal2>
      </article>
    </section>
  );
};
export default Reveal2Text;
