import React from "react";
import { NavLink,Outlet } from "react-router-dom";
function FeturedBook() {
  return (
    <div className="feature-container">
      <div className="feature-title">
        <h1>Featured Books</h1>
      </div>
      <div className="f-category-books">
        <ul>
          <li>
            <NavLink to="/feature">Featured</NavLink>
          </li>
          <li>
            <NavLink to="onsale">On sale</NavLink>
          </li>
          <li>
            <NavLink to="mostviewed">Most viewed</NavLink>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default FeturedBook;
