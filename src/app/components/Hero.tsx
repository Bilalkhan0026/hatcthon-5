









import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-start items-center lg:ml-[300px] mt-[120px] lg:mt-[60px] px-4 lg:px-0">
      {/* Left Section */}
      <div className="lg:w-[562px] lg:h-[562px] w-full text-center lg:text-left">
        <Image src="/ab.png" alt="pic" width={91} height={40} />
        <div className="font-[700] text-[36px] lg:text-[48px] leading-[42px] lg:leading-[56px] mt-4">
          <span className="text-[#FF9F0D]">We</span> Create the best foody
          product
        </div>
        <div className="font-[400] text-[14px] lg:text-[16px] mt-[15px] lg:mt-[25px] leading-[20px] lg:leading-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </div>
        <div className="font-[400] text-[14px] lg:text-[18px] mt-[15px] lg:mt-[25px] leading-[20px] lg:leading-[26px]">
          Lacus nisi, et ac dapibus sit eu velit in consequat.
        </div>
        <div className="font-[400] text-[14px] lg:text-[18px] mt-[15px] lg:mt-[25px] leading-[20px] lg:leading-[26px]">
          Quisque diam pellentesque bibendum non dui volutpat fringilla.
        </div>
        <div className="font-[400] text-[14px] lg:text-[18px] mt-[15px] lg:mt-[25px] leading-[20px] lg:leading-[26px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="w-[150px] lg:w-[190px] h-[50px] lg:h-[60px] mt-[15px] lg:mt-[25px] rounded-[30px] text-center flex justify-center items-center bg-[#FF9F0D] mx-auto lg:mx-0">
          <Link className="p-[12px] lg:p-[17px] text-[#E0DFDF]" href="/">
            Read More
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-[40px] lg:mt-0 lg:ml-[98px]">
        <Image
          className="mx-auto lg:ml-0"
          src="/anda.png"
          alt="pic"
          width={660}
          height={330}
        />
        <div className="flex flex-wrap justify-center lg:justify-start mt-[16px] gap-[16px]">
          <Image src="/tea.png" alt="pic" width={332} height={194} />
          <Image src="/brgar.png" alt="pic" width={332} height={194} />
        </div>
      </div>
    </div>
  );
};

export default Hero;





// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// const Hero = () => {
//   return (
//     <div className="w-[1320px] h-[562px] ml-[300px] mt-[120px] flex">
//       <div className="w-[562px] h-[562px]">
//         <Image src="/ab.png" alt="pic" width={91} height={40}></Image>
//         <div className=" font-[700] text-[48px] leading-[56px]">
//           {" "}
//           <span className="text-[#FF9F0D]"> We</span> Create the best foody
//           product
//         </div>
//         <div className=" font-[400] text-[16px] mt-[25px] leading-[24px]">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
//           pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
//           augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
//           sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
//           consequat.
//         </div>
//         <div className=" font-[400] text-[18px] mt-[25px] leading-[26px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
//         <div className=" font-[400] text-[18px] mt-[25px] leading-[26px]">  Quisque diam pellentesque bibendum non dui volutpat fringilla </div>
//         <div className=" font-[400] text-[18px] mt-[25px] leading-[26px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
//         <div className="w-[190px] h-[60px] mt-[25px] rounded-[30px] broder- text-center flex justify-center items-cente bg-[#FF9F0D]">
//             <Link
//               className="p-[17px] text-[#E0DFDF]
// "
//               href="/"
//             >
//             Read More
//             </Link>
//           </div>
//       </div>
//       <div> <Image className="ml-[98px]" src="/anda.png" alt="pic" width={660} height={330}></Image>
//       <div className="flex mt-[16px] ml-[98px] gap-[16px]">
//       <Image src="/tea.png" alt="pic" width={332} height={194}></Image>
//       <Image src="/brgar.png" alt="pic" width={332} height={194}></Image>
//       </div></div>
//     </div>
//   );
// };

// export default Hero;
