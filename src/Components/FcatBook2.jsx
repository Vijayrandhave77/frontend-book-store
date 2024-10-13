import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {fc3} from '../Store/BsellingSlice'
function FcatBook2() {
  const dispatch = useDispatch()
  const [data,setdata] = useState([])

  useEffect(()=>{
    axios.get('https://backend-book-store-3xxx.onrender.com/user/MostBooks')
    .then(response=>{
      setdata(response.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <div className="feature-books-box">
         {
        data.map((data)=>(
          <div className="fbs-books">
      <div className="fimg">
        <NavLink to="/bookdis"> <img src={data.img} alt="" onClick={()=>dispatch(fc3(data))}/></NavLink>
       
      </div>
      <div className="fb-details-box">
        <p className="fb-brand">{data.brand}</p>
        <h3 className="fb-title">{data.title}</h3>
        <p className="fb-writer">{data.writer}</p>
        <p className="fb-price">
          {data.price.original}<del>{data.price.discount}</del>
        </p>
      </div>
      <div className="fb-cart">
        <a href="">ADD TO CART</a>{" "}
        <div className="ffav">
          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
    </div>
        ))
      }
  </div>
  )
}

export default FcatBook2
