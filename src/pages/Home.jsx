import Transition from '../components/Transition'

const Home = () => {
  return (
    <main className='space-y-2'>
      <section className='relative h-96 max-w-80 m-auto flex justify-center items-center'>
        {/* BLOB */}
        <span className='size-10 absolute inset-x-0 blur-3xl bg-primary-500 rounded-full'></span>
        
        <h2 className='text-2xl text-center font-thin'>Compilation of Framer Motion styles</h2>
      </section>
    </main>
  )
}

export default Transition(Home)