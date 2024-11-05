import React from 'react'
import { useLocation } from 'react-router'
import Common from './common'



const CommonWrapper = ({ AddcartLength }) => {
    const location = useLocation();
    const hideCommonPaths = ['/admin', '/admindash','/viewproduct','/users','/addproduct'];
  
    return (
      !hideCommonPaths.includes(location.pathname) && <Common value={AddcartLength} />
    );
  };
  
  export default CommonWrapper;