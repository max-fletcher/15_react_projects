import { useState, useContext, useReducer, useEffect, createContext } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const initialState = {
   loading: false,
   cart: cartItems,
   total: 0,
   amount: 0
}

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   // DISPATCH FUNCTIONS
   const clearCart = () => {
      dispatch({type: 'CLEAR_CART'})
   }

   const removeItem = (id) => {
      dispatch({type: 'REMOVE_ITEM', payload:id}) // sending item id to reducer
   }

   const increase = (id) => {
      dispatch({type: 'INCREASE_ITEM', payload:id}) // sending item id to reducer
   }

   const decrease = (id) => {
      dispatch({type: 'DECREASE_ITEM', payload:id}) // sending item id to reducer
   }

   // function that fetches data from the 'url' defined above
   const fetchData = async () => {
      dispatch({type: 'LOADING'})
      const response = await fetch(url)
      const cart = await response.json()
      dispatch({type: 'DISPLAY_ITEMS', payload:cart})
   }

   // invoking 'fetchData' at the beginning of this component mounting
   useEffect(()=>{
      fetchData()
   }, [])

   // USEEFFECT TO CHANGE TOTAL AMOUNT WHEN 'state.cart' CHANGES
   useEffect(()=>{
      dispatch({type: 'GET_TOTALS'})
   }, [state.cart])

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
            clearCart,
            removeItem,
            increase,
            decrease
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
