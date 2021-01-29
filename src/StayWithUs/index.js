import React from "react";
import three from "../assets/3.jpg";

import "./index.css";

const StayWithUs = () => {
  return (
    <div className="stay__with__us">
      <img
        className="stay__with__us__image"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
        src={three}
        alt=""
      />
      <div className="stay__with__us__text">
        <p>STAY WITH US</p>
        <h4>ENJOY NATURE!</h4>
      </div>
    </div>
  );
};

export default StayWithUs;
