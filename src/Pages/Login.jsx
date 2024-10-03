import React from 'react'
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const userEmail = useRef("")
  const userPwd = useRef("")

  const userEmailvalidation=()=>{
    if(userEmail.current.value==0){
      toast.error("Enter email");
      return false;
    }else{
      const regx = /[a-zA-Z0-9]@+[a-zA-z].+/
      if(!userEmail.current.value.match(regx)){
        toast.error("invalid email")
        return false;
      }else{
      //   if(userEmail.current.value==="12345@gmail.com"){
      //     return true;
      //   }else{
      //     toast.error("Email Incorrect");
      //     userPwd.current.value=""
      //    return false;
      // }
      return true
      }
    }
  }

  const passwordvalidation=()=>{
    if(userPwd.current.value.length==0){
      toast.error("Enter password");
      return false;
    }else{
    //   if(userPwd.current.value==="12345"){
    //     return true;
    //   }else{
    //     toast.error("Password Incorrect");
    //    return false;
    // }
    return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      if(userEmailvalidation()){
        if(passwordvalidation()){
          axios.post('api/user/login',{
            userEmail:userEmail.current.value,
            userPwd:userPwd.current.value,
          })
          .then((response)=>{
            console.log(response.data);
          })
          .catch((error)=>{
            console.log(error);
          })
          userEmail.current.value=""
          userPwd.current.value=""
          toast.success("User logged in succesfully.", {
            theme: "colored"
          })
        }
      }
    
  };



  return (
    <div className='login-form-container'>
      <div className="log-form">
        <div className="login-title">
            <h2>Login to your account</h2>
        </div> <br /> <br />
        <form method="post" className='l-form' onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" name="email" id="" placeholder='Email or Mobile Number'ref={userEmail}/> <br /> 
            <input type="password" name="password" id="" placeholder='Password'ref={userPwd}/> <br /> 
            <button type="submit">LOGIN</button>
        </form> <br /><br />
        <p>Forget your password? <span>Rest here</span></p> <br />
        <p>Have trouble logging in? <span>Get Help</span></p>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
