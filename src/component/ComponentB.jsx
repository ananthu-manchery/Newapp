import React from 'react'
import ComponentC from './ComponentC.jsx'

export default function ComponentB(props) {
  return (
    <div className='box'>
      <h1 className='cmp-head'>component B</h1>
    <ComponentC user={props.user}/>
    </div>
  )
}
