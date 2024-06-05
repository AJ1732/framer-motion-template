import Transition from '../components/Transition'

const Home = () => {
  return (
    <main className='relative space-y-2'>
      <section className=' h-96 max-w-80 m-auto flex justify-center items-center'>
        {/* BLOB */}
        {/* <span 
          className='blob -z-20 size-40 absolute -left-10 -top-40 rounded-full blur-3xl'
        ></span> */}
        
        <h2 className='text-2xl text-center font-thin text-primary-100'>Compilation of Framer Motion styles</h2>
      </section>
    </main>
  )
}

export default Transition(Home)