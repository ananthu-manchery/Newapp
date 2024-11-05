import React, { useEffect, useState } from 'react'

export default function SampleEffect() {



  const [width,setWidth]=useState(window.innerWidth)
  const [height,setHeight]=useState(window.innerHeight)
  
 
  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("EVENT LISTNER ADDED");
    return()=>{
      window.removeEventListener("resize",handleResize);
      console.log("EVENT LISTNER REMOVED");
    }
  },[]);

  useEffect(()=>{
    document.title=`size:${width} x ${height}`
  },[width,height])
  function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
 return(
  <div>
    <p>width:{width}px</p>
    <p>height:{height}px</p>
  </div>
 )
}
 //   const [calculation,setCalculation]=useState(0);


  //   useEffect(()=>{
  //       setCalculation(()=>count*2);
  //   },[count])
  // return (
  //   <div>
  //     <p>count:{count}</p>
  //     <button onClick={()=>setCount((c)=>c+1)}>+</button>
  //     <p>calculation:{calculation}</p>
  //   </div>
  // )