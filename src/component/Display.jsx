
import { Link, useNavigate } from "react-router-dom"
import "./card.css";
import { useContext, useState } from "react";
import { myContext } from "./context";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Scrolltotop from "./Scrolltotop";



export default function Display({ }) {
    const { Pdata, setPdata, LikeProd, setLikeProd, Addcart, setAddcart, ProductDetails, setProductDetails } = useContext(myContext)
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")

    function handleLike(product) {
        if (LikeProd.includes(product)) {
            setLikeProd(LikeProd.filter(item => item !== product))

        } else {
            setLikeProd([...LikeProd, product])
        }

    }
    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    function filterData(data) {
        return data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }



    function handleCart(addProduct) {
        if (!Addcart.includes(addProduct)) {
            setAddcart([...Addcart, addProduct]);
        }
    }


    // console.log("liked", Addcart);


    const [sortCriteria, setSortCriteria] = useState(''); // State to hold the sorting criteria

    function handleSort(event) {
        setSortCriteria(event.target.value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function sortData(data) {
        switch (sortCriteria) {
            case 'price-asc':
                return data.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return data.sort((a, b) => b.price - a.price);
            case 'name-asc':
                return data.sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return data.sort((a, b) => b.name.localeCompare(a.name));
            default:
                return data;
        }
    }

    const filteredData = filterData(Pdata);
    const sortedData = sortData(filteredData);




    return (
        <div>
            <header>
                <div>
                    <div class="logo-container">
                        <Link to="/wishlist" className="wish-list">
                            <img className="wish-logo" src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png" alt="Wish List" />
                        </Link>
                    </div>
                    <div >
                    </div>
                    <h2 className="head1">Products</h2>

                    <form
                        onSubmit={(e) => e.preventDefault()} className="search-bar1">
                        <input
                            value={searchTerm}
                            className="search-inp"
                            onChange={handleSearch}
                            type="text"
                            placeholder="Search ..."
                        />
                    </form>
                    {/* <span id="cart-badge" >{Addcart.length}</span> */}
                    <div className="cards-container" id="cards-container">

                        {sortedData.map((data) => (
                            <div className="card-exm">
                                <div key={data.id} className="center">



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
                                            <Card.Text>   {data.category}  </Card.Text>
                                            <Card.Text>  ₹ {data.price}/-  </Card.Text>
                                            <Button className="card-btn" variant="primary" onClick={() => handleLike(data)}>{
                                                LikeProd.includes(data) ? "Unlike" : "Like"
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
            <div className="sort-button">

                <label htmlFor="sort">Sort by: </label>
                <select id="sort" value={sortCriteria} onChange={handleSort}>
                    <option value="">None</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>

            </div>
            <Scrolltotop />
        </div>
    )
}



// <Card className="card-style" style={{ width: '18rem' }}>
// <Link to={`/details/${data.id}`}

//     style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'

//     }}>
//     <Card.Img className="card-img-top" src={data.image} />
// </Link>
// <Card.Body>
//     <Card.Title>{data.name}</Card.Title>
//     <Card.Text>   {data.category}  </Card.Text>
//     <Card.Text>  ₹ {data.price}/-  </Card.Text>
//     <Button className="card-btn" variant="primary" onClick={() => handleLike(data)}>{
//         LikeProd.includes(data) ? "Unlike" : "like"
//     } </Button>
//     <Button className="card-btn" onClick={() => handleCart(data)}>{
//         Addcart.includes(data) ? <Link to="/Addtocart" className="go-cart"> Go to cart</Link> : "Add to cart"
//     }
//     </Button>
// </Card.Body>
// </Card>


