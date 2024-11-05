import React from 'react'

export default function ComponentC(props) {
  return (
    <div className='box'>
        <h2 className='cmp-head'> ComponentC</h2>
      <h3>{`bye ${props.user}`}</h3>
    </div>
  )
}
