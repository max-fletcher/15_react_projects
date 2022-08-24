import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

   const [index, setIndex] = useState(0)
   const {name, job, image, text} = people[index] // using destructuring to get one specific user's data at a given time

   const prevPerson = () => {
      if(index){
         setIndex(() => {
            let newIndex = index - 1
            return newIndex
         })
      }
      else{
         setIndex(() => {
            return 3
         })
      }
   }

   const nextPerson = () => {
      if(index !== 3){
         setIndex((index) => {
            let newIndex = index + 1;
            return newIndex
         })
      }
      else{
         setIndex(() => {
               return 0;
            }
         )
      }
   }

   const randomPerson = () => {
      setIndex((index) => {
         let randomNumber
         do {
            randomNumber = Math.floor(Math.random() * 3)
            console.log(randomNumber);
         } while (index === randomNumber);
         return randomNumber
         }
      )
   }

   console.log(people);
   return(
      <article className='review'>
         <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
               <FaQuoteRight />
            </span>
         </div>
         <h4 className='author'>{name}</h4>
         <p className='job'>{job}</p>
         <p className='info'>{text}</p>
         <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
               <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
               <FaChevronRight />
            </button>
         </div>
         <button className='random-btn' onClick={randomPerson}>
            Surprise Me
         </button>
      </article>
   );
};

export default Review;
