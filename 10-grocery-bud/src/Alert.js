import React, { useEffect } from 'react'

const Alert = (props) => {
  console.log(props.alert.show, props.alert.type, props.alert.msg);

  // Call removeAlert(a.k.a showAlert with default params since it will make the alert component disappear) after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      props.removeAlert()
    }, 3000)
    return () => clearTimeout(timeout) // cleanup function to remove timeout function
  }
  , [props.list])

  return <p className={ `alert alert-${props.alert.type}` }>{props.alert.msg}</p> // if props.type is danget, it will render to className='alert alert-danger'
}

export default Alert
