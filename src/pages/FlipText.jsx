import Flip from "../components/ui/Flip";
import Transition from "../components/ui/Transition";

const FlipText = () => {
  return (
    <div className="space-y-4">
      {["Hello", "Wonder"].map((item) => (
        <Flip key={item}>{item}</Flip>
      ))}
    </div>
  );
};
export default Transition(FlipText);
