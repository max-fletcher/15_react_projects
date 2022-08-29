import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = (props) => {

  const [alert, setAlert] = useState(false)
  console.log('Props sent to SingleColor', props.color.rgb, props.color.weight, {...props.color.rgb});
  const bcg = props.color.rgb.join(',') // just takes an array and concatenated the values using a separator(using the parameter)
  // console.log(bcg);
  
  // let hex = ''
  // props.color.rgb.map((rgb_code)=>{
  //   hex += rgbToHex(rgb_code)
  // })

  // console.log(hex);

  const hex = rgbToHex(props.color.rgb[0], props.color.rgb[1], props.color.rgb[2])
  console.log('Hex value from SingleColor', hex);

  // You can also use this for hex code. It comes from the values package.
  const hex2 = '#' + props.color.hex
  console.log('Another way to get hex values from SingleColor', hex2);

// function to set alert to true and also to copy the hex value to clipboard
  const copy_color = () => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
  }

  // used to reset the alert message to false after 3 seconds.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    // cleanup function to cleanup timeout
    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return(
   // The | style={{backgroundColor: `rgb(${bcg})`}}> | applies a bg-color using the "rgb" function which is a native CSS and/or JS function that 
   // generates a color if fed color intensities using comma as separator (i.e 255,255,255 is full white since all r,g,b values are set to max 
   // while 0,0,0 is full black since all r,g,b values are set to zero.). The $ is used since its a function ran as JS to generate the color.

   // This className | className={`color ${props.index > 10 && 'color-light'}`} | works in a way that the 'color' class is applied always. However, 
   // ${props.index > 10 && 'color-light'}` means that the 'color-light' is applied when the index is above 10(i.e 11 and up). It turns the text white
   // so that the colored box does not cause the text to meld into each other and become less visible.
    <article className={`color ${props.index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={copy_color}>
      <p className='percent-value'> {props.color.weight}% </p>
      <p className='color-value'>{hex}</p>
      {/* You can use this instead to get the hex code(from values package) instead of the function coming from utils.js*/}
      {/* <p className='color-value'>{hex2}</p> */}

      {/* show this message of alert === true.*/}
      {alert && <p className='alert'> Copied To Clipboard </p>}
    </article>
  )
}

export default SingleColor
