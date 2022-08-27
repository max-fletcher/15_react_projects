import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log('hello');
      // console.log(color);
      let colors = new Values(color).all(10)
      console.log(colors);
      setError(false)
    } catch (error) {
      // console.log(error);
      setError(true)
    }
  }

  return(
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          {/* || className={`${error ? 'error' : null}`} || also works instead of || className={`${error && 'error'}`} || */}
          <input type="text" value={color} onChange={ (e) => {setColor(e.target.value)} } className={`${error && 'error'}`} placeholder="#f15025" />
          <button type='submit' className='btn'>Generate</button>
        </form>
      </section>
      <section className='colors'>
        <h4>List Goes Here</h4>
      </section>
    </>
  )
}

export default App
