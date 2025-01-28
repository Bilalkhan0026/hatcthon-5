import React from "react";
import Image from "next/image";
import { BsHandbag } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePermIdentity } from "react-icons/md";
import { BsCaretRight } from "react-icons/bs";
import { CgCoffee } from "react-icons/cg";
import Link from "next/link";

const Page = () => {
  return (
    <>
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
            Our Menu
          </h1>
          <div className="w-[129px] h-[28px] flex justify-center items-center ml-[47px] mt-[20px] gap-[4px]">
            <p className="w-[56px] h-[28px]">Home</p>

            <BsCaretRight className="w-[16px] h-[16px] " />
            <p className="w-[53px] h-[28px] text-[#FF9F0D]">Menu</p>
          </div>
        </div>
      </div>

       {/* seaction 1 */}

        
      <div className="w-[1320px] h-[628px] ml-[300px] mt-[120px] flex bg-white">
        <Image src="/bgm2.png" alt="pic" width={448} height={626}></Image>
        <div>
        <CgCoffee className="w-[24px] h-[24px] ml-[112px] text-[#FF9F0D]" />
          <div className="w-[294px] h-[56px] ml-[112px] font-[700] text-[47px] mt-[8px] leading-[56px]">
            Starter Menu
          </div>
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
              Alder Grilled Chinook Salmon
              <div className="w-[41px] h-[32px] ml-[378px] text-[#FF9F0D]">32$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">560 CAL</h3>
          </div>
          {/* 2 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] text-[#FF9F0D] leading-[32px]">
            Berries and creme tart
              <div className="w-[41px] h-[32px] ml-[463px] text-[#FF9F0D]">43$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">700 CAL</h3>
          </div>
          {/* 3 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Tormentoso Bush Pizza Pintoage
              <div className="w-[41px] h-[32px] ml-[340px] text-[#FF9F0D]">14$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[72px] font-[400] text-[16px] mt-[8px] leading-[24px]">1000 CAL</h3>
          </div>
          {/* 4 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Spicy Vegan Potato Curry
              <div className="w-[41px] h-[32px] ml-[425px] text-[#FF9F0D]">35$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">560 CAL</h3>
          </div>

        </div>
      </div>

 {/* seaction 2 */}

      <div className="w-[1320px] h-[628px] ml-[300px] mt-[120px] flex bg-white">
        <div>
      <CgCoffee className="w-[24px] h-[24px] text-[#FF9F0D]" />
          <div className="w-[294px] h-[56px] font-[700] text-[47px] mt-[8px] leading-[56px]">
          Main Course
          </div>
          <div className="w-[760px] h-[111px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Optic Big Breakfast Combo Menu
              <div className="w-[41px] h-[32px] ml-[337px] text-[#FF9F0D]">32$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar  
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">560 CAL</h3>
          </div>
          {/* 2 */}
          <div className="w-[760px] h-[111px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Cashew Chicken With Stir-Fry
              <div className="w-[41px] h-[32px] ml-[377px] text-[#FF9F0D]">43$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">700 CAL</h3>
          </div>
          {/* 3 */}
          <div className="w-[760px] h-[111px]  mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Vegetables & Green Salad
              <div className="w-[41px] h-[32px] ml-[415px] text-[#FF9F0D]">14$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[72px] font-[400] text-[16px] mt-[8px] leading-[24px]">1000 CAL</h3>
          </div>
          {/* 4 */}
          <div className="w-[760px] h-[111px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Spicy Vegan Potato Curry
              <div className="w-[41px] h-[32px] ml-[425px] text-[#FF9F0D]">35$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">560 CAL</h3>
          </div>
          </div>
        <div className=" ml-[112px]">
               <Image src="/bgm3.png" alt="pic" width={448} height={626}></Image>
        </div>

      </div>


      {/* seaction 3 */}
      <div>
        <div className="w-[1920px] h-[469px] my-[120px] relative bg-[url('/bga.png')]">
              <div className="absolute inset-0 bg-black bg-opacity-85 "></div>
              <div className="w-[1319px] h-[247px] absolute bg-black bg-opacity-0 ml-[299px] mt-[112px] flex gap-[182px]">
                {/* 1 */}
                <div className="w-[218px] h-[247px] ">
                  <Image
                    className="ml-[48px]"
                    src="/Group.png"
                    alt="pic"
                    width={120}
                    height={120}
                  ></Image>
                  <div className="w-[218px] h-[32px] font-[700] text-[24px] leading-[32px] mt-[8px]">Professional Chefs</div>
                  <div className="w-[67px] h-[48px] font-[700] text-[40px] leading-[48px] ml-[76px] mt-[8px]">420</div>
                </div>
                {/* 2 */}
                <div className="w-[218px] h-[247px]">
                  <Image
                    className="ml-[21px]"
                    src="/014---Soda-and-Burger.png"
                    alt="pic"
                    width={120}
                    height={120}
                  ></Image>
                  <div className="w-[162px] h-[32px] font-[700] text-[24px] leading-[32px] mt-[8px]">Items Of Food</div>
                  <div className="w-[67px] h-[48px] font-[700] text-[40px] leading-[48px] ml-[76px] mt-[8px]">320</div>
                </div>
                {/* 3 */}
                <div className="w-[218px] h-[247px]">
                  <Image
                    className="ml-[48px]"
                    src="/Group (1).png"
                    alt="pic"
                    width={120}
                    height={120}
                  ></Image>
                  <div className="w-[248px] h-[32px] font-[700] text-[24px] leading-[32px] mt-[8px]">Years Of Experienced</div>
                  <div className="w-[67px] h-[48px] font-[700] text-[40px] leading-[48px] ml-[76px] mt-[8px]">30+</div>
                </div>
                {/* 4 */}
                <div className="w-[218px] h-[247px]">
                  <Image
                    className="ml-[48px] "
                    src="/Group (2).png"
                    alt="pic"
                    width={120}
                    height={120}
                  ></Image>
                  <div className="w-[206px] h-[32px] font-[700] text-[24px] leading-[32px] mt-[8px]">Happy Customers</div>
                  <div className="w-[67px] h-[48px] font-[700] text-[40px] leading-[48px] ml-[76px] mt-[8px]">220</div>
                </div>
              </div>
            </div>
      </div>

         {/* seaction 3 */}


         <div className="w-[1320px] h-[628px] ml-[300px] mt-[120px] flex bg-white">
        <Image src="/bgm4.png" alt="pic" width={448} height={626}></Image>
        <div>
        <CgCoffee className="w-[24px] h-[24px] ml-[112px] text-[#FF9F0D]" />
          <div className="w-[294px] h-[56px] ml-[112px] font-[700] text-[47px] mt-[8px] leading-[56px]">
          Dessert
          </div>
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
              Fig and lemon cake
              <div className="w-[41px] h-[32px] ml-[495px] text-[#FF9F0D]">32$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">560 CAL</h3>
          </div>
          {/* 2 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px]  leading-[32px]">
            Creamy mascarpone cake
              <div className="w-[41px] h-[32px] ml-[422px] text-[#FF9F0D]">43$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">700 CAL</h3>
          </div>
          {/* 3 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Pastry, blueberries, lemon juice
              <div className="w-[41px] h-[32px] ml-[358px] text-[#FF9F0D]">14$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[72px] font-[400] text-[16px] mt-[8px] leading-[24px]">1000 CAL</h3>
          </div>
          {/* 4 */}
          <div className="w-[760px] h-[111px] ml-[112px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Pain au chocolat
              <div className="w-[41px] h-[32px] ml-[528px] text-[#FF9F0D]">35$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">560 CAL</h3>
          </div>

        </div>
      </div>
      {/* seaction 4 */}

      <div className="w-[1320px] h-[628px] ml-[300px] mt-[120px] flex bg-white">
        <div>
      <CgCoffee className="w-[24px] h-[24px] text-[#FF9F0D]" />
          <div className="w-[294px] h-[56px] font-[700] text-[47px] mt-[8px] leading-[56px]">
          Drinks
          </div>
          <div className="w-[760px] h-[111px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Caffè macchiato
              <div className="w-[41px] h-[32px] ml-[533px] text-[#FF9F0D]">32$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">560 CAL</h3>
          </div>
          {/* 2 */}
          <div className="w-[760px] h-[111px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] text-[#FF9F0D] leading-[32px]">
            Aperol Spritz Capacianno
              <div className="w-[41px] h-[32px] ml-[426px] text-[#FF9F0D]">43$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">700 CAL</h3>
          </div>
          {/* 3 */}
          <div className="w-[760px] h-[111px]  mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Caffe Latte Campuri
              <div className="w-[41px] h-[32px] ml-[490px] text-[#FF9F0D]">14$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[72px] font-[400] text-[16px] mt-[8px] leading-[24px]">1000 CAL</h3>
          </div>
          {/* 4 */}
          <div className="w-[760px] h-[111px] mt-[24px]">
            <div className=" h-[32px] font-[700] flex  text-[24px] leading-[32px]">
            Tormentoso BushTea Pintoage
              <div className="w-[41px] h-[32px] ml-[367px] text-[#FF9F0D]">35$</div>
            </div>
            <p className="w-[368px] h-[24px] font-[400] mt-[7px] text-[16px] leading-[24px]">
              Toasted French bread topped with romano, cheddar
            </p>
            <h3 className="h-[24px] w-[63px] font-[400] text-[16px] mt-[8px] leading-[24px]">560 CAL</h3>
          </div>
          </div>
        <div className=" ml-[112px]">
               <Image src="/bgm5.png" alt="pic" width={448} height={626}></Image>
        </div>

      </div>

      {/* seaction 5 */}

      <div className="w-[1322px] h-[375px] ml-[295px] mt-[120px] text-center bg-white">
        
        <p className=" font-[400]  text-[18px] leading-[26px] text-black">Partners & Clients</p>
        <h3 className=" font-[700]  text-[48px] leading-[56px] mt-[7.98px] text-black">We work with the best pepole</h3>
           <div className="w-[1322px] h-[129.37px] mt-[55.86px] flex gap-[71px]">

          <Image src="/i1.png" alt="pic" width={240.96} height={129.23}></Image>
          <Image src="/i2.png" alt="pic" width={166.4} height={129.68}></Image>
          <Image src="/i3.png" alt="pic" width={143.98} height={127.01}></Image>
          <Image src="/i4.png" alt="pic" width={130.98} height={129.37}></Image>
          <Image src="/i5.png" alt="pic" width={169.97} height={129.17}></Image>
          <Image src="/i6.png" alt="pic" width={113.98} height={129.8}></Image>

      </div>
      </div>

     </div>
    </>
  );
};

export default Page;
