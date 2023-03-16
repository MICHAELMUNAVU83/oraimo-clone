import React, { useState, useEffect } from "react";
import { GrStar } from "react-icons/gr";
const HomePoductsDisplay = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products_display")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="m-12 py-8">
      <div className="text-2xl mt-12 font-bold text-center">
        <p className="my-4">Products Display</p>
        <p className="text-sm text-gray-400 font-normal">Upto 50% off !</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div className="flex flex-col items-center ">
            <img
              src={product.image}
              alt="slide"
              className="h-[300px] w-[300px] mx-2"
            />
            <p className=" text-center font-semibold text-sm">{product.name}</p>
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
  );
};

export default HomePoductsDisplay;
