import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import srclogo  from "../../img/srclogo.jpg";
import switchlogo  from "../../img/switchlogo.jpg";
import sqclogo  from "../../img/sqclogo.jpg";
import smclogo  from "../../img/smclogo.jpg";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Explore Clubs at</span>
      <span>Silicon</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href = "/">
            <img src={srclogo} alt=""/>
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href = "/">
          <img src={switchlogo} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href = "/">
          <img src={sqclogo} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href = "/">
          <img src={smclogo} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
