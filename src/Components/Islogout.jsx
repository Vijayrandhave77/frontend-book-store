import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
function Islogout() {
  const count = useSelector((state) => state.BsellItem.begCount);
  return (
    <div className="logout">
      <div className="account">
        <button onClick={()=>{Cookies.remove('jwtToken')}}>
          <NavLink to="/Login">LogOut</NavLink>
        </button>
        <NavLink to="/cartpage"><FaCartShopping className="cart-icon"/>
        </NavLink>
        <div className="count-box">{count}</div>
      </div>
    </div>
  );
}

export default Islogout;
