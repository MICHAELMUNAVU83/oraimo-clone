import React from "react";
import oraimo from "./images/oraimo.png";
import { BsCart } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const AfterNavbar = () => {
  return (
    <>
      <div className="flex justify-center gap-12 my-8">
        <img src={oraimo} alt="oraimo" className="h-[90px]" />
        <p className="py-8 font-bold text-gray-600 hover:text-[#82E602] cursor-pointer ">
          Home
        </p>
        <p className="py-8 font-bold text-gray-600 hover:text-[#82E602] cursor-pointer ">
          Daily Deals
        </p>
        <p className="py-8 font-bold text-gray-600 hover:text-[#82E602] cursor-pointer ">
          Product{" "}
        </p>
        <p className="py-8 font-bold text-gray-600 hover:text-[#82E602] cursor-pointer ">
          Support
        </p>
        <p className="py-8 font-bold text-gray-600 hover:text-[#82E602] cursor-pointer ">
          #Create Your Way
        </p>
        <form className="py-5">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div class="relative ml-4">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="block w-full p-4 pl-10 text-sm border border-gray-400  rounded-3xl text-black  w-[180px] h-[40px]  "
              placeholder="search oraimo products"
            />
          </div>
        </form>
        <div className="py-5 text-gray-400 cursor-pointer">
          <BsCart size={30} />
        </div>
        <div className="py-5 text-gray-400 cursor-pointer">
          <HiOutlineUser size={30} />
        </div>
      </div>

      <div className="bg-gray-200 gap-12 p-2 flex justify-center">
        <div className="flex gap-2 text-gray-600">
          <CiDeliveryTruck size={30} />
          <p>Fast Free Shipping over KES 1500</p>
        </div>
        <div className="flex gap-2 text-gray-600">
          <AiOutlineDollarCircle size={30} />
          <p>Cash on Delivery</p>
        </div>

        <div className="flex gap-2 text-gray-600">
          <IoShieldCheckmarkOutline size={30} />

          <p>Hassle-Free Warranty</p>
        </div>
      </div>
    </>
  );
};

export default AfterNavbar;
