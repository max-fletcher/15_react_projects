import React, { useState, useEffect } from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  // This is one way to solve the issue with index being equal to last index. You can use conditional onClick(ternary) inside the buttons(see commented code below).
  useEffect(() => {
    const lastIndex = people.length - 1
    if(index < 0){ // can also use if(index == -1)
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  }, [index, people])

  // This useEffect causes the slider to increase its index by 1 every 3 seconds. But the problem is, if you press next/previous, the index changes and causes this useEffect
  // to trigger which in turn causes setInterval to trigger. The worst part is that the setIntervals will stacks and will cascade out of control. So you need to use a cleanup
  // function(clearInterval) to clear the setInterval. The setInterval will still work, but will only one instance can run at a time.
  useEffect(() => {
    console.log('MOUNTED');
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => {
      console.log('UNMOUNTED');
      clearInterval(slider)
    }
  }, [index])

  return(
    <section className='section'>
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {
          people.map((person, person_index) => {
            const {id, image, name, title, quote} = person
            let position = 'nextSlide'
            if(person_index === index){
              position = 'activeSlide'
            }
            if(person_index === index - 1 || (index === 0 && person_index === people.length - 1)){
              position = 'lastSlide'
            }
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            )
          })
        }
        {/* The buttons below are one way of solving the last index issue instead of using the useEffect above */}
        {/* <button className='prev' onClick={() => { (index === people.length - 1) ? setIndex(0) : setIndex(index + 1) }}> */}
        <button className='prev' onClick={ () => setIndex(index + 1) }>
          <FaChevronLeft />
        </button>
        {/* This one too */}
        {/* <button className='next' onClick={() => { (index === 0) ? setIndex(people.length - 1) : setIndex(index - 1) }}> */}
        <button className='next' onClick={() => { setIndex(index - 1) }}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App;
