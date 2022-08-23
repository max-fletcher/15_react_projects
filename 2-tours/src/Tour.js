import React, { useState } from 'react';

// If you choose, you can use **const Tours = ({tour}) => { ** instead. That way, you get access to the variables inside withour doing props.something. So you dont have
// to do "props.tour.info" or "props.tour.name" or "props.tour.image". You can do "tour.info" or "tour.name" or "tour.image" if you use the destructuring above.
const Tour = (props) => {

   // console.log(props.tour);

   const [readMore, setReadMore] = useState(false);

   return( 
      <article className='single-tour'>
         <img src={props.tour.image} alt="{name}" />
         <footer>
            <div className='tour-info'>
               <h4>{props.tour.name}</h4>
               <h4 className='tour-price'>${props.tour.price}</h4>
            </div>
            {/* Ternary operation to output all or truncated string based on the value of "readMore" */}
            <p>
               {readMore ? props.tour.info : `${props.tour.info.substring(0, 200)}...`}
               <button onClick={ () => setReadMore(!readMore) }> {readMore ? 'Show Less' : 'Read More'} </button>
            </p>
            <button onClick={() => props.removeTour(props.tour.id)} className='delete-btn'> Not Interested </button>
         </footer>
      </article>
   );
};

export default Tour;
