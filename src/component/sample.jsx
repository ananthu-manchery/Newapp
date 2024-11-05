import {useState} from 'react'

export default function Count() {

    const [count,setCount]=useState(0)
    // const increment=()=>{setCount(count+1)};
    // const decrement=()=>{setCount(count-1)};
    // const reset=()=>{setCount(0)};


    // const[newcount,setNewcount]=useState(0)


    function handleCount() {
        setCount(count+1)
        
    }

    return(
        <div>
            <button onClick={handleCount()}>add</button>
            <p>your number is :{count}</p>
        </div>
    )}
        // return(
        //     <div className='count1'>
        //         <p id='count2'>{count}
        //         </p><br />
        //    <div className='count3'>
        //             <button className='btn1' onClick={()=>{setCount(count+1)}}> increase</button>
        //             <button className='btn1' onClick={()=>{setCount(count-1)}}> decrease</button>
        //             <button className='btn1' onClick={()=>{setCount(0)}}> reset</button>
        //             </div>
        //             </div>
                    

               
        // )




// const [name,setName]=useState("ananthu")
 
 
//     return (
//     <div>
//         <h1>hi {name} nice to meet you</h1>
//         <button onClick={()=>setName("mrudul")}>change</button>
      
//     </div>
//   )
// const [color,newColor]=useState("black")
// return(
//     <div>
//         <h2 style={{backgroundColor:color,color:'white'}}>{color}</h2>
//         <button onClick={()=>newColor("orange")}>change</button>
//     </div>
// )




