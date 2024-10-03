import React from "react";

function Cover() {
  return (
    <div className="cover">
      <div className="left-cover">
        <h1>
          Featured Books of the <span>February</span>
        </h1>
        <button>See More</button>
      </div>
      <div className="right-cover">
        <img src="/cover.png" alt="" />
      </div>
    </div>
  );
}

export default Cover;
