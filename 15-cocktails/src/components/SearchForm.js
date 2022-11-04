import {useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { setSearchTerm } = useGlobalContext() // we will only set  searchTerm here so no need to import anything else here
  const searchValue = useRef('') // This is hooked up to the input below

  // console.log(searchValue);

  useEffect(() => {
    searchValue.current.focus()
  }, []);

  const SearchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => { // To prevent default submit behaviour of pressing enter when a form input is focused
    e.preventDefault()
  }

  return (
    <section className='section search'>
      {/* This form will not have a submit button. The input button inside will trigger an onChange event and that is all */}
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'> search your favourite cocktail </label> {/* htmlFor="" is the same as for="" but in JS */}
          {/* when you input searchValue here, it will take the value and pass it to setSearchTerm, which is hooked upto a useEffect in context,
            which in turn will cause a refetch of data since it has 'searchTerm' in the dependency array
          */}
          <input type="text" id="name" ref={searchValue} onChange={SearchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm