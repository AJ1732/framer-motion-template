import AuroraGrad from "../components/ui/AuroraGrad";
import GradCard from "../components/ui/GradCard";

const Gradients = () => {
  return (
    <section className="space-y-36">
      {/* RADIAL GRADIENT */}
      <article className="space-y-2">
        <header>
          <span className="font-semibold uppercase text-neutral-500">
            Radial Gradients
          </span>
        </header>

        <div className="flex h-96 items-center justify-center">
          <AuroraGrad />
        </div>
      </article>

      {/* CARD GRADIENT */}
      <article className="space-y-8">
        <header>
          <span className="font-semibold uppercase text-neutral-500">
            Card Gradient
          </span>
        </header>

        <div className="flex h-96 items-center justify-center">
          <GradCard />
        </div>
      </article>
    </section>
  );
};
export default Gradients;
