import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [ 'all', ...new Set(items.map((item) => item.category)) ] // getting all unique values and appending 'all' to the set of values in the beginning

function App() {

  const [menuItems, setMenuItems] =useState(items);
  const [categories, setCategories] =useState(allCategories);

  const filterItems = (category) => {
    // if category is set to all, then setMenuItems to all items which comes from items file. Else, filter data by category(below).
    if(category === "all"){
      setMenuItems(items)
    }
    else{
      const newItems = items.filter((item) => {
        return item.category === category
      })
      setMenuItems(newItems)
    }
  }

  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2> Our Menus </h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;