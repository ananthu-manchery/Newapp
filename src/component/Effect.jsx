import React from 'react'
import {useEffect} from 'react'
import { useState } from 'react';

export default function Sample() {
  const[count,setCount]=useState(0);
  const [count1,setCount1]=useState(0)
  

  useEffect(()=>{
 
    },1000); setTimeout(()=>{
      setCount((count)=>count+1);
  } );

  useEffect(()=>{
    setTimeout(()=>{
      setCount1((count1)=>count1+1);
    },2000);
  },[]);
 
  return(
    <div>
      <h2>i have renderd {count} times</h2>
      <h2>i have renderd {count1} times</h2>
    </div>
  )
}
