import SpotLightButton from "../components/ui/SpotLightButton";
import AuroraButton from "../components/ui/AuroraButton";
import Transition from "../components/ui/Transition";

const Buttons = () => {
  return (
    <div className="flex min-h-80 flex-col items-center justify-start py-4">
      <SpotLightButton />
      <AuroraButton>Button</AuroraButton>
    </div>
  );
};
export default Transition(Buttons);
