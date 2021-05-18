import React, { useState } from 'react';

const Selection=(props)=>{
  const {applyColor}=props
  var [component, updateSelectionStyle]=useState({background:''});
  return(
  <div className="flix-box" onClick={()=>applyColor(updateSelectionStyle)} style={{background: component.background}} >
    <h2 class="subheading">Selection</h2>
    </div>
  )
}
export default Selection;
