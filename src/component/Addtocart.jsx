
import React, { useContext, useEffect, useState } from 'react'
import { myContext } from './context'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export default function Addtocart() {
  const{Addcart,setAddcart }=useContext(myContext)

  useEffect(() => {
    setAddcart(Addcart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    })));
  }, []);

 

  const confirmRemovecart=(addprod)=>{
    setAddcart(Addcart.filter(item=>item!==addprod))
}
const handleQuantityChange = (id, quantity) => {
  setAddcart(Addcart.map(item => 
    item.id === id ? { ...item, quantity: Number(quantity) } : item
  ));
};

const totalPrice = Addcart.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div>
    <div id="cards-container4" style={{marginTop:"100px"}} >
       {
        Addcart.length >0?(
       Addcart.map((data)=>(
                <div className="card-exm">
                <Card style={{ width: '18rem' }}>
                <Link to={`/details/${data.id}`}

style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

}}>
<Card.Img className="card-img-top" src={data.image} />
</Link>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        {data.category}
        </Card.Text>
        <Card.Text>  ₹ {data.price}/-  </Card.Text>
        <label htmlFor="quantity" className='a-native-dropdown'>Quantity:</label>
        <select
                name="quantity"
                autoComplete="off"
                id="quantity"
                value={data.quantity}
                onChange={(e) => handleQuantityChange(data.id, e.target.value)}
              >
                {[...Array(11).keys()].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
       
        <Button className="card-btn" variant="primary" onClick={()=>confirmRemovecart(data)}>Remove </Button>
       
      </Card.Body>
    </Card>

                </div>
            ))):(
              <div className="empty-wishlist-message" style={{marginTop:"110px"}}>
                <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" />
              <p >Your cart is currently empty!</p>
              <p style={{textDecoration:"none"}}>Explore new arrivals<Link style={{textDecoration:"none"}} to="/display">  here</Link></p>
            </div>
            )
          }
            </div>
              
            {Addcart.length > 0 && (
        <div className="total-box">
          Subtotal: ₹{totalPrice}/-<br />
          <Button id='buy-now' className="card-btn" variant="primary">
            <Link className='go-cart' to={"/Buynow"} style={{ color: 'white', textDecoration: 'none' }}>Buy now</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
