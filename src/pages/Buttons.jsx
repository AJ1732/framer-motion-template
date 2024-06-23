import SpotLightButton from "../components/ui/buttons/SpotLightButton";
import AuroraButton from "../components/ui/buttons/AuroraButton";
import Transition from "../components/ui/Transition";

const Buttons = () => {
  return (
    <div className="flex min-h-80 flex-col items-center justify-start gap-10 py-4">
      <SpotLightButton />
      <AuroraButton> Aura Button</AuroraButton>
    </div>
  );
};
export default Transition(Buttons);
