import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splide-green.min.css";
import audio from "./images/audio.jpeg";
import powerbank from "./images/powerbank.jpg";
import watch from "./images/watch.jpeg";
import shaver from "./images/shaver.jpg";
const HomeProductSlider = () => {
  return (
    <div className="m-12">
      <Splide
        className="w-full h-[300px] "
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          autoplay: true,
          interval: 5000,
          pauseOnHover: false,
          pauseOnFocus: false,
          arrows: true,
          pagination: false,
          drag: true,
          breakpoints: {
            640: {
              perPage: 1,
              perMove: 1,
            },
            768: {
              perPage: 2,
              perMove: 1,
            },
            1024: {
              perPage: 3,
              perMove: 3,
            },
          },
        }}
      >
        <SplideSlide>
          <div className="relative">
            <img src={audio} alt="slide" className="h-[300px] w-[300px] mx-2" />
            <p className="absolute top-5 left-10  text-white text-5xl font-bold">
              Audio
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative">
            <img
              src={powerbank}
              alt="slide"
              className="h-[300px] w-[300px] mx-2"
            />
            <p className="absolute top-5 left-10  text-white text-5xl font-bold">
              Audio
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative">
            <img src={watch} alt="slide" className="h-[300px] w-[300px] mx-2" />
            <p className="absolute top-5 left-10  text-white text-5xl font-bold">
              Audio
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative">
            <img
              src={shaver}
              alt="slide"
              className="h-[300px] w-[300px] mx-2"
            />
            <p className="absolute top-5 left-10  text-white text-5xl font-bold">
              Audio
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative">
            <img src={audio} alt="slide" className="h-[300px] w-[300px] mx-2" />
            <p className="absolute top-5 left-10  text-white text-5xl font-bold">
              Audio
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default HomeProductSlider;
