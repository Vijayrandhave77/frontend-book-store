import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {ADD} from '../Store/BsellingSlice'

function BsellingBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [book,setBook] = useState([])

  useEffect(() => {

    const cheader = Cookies.get('jwtToken')
    console.log(cheader);
    
    axios.get('api/user/BestsellingBooks',{
      headers: {
        "Authorization": `Bearer ${cheader}`
      }
    })
      .then(response => {
        setBook(response.data)
  
      })
      .catch((err) => {
        console.log(err);
      })
  },[]);

  return (
    <div className="best-selling-books-container">
      <div className="tittle-bselling-book">
        <h1>Bestselling Books</h1>
        <span onClick={() => navigate("/book")}>
          View All <i className="fa-solid fa-chevron-right next"></i>
        </span>
      </div>
      <div className="bs-books-box">
        {
          book.map((data)=>(
            <div className="bs-books">
          <div className="img">
            <NavLink to="/bookdis">
            <img src={data.img} alt="" onClick={()=>dispatch(ADD(data))}/>
            </NavLink>
          </div>
          <div className="b-details-box">
            <p className="b-brand">{data.brand}</p>
            <h3 className="b-title">{data.title}</h3>
            <p className="b-writer">{data.writer}</p>
            <p className="b-price">
              {data.price.original} <del>{data.price.discount}</del>
            </p>
          </div>
          <div className="b-cart">
            <a href="">ADD TO CART</a>{" "}
            <div className="fav">
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
          ))
        }
        
      </div>
    </div>
  );
}

export default BsellingBook;
