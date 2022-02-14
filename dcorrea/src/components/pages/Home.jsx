import React from "react";
import Cta from "../shared/Cta";
import HeroTypewriter from "../shared/HeroTypewriter";
import TwoCols from "../shared/TwoCols";
import Watercolor from "../shared/Watercolor";

const Home = () => {
  return (
    <>
      <HeroTypewriter />
      <Watercolor />
      <TwoCols />
      <Cta />
    </>
  );
};

export default Home;
