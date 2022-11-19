import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
   // States
   const [loading, setLoading] = useState(true)
   const [searchTerm, setSearchTerm] = useState('')
   const [cocktails, setCocktails] = useState([])

   // using useCallback here so that the this function is not run unless 'searchTerm' changes. Hence, the value of 'fetchDrinks' is memoized unless
   // 'searchTerm' is changed.
   const fetchDrinks = useCallback( async () => {
      setLoading(true) // set loading to true during the fetching of data
      try {
         const response = await fetch(`${url}${searchTerm}`)
         const data = await response.json()

         // destructuring the response data so it is in a more managable from. Else, we would have to use data['drinks']. Returns an array or null
         const { drinks } = data
         
         // console.log(data['drinks'], 1);
         console.log( drinks , 2);

         if(drinks){
            // formatting the cocktails object so it becomes more managable before storing it in the setCocktails state
            const newCocktails = drinks.map((item) => {
               const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
               return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
            })

            setCocktails(newCocktails) // saving cocktails data into state
         }
         else{
            setCocktails([])
         }

         setLoading(false)

         console.log(drinks, cocktails, 3);

      } catch (error) {
         console.log(error)
         setLoading(false)
      }
   }, [searchTerm])

   // Since 'fetchDrinks' is wrapped in a useCallback, it can be used in this useEffect as a dependency
   useEffect(()=> {
      fetchDrinks()
   }
   , [searchTerm, fetchDrinks])

   return <AppContext.Provider value={{ loading, setSearchTerm, cocktails  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
   return useContext(AppContext)
}

export { AppContext, AppProvider }
