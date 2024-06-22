import SpotLightButton from "../components/ui/SpotLightButton";
import Transition from "../components/ui/Transition";

const Buttons = () => {
  return (
    <div className="min-h-80 py-4 flex flex-col items-center justify-start">
      <SpotLightButton />
    </div>
  );
};
export default Transition(Buttons);
