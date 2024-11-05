import React, { useState } from 'react'

export default function Like() {
    const[like,setLike]=useState(20)
    const[unlike,setUnlike]=useState(20)
    const [activeBtn,setActiveBtn]=useState("none")

    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLike(like + 1);
            setActiveBtn("like");
            return;
        }
        if (activeBtn === "like") {
            setLike(like- 1);
            setActiveBtn("none");
            return;
        }
        if (activeBtn === "dislike") {
            setLike(like + 1);
            setUnlike(unlike - 1);
            setActiveBtn("like");
        }
    };
     const handleDisikeClick=()=>{
     
        if (activeBtn === "none") {
            setLike(like + 1);
            setActiveBtn("like");
            return;
        }
        if (activeBtn === "like") {
            setLike(like- 1);
            setActiveBtn("none");
            return;
        }
        if (activeBtn === "dislike") {
            setLike(like + 1);
            setUnlike(unlike - 1);
            setActiveBtn("like");
        }
        };
        

     

    
  return (
    <div>
      <div>
    <div >
        <button
            className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
            onClick={handleLikeClick}
        >
            <span >thumb_up</span>
            Like {like}
        </button>
        <button
            className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
            onClick={handleDisikeClick}
        >
            <span >thumb_down</span>
            Dislike {unlike}
        </button>
    </div>
</div>

      
    </div>
  )
}
