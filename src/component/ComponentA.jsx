import React, { useState } from 'react'
import ComponentB from './ComponentB'

export default function ComponentA() {
    const [user,setUser]=useState("ananthu")
  return (
    <div className='box'>
      <h1 className='cmp-head'>component A</h1>
      {setUser}
     <h2>{`hello ${user}`}</h2>
      <ComponentB  user/>
    </div>
  )
}
