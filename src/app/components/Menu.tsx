import React from "react";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="lg:w-[1320px] lg:h-[656px] lg:ml-[300px] w-full py-10  lg:mt-[120px]">
      {/* Title Section */}
      <div className="text-center">
        <Image
          className="mx-auto"
          src="/Choose & pick.png"
          alt="Choose & Pick"
          width={144}
          height={40}
        />
        <h2 className="font-bold text-4xl lg:text-5xl mt-4">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </h2>
      </div>

      {/* Menu Tabs */}
      <div className="flex flex-wrap mt-8 gap-[100px]">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((item, index) => (
          <div
            key={index}
            className={`font-semibold text-lg ${
              index === 0 ? "text-[#FF9F0D]" : "text-gray-300"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className=" grid grid-cols-1 ml:grid-cols-2 lg:grid-cols-3 mt-12">
        {/* Left Section */}
        <div className=" lg:w-[515px] lg:h-[406px] flex justify-center">
          <div className="bg-[url('/abg.png')] bg-cover bg-center p-4 rounded-md">
            <Image
              src="/rr.png"
              alt="Food Item"
              width={366}
              height={362}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className=" lg:w-[515px] ml-6">
          {[
            { image: "/aaa.png", name: "Lettuce Leaf", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
            { image: "/bbb (2).png", name: "Fresh Breakfast", price: "14.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
            { image: "/ccc.png", name: "Mild Butter", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
            { image: "/ddd.png", name: "Fresh Bread", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 mt-8">
              <Image src={item.image} alt={item.name} width={80} height={79} />
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-white">{item.desc}</p>
                <p className="font-bold text-[#FF9F0D]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className=" lg:w-[515px] ml-6">
          {[
            { image: "/eee.png", name: "Glow Cheese", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
            { image: "/fff.png", name: "Italian Pizza", price: "14.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
            { image: "/ggg.png", name: "Slice Beef", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
            { image: "/hhh.png", name: "Mushroom Pizza", price: "12.5$", desc: "Lacus nisi, et ac dapibus velit in consequat." },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 mt-8">
              <Image src={item.image} alt={item.name} width={80} height={79} />
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-white">{item.desc}</p>
                <p className="font-bold text-[#FF9F0D]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;








// import React from "react";
// import Image from "next/image";
// const Menu = () => {
//   return (
//     <div className=" w-[1320px] h-[656px] mt-[120px] ml-[300px]">
//       <Image
//         className="ml-[580px] mt-[8px]"
//         src="/Choose & pick.png"
//         alt="pic"
//         width={144}
//         height={40}
//       ></Image>
//       <div className=" font-[700] text-[48px] leading-[56px] justify-center items-center text-center mt-[8px]">
//         <span className="text-[#FF9F0D]"> Fr</span>om Our Menu
//       </div>
//       <div className="mt-[56px]">
//         <ul className="flex gap-[100px] items-center text-center">
//           <li className="font-[700] text-[20px] leading-[28px] text-[#FF9F0D]">
//             Breakfast
//           </li>
//           <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
//             Lunch
//           </li>
//           <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
//             Dinner
//           </li>
//           <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
//             Dessert
//           </li>
//           <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
//             Drink
//           </li>
//           <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
//             Snack
//           </li>
//           <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
//             Suops
//           </li>
//         </ul>
//       </div>
//       <div className="flex flex-wrap" >
//       <div className="w-[515px] h-[406px] mt-[56px] bg-[url('/abg.png')]">
//         {" "}
//         <Image
//           className="ml-[75px]"
//           src="/rr.png"
//           alt="pic"
//           width={366}
//           height={362}
//         ></Image>
//       </div>

          
//            <div className="ml-[21px] mt-[56px]">
//           <div className="w-[376px] h-[79px] gap-[9px] flex">
//           <Image
//           src="/aaa.png"
//           alt="pic"
//           width={80}
//           height={79}
//         ></Image>
//         <div className="font-[700] text-[20px] leading-[28px]">Lettuce Leaf
//         <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
//         <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
//         </div>
//           </div>

//           <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
//           <Image
//           src="/bbb (2).png"
//           alt="pic"
//           width={80}
//           height={79}
//         ></Image>
//         <div className="font-[700] text-[20px] leading-[28px]">Fresh Breakfast
//         <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
//         <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">14.5$</div>
//         </div>
//           </div>

//           <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
//           <Image
//           src="/ccc.png"
//           alt="pic"
//           width={80}
//           height={79}
//         ></Image>
//         <div className="font-[700] text-[20px] leading-[28px]">Mild Butter
//         <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
//         <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
//         </div>
//           </div>

//           <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
//           <Image
//           src="/ddd.png"
//           alt="pic"
//           width={80}
//           height={79}
//         ></Image>
//         <div className="font-[700] text-[20px] leading-[28px]">Fresh Bread
//         <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
//         <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
//         </div>
//           </div>


//           </div>
// {/* div2 */}

//           <div className="ml-[32px] mt-[56px] ">
//           <div className="w-[376px] h-[79px] gap-[9px] flex">
//           <Image
//           src="/eee.png"
//           alt="pic"
//           width={80}
//           height={79}
//         ></Image>
//         <div className="font-[700] text-[20px] leading-[28px]">Glow Cheese
//         <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
//         <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
//         </div>
//           </div>

//           <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
//           <Image
//           src="/fff.png"
//           alt="pic"
//           width={80}
//           height={79}
//         ></Image>
//         <div className="font-[700] text-[20px] leading-[28px]">Italian Pizza
//         <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
//         <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">14.5$</div>
//         </div>
//           </div>

//           <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
//           <Image
//           src="/ggg.png"
//           alt="pic"
//           width={80}
//           height={79}
//         ></Image>
//         <div className="font-[700] text-[20px] leading-[28px]">Sllice Beef
//         <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
//         <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
//         </div>
//           </div>

//           <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
//           <Image
//           src="/hhh.png"
//           alt="pic"
//           width={80}
//           height={79}
//         ></Image>
//         <div className="font-[700] text-[20px] leading-[28px]">Mushaom Pizza
//         <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
//         <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
//         </div>
//           </div>


//           </div>


//     </div>
//     </div>
//   );
// };
// export default Menu;
