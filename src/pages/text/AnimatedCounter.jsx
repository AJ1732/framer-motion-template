import Counter from "../../components/ui/text/Counter";

const AnimatedCounter = ({from, to}) => {
  return <section className="min-h-80">
  <header>
    <span className="font-semibold uppercase text-neutral-500">
      Animated Counter
    </span>
  </header>

  <article className="space-y-4">
    <Counter from={from} to={to} />
  </article>
</section>;
};
export default AnimatedCounter;
