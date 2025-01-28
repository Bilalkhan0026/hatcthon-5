import React from 'react'
import { BsCaretRight, BsHandbag } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
import { MdOutlinePermIdentity } from 'react-icons/md'
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link';

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
              <div className="w-[349px] h-[104px] py-[108px] ml-[790px] text-center">
                <h1 className="w-[348px] h-[56px] font-[700] text-[47px] leading-[56px]">
                Sign up page
                </h1>
                <div className="w-[129px] h-[28px] flex justify-center items-center ml-[75px] mt-[20px] gap-[4px]">
                  <p className="w-[56px] h-[28px]">Home</p>
      
                  <BsCaretRight className="w-[16px] h-[16px] " />
                  <p className="w-[56px] h-[28px] text-[#FF9F0D]">sign up</p>
                </div>
              </div>
            </div>
            {/* 1 */}

            <div className='w-[424px] h-[624px] ml-[743px] border-[1px] border-[#c8c8c8] mt-[120px] shadow-[0px_4px_10px_rgba(255,0,0,0.1)] bg-[#ffffff]'>
            <div className="font-[700] text-[20px] leading-[28px]">
            Sign Up
      </div>
      <div className='w-[366px] h-[44px] ml-8 mt-8 border-[1px] border-[#c8c8c8]'>
      <div className="font-[400] text-[16px] mt-[8px] flex gap-2 leading-[24px]" ><FaRegUser className='w-[24px] h-6 mt-1'/>Name</div>
      </div>
      <div className='w-[366px] h-[44px] ml-8 mt-8 border-[1px] border-[#c8c8c8]'>
      <div className="font-[400] text-[16px] mt-[8px] flex gap-2 leading-[24px]" ><MdOutlineEmail className='w-6 h-6 mt-1' />Email</div>
      </div>
      <div className='w-[366px] h-[44px] ml-8 mt-8 border-[1px] border-[#c8c8c8]'>
      <div className="font-[400] text-[16px] mt-[8px] flex gap-2 leading-[24px]" ><CiLock className='w-6 h-6 mt-1'/>Passward</div>
      </div>
      <div className='w-[129px] h-[22px] ml-8 mt-8 border-[1px] border-[#c8c8c8]'>
      <div className="font-[400] text-[14px] flex leading-[24px]" >Remember me?</div>
      </div>
          <Image
                             className="mt-6 ml-[24px]"
                             src="/dr.png"
                             alt="pic"
                             width={380}
                             height={44}
                           ></Image>

      <div className='w-[129px] h-[22px] ml-[279px] mt-8 border-[1px] border-black'>
      <div className="font-[400] text-[14px] flex leading-[24px]" >Forget password?</div>
      </div>
      <div className='w-[366px] h-[44px] ml-8 mt-8 border-[1px] border-black'>
      <div className="font-[400] text-[16px] mt-[8px] flex gap-[78px] leading-[24px]" ><FaGoogle className='w-6 h-6 mt-1'/>Sign up with Google</div>
      </div>
      <div className='w-[366px] h-[44px] ml-8 mt-8 border-[1px] border-black'>
      <div className="font-[400] text-[16px] mt-[8px] flex gap-[78px] leading-[24px]" ><FaApple className='w-6 h-6 mt-1'/>Sign up with Apple</div>
      </div>


            </div>
    </div>
  )
}
