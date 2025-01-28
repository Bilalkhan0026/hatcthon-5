import React from "react";
import Image from "next/image";
import { BsCaretRight, BsHandbag } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePermIdentity } from "react-icons/md";
// import { CiPlay1 } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { RiAdminLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
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
        <div className="w-[225px] h-[104px] py-[108px] ml-[850px] text-center">
          <h1 className="w-[225px] h-[56px] font-[700] text-[47px] leading-[56px]">
            Blog List
          </h1>
          <div className="w-[129px] h-[28px] flex justify-center items-center ml-[47px] mt-[20px] gap-[4px]">
            <p className="w-[56px] h-[28px]">Home</p>

            <BsCaretRight className="w-[16px] h-[16px] " />
            <p className="w-[53px] h-[28px] text-[#FF9F0D]">Blog</p>
          </div>
        </div>
      </div>
      {/* seaction 1 */}
      <div className="flex">
        <div>
          <div className="w-[872px] h-[830px] mt-[120px]">
            <div className="w-[871px] h-[520px] bg-[url('/w1.png')]"></div>
            <div className="flex">
              <CiCalendarDate className="w-[24px] h-[24px] text-[#FF9F0D]" />
              <div className="w-[267px] h-[24px] ml-2 flex">
                Feb 14, 2022 /{" "}
                <TiMessages className="w-[24px] h-[24px] mx-2 text-[#FF9F0D]" />{" "}
                3 /{" "}
                <RiAdminLine className="w-[24px] h-[24px] mx-2 text-[#FF9F0D]" />{" "}
                Admin
              </div>
            </div>
            <div className=" font-[700] text-[24px] mt-4 leading-[32px]">
              10 Reasons To Do A Digital Detox Challenge
            </div>
            <div className=" font-[400] text-[16px] mt-12 leading-[24px]">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </div>
            <Image
              className=" mt-6"
              src="/Mediu1.png"
              alt="pic"
              width={172}
              height={52}
            ></Image>
          </div>
          <div className="w-[872px] h-[830px] mt-[120px]">
            <div className="w-[871px] h-[520px] bg-[url('/mm2.png')]"></div>
            <div className="flex">
              <CiCalendarDate className="w-[24px] h-[24px] text-[#FF9F0D]" />
              <div className="w-[267px] h-[24px] ml-2 flex">
                Feb 14, 2022 /{" "}
                <TiMessages className="w-[24px] h-[24px] mx-2 text-[#FF9F0D]" />{" "}
                3 /{" "}
                <RiAdminLine className="w-[24px] h-[24px] mx-2 text-[#FF9F0D]" />{" "}
                Admin
              </div>
            </div>
            <div className=" font-[700] text-[24px] mt-4 leading-[32px]">
              10 Reasons To Do A Digital Detox Challenge
            </div>
            <div className=" font-[400] text-[16px] mt-12 leading-[24px]">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </div>
            <Image
              className=" mt-6"
              src="/Mediu1.png"
              alt="pic"
              width={172}
              height={52}
            ></Image>
          </div>
          <div className="w-[872px] h-[830px] mt-[120px]">
            <div className="w-[871px] h-[520px] bg-[url('/mm3.png')]"></div>
            <div className="flex">
              <CiCalendarDate className="w-[24px] h-[24px] text-[#FF9F0D]" />
              <div className="w-[267px] h-[24px] ml-2 flex">
                Feb 14, 2022 /{" "}
                <TiMessages className="w-[24px] h-[24px] mx-2 text-[#FF9F0D]" />{" "}
                3 /{" "}
                <RiAdminLine className="w-[24px] h-[24px] mx-2 text-[#FF9F0D]" />{" "}
                Admin
              </div>
            </div>
            <div className=" font-[700] text-[24px] mt-4 leading-[32px]">
              10 Reasons To Do A Digital Detox Challenge
            </div>
            <div className=" font-[400] text-[16px] mt-12 leading-[24px]">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </div>
            <Image
              className=" mt-6"
              src="/Mediu1.png"
              alt="pic"
              width={172}
              height={52}
            ></Image>
          </div>
          <div className="w-[872px] h-[830px] mt-[120px]">
            <div className="w-[871px] h-[520px] bg-[url('/mm4.png')]"></div>
            <div className="flex">
              <CiCalendarDate className="w-[24px] h-[24px] text-[#FF9F0D]" />
              <div className="w-[267px] h-[24px] ml-2 flex">
                Feb 14, 2022 /{" "}
                <TiMessages className="w-[24px] h-[24px] mx-2 text-[#FF9F0D]" />{" "}
                3 /{" "}
                <RiAdminLine className="w-[24px] h-[24px] mx-2 text-[#FF9F0D]" />{" "}
                Admin
              </div>
            </div>
            <div className=" font-[700] text-[24px] mt-4 leading-[32px]">
              10 Reasons To Do A Digital Detox Challenge
            </div>
            <div className=" font-[400] text-[16px] mt-12 leading-[24px]">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat
            </div>
            <Image
              className=" mt-6"
              src="/Mediu1.png"
              alt="pic"
              width={172}
              height={52}
            ></Image>
          </div>
          <Image
            className=" mt-[56px] ml-[283px]"
            src="/mmm1.png"
            alt="pic"
            width={306}
            height={51}
          ></Image>
        </div>
        <div>
          <div className="w-[471px] h-[70px] ml-6 mt-[120px] border-[1px] my-6 border-[#ff9f0d] text-[#828282] flex  text-center bg-white">
            <input
              className="flex ml-[20px]"
              type="text"
              placeholder="Search Your Keword.."
            />
            <div className="w-[76px] h-[70px] p-6 ml-[180px] bg-[#ff9f0d]">
              <IoSearch className="w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="w-[424px] h-[423px] mt-6 ml-6">
            {" "}
            <Image
              className="ml-[54.24px] mt-[57px]"
              src="/bgg1.png"
              alt="pic"
              width={321}
              height={356}
            ></Image>
          </div>
          <div className="w-[423px] h-[592px] ml-[25px]">
            {" "}
            <h1 className="w-[116px] h-[28px] font-[700] text-[20px] ml-[51px] mt-[32px] leading-[28px]">
              Recent Post
            </h1>
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rb1.png"
              alt="pic"
              width={323}
              height={107}
            ></Image>
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rb2.png"
              alt="pic"
              width={323}
              height={107}
            ></Image>
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rb3.png"
              alt="pic"
              width={323}
              height={107}
            ></Image>
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rb4.png"
              alt="pic"
              width={323}
              height={107}
            ></Image>
          </div>
          <div className="w-[423px] h-[490px] ml-6">
            <h1 className="w-[140px] h-[28px] font-[700] text-[20px] ml-[80px] mt-[32px] leading-[28px]">
              Filter By Menu
            </h1>{" "}
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rc1.png"
              alt="pic"
              width={311}
              height={62}
            ></Image>
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rc2.png"
              alt="pic"
              width={311}
              height={62}
            ></Image>
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rc3.png"
              alt="pic"
              width={311}
              height={62}
            ></Image>
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rc4.png"
              alt="pic"
              width={311}
              height={62}
            ></Image>
            <Image
              className="ml-[74px] mt-[25px]"
              src="/rc5.png"
              alt="pic"
              width={311}
              height={62}
            ></Image>
          </div>

          <div className="w-[423px] h-[308px] ml-6">
            <Image
              className="ml-[80px] mt-[56px]"
              src="/com.png"
              alt="pic"
              width={325}
              height={244}
            ></Image>
          </div>
          <div className="w-[422px] h-[316px] mt-8 ml-6">
            <Image
              className="ml-[80px] mt-[56px]"
              src="/photo.png"
              alt="pic"
              width={362}
              height={252}
            ></Image>
          </div>
          <div className="w-[422px] h-[158px] ml-6">
            <h1 className="w-[140px] h-[28px] font-[700] text-[20px] ml-[80px] mt-[32px] leading-[28px]">
              Follow Us
            </h1>
            <div className="w-[308px] h-[46.51px] mt-[19px] ml-[25px] flex">
              <FaTwitter className="w-[18px] h-[21px] ml-[42px]" />
              <FaYoutube className="w-[18px] h-[21px] ml-[42px]" />
              <FaInstagram className="w-[18px] h-[21px] ml-[42px]" />
              <FaFacebookF className="w-[18px] h-[21px] ml-[42px]" />
            </div>
          </div>
        </div>
      </div>

      {/* end */}
    </div>
  );
}
