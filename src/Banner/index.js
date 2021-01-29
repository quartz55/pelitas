import React from "react";
import Slider from "react-slick";
import { Link } from "react-scroll";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";

import "./index.css";

const items = [
  {
    src: one,
  },
  {
    src: two,
  },
];

const Banner = () => {
  const settings = {
    infinite: true,
    loop: true,
    autoplay: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="banner">
      <Link to="description" smooth duration={1000}>
        <span>
          <span />
        </span>
      </Link>

      <Slider {...settings}>
        {items.map((item, i) => (
          <div key={i} className="slider__element">
            <img className="banner__image" src={item.src} alt="" />
          </div>
        ))}
      </Slider>
      <div className="banner__fadeBottom" />
    </section>
  );
};

export default Banner;
