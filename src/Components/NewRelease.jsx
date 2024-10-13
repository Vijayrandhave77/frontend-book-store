import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function NewRelease() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-book-store-3xxx.onrender.com/user/BestsellingBooks")
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="new-release-container">
      <div className="new-relese-title-side">
        <h1>New Release</h1>
        <div className="dis-img">
          <img src="/dis.png" alt="" />
          <div className="new-relese-desc">
            <h1 style={{ fontWeight: "normal" }}>Get Extra</h1>
            <h1 style={{ color: "red", fontSize: "3rem", fontWeight: "550" }}>
              Sale -25%
            </h1>
            <p style={{ color: "gray", fontSize: "2rem" }}>
              ON ORDER OVER $100
            </p>
            <button>View More</button>
          </div>
        </div>
      </div>

      <div className="new-release-link-side">
        <div className="new-release-link">
          <ul>
            <li>
              <a href="">History</a>
            </li>
            <li>
              <a href="">Science & Math</a>
            </li>
            <li>
              <a href="">Romance</a>
            </li>
            <li>
              <a href="">Travel</a>
            </li>
          </ul>
        </div>
        <div className="new-releasenav-books">
          {data.map((idata) => (
            <div className="bs-books" >
              <div className="img">
                <img src={idata.img} alt="" />
              </div>
              <div className="b-details-box">
                <p className="b-brand">{idata.brand}</p>
                <h3 className="b-title">{idata.title}</h3>
                <p className="b-writer">{idata.writer}</p>
                <p className="b-price">
                  {idata.price.original} <del>{idata.price.discount}</del>
                </p>
              </div>
              <div className="b-cart">
                <a href="">ADD TO CART</a>{" "}
                <div className="fav">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewRelease;
