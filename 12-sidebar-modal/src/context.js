import { useState, useContext, createContext } from 'react'

// create contextAPI. This is a new way to create a context as opposed to importing "React" and using React.createContext()
const AppContext = createContext()

// Creating a separate provider instance instead of using say <AppContext.Provider></AppContext.Provider> to wrap the top level parent component
// the children param is used to gain access to the children that the following contextAPI will nest
const AppProvider = ({children}) => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false)

   const openSidebar = () => {
      setIsSidebarOpen(true)
   }

   const closeSidebar = () => {
      setIsSidebarOpen(false)
   }

   const openModal = () => {
      setIsModalOpen(true)
   }

   const closeModal = () => {
      setIsModalOpen(false)
   }

   return (
      // The double curly braces here is because the value prop accepts either a single value i.e value="Hello" or an object
      // i.e value={{ name: 'some name', some_function: some_function }}
      <AppContext.Provider value={{isModalOpen, isSidebarOpen, openSidebar, closeSidebar, openModal, closeModal}}>{children}</AppContext.Provider>
   )
}

const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }