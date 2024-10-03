import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import {AddToCart} from '../Store/BsellingSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BooksDiscription() {
  const data = useSelector((state) => state.BsellItem.BsellingItem);
  const count = useSelector((state) => state.BsellItem.count);
  const dispatch = useDispatch()
  if(count>0){
    toast.error("Item alerady Added...");
  }
 
  let added =  (data)=>{
    dispatch(AddToCart(data))
}
  return (
    <div className="book-discription-container">
 
          <div className="bd-left">
            <img src={data[0].img} alt="" />
          </div>
          <div className="bd-right">
            <h1>{data[0].title}</h1>
            <h2>{data[0].price.original}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, cumque? Expedita perspiciatis adipisci suscipit autem
              animi, odit soluta mollitia assumenda.
            </p>
            <div className="cart-system">
              {/* <button className="sign">-</button>
              <span>1</span>
              <button className="sign">+</button> */}
              <button className="cart-btn" onClick={()=>added(data)}>Add to Cart</button>
            </div>
          </div>
      <ToastContainer />
    </div>
  );
}

export default BooksDiscription;
