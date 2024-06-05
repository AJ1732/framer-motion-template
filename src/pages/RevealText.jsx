import React from 'react'
import Reveal from '../components/Reveal'
import Transition from '../components/Transition'

const RevealText = () => {
  return (
        
    <main>
      <section>
        <h2>Reveal Texts</h2>
      </section>
      
      <section className='min-h-dvh flex flex-col sm:flex-row justify-center items-center gap-2'>
        <Reveal>
          <h3 className='font-thin'>Heading One.</h3>
        </Reveal>
        <Reveal>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla architecto excepturi nesciunt reiciendis eum recusandae quae? Vitae, accusantium facilis.</p>
        </Reveal>
      </section>
      
      <section className='min-h-dvh flex flex-col sm:flex-row justify-center items-center gap-2'>
        <Reveal>
          <h3 className='font-thin'>Heading Two.</h3>
        </Reveal>
        <Reveal>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla architecto excepturi nesciunt reiciendis eum recusandae quae? Vitae, accusantium facilis.</p>
        </Reveal>
      </section>
    </main>
  )
}

export default Transition(RevealText)