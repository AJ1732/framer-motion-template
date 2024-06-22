import Bubble from "../components/ui/Bubble";
import Transition from "../components/ui/Transition";

const BubbleText = () => {
  return (
    <section className="min-h-80 flex justify-center items-center">
      <Bubble>BubbbbbbbbbleText</Bubble>
    </section>
  );
};
export default Transition(BubbleText);
