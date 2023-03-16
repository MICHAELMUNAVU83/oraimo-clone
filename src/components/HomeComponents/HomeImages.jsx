import React from "react";
import audio from "../images/audio.jpeg";
import powerbank from "../images/powerbank.jpg";
import watch from "../images/watch.jpeg";
import shaver from "../images/shaver.jpg";

const HomeImages = () => {
  return (
    <div className="md:m-12 m-4">
      <div className=" grid grid-cols-2 gap-4">
        <div className="relative">
          <img src={audio} alt="audio" className="md:h-[400px] h-[200px] md:w-full  " />
          <p className="absolute top-3 left-10  text-white md:text-5xl text-xl font-bold">
            Audio
          </p>
        </div>
        <div className="relative">
          <img src={shaver} alt="shaver" className="md:h-[400px] h-[200px] md:w-full " />
          <p className="absolute top-3 left-10  text-white md:text-5xl text-xl font-bold">
            Lifestyle
          </p>
        </div>
        <div className="relative">
          <img src={powerbank} alt="powerbank" className="md:h-[400px] h-[200px] md:w-full " />
          <p className="absolute top-3 left-10  text-white md:text-5xl text-xl font-bold">
            Power
          </p>
        </div>
        <div className="relative">
          <img src={watch} alt="watch" className="md:h-[400px] h-[200px] md:w-full " />
          <p className="absolute top-3 left-10  text-white md:text-5xl text-xl font-bold">
            Wearable
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeImages;
