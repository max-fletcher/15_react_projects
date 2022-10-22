import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {

   // importing modal functions from context
   const {isSidebarOpen, closeSidebar} = useGlobalContext()
   // logging the functions imported from context
   console.log(isSidebarOpen, closeSidebar);

   return (
      <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
         <div className='sidebar-header'>
            <img src={logo} alt="coding addict" className='logo' />
            <button className='close-btn' onClick={closeSidebar}>
               <FaTimes />
            </button>
         </div>
         <ul className='links'>
            {links.map((link) => {
               return(
                  <li key={link.id}>
                     <a href={link.url}>
                        {link.icon}
                        {link.text}
                     </a>
                  </li>
               )
            })}
         </ul>
         <ul className='social-icons'>
            {social.map((social) => {
               return(
                  <li key={social.id}>
                     <a href={social.url}>{social.icon}</a>
                  </li>
               )
            })}
         </ul>
      </aside>
   )
}

export default Sidebar
