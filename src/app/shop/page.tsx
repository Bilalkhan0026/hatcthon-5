import React from "react";
import Image from "next/image";
import { BsCaretRight, BsHandbag } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePermIdentity } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-white mt-[120px] text-[#333333]">
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
            Our Shop
          </h1>
          <div className="w-[129px] h-[28px] flex justify-center items-center ml-[47px] mt-[20px] gap-[4px]">
            <p className="w-[56px] h-[28px]">Home</p>

            <BsCaretRight className="w-[16px] h-[16px] " />
            <p className="w-[53px] h-[28px] text-[#FF9F0D]">Shop</p>
          </div>
        </div>
      </div>

      {/* seaction 1 */}

      <div className="w-[1320px] h-[1923px] ml-[300px] mt-[120px] ">
        <div className="flex">
          <div>
            <div className="flex">
              <div className="w-[332px] h-[46px] flex ">
                <h1 className="font-[400] text-[20px] mt-[9px] leading-[28px]">
                  Sort By :
                </h1>

                <div className="w-[236px] h-[46px]  border-[1px] border-[#5c5b591e] ml-[9px] mt-[9px] flex">
                  <div className="font-[400] text-[18px] leading-[26px] flex ml-[9px]">
                    Newest
                    <RiArrowDropDownLine className="ml-[115px]" />
                  </div>
                </div>
              </div>

              <div className="w-[332px] h-[46px] ml-[33px] flex ">
                <h1 className="font-[400] text-[20px] mt-[9px] leading-[28px]">
                  Show :
                </h1>

                <div className="w-[236px] h-[46px] ml-[9px] mt-[9px]  border-[1px] border-[#5c5b591e]  flex">
                  <div className="font-[400] text-[18px]leading-[26px] flex ml-[9px]">
                    Default
                    <RiArrowDropDownLine className="ml-[115px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* cad 1 */}
            <div className="flex mt-6 gap-6">
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b1.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Fresh Lime
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>

              {/* cad 2*/}
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b2.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Chocolate Muffin
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $28.00
                  </h2>{" "}
                  {/* <h3 className="font-[400] text-[16px] leading-[24px]">$45.00</h3> */}
                </div>
              </div>

              {/* cad 3*/}
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b3.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Burger
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>
            </div>

            {/* cad 1 */}
            <div className="flex  mt-6 gap-6">
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b4.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Country Burger
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  {/* <h3 className="font-[400] text-[16px] leading-[24px]">$45.00</h3> */}
                </div>
              </div>

              {/* cad 2*/}
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b5.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Drink
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $23.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>

              {/* cad 3*/}
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b6.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Pizza
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $43.00
                  </h2>{" "}
                  {/* <h3 className="font-[400] text-[16px] leading-[24px]">$45.00</h3> */}
                </div>
              </div>
            </div>

            {/* cad 1 */}
            <div className="flex  mt-6 gap-6">
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b7.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Cheese Butter
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $10.00
                  </h2>{" "}
                  {/* <h3 className="font-[400] text-[16px] leading-[24px]">$45.00</h3> */}
                </div>
              </div>

              {/* cad 2*/}
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b8.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Sandwiches
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  {/* <h3 className="font-[400] text-[16px] leading-[24px]">$45.00</h3> */}
                </div>
              </div>

              {/* cad 3*/}
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b9.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Chicken Chup
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  {/* <h3 className="font-[400] text-[16px] leading-[24px]">$45.00</h3> */}
                </div>
              </div>
            </div>

            {/* cad 1 */}
            <div className="flex  mt-6 gap-6">
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b4.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Fresh Lime
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>

              {/* cad 2*/}
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b5.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Fresh Lime
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>

              {/* cad 3*/}
              <div className="w-[312px] h-[330px] ">
                <div className="w-[312px] h-[267px] bg-[url('/b6.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Fresh Lime
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>
            </div>

            {/* cad 1 */}
            <div className="flex  mt-6 gap-6">
              <div className="w-[312px] h-[330px]">
                <div className="w-[312px] h-[267px] bg-[url('/b7.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Fresh Lime
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>

              {/* cad 2*/}
              <div className="w-[312px] h-[330px] ">
                <div className="w-[312px] h-[267px] bg-[url('/b8.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Fresh Lime
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>

              {/* cad 3*/}
              <div className="w-[312px] h-[330px] ">
                <div className="w-[312px] h-[267px] bg-[url('/b9.png')]"></div>
                <h1 className="font-[700] text-[18px] mt-[9px] leading-[26px]">
                  Fresh Lime
                </h1>
                <div className="flex mt-[4px] gap-2">
                  <h2 className="font-[400] text-[16px] leading-[24px] text-[#FF9F0D]">
                    $38.00
                  </h2>{" "}
                  <h3 className="font-[400] text-[16px] leading-[24px]">
                    $45.00
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[312px] h-[1489px] ml-6 mt-[70px] px-[34px]">
            <div className="w-[248px] h-[46px] border-[1px] mt-6 border-[#ff9f0d] text-[#828282] flex justify-center items-center text-center bg-white">
              <input
                className="flex "
                type="text"
                placeholder="Search Product"
              />
              <div className="w-[47px] h-[46px] p-4 ml-[15px] bg-[#ff9f0d]">
                <IoSearch />
              </div>
            </div>
            {/* <BsHandbag className="w-[24px] h-[24px] ml-[8px]" /> */}

            <div className="w-[248px] h-[72px] mt-6 ">
              <div className="font-[700] text-[20px] mt-[9px] leading-[28px]">
                Category
              </div>
              <div className="font-[400] text-[18px] mt-[9px] leading-[26px]">
                Sandwiches
              </div>
              <div className="font-[400] text-[18px] mt-[9px] leading-[26px]">
                Burger
              </div>
              <div className="font-[400] text-[18px] mt-[9px] leading-[26px]">
                Chicken Chup
              </div>
              <div className="font-[400] text-[18px] mt-[9px] leading-[26px]">
                Drink
              </div>
              <div className="font-[400] text-[18px] mt-[9px] leading-[26px]">
                Pizza
              </div>
              <div className="font-[400] text-[18px] mt-[9px] leading-[26px]">
                Thi
              </div>
              <div className="font-[400] text-[18px] mt-[9px] leading-[26px]">
                Non Veg
              </div>
              <div className="font-[400] text-[18px] mt-[9px] leading-[26px]">
                Uncategorized
              </div>
            </div>

            <div className="w-[248px] h-[256px] mt-[270px] bg-[url('/cb1.png')]"></div>
            <div className="w-[248px] h-[87px] mt-[24px]">
              <div className="font-[700] text-[20px] leading-[28px]">
                Filter By Price
              </div>
              <div className="w-[243px] h-[5px] bg-[#ff9f0d] mt-[24px]"></div>
              <div className="font-[400] text-[16px] mt-[8px] flex leading-[24px]">
                From $0 to $8000{" "}
                <div className="font-[400] text-[16px] ml-[70px] leading-[24px]">
                  Filter
                </div>
              </div>
              <div className="font-[700] text-[20px]  mt-[24px] leading-[28px]">
                Latest Products
              </div>
              <Image
                className="mt-6"
                src="/c1.png"
                alt="pic"
                width={252}
                height={67}
              ></Image>
              <Image
                className="mt-4"
                src="/c2.png"
                alt="pic"
                width={252}
                height={67}
              ></Image>
              <Image
                className="mt-4"
                src="/c3.png"
                alt="pic"
                width={252}
                height={67}
              ></Image>
              <Image
                className="mt-4"
                src="/c4.png"
                alt="pic"
                width={252}
                height={67}
              ></Image>

              <div className="w-[225px] h-[165px]">
                <div className="font-[700] text-[20px]  mt-[24px] leading-[28px]">
                  Product Tags
                </div>
                <div className="font-[400] text-[16px] flex leading-[24px]">
                  Services{" "}
                  <div className="font-[400] text-[16px] ml-4 leading-[24px]">
                    Our Menu
                  </div>
                  <div className="font-[400] text-[16px] ml-4 leading-[24px]">
                    Pizza
                  </div>
                </div>
                <div className="font-[400] text-[16px] flex leading-[24px]">
                  Cupcake
                  <div className="font-[400] text-[16px] ml-4 leading-[24px] text-[#ff9f0d]">
                    Burger
                  </div>
                  <div className="font-[400] text-[16px] ml-4 leading-[24px]">
                    Cookies
                  </div>
                </div>
                <div className="font-[400] text-[16px] flex leading-[24px]">
                  Our Shop
                  <div className="font-[400] text-[16px] ml-4 leading-[24px]">
                    Tandoori Chicken
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
       <div className=" mt-[56px] gap-[14px] ml-[539px] flex">
      <Image
        src="/1.png"
        alt="pic"
        width={50}
        height={50}
      ></Image>
      <Image
        src="/2.png"
        alt="pic"
        width={50}
        height={50}
      ></Image>
      <Image
        src="/3.png"
        alt="pic"
        width={50}
        height={50}
      ></Image>
      <Image
        src="/4.png"
        alt="pic"
        width={50}
        height={50}
      ></Image>
     
      </div>
    </div>
    </div>
  );
}
