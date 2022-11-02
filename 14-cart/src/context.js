import { useState, useContext, useReducer, useEffect, createContext } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'

// const [cart, setCart] = useState(cartItems)

// const AppProvider = ({ children }) => {
//    const [cart, setCart] = useState(cartItems)

//    return (
//       <AppContext.Provider
//          value={{
//          cart,
//          }}
//       >
//          {children}
//       </AppContext.Provider>
//    )
// }

const AppContext = createContext()

const initialState = {
   loading: false,
   cart: cartItems,
   total: 0,
   amount: 0
}

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   // The double curly braces here is because the value prop in context accepts either a single value i.e value="Hello" or an object. Its a rule of thumb for contexts.
   // Destructuring so we can import & access the object properties i.e loading, cart, total and amount separately and not as a whole. If you sent state without 
   // destructuring, you would have to access context data like this(look inside CartContainer for reference):
   // const state = useGlobalContext();
   // const(state.cart); // To log the cart variable inside the reducer state object
   // which is tedious to do. Instead, its better to pluck out exactly what you need like this: 
   // const { cart } = useGlobalContext();
   // const(cart); // To log the cart variable received

   return (
      <AppContext.Provider
         value={{
            ...state,
         }}
      >
         {children}
      </AppContext.Provider>
   )
}

export const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppContext, AppProvider }
