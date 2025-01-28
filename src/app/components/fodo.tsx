

import React from "react";
import Image from "next/image";

const Fodo = () => {
  return (
    <div className="lg:w-[1320px] lg:my-[120px] my-10  lg:ml-[300px] ">
      <div className="max-w-[1320px] mx-auto text-center">
        {/* Header Section */}
        <Image
          className="mx-auto"
          src="/Food Category.png"
          alt="Food Category"
          width={177}
          height={40}
        />
        <div className="font-[700] text-[36px] lg:text-[48px] leading-[42px] lg:leading-[56px] mt-4">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </div>

        {/* Food Items Section */}
        <div className="flex flex-wrap justify-center mt-[40px] lg:mt-[56px] gap-[16px] lg:gap-[32px]">
          {/* Food Item 1 */}
          <div
            className="w-[305px] h-[328px] bg-[url('/1cd.png')] bg-cover bg-center relative"
            aria-label="Food Item 1"
          >
            <h1 className="font-[700] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] bg-white w-[110px] lg:w-[125px] h-[36px] lg:h-[40px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-[80%] py-[6px] lg:py-[8px] text-center text-[#FF9F0D]">
              Save 30%
            </h1>
            <p className="font-[700] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] text-white w-[180px] lg:w-[206px] h-[40px] lg:h-[46px] absolute bottom-[20px] left-[50%] transform -translate-x-1/2 bg-[#FF9F0D] py-[8px] lg:py-[10px] text-center">
              Fast Food Dish
            </p>
          </div>

          {/* Food Item 2 */}
          <Image src="/22cd.png" alt="Food Item 2" width={305} height={328} />

          {/* Food Item 3 */}
          <Image src="/3cd.png" alt="Food Item 3" width={305} height={328} />

          {/* Food Item 4 */}
          <Image src="/4cd.png" alt="Food Item 4" width={305} height={328} />
        </div>
      </div>
    </div>
  );
};

export default Fodo;






// import React from "react";
// import Image from "next/image";
//  const Food = () => {
//   return (

//     <div className="my-[120px]">
//         <div className="w-[1320px] h-[489px] ml-[300px] justify-center items-center text-center">
//         <Image className="ml-[571px]" src="/Food Category.png" alt="pic" width={177} height={40}></Image>
//         <div className=" font-[700] text-[48px] leading-[56px]"><span className="text-[#FF9F0D]"> Ch</span>oose Food Iteam</div>
//        <div className="flex mt-[56px] gap-[32px]">
//         <div className="w-[305px] h-[328px]  bg-[url('/1cd.png')]">
//         <h1 className=" font-[700] text-[18px] leading-[26px] bg-white w-[125px] h-[40px] ml-[80px] py-[8px] mt-[130px] text-[#FF9F0D]">Save 30%</h1>
//         <p className=" font-[700] text-[18px] leading-[26px] text-white w-[206px] h-[46px] mt-[11px] py-[10px] bg-[#FF9F0D]">Fast Food Dish</p>
//         </div>
//         <Image src="/22cd.png" alt="pic" width={305} height={328}></Image>
//         <Image src="/3cd.png" alt="pic" width={305} height={328}></Image>
//         <Image src="/4cd.png" alt="pic" width={305} height={328}></Image>
//     </div>
//    </div>
//    </div>
//     );
// };

// export default Food;