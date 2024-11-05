import React, { useContext, useEffect, useState } from 'react'
import { myContext } from './context'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router';


import Display from './Display';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';








export default function Details() {

  const { id } = useParams()

  const { Pdata, LikeProd, setLikeProd, Addcart, setAddcart } = useContext(myContext)

  const [product, setProduct] = useState({})

  const [relatedProduct, setRelatedProduct] = useState([])
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




  useEffect(() => {
    const filterProduct = Pdata.find((product) => product.id == parseInt(id))

    setProduct(filterProduct)
    if (filterProduct) {
      const relatedProducts = Pdata.filter(item => item.category === filterProduct.category && item.id !== filterProduct.id);
      // console.log("relatedproducts=", relatedProducts);
      setRelatedProduct(relatedProducts)
    }
    window.scrollTo(0, 0);
  }, [id, Pdata, setProduct, setRelatedProduct]);
  // useEffect(() => {
  //   if (product && Pdata) {
  //     const relatedProduct = Pdata.filter((r) => r.category === product.category && r.id !== product.id);
  //      console.log("relatedproducts=", relatedProduct);
  //     // setRelatedProduct(relatedProduct)

  //   }
  // }, [product.Pdata])



  return (
    <>
    <div className='det-prd'>
      <div className="container" id='cards-container1'>
        <div key={product.id} className="card-details">
          <div id='crd-css' className="col-lg-4 my-3 text-center">
            <Card style={{ width: '18rem' }}>
              <Link
                to={`/details/${product.id}`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Card.Img className="card-img-top" src={product.image} />
              </Link>
              <Card.Body className='card-body'>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.category}</Card.Text>
                <Card.Text>₹ {product.price}/-</Card.Text>
                <div className='btn-det'>
                  <Button className="card-btn" variant="primary" onClick={() => handleLike(product)}>{
                    LikeProd.includes(product) ? "Unlike" : "like"
                  } </Button>
                  <Button className="card-btn" onClick={() => handleCart(product)}>{
                    Addcart.includes(product) ? <Link to="/Addtocart" className="go-cart"> Go to cart</Link> : "Add to cart"
                  }
                  </Button>
                </div>



              </Card.Body>
              <br />

            </Card>
          </div>
        </div>
        <div className='prod-details'>

          <Card.Text className='prod-card'> <h1 className='prod-head'>About this item</h1><br /> {product.details}</Card.Text>
        </div>


      </div >
      <Card.Img className='detail-img' src={product.imagedetails1} />
      <Card.Img className='detail-img' src={product.imagedetails2} />
      <Card.Img className='detail-img' src={product.imagedetails3} />
      <Card.Img className='detail-img' src={product.imagedetails4} />
      <Card.Img className='detail-img' src={product.imagedetails5} />
      <Card.Img className='detail-img' src={product.imagedetails6} />

    </div>
      <br />
      <header>

        <div >
          <h2 className="head1">Related products</h2>
          {/* <span id="cart-badge" >{Addcart.length}</span> */}
          <div>

            {relatedProduct.map((data) => (
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
                      <Card.Text>  ₹ {data.price}/-  </Card.Text>
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


        </div>
      </header>

    </>

  )
}
