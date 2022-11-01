import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
   // We are going to use the 'location' passed from navbar->context.js->here to set the position of the submenu.
   // Remember that 'page' name was passed from navbar.js to context.js. There, it was used to find the 'link' object from the 'sublinks' file/json.
   // We are importing that 'page' object here from context.js to construct the submenu.
   const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext()
   const container = useRef(null) // get the container under which the submenu will show.
   const [columns, setColumns] = useState('col-2') // used to set the width of the submenu based on how many links there are
   
   // This useEffect will trigger when 'location' context is changed. Based on location, it will set the position of submenu again.
   useEffect(()=>{
      setColumns('col-2') // setting default to prevent bugs
      const submenu = container.current // get a ref for the container
      const {center, bottom} = location // destructure the location object that you are getting from Navbar->context.js->here.
      submenu.style.left = `${center}px` // set the submenu position using the submenu ref and using the style.left property
      submenu.style.top = `${bottom}px` // set the submenu position using the submenu ref and using the style.top property

      //set the width of the submenu based on how many links there are
      if(links.length === 3){
         setColumns('col-3')
      }
      if(links.length > 3){
         setColumns('col-4')
      }
   }, [location, links])

   return (
      // Show submenu based on 'isSubmenuOpen' variable
      <aside className={`submenu ${isSubmenuOpen ? 'show' : ''}`} ref={container}>
         <h4>{page}</h4>
         {/* use links array to generate list of links. The default value of 'columns' is 'col-2'. */}
         <div className={`submenu-center ${columns}`}>
            {links.map((link, index) => {
               const {label, icon, url} = link
               return(
                  <a key={index} href={url}>
                     {icon}
                     {label}
                  </a>
               )
            })}
         </div>
      </aside>
   )
}

export default Submenu
