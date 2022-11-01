import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
   const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()

   // function imported from context.js. Its for opening the submenu.
   const displaySubmenu = (e) => {
      // gives you the element that you are calling the function on. In this case, when you are hovering over one of the submenu items in navbar, you will be
      // logging that element that you hover over(since that item is calling this function via onMouseOver). To see what this does, in fullscreen mode, hover over
      // the navbar buttons. It will log the element in console.
      console.log(e.target);

      const page = e.target.textContent // get the text insoide the target tags.
      const tempBtn = e.target.getBoundingClientRect() // get the button dimension properties. You can then use those values to calculate the position where
      // the submenu needs to be.
      console.log(page, tempBtn);
      
      // calculating the position where the submenu should be displayed
      const center = (tempBtn.left + tempBtn.right) / 2 
      const button = (tempBtn.bottom) - 3
      console.log(center, button);

      // passing the element text and the coordinates where the submenu should be shown
      openSubmenu(page, {center, button})
   }

   // function imported from context.js. Its for closing the submenu.
   const hideSubmenu = (e) => {
      closeSubmenu()
   }

   return (
      <>
         <nav className='nav'>
            <div className='nav-center'>
               <div className='nav-header'>
                  <img src={logo} alt="stripe" className='nav-logo' />
                  {/* this button will open the sidebar when clicked */}
                  <button className='btn toggle-btn' onClick={openSidebar}>
                     <FaBars />
                  </button>
               </div>
               <ul className='nav-links'>
                  {/* On hover, the submenu opens. On leaving, the submenu closes. */}
                  <li>
                     <button className='link-btn' onMouseOver={displaySubmenu} onMouseLeave={hideSubmenu}>products</button>
                  </li>
                  <li>
                     <button className='link-btn' onMouseOver={displaySubmenu} onMouseLeave={hideSubmenu}>developers</button>
                  </li>
                  <li>
                     <button className='link-btn' onMouseOver={displaySubmenu} onMouseLeave={hideSubmenu}>company</button>
                  </li>
               </ul>
               <button className='btn signin-btn' onMouseOver={displaySubmenu} onMouseLeave={hideSubmenu}>Sign In</button>
            </div>
         </nav>
      </>
   )
      
}

export default Navbar
