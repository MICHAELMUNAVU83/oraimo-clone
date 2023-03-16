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
      image: slider5,
    },
    {
      image: slider3,
    },
    {
      image: slider5,
    },
    {
      image: slider1,
    },
    
    {
      image: slider2,
    },
    
    {
      image: slider4,
    }
    
  ];
  return (
    <Splide
      className="w-full md:h-[500px] h-[250px]"
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
          <img src={slide.image} alt="slide" className="md:h-[500px] h-[250px] w-full" />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HomeSlider;
