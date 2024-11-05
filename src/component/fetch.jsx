
import React, { useEffect, useState } from 'react'

export default function Fetch() {

    const[apiDetails,setApiDetils]=useState([]);
    useEffect(()=>{
        fetch('http://blackfarm.in/react/view_filims.php')
        .then((response)=>{
            return response.json();

        })
        .then((data)=>{
            console.log(data);
            setApiDetils(data);

        })
        .catch((error)=>{
            console.error('fetch error:',error);
        })
    
        // getAPI();

    },[]);

    // const getAPI=()=>{
    //     fetch('http://blackfarm.in/react/view_filims.php')
    //     .then((response)=>{
    //         return response.json();

    //     })
    //     .then((data)=>{
    //         console.log(data);
    //         setApiDetils(data);

    //     })
    //     .catch((error)=>{
    //         console.error('fetch error:',error);
    //     })
    // };
    

    return (
    <div className='film-desc'>
        <ul className='film-ul'>
            {apiDetails.map((api) =>(
                <div className='film-data' key={api.name}>
                    <li  className='film-li'>
                        <div className='film-img'> <img src={api.image} alt="img"/></div>
                        
                        <h2 className='film-head'> {api.name} </h2>
                           
                        <p className='film-para'>{api.description}</p>
                        
                    </li>
                </div>
            ))}
        </ul>
    </div>
  )
}
