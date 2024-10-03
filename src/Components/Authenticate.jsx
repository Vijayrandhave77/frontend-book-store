import React from 'react'
import { useEffect } from "react";
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

function Authenticate({component}) {
    const Navigate = useNavigate()
    useEffect(()=>{
      const token = Cookies.get("jwtToken")
      if(!token){
        Navigate('/Login')
      }
      },[])
  return (
    <div>
      {component}
    </div>
  )
}

export default Authenticate
