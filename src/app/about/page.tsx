import React from "react";
import Image from "next/image";
import { BsCaretRight, BsHandbag } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePermIdentity } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-white text-[#333333]  mt-[120px]">
      <div className="w-[1920px] h-[90px] bg-[#0d0d0d] text-white">
        <nav className="w-[1320px] h-[32px] mx-[300px] my-[29px] flex justify-between items-center">
          <div className="w-[109px] h-[32px] font-[700] text-[24px] leading-8 text-[#ffffff]">
            <span
              className="text-[#FF9F0D]
      "
            >
              Food
            </span>
            tuck
          </div>

          <ul>
            <Link className="ml-[25px]" href="/">
              Home
            </Link>
            <Link className="ml-[25px]" href="/menu">
              Menu
            </Link>
            <Link className="ml-[25px]" href="/">
              Blog
            </Link>
            <Link className="ml-[25px]" href="/">
              Pages
            </Link>
            <Link className="ml-[25px]" href="/">
              About
            </Link>
            <Link className="ml-[25px]" href="/shop">
              Shop{" "}
            </Link>
            <Link className="ml-[25px]" href="/">
              Contact{" "}
            </Link>
          </ul>
          <div className="w-[310px] h-[54px] flex justify-center items-center">
            <IoSearch className="w-[24px] h-[24px]" />
            <MdOutlinePermIdentity className="w-[24px] h-[24px] ml-[16px]" />
            <BsHandbag className="w-[24px] h-[24px] ml-[16px]" />
          </div>
        </nav>
      </div>
      <div className="w-[1920px] h-[320px] text-white bg-[url('/bgm1.png')] bg-cover bg-center">
        <div className="w-[225px] h-[104px] py-[108px] ml-[850px] text-center">
          <h1 className="w-[225px] h-[56px] font-[700] text-[47px] leading-[56px]">
            About Us
          </h1>
          <div className="w-[129px] h-[28px] flex justify-center items-center ml-[47px] mt-[20px] gap-[4px]">
            <p className="w-[56px] h-[28px]">Home</p>

            <BsCaretRight className="w-[16px] h-[16px] " />
            <p className="w-[53px] h-[28px] text-[#FF9F0D]">About</p>
          </div>
        </div>
      </div>
      {/* seaction 1 */}

      <div className="w-[1320px] h-[734px] flex ml-[300px] mt-[120px]">
        <div>
          {" "}
          <Image src="/111.png" alt="pic" width={336} height={536}></Image>
        </div>
        <div>
          {" "}
          <Image
            className="ml-[24px] mt-[54px]"
            src="/222.png"
            alt="pic"
            width={309}
            height={271}
          ></Image>
          <Image
            className="ml-[24px] mt-[27px]"
            src="/333.png"
            alt="pic"
            width={309}
            height={382}
          ></Image>
        </div>

        <div className="w-[526px] h-[366px] mt-[220px]  ml-[125px]">
          <p className="w-[68px] h-[26px] text-[#FF9F0D]">About us</p>
          <div className="font-[700] text-[48px] mt-8 leading-[56px]">
            Food is an important part Of a balanced Diet
          </div>
          <p className="font-[400] text-[16px] mt-8 leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>
          <div className="w-[379px] h-[60px]">
            <div className="w-[195px] h-[58px] mt-[33px] flex">
              <input
                className="flex py-[16px] px-[20px] bg-[#FF9F0D] text-white"
                type="text"
                placeholder="Show more"
              />
              <div className="w-[200px] h-[55px] ml-4 gap-[10px] flex">
                <div className="w-[60px] h-[60px] p-[18px] rounded-full justify-center items-center text-center bg-[#ff9f0d]">
                  <CiPlay1 className="w-[24px] h-[24px] m-auto" />
                </div>
                <p className=" font-[700] text-[16px] leading-[24px]">
                  Watch video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* secation 2 */}
      <div className="w-[1320px] h-[865px] ml-[300px] mt-[120px] ">
        <div className="w-[579px] h-[112px] ml-[371px] text-center">
          <div className=" font-[700] text-[48px] leading-[56px]">
            Why Choose us
          </div>
          <div className=" font-[400] text-[16px] mt-2 leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
          </div>
        </div>
        <Image
          className=" mt-[27px]"
          src="/ima1.png"
          alt="pic"
          width={1320}
          height={386}
        ></Image>
        <div className="w-[1320px] flex h-[253px] gap-[122px]">
          <div className="w-[359px] h-[225px] text-center mt-[56px]">
            <Image
              className="ml-[140px]"
              src="/s1.png"
              alt="pic"
              width={80}
              height={80}
            ></Image>{" "}
            <div className=" font-[700] text-[24px] mt-[24px] leading-[32px]">
              Best Chef
            </div>
            <div className=" font-[400] text-[16px] mt-[16px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </div>
          </div>
          <div className="w-[359px] h-[225px] text-center mt-[56px]">
            <Image
              className="ml-[140px]"
              src="/co2.png"
              alt="pic"
              width={80}
              height={80}
            ></Image>{" "}
            <div className=" font-[700] text-[24px] mt-[24px] leading-[32px]">
              120 Item food
            </div>
            <div className=" font-[400] text-[16px] mt-[16px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </div>
          </div>
          <div className="w-[359px] h-[225px] text-center mt-[56px]">
            <Image
              className="ml-[140px]"
              src="/pe3.png"
              alt="pic"
              width={80}
              height={80}
            ></Image>{" "}
            <div className=" font-[700] text-[24px] mt-[24px] leading-[32px]">
              Clean Environment
            </div>
            <div className=" font-[400] text-[16px] mt-[16px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </div>
          </div>
        </div>
      </div>

      {/* seaction 3 */}
      <div className="w-[1920px] h-[686px]">
        <div className="w-[1920px] h-[460px] bg-[url('/Bg1.png')]">
          <div className="w-[579px] h-[112px] ml-[742px] mt-[120px] text-center">
            <div className=" font-[700] text-[48px] mt-[88px] leading-[56px]">
              Team Member
            </div>
            <div className=" font-[400] text-[16px] mt-2 leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue{" "}
            </div>
          </div>
          <div className="ml-[300px] mt-[288px] flex">
            <Image
              src="/Mark Henry.png"
              alt="pic"
              width={312}
              height={398}
            ></Image>{" "}
            <Image
              src="/Mark Henry1.png"
              alt="pic"
              width={312}
              height={398}
            ></Image>{" "}
            <Image
              src="/Mark Henry2.png"
              alt="pic"
              width={312}
              height={398}
            ></Image>{" "}
            <Image
              src="/Mark Henry3.png"
              alt="pic"
              width={312}
              height={398}
            ></Image>{" "}
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="w-[1273px] h-[770px] my-[120px] ml-[300px]">
        <Image
          src="/Testimonials.png"
          alt="pic"
          width={128}
          height={40}
        ></Image>
        <h1 className=" font-[700] text-[48px] leading-[56px] mt-[8px]">
          What our client are saying
        </h1>
        <div className="w-[868.47px] h-[450.89px] ml-[225.86px] mt-[226px] bg-[#ffffff]">
          <Image
            className="relative left-[120px] top-[-61px]"
            src="/Text (1).png"
            alt="pic"
            width={696.57}
            height={485.89}
          ></Image>
        </div>
      </div>
      {/* sectio5 */}
      <div className="w-[1320px] h-[941px] ml-[300px]">
        <div className=" font-[700] text-[48px] leading-[56px] justify-center items-center text-center mt-[8px]">
          Our Food Menu
          <div className="w-[418px] h-[48px] text-center font-[400] text-[16px] ml-[457px] mt-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue{" "}
          </div>
        </div>
        <div className="ml-[357px] mt-[56px]">
          <ul className="flex gap-[100px] items-center text-center">
            <li className="font-[700] text-[20px] leading-[28px] text-[#FF9F0D]">
              Breakfast
            </li>
            <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
              Lunch
            </li>
            <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
              Dinner
            </li>
            <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
              Dessert
            </li>
            <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
              Drink
            </li>
            <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
              Snack
            </li>
            <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
              Suops
            </li>
          </ul>
        </div>

        <div className="w-[1320px] flex mt-[83px] h-[532px]">
          <div>
            <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
              <div className=" h-[32px] font-[700] flex  text-[24px] text-[#FF9F0D] leading-[32px]">
                Alder Grilled Chinook Salmon
                <div className="w-[41px] h-[32px] ml-[378px] text-[#FF9F0D]">
                  32$
                </div>
              </div>
              <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
                Toasted French bread topped with romano, cheddar
              </p>
              <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">
                560 CAL
              </h3>
            </div>
            {/* 2 */}
            <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
              <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
                Berries and creme tart
                <div className="w-[41px] h-[32px] ml-[463px] text-[#FF9F0D]">
                  43$
                </div>
              </div>
              <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
                Toasted French bread topped with romano, cheddar
              </p>
              <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">
                700 CAL
              </h3>
            </div>
            {/* 3 */}
            <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
              <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
                Tormentoso Bush Pizza Pintoage
                <div className="w-[41px] h-[32px] ml-[340px] text-[#FF9F0D]">
                  14$
                </div>
              </div>
              <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
                Toasted French bread topped with romano, cheddar
              </p>
              <h3 className="h-[24px] w-[72px] font-[400] text-[16px] mt-[8px] leading-[24px]">
                1000 CAL
              </h3>
            </div>
            {/* 4 */}
            <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
              <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
                Spicy Vegan Potato Curry
                <div className="w-[41px] h-[32px] ml-[425px] text-[#FF9F0D]">
                  35$
                </div>
              </div>
              <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
                Toasted French bread topped with romano, cheddar
              </p>
              <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">
                560 CAL
              </h3>
            </div>
          </div>
        
        {/* 2 */}
        <div>
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
              Alder Grilled Chinook Salmon
              <div className="w-[41px] h-[32px] ml-[378px] text-[#FF9F0D]">
                32$
              </div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">
              560 CAL
            </h3>
          </div>
          {/* 2 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px]  leading-[32px]">
              Berries and creme tart
              <div className="w-[41px] h-[32px] ml-[463px] text-[#FF9F0D]">
                43$
              </div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">
              700 CAL
            </h3>
          </div>
          {/* 3 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
              Tormentoso Bush Pizza Pintoage
              <div className="w-[41px] h-[32px] ml-[340px] text-[#FF9F0D]">
                14$
              </div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[72px] font-[400] text-[16px] mt-[8px] leading-[24px]">
              1000 CAL
            </h3>
          </div>
          {/* 4 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
              Spicy Vegan Potato Curry
              <div className="w-[41px] h-[32px] ml-[425px] text-[#FF9F0D]">
                35$
              </div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">
              560 CAL
            </h3>
          </div>
          </div>
        </div>
        <Image
              className="ml-[888px] mt-[58px]"
              src="/Medium.png"
              alt="pic"
              width={143}
              height={24}
            ></Image>
      </div>

      {/* end */}
    </div>
  );
}
