import React from 'react'
import { productData } from './data'

const NewData=({productData})=>{
    return(
        <ul>
            {productData.map((NewData)=>
        (
            <li key={NewData.id}>{NewData.name}-${NewData.price}</li>
        ))}
        </ul>
    )
}
export default NewData;