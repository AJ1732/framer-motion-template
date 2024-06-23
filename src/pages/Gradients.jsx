import RadialGrad from "../components/ui/RadialGrad";

const Gradients = () => {
  return (
    <section>
      {/* RADIAL GRADIENT */}
      <article>
        <header>
          <span className="font-semibold uppercase text-neutral-500">
            Radial Gradient
          </span>
        </header>

        <div className="min-h-80 flex justify-center items-center">
          <RadialGrad />
        </div>
      </article>
    </section>
  );
};
export default Gradients;
