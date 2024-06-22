import React from 'react'
import { NavLink } from 'react-router-dom'

const DropMenu = () => {
  const navlinks = ["Stagger", "Basic", "Reveal", "Scroll", "Flip", "Bubble", "Hamburger"]

  return (
    <div className='h-fit w-64 bg-shade-800 p-1 rounded-md shadow-xl'>
      <ul>
        { navlinks.map((navlink, index) => (
            <NavLink 
              key={index}  
              to={`/${navlink.toLowerCase()}`}   
            >
              <li className='font-thin text-lg py-2 px-4 rounded hover:bg-primary-500 active:bg-primary-400'>{navlink}</li>
            </NavLink>
        )) }
      </ul>
    </div>
  )
}

export default DropMenu