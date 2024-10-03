import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {fc2} from '../Store/BsellingSlice'
function FcartBook1() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("api/user/SellBooks")
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const dispatch = useDispatch()
  return (
    <div className="feature-books-box">
      {data.map((idata) => (
        <div className="fbs-books">
          <div className="fimg">
            <NavLink to="/bookdis"> <img src={idata.img} alt="" onClick={()=>dispatch(fc2(idata))}/></NavLink>
           
          </div>
          <div className="fb-details-box">
            <p className="fb-brand">{idata.brand}</p>
            <h3 className="fb-title">{idata.title}</h3>
            <p className="fb-writer">{idata.writer}</p>
            <p className="fb-price">
              {idata.price.original}
              <del>{idata.price.discount}</del>
            </p>
          </div>
          <div className="fb-cart">
            <a href="">ADD TO CART</a>{" "}
            <div className="ffav">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FcartBook1;
