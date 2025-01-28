import React from "react";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";

const Doc = () => {
  return (
    <>
      <div className="lg:w-[1918px] lg:h-[559px] lg:pt-[112px] h-auto lg:mt-[112px] bg-[url('/bg.png')] bg-cover">
        <Image
          className="lg:ml-[1346px] "
          src="/Restaurant Active Process (1).png"
          alt="Restaurant Process"
          width={273}
          height={40}
        />
        <div className=" lg:mt-[20px]">
          <h1 className="lg:text-5xl  lg:ml-[1040px] md:text-4xl text-2xl font-bold leading-tight mt-4">
            <span className="text-[#FF9F0D]">We</span> Document Every Food
          </h1>
          <h2 className="lg:ml-[970px] text-4xl md:text-5xl font-bold leading-tight mt-2">
            Bean Process Until It Is Saved
          </h2>
          <p className="lg:w-[630px] lg:ml-[999px] text-right lg:mt-[24px] lg:text-lg text-sm md:text-base text-white mt-6  md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
        </div>
        <div className="flex lg:ml-[700px] justify-center mt-8 space-x-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full border-2 border-[#FF9F0D] text-[#E0DFDF] hover:bg-[#FF9F0D] transition"
          >
            See More
          </Link>
          <div className="w-14 h-14 p-4 rounded-full bg-[#FF9F0D] flex items-center justify-center">
            <CiPlay1 className="text-white text-xl" />
          </div>
          <span className="flex items-center text-lg font-bold">Play Video</span>
        </div>
      </div>

      <div className="lg:w-[1320px] lg:h-[732px] lg:ml-[300px] px-4 py-10">
        <div className="text-center">
          <Image className="lg:ml-[560px]" src="/Blog Post.png" alt="Blog Post" width={124} height={40} />
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-[#FF9F0D]">La</span>test News & Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Blog Post 1 */}
          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/Image Placeholder.png"
              alt="Blog Post 1"
              width={424}
              height={349}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-[#FF9F0D] text-sm">10 February 2022</p>
              <h3 className="text-xl font-semibold mt-2">
                Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
              </h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/" className="text-sm font-medium">
                  Learn More
                </Link>
                <div className="flex space-x-2">
                  <AiOutlineLike className="text-xl" />
                  <LuMessageSquareMore className="text-xl text-[#FF9F0D]" />
                  <CiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/Image Placeholder (1).png"
              alt="Blog Post 2"
              width={424}
              height={349}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-[#FF9F0D] text-sm">10 February 2022</p>
              <h3 className="text-xl font-semibold mt-2">
                Curabitur rutrum velit ac congue malesuada
              </h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/" className="text-sm font-medium">
                  Learn More
                </Link>
                <div className="flex space-x-2">
                  <AiOutlineLike className="text-xl" />
                  <LuMessageSquareMore className="text-xl text-[#FF9F0D]" />
                  <CiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="border rounded-lg overflow-hidden">
            <Image
              src="/pp.png"
              alt="Blog Post 3"
              width={424}
              height={349}
              className="w-full h-auto"
            />
            <div className="p-4">
              <p className="text-[#FF9F0D] text-sm">10 February 2022</p>
              <h3 className="text-xl font-semibold mt-2">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
              </h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/" className="text-sm font-medium">
                  Learn More
                </Link>
                <div className="flex space-x-2">
                  <AiOutlineLike className="text-xl" />
                  <LuMessageSquareMore className="text-xl text-[#FF9F0D]" />
                  <CiShare2 className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doc;




// import React from "react";
// import Image from "next/image";
// import { CiPlay1 } from "react-icons/ci";
// import { AiOutlineLike } from "react-icons/ai";
// import { LuMessageSquareMore } from "react-icons/lu";
// import { CiShare2 } from "react-icons/ci";
// import Link from "next/link";
// const Doc = () => {
//   return (
//     <>
//       <div className=" w-[1918px] h-[518px] my-[200px] bg-[url('/bg.png')]">
//         <Image
//           className="ml-[1150px] pt-[112px]"
//           src="/Restaurant Active Process (1).png"
//           alt="pic"
//           width={273}
//           height={40}
//         ></Image>
//         <div className="w-[705px] h-[60px] font-[700] text-[48px] leading-[56px] ml-[750px] mt-[8px] pl-[100px]">
//           <span className="text-[#FF9F0D]"> We</span>Document Every Food
//         </div>
//         <div className="w-[705px] h-[60px] font-[700] text-[48px] leading-[56px] ml-[750px]">
//           {" "}
//           Bean Process untile it is saved
//         </div>
//         <p className="w-[651px] h-[48px] text-right font-[400] text-[16px] leading-[24px] ml-[770px] mt-[32px]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
//           pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
//           augue urna,{" "}
//         </p>
//         <div className=" flex">
//           <div className="w-[155px] h-[50px] mt-[56px] ml-[1060px] rounded-[30px] border-2 border-[#FF9F0D] text-center flex justify-center items-cente">
//             <Link
//               className="p-[10px] text-[#E0DFDF]
// "
//               href="/"
//             >
//               See More
//             </Link>
//           </div>
//           <div className="w-[60px] h-[60px] mt-[56px] ml-[40px] p-[18px] rounded-full justify-center items-center text-center bg-[#ff9f0d]">
//             <CiPlay1 className="w-[24px] h-[24px] m-auto" />
//           </div>
//           <div className="w-[83px] h-[24px] font-[700] text-[16px] ml-[15px] justify-center items-center text-center mt-[76px] leading-[24px]">
//             Play Video
//           </div>
//         </div>
//       </div>

//       <div className="w-[1320px] h-[732px] ml-[300px]">
//         <Image
//           className="ml-[590px] pt-[12px]"
//           src="/Blog Post.png"
//           alt="pic"
//           width={124}
//           height={40}
//         ></Image>
//         <div className="w-[462px] h-[56px] font-[700] text-[48px] leading-[56px] ml-[429px] mt-[8px]">
//           <span className="text-[#FF9F0D]">La</span>test News & Blog
//         </div>
//         <div className=" pt-[59px] flex gap-[24px]">
//           <div className="w-[424px] h-[569px] border-[1px] border-[wite]">
//           <Image
//           className=""
//           src="/Image Placeholder.png"
//           alt="pic"
//           width={424}
//           height={349}
//         ></Image>
//         <div className="w-[133px] h-[24px] text-[#FF9F0D] font-[400] text-[16px] leading-[24px] ml-[43px] mt-[30px]">10 February 2022 </div>
//         <div className="w-[338px] h-[64px] font-[400] text-[24px] leading-[32px] ml-[43px] mt-[16px]">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</div>
//         <div className="flex  mt-[32px] ml-[43px]">
//         <div className="w-[86px] h-[24px] font-[400] text-[16px] leading-[24px]">Learn More</div>
//           <div className="flex ml-[205px] gap-2"><AiOutlineLike className="w-[20px] h-[20px]" />
//           <LuMessageSquareMore  className="w-[20px] h-[20px] text-[#FF9F0D]"/>
//           <CiShare2  className="w-[20px] h-[20px]"/></div>
        
//         </div>
//            </div>
//            <div className="w-[424px] h-[569px] border-[1px] border-[wite]">
//           <Image
//           className=""
//           src="/Image Placeholder (1).png"
//           alt="pic"
//           width={424}
//           height={349}
//         ></Image>
//         <div className="w-[133px] h-[24px] text-[#FF9F0D] font-[400] text-[16px] leading-[24px] ml-[43px] mt-[30px]">10 February 2022 </div>
//         <div className="w-[338px] h-[64px] font-[400] text-[24px] leading-[32px] ml-[43px] mt-[16px]">Curabitur rutrum velit ac congue malesuada</div>
//         <div className="flex  mt-[32px] ml-[43px]">
//         <div className="w-[86px] h-[24px] font-[400] text-[16px] leading-[24px]">Learn More</div>
//           <div className="flex ml-[205px] gap-2"><AiOutlineLike className="w-[20px] h-[20px]" />
//           <LuMessageSquareMore  className="w-[20px] h-[20px] text-[#FF9F0D]"/>
//           <CiShare2  className="w-[20px] h-[20px]"/></div>
        
//         </div>
//            </div>
//            <div className="w-[424px] h-[569px] border-[1px] border-[wite]">
//           <Image
//           className=""
//           src="/Image Placeholder (2).png"
//           alt="pic"
//           width={424}
//           height={349}
//         ></Image>
//         <div className="w-[133px] h-[24px] text-[#FF9F0D] font-[400] text-[16px] leading-[24px] ml-[43px] mt-[30px]">10 February 2022 </div>
//         <div className="w-[338px] h-[64px] font-[400] text-[24px] leading-[32px] ml-[43px] mt-[16px]">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</div>
//         <div className="flex  mt-[32px] ml-[43px]">
//         <div className="w-[86px] h-[24px] font-[400] text-[16px] leading-[24px]">Learn More</div>
//           <div className="flex ml-[205px] gap-2"><AiOutlineLike className="w-[20px] h-[20px]" />
//           <LuMessageSquareMore  className="w-[20px] h-[20px] text-[#FF9F0D]"/>
//           <CiShare2  className="w-[20px] h-[20px]"/></div>
        
//         </div>
//            </div>

//         </div>
//       </div>
//     </>
//   );
// };
// export default Doc;
