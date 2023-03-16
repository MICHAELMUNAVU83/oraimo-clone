import React, { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
import { SlArrowRight } from "react-icons/sl";
import { CgMenuGridO } from "react-icons/cg";
import { CiGrid42 } from "react-icons/ci";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortby, setSortby] = useState("position");
  const [positioning, setPositioning] = useState("row");
  useEffect(() => {
    fetch(`https://oraimo-clone-backend.herokuapp.com/sort_by_${sortby}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [sortby]);
  return (
    <div className="flex px-4 mb-8">
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
              onClick={() => setPositioning("row")}
              className="text-gray-600 px-2 cursor-pointer hover:bg-gray-200 font-bold mt-2 border border-black"
              size={40}
            />
            <CiGrid42
              onClick={() => setPositioning("column")}
              className="text-gray-600 hover:bg-gray-200  px-2 cursor-pointer font-bold mt-2 border border-black border-l-0"
              size={40}
            />
            <p className="mt-4 ml-4">Items 1-24 of 24</p>
          </div>
          <div className="flex gap-4">
            <p className="mt-4">Sort by</p>
            <select
              className="border border-black w-[150px] h-8 mt-3"
              onChange={(e) => setSortby(e.target.value)}
              value={sortby}
            >
              <option value="position">Position</option>
              <option value="name">Product Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <div
          className={
            positioning === "row"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              : "flex flex-col"
          }
        >
          {products.map((product) => (
            <div
              className={
                positioning === "row"
                  ? "flex flex-col items-center w-[250px]"
                  : "flex gap-4 w-[1000px] "
              }
            >
              <img
                src={product.image}
                alt="slide"
                className="h-[200px] w-[250px] mx-2"
              />
              <div
                className={
                  positioning === "row"
                    ? ""
                    : "flex items-center flex-col gap-2"
                }
              >
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
