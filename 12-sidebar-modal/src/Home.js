// import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
// import { AppContext} from './context'
import { useGlobalContext } from './context'

const Home = () => {
   // importing sidebar functions from context
   const {openSidebar, openModal} = useGlobalContext()
   // logging the functions imported from context
   console.log(openSidebar, openModal);

   return (
      <main>
         <button className='sidebar-toggle' onClick={openSidebar}>
            <FaBars />
         </button>
         <button className='btn' onClick={openModal}>
            Show Modal
         </button>
      </main>
   )
}

export default Home
