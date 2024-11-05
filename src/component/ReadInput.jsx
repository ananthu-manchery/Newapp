import React, { useState } from 'react'

export default function ReadInput() {
    const [name,setName]=useState("")
    const [payment,setPayment]=useState("")
    const [shipping,setShipping]=useState("")

    // function handleInput(evt){
    //     console.log(evt.target.value);
    //     setName(evt.target.value)
    // }
    function handlePaymentChange(event){
      setPayment(event.target.value);
      
    }
    function handleDeliveryChange(event){
      setShipping(event.target.value);
    }
  return (
    <div>
      <input type="text" onChange={e=>setName(e.target.value)}/>
      <h3>{name}</h3>
    
    <select value={payment} onChange={handlePaymentChange}>
      <option value="">select an option</option>
      <option value="Master card">Master card</option>
      <option value="visa">visa</option>
      <option value="Rupay">Rupay</option>
      
    </select>
    <p>{payment}</p><br />
    <br />
    <label >
      <input type="radio" value="pick up" 
      checked={shipping === "pick up"}
      onChange={handleDeliveryChange}/>pick up
    </label><br />

    <label >
      <input type="radio" value=" delivery" 
      checked={shipping === "delivery"}
      onChange={handleDeliveryChange}/>
      Delivery
    </label> 
    <p>shipping:{shipping}</p>  
     </div>
    
  )
}
