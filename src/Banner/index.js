import React from "react";
import Slider from "react-slick";
import { Link } from "react-scroll";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpg";
import ten from "../assets/10.jpg";

import "./index.css";

const items = [
  {
    src: one,
  },

  {
    src: two,
  },

  {
    src: three,
  },

  {
    src: four,
  },

  {
    src: five,
  },

  {
    src: six,
  },

  {
    src: seven,
  },

  {
    src: eight,
  },

  {
    src: nine,
  },

  {
    src: ten,
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
