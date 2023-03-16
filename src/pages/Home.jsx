import React from "react";
import HomeSlider from "../components/HomeComponents/HomeSlider";
import HomeImages from "../components/HomeComponents/HomeImages";
import HomeProductSlider from "../components/HomeComponents/HomeProductSlider";
import HomePoductsDisplay from "../components/HomeComponents/HomePoductsDisplay";

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
