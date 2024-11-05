import React from 'react'
import { useState } from 'react'
import './color.css'

export default function Colorpicker() {
    const [color,setColor]=useState("");
    function handleColorChange(event){
        setColor(event.target.value);

    }

  return (
    <div className='color-picker-container'>
        <h1>color picker</h1>
        <div className='color-display' style={{backgroundColor:color}}>
            <p>selected color:{color}</p>
        </div>
        <label>Seleted color:{color}</label>
        <input type="color" value={color} onChange={handleColorChange}/>
      
    </div>
  )
}
