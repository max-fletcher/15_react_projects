import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import { useParams, NavLink } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
   const { id } = useParams() // getting the id from route params
   const [loading, setLoading] = useState(false)
   const [cocktail, setCocktail] = useState(null)

   const getCocktail = async () => {
      setLoading(true)
      try {
         const response = await fetch(`${url}${id}`)
         const data = await response.json()

         if(data.drinks){ // if drink with given ID is found
            // destructure the data given back
            const {
               strDrink,
               strDrinkThumb,
               strAlcoholic,
               strCategory,
               strGlass,
               strInstructions,
               strIngredient1,
               strIngredient2,
               strIngredient3,
               strIngredient4,
               strIngredient5,
            } = data.drinks[0]

            const ingredients = [ strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5] // create an array of ingredients

            // construct a new object with the given destructured data
            const newDrink = { 
               name: strDrink,
               image: strDrinkThumb,
               info: strAlcoholic,
               category: strCategory,
               glass: strGlass,
               instructions: strInstructions,
               ingredients: ingredients
            }

            setCocktail(newDrink)
            setLoading(false)
   
            // console.log(cocktail, ingredients, 100);
         }
         else{
            setCocktail(null)
         }

      } catch (error) {
         console.log();
         setLoading(false)
      }
   }

   useEffect(()=>{
      getCocktail()
   }, [id])

   if(loading){
      return (
         <Loading />
      )
   }
   if(!cocktail){
      return <h2 className='section-title'> no cocktail to display </h2>
   }

   const { name, image, info, category, glass, instructions, ingredients } = cocktail // destructure cocktail so it is easier to deal with in JSX

   return (
      <section className='section cocktail-section'>
         <NavLink to='/' className='btn btn-primary'>Back Home</NavLink>
         <h2 className='section-title'> {name} </h2>
         <div className='drink'>
            <img src={image} alt={name} />
            <div className='drink-info'>
               <p>
                  <span className='drink-data'> name: {name}</span>
               </p>
               <p>
                  <span className='drink-data'> category: {category}</span>
               </p>
               <p>
                  <span className='drink-data'> info: {info}</span>
               </p>
               <p>
                  <span className='drink-data'> glass: {glass}</span>
               </p>
               <p>
                  {/* loop and populate a list of ingredients */}
                  <span className='drink-data'> ingredients:</span>
                  {ingredients.map((item, index) => {
                     return item ? <span key={index}> {item} </span> : null
                  })}
               </p>
               <p>
                  <span className='drink-data'> instructions: {instructions}</span>
               </p>
            </div>
         </div>
      </section>
   )
}

export default SingleCocktail
