import React from "react";
import audio from "../images/audio.jpeg";
import powerbank from "../images/powerbank.jpg";
import watch from "../images/watch.jpeg";
import shaver from "../images/shaver.jpg";

const HomeImages = () => {
  return (
    <div className="m-12">
      <div className=" grid grid-cols-2 gap-4">
        <div className="relative">
          <img src={audio} alt="audio" className="h-[400px] w-full" />
          <p className="absolute top-5 left-10  text-white text-5xl font-bold">
            Audio
          </p>
        </div>
        <div className="relative">
          <img src={shaver} alt="shaver" className="h-[400px] w-full" />
          <p className="absolute top-5 left-10  text-white text-5xl font-bold">
            Lifestyle
          </p>
        </div>
        <div className="relative">
          <img src={powerbank} alt="powerbank" className="h-[400px] w-full" />
          <p className="absolute top-5 left-10  text-white text-5xl font-bold">
            Power
          </p>
        </div>
        <div className="relative">
          <img src={watch} alt="watch" className="h-[400px] w-full" />
          <p className="absolute top-5 left-10  text-white text-5xl font-bold">
            Wearable
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeImages;
