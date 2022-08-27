import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let newText = data
    let amount = parseInt(count) // No idea why this is needed. It works fine without the casting
    if(amount > 8){
      newText = data.slice(0, 8)
    }
    else if(amount <= 0){
      newText = data.slice(0, 1)
    }
    else{
      newText = data.slice(0, amount)
    }
    // setText(data)
    setText(newText)
  }

  return (
    <section className='section-center'>
      <h3>Tired of Lorem Ipsum ?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount"> paragraphs: </label>
        <input type="number" name="amount" id="amount" value={count} onChange={ (e) => {setCount(e.target.value)} } />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {
          text.map((item, index) => {
            return(
              <p key={index}>{item}</p>
            )
          })
        }
      </article>
    </section>
  )

}

export default App;