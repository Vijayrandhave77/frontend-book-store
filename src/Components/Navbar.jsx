import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import Islogin from "./Islogin";
import Islogout from "./Islogout";

function Navbar() {
  const [token,setToken] = useState("")
  useEffect(()=>{
    const token = Cookies.get("jwtToken")
    setToken(token)
  },[])
  
  const [them, settheam] = useState("/light.png");

  const mode = () => {
    if (them == "/light.png") {
      settheam("/dark.png");
    } else {
      settheam("/light.png");
    }
  };

  return (
    <div className="navbar">
      <div className="logo">BookStore</div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/book">Books</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="search">
          <input type="text" name="" id="" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass s-icon"></i>
        </div>
        <div className="theam">
          <img src={them} alt="" onClick={mode} />
        </div>
      {!token?<Islogin/>:<Islogout/>}
      </div>
    </div>
  );
}

export default Navbar;
