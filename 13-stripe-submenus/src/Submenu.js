import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
   // we are going to use the 'location' passed from navbar->context.js->here to set the position of the submenu.
   const {isSubmenuOpen, location} = useGlobalContext()
   const container = useRef(null) // get the container under which the submenu will show.
   
   // This useEffect will trigger when 'location' context is changed. Based on location, it will set the position of submenu again.
   useEffect(()=>{
      const submenu = container.current // get a ref for the container
      const {center, bottom} = location // destructure the location object that you are getting from Navbar->context.js->here.
      submenu.style.left = `${center}px` // set the submenu position using the submenu ref and using the style.left property
      submenu.style.top = `${bottom}px` // set the submenu position using the submenu ref and using the style.top property
   }, [location])

   return (
      <aside className={`submenu ${isSubmenuOpen ? 'show' : ''}`} ref={container}>
         Submenu
      </aside>
   )
}

export default Submenu
