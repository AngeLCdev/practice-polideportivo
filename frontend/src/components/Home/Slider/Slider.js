import React from "react";
import Slider from "@farbenmeer/react-spring-slider";

const SliderHome = () => {
  return (
    <div className="m-slider">
      <Slider auto={5000} hasBullets={true}>
        <div><img src="/img/kaguya.jpg" alt=""/></div>
        <div><img src="/img/arietty.jpg" alt=""/></div>
        <div><img src="/img/chihiro.jpg" alt=""/></div>
        <div><img src="/img/howl.jpg" alt=""/></div>
      </Slider>
    </div>
  );
};

export default SliderHome;
