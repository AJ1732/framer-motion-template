import { Fragment } from "react";
import Enlarge from "../../components/ui/Enlarge";

const EnlargeScroll = () => {
  return (
    <section className="flex flex-col gap-4 pb-40">
      <header className="flex min-h-[420px] items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll
        </span>
      </header>

      <div className={`space-y-4`}>
        {[1, 2, 3, 4].map((item) => (
          <Fragment key={item}>
            <Enlarge item={item}></Enlarge>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
export default EnlargeScroll;
