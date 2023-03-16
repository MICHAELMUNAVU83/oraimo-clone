import React from "react";
import HomeSlider from "../components/HomeSlider";
import HomeImages from "../components/HomeImages";
import HomeProductSlider from "../components/HomeProductSlider";


const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeImages />
      <HomeProductSlider />
    </div>
  );
};

export default Home;
