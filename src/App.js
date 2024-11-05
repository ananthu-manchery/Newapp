// import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { myContext } from './component/context';
// import './App.css';

import Home from './component/Home'
import Login from './component/Login'
import About from './component/About'
import Page1 from './component/Page1'
import Display from './component/Display';
import Common from './component/common';
import Signup from './component/signup'
import Color from './component/sample';
import ReadInput from './component/ReadInput';
import Factorial from './component/Factorial';
import Colorpicker from './component/colorpicker'
import Todo from './component/todo';
import Todolist from './component/Todolist';
import Sample from './component/Effect';
import SampleEffect from './component/Sample-effect';
import Fetch from './component/fetch';
import FetchData from './component/fetchData';
import Like from './component/Like';
import Newcomp from './component/Newcomp';
// import { useState } from 'react';
import Newcomp1 from './component/Newcomp1';
import Digitalclock from './component/Digitalclock';

import { productData } from './component/data';
import { useState } from 'react';
import Wishlist from './component/Wishlist';
import Addtocart from './component/Addtocart';

import Searchitem from './component/Searchitem';
import Details from './component/productDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

import Category from './component/Category';
import Adminlogin from './component/Adminlogin';
import CommonWrapper from './component/CommonWrapper';
import Buynow from './component/Buynow';
import Admindash from  './component/Admindash';
import Fashion from './component/Fashion';
import ScrollToTopButton from './component/Scrolltotop';
import Viewprod from './component/Viewprod';
import Users from './component/Users';
import Addproduct from './component/Addproduct';











function App() {
  
 
 

   
  const ObjData = ["orange ", " apple ", "grapes ", " watermelon"]

  const Newdata=["python","mern","java","Ai"]


  const userDetails=[
    {name:"ananthu",course:"MERN",Institution:"oneteam"},
    {name:"varun",course:"Python",Institution:"Soften"},
    {name:"shyam",course:"Flutter",Institution:"luminar"},
    {name:"mrudul",course:"Java",Institution:"Soften"}

  ]

  const userData=[
    {name:"user1",course:"MERN",Institution:"Soften"},
    {name:"user2",course:"Python",Institution:"luminar"},
    {name:"user3",course:"Flutter",Institution:"Soften"},
    {name:"user4",course:"Java",Institution:"Soften"}

  ]
  

  const [Pdata,setPdata]=useState(productData)
  const [datas,setDatas]=useState([...Pdata])
  console.log("Product Data",Pdata);

  const [LikeProd,setLikeProd]=useState([])
  const[Addcart,setAddcart]=useState([])
  const [sortedData,setSortedData]=useState([])
  
 
  

const val={userData,userDetails,Newdata,Pdata,setPdata,LikeProd,setLikeProd,Addcart,setAddcart,sortedData,setSortedData}

  return (
    <div className="App">
      
      {/* <Home/>
      <Login/>
      <About/>
      <Page1/> */}
     
     
      <myContext.Provider value={val}>
        <BrowserRouter>
         
          
       <CommonWrapper value={Addcart.length} />

          <Routes>
          <Route path='/admin' element={<Adminlogin/>}></Route>
          <Route path='/admindash' element={<Admindash  />}></Route>
            <Route path='/' element={<Home  />} />
            <Route path='/About' element={<About  />} />
            <Route path='/Page1' element={<Page1  />} />
            <Route path='/Login' element={<Login details={ObjData} />} />
            <Route path='/Display' element={<Display items={datas} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/sample' element={<Color />} />
            <Route path='/input' element={<ReadInput />} />
            <Route path='/fact' element={<Factorial />} />
            <Route path='/color' element={<Colorpicker />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/todolist' element={<Todolist />} />
            <Route path='/Effect' element={<Sample />} />
            <Route path='/useEffect' element={<SampleEffect />} />
            <Route path='/fetch' element={<Fetch />} />
            <Route path='/fetchData' element={<FetchData />} />
            <Route path='/like' element={<Like />} />
            <Route path='/new' element={<Newcomp />} />
            <Route path='/new1' element={<Newcomp1 />} />
            <Route path='/dgclock' element={<Digitalclock  />} />
            <Route path='/wishlist' element={<Wishlist  />} />
            <Route path='/addtocart' element={<Addtocart  />} />

            <Route path='/search/:term' element={<Searchitem  />} />
            <Route path='/details/:id' element={<Details  />} />
            <Route path='/products/:category' element={<Category  />} />
            <Route path='/buynow' element={<Buynow  />} />
            <Route path='/fashion' element={<Fashion  />} />

            <Route path='/scrolltotop' element={<ScrollToTopButton  />} />
            
            <Route path='/viewproduct' element={<Viewprod  />} />
            <Route path='/users' element={<Users  />} />
        
        
            <Route path='/addproduct' element={<Addproduct />} />
         

      


          </Routes>
        </BrowserRouter>
      </myContext.Provider>
      
    </div>
  );
}

export default App;
