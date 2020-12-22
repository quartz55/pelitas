import React, { useMemo } from "react";
import eleven from "../assets/11.jpg";
import one from "../assets/1.jpg";

import "./index.css";

const StayWithUs = () => {
  const showBiggerImage = useMemo(
    () => (window.innerWidth <= 850 ? false : true),
    [window.innerWidth]
  );

  return (
    <div className="stay__with__us">
      <img
        className="stay__with__us__image"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
        src={showBiggerImage ? one : eleven}
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
