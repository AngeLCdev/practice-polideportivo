import React from "react";

import SliderHome from "./Slider/Slider";
import Instalaciones from "./Instalaciones/Instalaciones";

const Home = () => {
  return (
    <>
      <SliderHome />
      <div className="m-instalaciones__container">
        <Instalaciones tipo="5 pistas" titulo="Pádel" imagen={'padel'} />
        <Instalaciones tipo="4 pistas" titulo="Tenis" imagen={'tenis'} />
        <Instalaciones tipo="3 pistas" titulo="Fútbol" imagen={'futbol'} />
        <Instalaciones tipo="2 pistas" titulo="Baloncesto" imagen={'baloncesto'} />
        <Instalaciones tipo="1 pista" titulo="Volleyball" imagen={'volleyball'} />
      </div>
    </>
  );
};

export default Home;
