import Transition from "../components/ui/Transition";

const Home = () => {
  return (
    <main className="relative space-y-2">
      <section className="m-auto flex h-96 max-w-80 items-center justify-center lg:max-w-full">
        {/* BLOB */}
        {/* <span 
          className='blob -z-20 size-40 absolute -left-10 -top-40 rounded-full blur-3xl'
        ></span> */}

        <h2 className="text-center text-2xl font-thin text-primary-100">
          Compilation of Framer Motion Animation Components
        </h2>
      </section>
    </main>
  );
};

export default Transition(Home);
