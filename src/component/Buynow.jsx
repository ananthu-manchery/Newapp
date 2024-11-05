import React, { useContext, useState } from 'react'
import { myContext } from './context'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Addtocart from './Addtocart';

export default function Buynow() { 
   const{Addcart,setAddcart }=useContext(myContext)
   const [name,setName]=useState("")
    const [payment,setPayment]=useState("")



    function handlePaymentChange(event){
      setPayment(event.target.value);
      
    }

  const totalPrice = Addcart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div>
    <div className='buy-now'>
      
    <div className='total-price'>
      Total: {totalPrice}₹
     
  
    </div>
   
    
    </div>
    <div class="container p-0">
        <div class="card px-4">
            <p class="h8 py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Person Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Name" ></input>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"></input>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="text" placeholder="MM/YYYY"></input>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="password" placeholder="***"></input>
                    </div>
                </div>
                <div class="col-12">
                    <div class="btn btn-primary mb-3">
                        <span class="ps-3">Pay :{totalPrice}₹</span>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
