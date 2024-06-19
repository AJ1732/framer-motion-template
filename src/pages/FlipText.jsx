import Flip from "../components/ui/Flip";

const FlipText = () => {
  return (
    <div>
      {["Hello", "Wonder"].map((item) => (
        <Flip>{item}</Flip>
      ))}
    </div>
  );
};
export default FlipText;
