import { useState, useContext, createContext } from 'react'
import sublinks from './data';

// create contextAPI. This is a new way to create a context as opposed to importing "React" and using React.createContext()
const AppContext = createContext()

// Creating a separate provider instance instead of using say <AppContext.Provider></AppContext.Provider> to wrap the top level parent component
// the children param is used to gain access to the children that the following contextAPI will nest
const AppProvider = ({children}) => {
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
   const [location, setLocation] = useState({}) // used to store the location of the submenu. When this changes, will trigger a useEffect inside Submenu to adjust the location of the submenu
   const [page, setPage] = useState({page: '', links: []}) // used to store page link from 'sublinks' after matching(in 'openSubmenu' function)

   const openSidebar = ()=>{
      setIsSidebarOpen(true)
   }

   const closeSidebar = ()=>{
      setIsSidebarOpen(false)
   }

   const openSubmenu = (text, coordinates)=>{

      // return 'link' from 'sublinks' that has same value as 'page' state
      const page = sublinks.find((link) =>
         {return link.page === text}
      )

      setPage(page) // after the desired page is found in 'sublinks'(the above block), we are setting the 'page' context equal to the page found
      setLocation(coordinates)// used to change the 'coordinates' context
      setIsSubmenuOpen(true)
   }

   const closeSubmenu = ()=>{
      setIsSubmenuOpen(false)
   }

   // The double curly braces here is because the value prop accepts either a single value i.e value="Hello" or an object
   return (
      <AppContext.Provider value={{
         isSubmenuOpen,
         openSubmenu,
         closeSubmenu,
         isSidebarOpen,
         openSidebar,
         closeSidebar,
         location,
         page
      }}>
         {children}
      </AppContext.Provider>

      // The double curly braces here is because the value prop in context accepts either a single value i.e value="Hello" or an object. Its a rule of thumb for contexts.
      // i.e value={{ name: 'some name', some_function: some_function }}
      // <AppContext.Provider value={{isSubmenuOpen, isSidebarOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu}}>{children}</AppContext.Provider>
   )
}

const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }