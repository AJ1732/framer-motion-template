import AuroraGrad from "../components/ui/AuroraGrad";

const Gradients = () => {
  return (
    <section>
      {/* RADIAL GRADIENT */}
      <article>
        <header>
          <span className="font-semibold uppercase text-neutral-500">
            Radial Gradients
          </span>
        </header>

        <div className="h-96 flex justify-center items-center">
          <AuroraGrad />
        </div>
      </article>
    </section>
  );
};
export default Gradients;
