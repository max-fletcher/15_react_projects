import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, socials } from './data'
import logo from './logo.svg'

const Navbar = () => {

   const [showLinks, setShowLinks] = useState(false)
   const linksContainerRef = useRef(null)
   const linksRef = useRef(null)

   useEffect(() => {
      // get the bounding properties of the dom element that linksRef is pointing to
      // const linksHeight = linksRef.current.getBoundingClientRect()
      // logs out the dimensional properties(i.e bounding properties)
      // console.log(linksHeight);

      // get the height from bounding properties of the dom element that linksRef is pointing to. It will get the height of all the li tags included
      // inside the ul
      const linksHeight = linksRef.current.getBoundingClientRect().height
      // logs out the height(from bounding properties)
      console.log(linksHeight);
      console.log(linksContainerRef.current.style.height);

      if (showLinks) {
            // if showLinks is true, set the height of linksContainerRef equal to linksHeight
         linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
         // if showLinks is true, set the height of linksContainerRef equal 0(zero)
         linksContainerRef.current.style.height = '0px';
      }
   }, [showLinks])

   return(
      <nav>
         <div className='nav-center'>
            <div className='nav-header'>
               {/* import svg and use the src to set it inside an img tag */}
               <img src={logo} className='logo' alt="logo" />
               <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                  <FaBars />
               </button>
            </div>
            {/* <div className={`${showLinks ? 'show-container links-container' : 'links-container'}`}> */}
            <div className='links-container' ref={linksContainerRef}>
               <ul className='links' ref={linksRef}>
                  {links.map((link) => {
                     return (
                        // You can use this instead of the block below
                        // const {id, url, text} = link
                        // <li key={id}>
                        //    <a href={url}>
                        //       {text}
                        //    </a>
                        // </li>
                        <li key={link.id}>
                           <a href={link.url}>
                              {link.text}
                           </a>
                        </li>
                     )
                  })}
               </ul>
            </div>
            <ul className='social-icons'>
               {socials.map((social) => {
                  return(
                     <li key={social.id}>
                        <a href={social.url}>
                           {social.icon}
                        </a>
                     </li>
                  )
               })}
            </ul>
         </div>
      </nav>
   )
}

export default Navbar
