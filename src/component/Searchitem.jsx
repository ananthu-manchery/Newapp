import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'


import { myContext } from './context';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function Searchitem() {
    const { Pdata, setPdata, LikeProd, setLikeProd, Addcart, setAddcart } = useContext(myContext)

    function handleLike(product) {
        if (LikeProd.includes(product)) {
            setLikeProd(LikeProd.filter(item => item !== product))

        } else {
            setLikeProd([...LikeProd, product])
        }

    }




    function handleCart(addProduct) {
        if (!Addcart.includes(addProduct)) {
            setAddcart([...Addcart, addProduct]);
        }
      }

    // console.log(useParams())
    const {term}=useParams();
   
    const [filterData,setFilterData]=useState([]);

    
    useEffect(()=>{
        const filteredData=()=>{
            const data = Pdata.filter((d) => d.name.toLowerCase().includes(term.toLowerCase()));
            //  console.log(data);
             setFilterData(data)
        }
        filteredData();

    },[term])
   


  return (
    <header>

    <Link to="/wishlist" className="to-wishlist"><img id="wish-logo" src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png" alt="" /></Link>
    <h2 className="head1">Electronics</h2>
    <div className="cards-container" id="cards-container">
    {filterData.map(data => (
       <div className="card-exm">
       <div key={data.id} className="col-lg-4 my-3 text-center">

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
                   <Card.Text>   {data.category}  </Card.Text>
                   <Button className="card-btn" variant="primary" onClick={() => handleLike(data)}>{
                       LikeProd.includes(data) ? "Unlike" : "like"
                   } </Button>
                   <Button className="card-btn" onClick={() => handleCart(data)}>{
                       Addcart.includes(data) ? <Link to="/Addtocart" className="go-cart"> Go to cart</Link> : "Add to cart"
                   }
                   </Button>
               </Card.Body>
           </Card>
       </div>

   </div>
    ))}
  </div>
  </header>
)
}
