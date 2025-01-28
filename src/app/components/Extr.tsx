import React from "react";
import Image from "next/image";

const Extra = () => {
  return (
    <div className="lg:w-[1923px] lg:h-[469px] h-auto my-16 relative bg-[url('/bga.png')] bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-wrap  lg:pt-[110px] justify-center lg:justify-between items-center gap-8 px-4 py-12">
        {/* 1 */}
        <div className="text-center w-full sm:w-[218px]">
          <Image
            className="mx-auto"
            src="/Group.png"
            alt="Professional Chefs Icon"
            width={120}
            height={120}
          />
          <h3 className="text-white font-bold text-lg lg:text-2xl mt-4">
            Professional Chefs
          </h3>
          <p className="text-[#FF9F0D] font-bold text-2xl lg:text-4xl mt-2">
            420
          </p>
        </div>

        {/* 2 */}
        <div className="text-center w-full sm:w-[218px]">
          <Image
            className="mx-auto"
            src="/014---Soda-and-Burger.png"
            alt="Items of Food Icon"
            width={120}
            height={120}
          />
          <h3 className="text-white font-bold text-lg lg:text-2xl mt-4">
            Items Of Food
          </h3>
          <p className="text-[#FF9F0D] font-bold text-2xl lg:text-4xl mt-2">
            320
          </p>
        </div>

        {/* 3 */}
        <div className="text-center lg:w-[248px] sm:w-[218px]">
          <Image
            className="mx-auto"
            src="/Group (1).png"
            alt="Years of Experience Icon"
            width={120}
            height={120}
          />
          <h3 className="text-white font-bold text-lg lg:text-2xl mt-4">
            Years Of Experience
          </h3>
          <p className="text-[#FF9F0D] font-bold text-2xl lg:text-4xl mt-2">
            30+
          </p>
        </div>

        {/* 4 */}
        <div className="text-center w-full sm:w-[218px]">
          <Image
            className="mx-auto"
            src="/Group (2).png"
            alt="Happy Customers Icon"
            width={120}
            height={120}
          />
          <h3 className="text-white font-bold text-lg lg:text-2xl mt-4">
            Happy Customers
          </h3>
          <p className="text-[#FF9F0D] font-bold text-2xl lg:text-4xl mt-2">
            220
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;




// import React from "react";
// import Image from "next/image";
// const Extra = () => {
//   return (
//     <div className="w-[1920px] h-[469px] my-[120px] relative bg-[url('/bga.png')]">
//       <div className="absolute inset-0 bg-black bg-opacity-85 "></div>
//       <div className="w-[1319px] h-[247px] absolute bg-black bg-opacity-0 ml-[299px] mt-[112px] flex gap-[182px]">
//         {/* 1 */}
//         <div className="w-[218px] h-[247px] ">
//           <Image
//             className="ml-[48px]"
//             src="/Group.png"
//             alt="pic"
//             width={120}
//             height={120}
//           ></Image>
//           <div className="w-[218px] h-[32px] font-[700] text-[24px] leading-[32px] mt-[8px]">Professional Chefs</div>
//           <div className="w-[67px] h-[48px] font-[700] text-[40px] leading-[48px] ml-[76px] mt-[8px]">420</div>
//         </div>
//         {/* 2 */}
//         <div className="w-[218px] h-[247px]">
//           <Image
//             className="ml-[21px]"
//             src="/014---Soda-and-Burger.png"
//             alt="pic"
//             width={120}
//             height={120}
//           ></Image>
//           <div className="w-[162px] h-[32px] font-[700] text-[24px] leading-[32px] mt-[8px]">Items Of Food</div>
//           <div className="w-[67px] h-[48px] font-[700] text-[40px] leading-[48px] ml-[76px] mt-[8px]">320</div>
//         </div>
//         {/* 3 */}
//         <div className="w-[218px] h-[247px]">
//           <Image
//             className="ml-[48px]"
//             src="/Group (1).png"
//             alt="pic"
//             width={120}
//             height={120}
//           ></Image>
//           <div className="w-[248px] h-[32px] font-[700] text-[24px] leading-[32px] mt-[8px]">Years Of Experienced</div>
//           <div className="w-[67px] h-[48px] font-[700] text-[40px] leading-[48px] ml-[76px] mt-[8px]">30+</div>
//         </div>
//         {/* 4 */}
//         <div className="w-[218px] h-[247px]">
//           <Image
//             className="ml-[48px] "
//             src="/Group (2).png"
//             alt="pic"
//             width={120}
//             height={120}
//           ></Image>
//           <div className="w-[206px] h-[32px] font-[700] text-[24px] leading-[32px] mt-[8px]">Happy Customers</div>
//           <div className="w-[67px] h-[48px] font-[700] text-[40px] leading-[48px] ml-[76px] mt-[8px]">220</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Extra;
