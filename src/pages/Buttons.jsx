import Transition from "../components/ui/Transition";
import SpotLightButton from "../components/ui/buttons/SpotLightButton";
import AuroraButton from "../components/ui/buttons/AuroraButton";
import ShinyButton from "../components/ui/buttons/ShinyButton";

const Buttons = () => {
  return (
    <div className="flex min-h-80 flex-col items-center justify-start gap-10 py-4">
      <SpotLightButton />
      <AuroraButton>Aura Button</AuroraButton>
      <ShinyButton>Shiny Button</ShinyButton>
    </div>
  );
};
export default Transition(Buttons);
