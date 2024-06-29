import RevealText from "./RevealText";
import BubbleText from "./BubbleText";
import FlipText from "./FlipText";
import Reveal2Text from "./Reveal2Text";
import Reveal3Text from "./Reveal3Text";

const Text = () => {
  return <div className="flex flex-col justify-start items-start gap-4">
    <RevealText />
    <BubbleText />
    <FlipText />
    <Reveal2Text />
    <Reveal3Text />
  </div>;
};
export default Text;
