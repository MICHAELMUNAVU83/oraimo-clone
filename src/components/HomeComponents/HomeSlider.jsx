import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../splide-green.min.css";
import slider1 from "../images/slider1.jpeg";
import slider2 from "../images/slider2.jpeg";
import slider3 from "../images/slider3.jpeg";
import slider4 from "../images/slider4.jpeg";
import slider5 from "../images/slider5.jpeg";

const HomeSlider = () => {
  const slides = [
    {
      image: slider1,
    },
    {
      image: slider2,
    },
    {
      image: slider3,
    },
    {
      image: slider4,
    },
    {
      image: slider5,
    },
  ];
  return (
    <Splide
      className="w-full h-[500px]"
      options={{
        type: "loop",
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,

        pagination: true,
        drag: true,
      }}
    >
      {slides.map((slide, index) => (
        <SplideSlide key={index}>
          <img src={slide.image} alt="slide" className="h-[500px] w-full" />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HomeSlider;
