import React, { useState } from 'react';

const Selection=(props)=>{
  let [var, func]=useState({background:''})
  const {applyColor}=props;
  return(
  <div className="fix-box" onClick={()=>applyColor(func)} style={{background: var.background}} >
    <h2 className="subheading">Selection</h2>
    </div>
  );
}
export default Selection;

