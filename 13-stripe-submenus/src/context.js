import { useState, useContext, createContext } from 'react'

// create contextAPI. This is a new way to create a context as opposed to importing "React" and using React.createContext()
const AppContext = createContext()

// Creating a separate provider instance instead of using say <AppContext.Provider></AppContext.Provider> to wrap the top level parent component
// the children param is used to gain access to the children that the following contextAPI will nest
const AppProvider = ({children}) => {
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
   // used to store the location of the submenu
   const [location, setLocation] = useState({})

   const openSidebar = ()=>{
      setIsSidebarOpen(true)
   }

   const closeSidebar = ()=>{
      setIsSidebarOpen(false)
   }

   const openSubmenu = (text, coordinates)=>{
      setLocation(coordinates)
      setIsSubmenuOpen(true)
   }

   const closeSubmenu = ()=>{
      setIsSubmenuOpen(false)
   }

   return (
      <AppContext.Provider value={{ isSubmenuOpen, openSubmenu, closeSubmenu, isSidebarOpen, openSidebar, closeSidebar, location }}>{children}</AppContext.Provider>

      // The double curly braces here is because the value prop accepts either a single value i.e value="Hello" or an object
      // i.e value={{ name: 'some name', some_function: some_function }}
      // <AppContext.Provider value={{isSubmenuOpen, isSidebarOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu}}>{children}</AppContext.Provider>
   )
}

const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }