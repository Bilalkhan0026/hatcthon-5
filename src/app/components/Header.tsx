
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="lg:w-[1320px] h-auto lg:h-[auto] lg:ml-[300px] bg-cover bg-center mt-10 ">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:mt-[80px] px-4">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <Image
            src="/i.png"
            alt="Logo"
            width={249}
            height={40}
            className="mx-auto lg:mx-0"
          />
          <h1 className="mt-[18px] text-white font-bold text-3xl md:text-5xl lg:text-[60px] leading-tight">
            <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
          </h1>
          <p className="mt-[22px] text-white text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
          <div className="mt-[22px]">
            <a
              href="/menu"
              className=" w-[190px] h-[60px] bg-[#FF9F0D] rounded-full text-white font-medium text-center flex items-center justify-center transition-all hover:bg-[#e08e0d]"
            >
              See Menu
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-10 lg:mt-0">
          <Image
            src="/Image.png"
            alt="Header Image"
            width={878}
            height={670}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;








