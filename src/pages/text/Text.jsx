import RevealText from "./RevealText";
import BubbleText from "./BubbleText";
import FlipText from "./FlipText";
import Reveal2Text from "./Reveal2Text";
import Reveal3Text from "./Reveal3Text";
import FlipTextDiv from "./FlipTextDiv";
import AnimatedCounter from "./AnimatedCounter";

const Text = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <RevealText />
      <BubbleText />
      <FlipText />
      <Reveal2Text />
      <Reveal3Text />
      <FlipTextDiv />
      <AnimatedCounter from={0} to={10000} />
    </div>
  );
};
export default Text;
