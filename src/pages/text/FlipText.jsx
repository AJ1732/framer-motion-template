import Flip from "../../components/ui/Flip";
import Transition from "../../components/ui/Transition";

const FlipText = () => {
  return (
    <section className="min-h-80">
      <header>
        <span className="font-semibold uppercase text-neutral-500">
          Flip Text
        </span>
      </header>

      <article className="space-y-4">
        {["Hello", "Wonder"].map((item) => (
          <Flip key={item}>{item}</Flip>
        ))}
      </article>
    </section>
  );
};
export default Transition(FlipText);
