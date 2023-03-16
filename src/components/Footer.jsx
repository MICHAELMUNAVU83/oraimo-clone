import React from "react";
import flogo from "./images/flogo.png";
import { GoMail } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { RiFacebookFill } from "react-icons/ri";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#323232] flex  gap-24 justify-center py-16">
        <div className="text-white">
          <h1 className="font-bold text-2xl text-[#82E602] my-2">Newsletter:::</h1>
          <p>Get the latest oraimo news and Giveaways</p>
          <form className="py-5">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <GoMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                class="block w-full p-4 pl-10 text-sm bg-[#323232] border border-gray-400  rounded-3xl text-black  w-[300px] h-[45px]  "
                placeholder="Enter your email address"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                <button className="bg-[#646464] rounded-3xl pl-2 font-bold text-white w-[100px] h-[40px]">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
          <p className="my-2">SERVICE HOURS: Monday-Friday 9AM to 6PM</p>
          <p className="my-2">
            CUSTOMER SERVICE: +0721 899 999 / +0724 393 939
          </p>
          <p className="ml-40">+0724 757 717 / +0727 535 595</p>
          <p className="my-2">Whatsapp us on 0728 810 810 / 0797 288 388</p>
          <div className="flex gap-2 mt-4">
            <ImInstagram className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
            <RiFacebookFill className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
            <AiOutlineTwitter className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
            <TfiYoutube className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl text-[#82E602] my-2">About Oraimo:::</h1>
          <p className="my-2">About us</p>
          <p className="my-2">Where to buy</p>
          <p className="my-2">Contact us</p>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl text-[#82E602] my-2">Terms:::</h1>
          <p className="my-2">Warranty</p>
          <p className="my-2">Order & Shipping</p>
          <p className="my-2">Replacement & Refund</p>
          <p className="my-2">Terms & Condition</p>
          <p className="my-2">Privacy Policy</p>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-2xl text-[#82E602] my-2">Get Help:::</h1>
          <p className="my-2">Track your order</p>
          <p className="my-2">Visit Carlcare </p>
        </div>
      </div>
      <div className="bg-black flex py-4 flex-col items-center justify-center text-white">
        <img src={flogo} alt="logo" />
        <p className="text-sm text-[#646464] py-4">
          © 2013-2023 oraimo Copyright. oraimo Technology (HK) Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
