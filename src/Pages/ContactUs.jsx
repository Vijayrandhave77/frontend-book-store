import React, { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  
  const userName = useRef("");
  const userEmail = useRef("");
  const userSubject = useRef("");
  const userText = useRef("");

  const namevalidation=()=>{
    if(userName.current.value.length<3){
      toast.error("Name must be at least 3 characters");
      return false;
    }else{
      return true;
    }
  }

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
        return true;
      }
    }
  }

  const subjectvalidation=()=>{
    if(userSubject.current.value.length==0){
      toast.error("Enter subject");
      return false;
    }else{
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(namevalidation()){
      if(userEmailvalidation()){
        if(subjectvalidation()){
          axios.post('https://dummyjson.com/posts/add',{
            username: userName.current.value,
            email: userEmail.current.value,
            subject: userSubject.current.value,
            message: userText.current.value
          })
          .then((response)=>{
            console.log(response.data);
          })
          .catch((error)=>{
            console.log(error);
          })
          userName.current.value=""
          userEmail.current.value=""
          userSubject.current.value=""
          userText.current.value=""
          toast.success("data submited succesfully.", {
            theme: "colored"
          })
        }
      }
    }
  };

  return (
    <div className="contact-container">
      <form
        action=""
        method="post"
        className="contact-form"
        onSubmit={(e) =>handleSubmit(e)}
      >
        <h1>Contact Us</h1> <br />
        <input type="text" placeholder="Enter your name." ref={userName}/> <br /> <br />
        <input type="text" placeholder="Enter your email." ref={userEmail}/>
        <br /> <br />
        <input type="text" placeholder="Subject." ref={userSubject}/> <br />
        <br />
        <textarea placeholder="Enter your message." ref={userText}/>
        <br /> <br />
        <button type="submit">Send</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
