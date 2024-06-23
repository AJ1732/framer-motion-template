import Bubble from "../../components/ui/text/Bubble";

const BubbleText = () => {
  return (
    <section className="min-h-80">
      <header>
        <span className="font-semibold uppercase text-neutral-500">
          Bubble Text
        </span>
      </header>

      <article className="flex flex-col items-center justify-center">
        <Bubble>BubbbbbbbleText</Bubble>
      </article>
    </section>
  );
};
export default BubbleText;
