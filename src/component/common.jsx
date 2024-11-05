import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import Form from 'react-bootstrap/Form';


import Offcanvas from 'react-bootstrap/Offcanvas';
import { myContext } from "./context";




export default function Common({ Pdata, setFilterData }) {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const { Addcart, setAddcart } = useContext(myContext)
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // const [searchTerm, setSearchTerm] = useState("")
  // function handleSearch(event) {
  //   setSearchTerm(event.target.value);
  // }

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "1") {
      navigate('/Display');
    }
    else if (selectedValue === "2") {
      navigate('/fashion');
    } else if (selectedValue === "3") {
      navigate('/Grocery');
    }

  };
  const toggleHamburger = () => {
    setShow(!show);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(""); // Reset subcategory when category changes
  };

  const handleSubCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedSubCategory(value);
    if (value) {
      navigate(`/products/${value}`);
    }
  };
  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  const getSubCategories = () => {
    switch (selectedCategory) {
      case "1":
        return (
          <>
            <option value="smart phones" onClick={() => handleCategoryClick('smart phones')}>Mobiles</option>
            <option value="Laptops" onClick={() => handleCategoryClick('Laptops')}>Laptops</option>
          </>
        );
      case "2":
        return (
          <>
            <option value="fashion" onClick={() => handleCategoryClick('fashion')}>Men's Fashion</option>
            <option value="2.2">Women's Fashion</option>
          </>
        );
      case "3":
        return (
          <>
            <option value="3.1">Fruits</option>
            <option value="3.2">Vegetables</option>
          </>
        );
      default:
        return null;
    }
  };



  return (
    <>
      <nav className="new-nav">
        <header>
          <div className="nav-bar">
            <form className="brand"><Link className="link1" to="/" >E-cart</Link></form>


           

            <div className="cart">
              <div className="profile">
                <Link to="/Login" className="to-cart">

                  <img id="pro-img" src="https://img.icons8.com/color/80/gender-neutral-user.png" alt="img" />
                </Link>

              </div>


              <Link to="/Addtocart" className="to-cart">

                <img id="cart-imgcart" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="img" /></Link>
              <div className="cart-value">{Addcart.length}</div>

            </div>
          </div>
          <div className="nav-bar-wrapper">
            <div className={`hamburger ${show ? 'active' : ''}`} onClick={toggleHamburger}>
              <span></span>
              <span></span>
              <span></span>
              <div variant="primary" onClick={handleShow}>

              </div>

            </div>


            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Hi,Ananthu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Form.Select aria-label="Default select example"
                  onChange={handleCategoryChange}
                  value={selectedCategory}>
                  <option value="" disabled selected>Select a category</option>
                  <option value="1">Electronins</option>
                  <option value="2">Fashion</option>
                  <option value="3">Grocery</option>
                </Form.Select>
                {selectedCategory && (
                  <Form.Select
                    aria-label="Subcategory select example"
                    onChange={handleSubCategoryChange}
                    value={selectedSubCategory}
                  >
                    <option value="" disabled>Select a subcategory</option>
                    {getSubCategories()}
                  </Form.Select>
                )}

              </Offcanvas.Body>

            </Offcanvas>



            <div className="items">  <Link className="link1" to="/About" >About</Link></div>
            <div className="items"><Link className="link1" to="/Display" >Display</Link></div>
            <div className="items"><Link className="link1" to="/Page1" >Page</Link></div>
            <div className="items"><Link className="link1" to="/admin" >Admin</Link></div>

            <div className="items"> </div>
            <div className="items"></div>
            <div className="items"></div>
          </div>
        </header>
      </nav>
    </>

    // <div className="home1">
    //   <img src="" alt="" />
    //     <h1 className="head3">This is Home</h1>
    //     <nav className="nav-imp">
    //         <ul className="list1">
    //             <li> <Link className="link1" to="/" >Home</Link></li>
    //             <li> <Link className="link1" to="/About" >About</Link></li>
    //             <li> <Link className="link1" to="/Display" >Display</Link></li>
    //             <li><Link className="link1" to="/Login" >Login</Link></li>
    //             <li> <Link className="link1" to="/Page1" >Page</Link></li>
    //     </ul>

    //     <Form className="search-input">
    //     <Form.Control 
    //       type="search"
    //       placeholder="Search"
    //       className="me-2"
    //       aria-label="Search"

    //     />
    //     <Button variant="outline-success">Search</Button>
    //   </Form>
    //     </nav>

    //     {/* <h1>{props.data}</h1>
    //     <h2>{PropsData}</h2> */}

    // </div>


  )
}