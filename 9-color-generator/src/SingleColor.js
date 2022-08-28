import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = (props) => {

  const [alert, setAlert] = useState(false)
  console.log(props.color.rgb, props.color.weight, {...props.color.rgb});
  const bcg = props.color.rgb.join(',') // just takes an array and concatenated the values using a separator(using the parameter)
  // console.log(bcg);
  
  // let hex = ''
  // props.color.rgb.map((rgb_code)=>{
  //   hex += rgbToHex(rgb_code)
  // })

  // console.log(hex);

  const hex = rgbToHex(props.color.rgb[0], props.color.rgb[1], props.color.rgb[2])
  console.log(hex);


  return(
    <article className={`color`} style={{backgroundColor: `rgb(${bcg})`}}>
      <p className='percent-value'> {props.color.weight}% </p>
      <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor
