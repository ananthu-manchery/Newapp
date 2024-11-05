
import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const[posts,setPosts]=useState([])

    useEffect(()=>{
        fetch('http://blackfarm.in/react/view_filims.php')
        .then((response)=>{
            return response.json()

        })
        .then((data)=>{
            console.log(data);
            setPosts(data)
        })
        .catch((error)=>{
            console.error('fetch error:',error);
        })
        
    })

    return(
        <div>
            <ol>
               {posts.map(post=>(
                <li>{post.name}</li>
               ))}
            </ol>
        </div>
         
    )
   
}

// const [posts,setPosts]=useState([])

// useEffect(()=>{
//     fetch('http://blackfarm.in/react/view_filims.php')
//     .then((response)=>{
//         return response.json();

//     })
//     .then((data)=>{
//         console.log(data);
//         setPosts(data);

//     })
//     .catch((error)=>{
//         console.error('fetch error:',error);
//     })

// })
// return (
// <div>
//     <ul>
//         {posts.map(post=>(
//             <div key={post.name}>
//             <li >{post.name}</li>
//             <p>{post.description}
//             </p>
//             </div>
//         ))}</ul>
       
// </div>
// )