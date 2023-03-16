import React from "react";
import HomeSlider from "../components/HomeSlider";
import HomeImages from "../components/HomeImages";
import HomeProductSlider from "../components/HomeProductSlider";
import HomePoductsDisplay from "../components/HomePoductsDisplay";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeImages />
      <HomeProductSlider />
      <HomePoductsDisplay />
    </div>
  );
};

export default Home;
