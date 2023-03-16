import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../splide-green.min.css";
import { GrStar } from "react-icons/gr";
import { SlArrowRight } from "react-icons/sl";
import create1 from "../images/create1.jpg";
import create2 from "../images/create2.jpg";
import create4 from "../images/create4.jpg";
import create5 from "../images/create5.jpg";

import create6 from "../images/create6.jpg";
import create7 from "../images/create7.jpg";

import create8 from "../images/create8.jpg";
import create9 from "../images/create9.jpeg";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://oraimo-clone-backend.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const images = [
    {
      image: create1,
    },
    {
      image: create2,
    },
    {
      image: create4,
    },
    {
      image: create5,
    },
    {
      image: create6,
    },
    {
      image: create7,
    },
    {
      image: create8,
    },
    {
      image: create9,
    },
  ];
  return (
    <div className="mx-8">
      <div className="flex my-8 gap-4">
        <p className="font-bold text-md">Home</p>
        <SlArrowRight className="text-gray-400 font-bold mt-2" size={10} />
        <p className="text-md">Create Your Way</p>
      </div>
      <div className="mb-2">
        {images.map((image) => (
          <img src={image.image} alt="create" className="h-full w-full" />
        ))}
      </div>
      <div className="mb-40">
        <Splide
          className="w-full h-[300px] "
          options={{
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
          {products.map((product) => (
            <SplideSlide>
              <div className="flex flex-col items-center ">
                <img
                  src={product.image}
                  alt="slide"
                  className="h-[300px] w-[300px] mx-2"
                />
                <p className=" text-center font-semibold text-sm">
                  {product.name}
                </p>
                <div className="flex">
                  <div className="flex items-center">
                    {[...Array(product.star_rating)].map((star) => {
                      return <GrStar className="text-yellow-400" />;
                    })}
                  </div>
                  <p className="text-sm text-blue-500 ml-2">
                    {product.reviews} Reviews
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="text-lg font-semibold line-through">
                    KES {product.initial_price}
                  </p>
                  <p className="text-lg font-bold text-[#82E602]">
                    KES {product.actual_price}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Home;
