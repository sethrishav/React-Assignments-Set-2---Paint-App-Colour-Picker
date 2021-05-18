import React, { useState } from 'react';

const Selection=(props)=>{
  const {applyColor}=props
  const [var, func]=useState({background:''});
  return(
  <div className="flix-box" onClick={()=>applyColor(func)} style={{var}} >
    <h2 class="subheading">Selection</h2>
    </div>
  );
}
export default Selection;
