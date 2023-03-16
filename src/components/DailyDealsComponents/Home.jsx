import React, { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
import { SlArrowRight } from "react-icons/sl";
import { CgMenuGridO } from "react-icons/cg";
import { CiGrid42 } from "react-icons/ci";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="flex px-4">
      <div className="w-[1/6] flex flex-col gap-4">
        <div className="flex  gap-4">
          <p className="font-bold text-md">Home</p>
          <SlArrowRight className="text-black font-bold mt-2" size={10} />
          <p className="text-md">Daily Deals</p>
        </div>
        <p>Shopping Options</p>

        <p>My Wishlist</p>
        <p className="text-sm ">You have no items in your wishlist.</p>
      </div>
      <div className="w-[5/6] pl-32 flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="flex">
            <CgMenuGridO
              className="text-gray-400 px-2 cursor-pointer font-bold mt-2 border border-black"
              size={40}
            />
            <CiGrid42
              className="text-gray-400 px-2 cursor-pointer font-bold mt-2 border border-black border-l-0"
              size={40}
            />
            <p className="mt-4 ml-4">Items 1-24 of 24</p>
          </div>
          <div className="flex gap-4">
            <p className="mt-4">Sort by</p>
            <select className="border border-black w-[150px] h-8 mt-3">
              <option value="1">Position</option>
              <option value="2">Product Name</option>
              <option value="3">Price</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div className="flex flex-col items-center w-[250px]">
              <img
                src={product.image}
                alt="slide"
                className="h-[200px] w-[250px] mx-2"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
