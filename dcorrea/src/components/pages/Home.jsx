import React from "react";
import Cta from "../shared/Cta";
import HeroTypewriter from "../shared/HeroTypewriter";
import Profile from "../shared/Profile";
import Watercolor from "../shared/Watercolor";

const Home = () => {
  return (
    <>
      <HeroTypewriter />
      <Watercolor />
      <Profile />
      <Cta />
    </>
  );
};

export default Home;
