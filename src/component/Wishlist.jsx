import React, { useContext } from 'react'
import { myContext } from './context'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';




export default function Wishlist() {

  const { LikeProd, setLikeProd } = useContext(myContext)

  const confirmRemove = (prod) => {
    if (window.confirm(`Removing ${prod.name} from wishlist?`)) {
      handleRemove(prod)
    }

  }
  const handleRemove = (prod) => {
    setLikeProd(LikeProd.filter(item => item !== prod))
  }
  return (
    <div className='card-area'>

      {
        LikeProd.length > 0 ? (
        LikeProd.map((data) => (
          <div className="card-exm">
            <Card className="card-style" style={{ width: '18rem' }}>
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
                <Button className="card-btn" variant="primary" onClick={()=>confirmRemove(data)}>Remove </Button>
              </Card.Body>
            </Card>

          </div>
        ))):(
          <div className="empty-wishlist-message" style={{marginTop:"110px"}}>

            <img src="data:image/png;base64,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" alt="" />
            <p >Your wishlist is currently empty!</p>
            <p style={{textDecoration:"none"}}>Explore new arrivals<Link style={{textDecoration:"none"}} to="/display">  here</Link></p>
          </div>
        )
        }


    </div>
  )
}
