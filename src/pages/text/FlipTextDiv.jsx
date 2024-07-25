import FlipDiv from "../../components/ui/div/FlipDiv";
import { skills } from "../../data/db";

const FlipTextDiv = () => {
  return (
    <section className="min-h-80 space-y-4">
      <header>
        <span className="font-semibold uppercase text-neutral-500">
          Flip Div Text
        </span>
      </header>

      <div className="flex flex-wrap gap-1">
        {skills.map(({ id, skill, icon }) => (
          <FlipDiv key={id} text={skill} under={icon} />
        ))}
      </div>
    </section>
  );
};
export default FlipTextDiv;
