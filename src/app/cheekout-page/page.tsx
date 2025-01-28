import React from "react";
import Image from "next/image";
import { BsCaretRight, BsHandbag } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePermIdentity } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

export default function Page() {
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
            <Link className="ml-[25px]" href="/blog">
              Blog
            </Link>
            <Link className="ml-[25px]" href="/cheekout-page">
              Pages
            </Link>
            <Link className="ml-[25px]" href="/about">
              About
            </Link>
            <Link className="ml-[25px]" href="/shop">
              Shop{" "}
            </Link>
            <Link className="ml-[25px]" href="/sign-up">
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
        <div className="w-[349px] h-[104px] py-[108px] ml-[810px] text-center">
          <h1 className="w-[348px] h-[56px] font-[700] text-[47px] leading-[56px]">
            Cheekout Page
          </h1>
          <div className="w-[129px] h-[28px] flex justify-center items-center ml-[75px] mt-[20px] gap-[4px]">
            <p className="w-[56px] h-[28px]">Home</p>

            <BsCaretRight className="w-[16px] h-[16px] " />
            <p className="w-[53px] h-[28px] text-[#FF9F0D]">Cheekout</p>
          </div>
        </div>
      </div>

      {/* seaction 1 */}
      <div className="w-[1320px] h-[723px] mt-[120px] ml-[300px]">
      <div className="font-[700] text-[20px] leading-[28px]">
        Shipping Address
      </div>
      {/* 1 */}
      <div className="flex gap-6">
      <div>
      <div className="w-[424px] h-[88px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              First name</div>
    </div>
      <div className="w-[424px] h-[88px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              Email address</div>
    </div>
      <div className="w-[424px] h-[88px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              Company</div>
    </div>
      <div className="w-[424px] h-[88px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              City</div>
              <div className="w-[424px] h-[56px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] ml-[15px] flex leading-[24px]">
              Choose city <RiArrowDropDownLine className="w-[24px] h-[24px] ml-[256px]"/></div></div>
    </div>
      <div className="w-[424px] h-[88px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              Address 1</div>
              <div className="font-[700] text-[20px] mt-8 leading-[28px]">
              Billing Address
      </div>
      <div className="font-[400] text-[16px] mt-[5px] flex leading-[24px]">
      Same as shipping address</div>
      <Image
                      className="mt-[55px] ml-[24px]"
                      src="/d1.png"
                      alt="pic"
                      width={424}
                      height={56}
                    ></Image>

    </div>
    </div>
    {/* 2 */}
      <div>
      <div className="w-[424px] h-[88px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              Last name</div>
    </div>
      <div className="w-[424px] h-[88px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              Phone number</div>
             </div>
      <div className="w-[424px] h-[88px]  mt-[24px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              Country</div>
              <div className="w-[424px] h-[56px]  mt-[22px]">
              <div className="font-[400] text-[16px] mt-[8px] ml-[15px] flex leading-[24px]">
              Choose country <RiArrowDropDownLine className="w-[24px] h-[24px] ml-[256px]"/></div></div>
              
      <div className="w-[424px] h-[88px]  mt-[16px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              Zip code</div>
    </div>
    
      <div className="w-[424px] h-[88px]  mt-[20px]">
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
              Address 2</div></div>
              <Image
                      className="mt-[75px] ml-[24px]"
                      src="/d2.png"
                      alt="pic"
                      width={424}
                      height={56}
                    ></Image>
             
    </div>
    </div>
    {/* 3 */}
    <div className="w-[424px] h-[700px] ">
       <Image
                      className="mt-4 ml-[24px]"
                      src="/Chiken.png"
                      alt="pic"
                      width={376}
                      height={104}
                    ></Image>
       <Image
                      className="mt-4 ml-[24px]"
                      src="/Chiken.png"
                      alt="pic"
                      width={376}
                      height={104}
                    ></Image>
       <Image
                      className="mt-4 ml-[24px]"
                      src="/Chiken.png"
                      alt="pic"
                      width={376}
                      height={104}
                    ></Image>
                    <div className="w-[376px] ml-6 h-[24px]">
                    <div className="font-[400] text-[16px] mt-6  flex leading-[24px]" >
                    Sub-total <div className="w-[36px] h-[24px] ml-[270px]">130$</div></div></div>
                    <div className="w-[376px] ml-6 h-[24px]">
                    <div className="font-[400] text-[16px] mt-6  flex leading-[24px]" >
                    Shipping <div className="w-[36px] h-[24px] ml-[280px]">Free</div></div></div>
                    <div className="w-[376px] ml-6 h-[24px]">
                    <div className="font-[400] text-[16px] mt-6  flex leading-[24px]" >
                    Discount <div className="w-[36px] h-[24px] ml-[280px]">25%</div></div></div>
                    <div className="w-[376px] ml-6 h-[24px]">
                    <div className="font-[400] text-[16px] mt-6  flex leading-[24px]" >
                    Tax <div className="w-[36px] h-[24px] ml-[302px]">54.76$</div></div></div>
                    <div className="w-[376px] ml-6 h-[24px]">
                    <div className="font-[700] text-[18px] mt-6  flex leading-[26px]" >
                    Total <div className="w-[36px] h-[24px] ml-[275px]">432.65$</div></div></div>
                    <Image
                      className="mt-6 ml-[24px]"
                      src="/Large.png"
                      alt="pic"
                      width={376}
                      height={58}
                    ></Image>
                    
    </div>
    </div>















    </div>




    </div>
  );
}
