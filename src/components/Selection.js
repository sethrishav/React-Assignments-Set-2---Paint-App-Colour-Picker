import React, { useState } from 'react';

const Selection=(props)=>{
  const [var, func]=useState({background:''})
  return(
  <div onClick={applyColor(func)} style={var} ></div>
  )
}
export default Selection;
