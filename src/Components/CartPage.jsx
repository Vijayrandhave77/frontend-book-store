import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Store/BsellingSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CartPage() {
  const AddTobagData = useSelector((state) => state.BsellItem.addTocart);
  const update = useSelector((state) => state.BsellItem.update);

  const dispatch = useDispatch();
  let [localData, setLocalData] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("addToCart");
    const finalLocalData = JSON.parse(data);
    setLocalData(finalLocalData);
  },[update]);

  const placeOrder = ()=>{
    if(localData.length==0){
      toast.error("Add items")
    }
    else{
      toast.success("Order Successfully Placed.", {
        theme: "colored"
      })
    }
  }
  return (
    <div>
      <div className="bag-page">
        {localData.map((beg) => (
          <div className="bag-items-container">
            <div className="bag-item-container">
              <div className="item-left-part">
                <img className="bag-item-img" src={beg.img} />
              </div>
              <div className="item-right-part">
                <div className="company">{beg.writer}</div>
                <div className="item-name">{beg.title}</div>
                <div className="price-container">
                  <span className="current-price">Rs {beg.price.original}</span>
                </div>
                <div className="return-period">
                  <span className="return-period-days">15 days</span> return
                  available
                </div>
              </div>

              <div
                className="remove-from-cart"
                onClick={() => dispatch(remove(beg))}
              >
                X
              </div>
            </div>
          </div>
        ))}

        <div className="bag-summary">
          <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ( Items) </div>
            <div className="price-item">
              <span className="price-item-tag">Total MRP</span>
              <span className="price-item-value">₹{}</span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Total Quantity</span>
              <span className="price-item-value priceDetail-base-discount">
                {}
              </span>
            </div>
            <div className="price-item">
              <span className="price-item-tag">Convenience Fee</span>
              <span className="price-item-value">$ 1</span>
            </div>
            <hr />
            <div className="price-footer">
              <span className="price-item-tag">Total Amount</span>
              <span className="price-item-value">₹{}</span>
            </div>
          </div>
          <button className="btn-place-order">
            <div className="css-xjhrni" onClick={placeOrder}>PLACE ORDER</div>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CartPage;
