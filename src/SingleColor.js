import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight}) => {
  // const [alert,setAlert]=useState(false)
  const bcg=rgb.join(',')
  console.log(bcg);
  const hex=rgbToHex(...rgb)
  return (
    <article className={`color`} style={{background:`rgb(${bcg})`}}> 
    <p className='percent-value'>{weight}</p>
    <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor
