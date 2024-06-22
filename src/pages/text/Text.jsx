import RevealText from "./RevealText";
import BubbleText from "./BubbleText";
import FlipText from "./FlipText";
import Reveal2Text from "./Reveal2Text";

const Text = () => {
  return <div className="flex flex-col justify-start items-start gap-4">
    <RevealText />
    <BubbleText />
    <FlipText />
    <Reveal2Text />
  </div>;
};
export default Text;
