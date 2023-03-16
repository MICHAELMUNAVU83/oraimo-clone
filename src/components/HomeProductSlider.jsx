import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splide-green.min.css";
import { GrStar } from "react-icons/gr";

const HomeProductSlider = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="m-12 py-8">
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
  );
};

export default HomeProductSlider;
