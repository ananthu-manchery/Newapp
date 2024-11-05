import React, { useEffect, useState } from 'react'

export default function Digitalclock() {
    const[time,setTime]=useState(new Date())
    useEffect(()=>{
        const intervalid=setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(intervalid);
        }
       
    })
    function formatTime(){
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridiem=hours>= 12 ? "PM":"AM"
         hours=hours % 12 || 12;
        return`${hours}:${minutes}:${seconds} ${meridiem}`;
    }
  return (
    <div className='clock-container'>
      <div className='clock'>
      <span className='time'>{formatTime()}</span>
      </div>

    </div>
  )
}
