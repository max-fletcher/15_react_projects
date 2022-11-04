import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
   return (
      <nav className='navbar'>
         <div className='nav-center'>
            {/* style={({isActive})=> { return {color: isActive ? 'red' : 'yellow' }}} */}
            {/* Applying 'link' to inactive tags. Also applying active class to tags that are active. */}
            <NavLink to="/" >
               <img src={logo} alt='cocktails db logo' className='logo' /> {/* className={ (({isActive}) => (isActive ? 'link active' : 'link')) } */}
            </NavLink>
            <ul className='nav-links'>
               <li>
                  <NavLink to="/">Home</NavLink> {/* className={(({isActive}) => (isActive ? 'link active' : 'link'))} */}
               </li>
               <li>
                  <NavLink to="/about">About</NavLink> {/* className={(({isActive}) => (isActive ? 'link active' : 'link'))} */}
               </li>
            </ul>
         </div>
   </nav>
   )
}

export default Navbar
