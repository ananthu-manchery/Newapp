import React from 'react'
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin.css'

export default function Admindash() {
  const navigate=useNavigate()
    const [users, setUsers] = useState([]);


    const handleLogout = () => {
      
    
      navigate('/admin');
    }
  return (
<div className="admin-panel">
      <h2 className="header-title">Welcome to Admin Panel</h2>
      <header className="header">
        <div className="log-out" onClick={handleLogout}>
          <p> Log out</p>
          <img
            className="log-out-img"
            src="https://cdn-icons-png.freepik.com/256/10024/10024363.png?semt=ais_hybrid"
            alt="Log out"
          />
        </div>
      </header>
      <div className="admin-container">
        <div className="admin-link">
          <Link to="/viewproduct">View Products</Link>
        </div>
        <div className="admin-link">
          <Link to="/users">View Users</Link>
        </div>
        <div className="admin-link">
          <Link to="/addproduct">Add Products</Link>
        </div>
      </div>
    </div>

  );
}
