import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
   return (
      <section className='error-page section'>
         <div className='error-container'>
            <h1> oops! it's a dead end. </h1>
            <NavLink to="/" className="btn btn-primary">
               Back Home
            </NavLink> {/* className={(({isActive}) => (isActive ? 'link active' : 'link'))} */}
         </div>
      </section>
   )
}

export default Error
