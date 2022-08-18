import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
   const [people, setPeople] = useState(data) // import people and assign it to a state
   const clearPeople = () => {
      setPeople([])
   }
   return (
      <main>
         <section className='container'>  
            <h3>{people.length} birthdays today</h3>
            <List people={people} /> {/* sending "people" json into people conponent as a prop */}
            <button onClick={() => clearPeople()}>Clear All</button> {/* abstracting onClick to a separate function which sets state to an empty json */}
         </section>
      </main>
   );
}

export default App;
