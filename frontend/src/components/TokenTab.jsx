import React from "react";
import { AiOutlineHeart, AiOutlineStar, AiFillGithub } from "react-icons/ai";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

const TokenTab = ({ coinInfo }) => (
  <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-y border-gray-300 p-3 pb-8 sm:pb-3">
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <img
        src={coinInfo?.image || "https://via.placeholder.com/64"}
        alt={coinInfo?.name || "Token"}
        className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover mx-auto sm:mx-0"
      />
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div className="flex items-baseline justify-center gap-2 md:block text-center sm:text-left">
          <p className="text-2xl sm:text-3xl font-bold">{coinInfo?.name || "Token Name"}</p>
          <p className="text-gray-500">${coinInfo?.symbol?.toUpperCase() || "SYM"}</p>
        </div>
        <div className="flex items-center justify-center sm:justify-start mt-2 sm:mt-0">
          <p className="text-3xl sm:text-2xl font-bold w-max mr-2 sm:mr-3">${coinInfo?.current_price?.toLocaleString() || "0.00"}</p>
          <span className={`text-base sm:text-sm font-bold flex items-center ${coinInfo?.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
            <IoMdArrowDropup size={18} />
            {coinInfo?.price_change_percentage_24h?.toFixed(2) || "0.00"}%
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 sm:mt-0">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 sm:p-3 aspect-square rounded-2xl cursor-pointer">
          <AiOutlineHeart size={18} />
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 sm:p-3 aspect-square rounded-2xl cursor-pointer">
          <AiOutlineStar size={18} />
        </button>
      </div>
    </div>
    <div className="flex items-center justify-center md:justify-end gap-3">
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 text-2xl"
      >
        <FaTwitter />
      </a>
      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 text-2xl"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="https://discord.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 text-2xl"
      >
        <FaDiscord />
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 text-2xl"
      >
        <AiFillGithub />
      </a>
    </div>
  </div>
);

export default TokenTab;
