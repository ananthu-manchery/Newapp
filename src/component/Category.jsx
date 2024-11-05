import React from 'react'
import { productData } from './data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from "react-router-dom"
import "./card.css";
import { useContext, useState } from "react";
import { myContext } from './context';


export default function Category() {
    const { category } = useParams();
    const { Pdata, setPdata, LikeProd, setLikeProd, Addcart, setAddcart, ProductDetails, setProductDetails } = useContext(myContext)
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

const filterProducts=productData.filter(product=>product.category===category)
 
console.log(filterProducts);
    // const smartphones=productData.filter(product=>product.category==="smart phones")
    // const laptops=productData.filter(product=>product.category==="laptop")
  return (
    <div   id="cards-container1">
        {filterProducts.map((product)=>(
            <div className="card-exm">
            <div key={product.category} className="center">



                <Card className="card-style" style={{ width: '18rem'}}>
                    <Link to={`/details/${product.id}`}

                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}>
                        <Card.Img className="card-img-top" src={product.image} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>   {product.category}  </Card.Text>
                        <Card.Text>  ₹ {product.price}/-  </Card.Text>
                        <Button className="card-btn" variant="primary" onClick={() => handleLike(product)}>{
                            LikeProd.includes(product) ? "Unlike" : "Like"
                        } </Button>
                        <Button className="card-btn" onClick={() => handleCart(product)}>{
                            Addcart.includes(product) ? <Link to="/Addtocart" className="go-cart"> Go to cart</Link> : "Add to cart"
                        }
                        </Button>
                    </Card.Body>
                </Card>



            </div>

        </div>
        )
           
        )}
    </div>
  )
}
