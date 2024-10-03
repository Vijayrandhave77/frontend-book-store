import React from "react";
import { useNavigate } from "react-router-dom";

function DealWeek() {
  const navigate = useNavigate();

  return (
    <div className="deal-week-container">
      <div className="week-title">
        <h1>Deals of the Week</h1>
        <p onClick={()=>navigate("/book")}>
          View All <i class="fa-solid fa-chevron-right next"></i>
        </p>
      </div>
      <div className="deal-week-box">
        <div className="deal-left-btn">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        
        <div className="left-right-container">
          <div className="left-deal-week">
            <div className="deal-week-image">
              <img src="/1.jpg" alt="" />
            </div>
            <div className="week-descrip">
              <p className="b-brand">KINDLE</p>
              <h3 className="b-title">Angery God (All Saints High Book 3)</h3>
              <p className="b-writer">L.J. Shen</p>
              <p className="b-price">
                $1.30 <del>$1.75</del>
              </p>
            </div>
          </div>
          <div className="right-deal-week">
            <div className="deal-week-image">
              <img src="/2.jpg" alt="" />
            </div>
            <div className="week-descrip">
              <p className="b-brand">KINDLE</p>
              <h3 className="b-title">Angery God (All Saints High Book 3)</h3>
              <p className="b-writer">L.J. Shen</p>
              <p className="b-price">
                $1.30 <del>$1.75</del>
              </p>
            </div>
          </div>
        </div>
        <div className="deal-right-btn">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default DealWeek;
