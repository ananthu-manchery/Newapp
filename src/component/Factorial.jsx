import React, { useState } from 'react'

export default function Factorial() {
  const [name,setName]=useState([])
  const[newName,setNewName]=useState()
  const addName=()=>{
    if(newName.trim()!== ""){
      setName([...name,newName]);
      setNewName('')
    }
  }
  return(<div>
   <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)} />
   <button onClick={addName}>add</button>

   <ul>
    
    {name.map((name,index) =>
            <li key={index}>
      <span>{name}</span></li>
    )}
   </ul>
    </div>
  )
}

// {
//     const [num,setNum]=useState(0)
//     const [fact,setFact]=useState(0)

//     function findfact(){
//         let f=1
//         for(let i=1;i<=num;i++){
//             f=f*i
//         }
//         setFact(f)
//     }
//   return (
//     <div>
//       <input type="text" onChange={e=>setNum(e.target.value)}/>
//       <button onClick={findfact}>find</button>
//       <h3>{fact}</h3>
//     </div>
//   )
// }
