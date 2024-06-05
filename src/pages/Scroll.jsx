import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Transition from '../components/Transition'

const Scroll = () => {
  return (
    <main className='space-y-4'>
      <nav>
        <ul className='flex justify-start items-center divide-x divide-shade-800 border-b border-shade-800 pb-4 [&>*]:px-5'>
          <Link to={`/scroll/horizontal`} className='hover:bg-zinc-700 active:bg-primary-500 rounded-lg py-2 transition-all duration-300 ease-in-out'>
            <li>Horizontal Scroll</li>
          </Link>
          <Link to={`/scroll/page`} className='hover:bg-zinc-700 active:bg-primary-500 rounded-lg py-2 transition-all duration-300 ease-in-out'>
            <li>Page Scroll</li>
          </Link>

        </ul>
      </nav>

      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default Transition(Scroll)