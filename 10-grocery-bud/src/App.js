import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage) // get data stored in local storage when this component is first run/rendered. If no data exist, set it to empty array
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false, type: '', msg: ''})

  // replace array called 'list' inside local storage on component load(when app is first run/rendered)
  useEffect( () => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  // handles new value being submitted via form and the list will contain a new entry
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted')
    if(!name){
      //display warning alert
      // setAlert({show: true, msg: 'Please enter a value', type: 'danger'})
      showAlert(true, 'danger', 'Please enter a value')
    }
    else if(name && isEditing){
      // the list.map iterates over "list" array & will return a new array of objects, but with the object we are editing being modified(due to the
      // spread operation). YOu could do the commented code below instead but that would just be a bit ore lengthy albeit easier to understand.
      setList(
        list.map((list_item) => {
        if(list_item.id === editID){
          return {...list_item, title: name}
        }
          return list_item
        })
      )

      // *IMPORTANT - You can do this instead of the code above
      // const newList = list.map((list_item) => {
      //   if(list_item.id === editID){
      //     return {...list_item, title: name}
      //   }
      //     return list_item
      //   })

      // setList(newList)

      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Item edited successfully')
    }
    else{
      // add item and show success alert
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      console.log(list);
      setName('')
      showAlert(true, 'success', 'Value entered successfully')
    }
  }

  const clearList = () => {
    console.log('cleared');
    setList({})
    showAlert(true, 'danger', 'List emptied')
  }

  const removeItem = (id) => {
    setList(list.filter((list_item) => {return list_item.id !== id}))
    showAlert(true, 'danger', 'Item Removed')
  }

  const editItem = (id) => {
    const item_being_edited = list.find((list_item) => {return list_item.id === id})
    if(item_being_edited){
      setIsEditing(true)
      setEditID(item_being_edited.id)
      setName(item_being_edited.title)
    }
    else{
      showAlert(true, 'danger', 'Item Not Found!')
    }
  }

  // function to show alert. Useful.
  const showAlert = (show=false, type='', msg='') => {  // function with default values. This sets message using a function
    setAlert({show: show, type : type, msg: msg})
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {/* display alert if alert.show is true */}
        {/* Passing showAlert function with default parameters into the Alert component */}
        {/* Also passing list so it can be used inside useEffect. This will prevent the timer in setTimeout function from overlapping on calling
         the component multiple times within 3 seconds. */}
        {/* EXPLANATION: The overlapping happens because when the component is rendered, passing new params doesn't cause it to re-render. It
          just maintains the previous instance of that component for 3 seconds(i.e until removeAlert is called). The useEffect calls the setTimeout
          to run on initial render but keeps running it for the rest of its lifecycle. It needs to run/get called again while its lifecycle
          is still not over, otherwise, it will just maintain that setTimeout and disappear after 3 seconds(i.e until removeAlert is called). */}
        {alert.show && <Alert alert={alert} removeAlert={showAlert} list={list} />}
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
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className='clear-btn' onClick={clearList}> Clear Items </button>
          </div>
      }
    </section>
  )
}

export default App
