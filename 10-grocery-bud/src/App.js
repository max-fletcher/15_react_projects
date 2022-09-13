import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: true, msg: '', type: ''})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello')
    if(!name){
      //display warning alert
    }
    else if(name && isEditing){
      // deal with edit
    }
    else{
      // add item and show success alert
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {/* display alert if alert.show is true */}
        {alert.show && <Alert />}
        <h3> Grocery Bud </h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g Eggs' value={name} onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn'> {isEditing ? 'Edit' : 'Submit'} </button>
        </div>
      </form>
      {/* show block of code below if the length of the list array is greater than 0 */}
      {list.length > 0 && 
          <div className='grocery-container'>
            {/* passing the entire list to List component */}
            <List items={list} />
            <button className='clear-btn'> Clear Items </button>
          </div>
      }
    </section>
  )
}

export default App
