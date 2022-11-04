import React from 'react'
import { NavLink } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass }) => { // destructuring cocktail prop that was passed down in CocktailList

   return (
      <article className='cocktail'>
         <div className='img-container'>
            <img src={image} alt={name} />
         </div>
         <div className='cocktail-footer'>
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            <NavLink to={`/cocktail/${id}`} className='btn btn-primary btn-details'>details</NavLink>
         </div>
      </article>
   )
}

export default Cocktail
