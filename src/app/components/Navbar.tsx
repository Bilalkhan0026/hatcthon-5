"use client";

import Link from "next/link";
import { IoSearch } from 'react-icons/io5';


import { SheetSide } from "./Humburgur";

import { BsHandbag } from "react-icons/bs";
// import { useAppSelector } from "@/app/(functionalty)/Store/hooks";
// import { useSelector } from "react-redux";

export default function Navbar() {
  // const cart =  useSelector((state:any)=>state.cart)

  return (
    <div className="lg:w-[1920px]  lg:px-[300px] lg:py-[45px]">
      <div className="w-[109px] h-[32px] lg:ml-[605px] font-[700] text-[24px] leading-8 text-[#ffffff]">
          <span
            className="text-[#FF9F0D]
"
          >
            Food
          </span>
          tuck
        </div>
    <nav className="lg:w-[1320px] lg:flex lg:h-[87px] lg:justify-between flex items-center justify-between  w-auto h-[87px]">
      
      
    
      {/* navigation bar */}
       <div className="flex items-center">
      <ul className="hidden lg:block gap-8">
    
            <Link href="/" className="hover:text-[#FF9F0D]">
              Home
            </Link>
          
          
            <Link href="/menu" className="hover:text-[#FF9F0D] ml-7">
              Menu
            </Link>
            <Link href="/blog" className="hover:text-[#FF9F0D] ml-7">
              
              Blog
            </Link>
            <Link href="/cheekout-page" className="hover:text-[#FF9F0D] ml-7">
              Pages
            </Link>
          
            <Link href="/about" className="hover:text-[#FF9F0D] ml-7">
              {" "}
              About{" "}
            </Link>
            <Link href="/shop" className="hover:text-[#FF9F0D] ml-7">
              Shop
            </Link>
            <Link href="/sign-up" className="hover:text-[#FF9F0D] ml-7">
              Contact
            </Link>
          
      
      </ul>
      </div>
      {/* right */}
      <div className="lg:w-[310px] h-[54px] lg:ml-[471px] flex  items-center text-center bg-[#0d0d0d]">
          <div className="lg:w-[310px] h-[54px] rounded-[27px] border-[1px] border-[#0d0d0d] lg:border-[#ff9f0d] flex justify-center items-center text-center bg-[#0d0d0d]">
            <input
              className=" bg-[#0d0d0d] outline-none  lg:w-full h-full rounded-full lg:ml-2 hidden lg:block"
              type="text"
              placeholder="Search..."
            />
            <IoSearch  className="text-xl hidden"/>
          </div>
          <BsHandbag className="lg:w-[24px] hidden lg:block h-[full] lg:ml-[8px]" />
        </div>

        <SheetSide />
      
    </nav>
    </div>
  );
}

