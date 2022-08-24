import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {

   const [showInfo, setShowInfo] = useState(false);

   const toggleShow = () => {
      setShowInfo(!showInfo)
   }

   return (
      <article className='question'>
         <header>
            <h4>{props.question.title}</h4>
            { showInfo ?  <button className='btn' onClick={toggleShow}> <AiOutlinePlus /> </button> : <button className='btn' onClick={toggleShow}> <AiOutlineMinus /> </button> }
         </header>
         { showInfo && <p>{props.question.info}</p> }
      </article>
   );
};

export default Question;
