import React from 'react';
import Tour from './Tour';

// If you choose, you can use **const Tours = ({props}) => { ** instead. That way, you get access to the variables inside withour doing props.something. So you dont have
// to do "props.tours.map". You can do "props.map" if you use the destructuring above.
const Tours = (props) => {
   return (
      <section>
         <div className='title'>
            <h2>our Tours</h2>
         </div>
         <div>
            {
               props.tours.map((tour) => {
                  return (
                     <Tour key={tour.id} tour={tour} removeTour={props.removeTour} />
                  )
               })
            }
         </div>
      </section>

   );
};

export default Tours;
