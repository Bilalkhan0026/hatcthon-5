import React from "react";
import Image from "next/image";

const Footar = () => {
  return (
    <div className="mt-10">
      {/* Support Section */}
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col lg:flex-row items-center border-b border-[#ff9f0d] py-6">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl font-bold">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Don t wait  make a smart & logical quote here. It s pretty easy.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col md:flex-row items-center w-[459px]">
          <input
            className="flex-grow p-3 bg-[#FF9F0D] text-white rounded-t-md md:rounded-l-md md:rounded-t-none placeholder-white w-[163px] lg:w-[163px] md:w-[163px]"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="p-3 bg-white text-[#ff9f0d] font-medium rounded-b-md md:rounded-r-md md:rounded-l-none w-[163px] md:w-[163px]">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold">About Us</h3>
          <p className="mt-4 text-sm text-gray-600">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable safe  and professional chauffeured car
            service in major cities across the world.
          </p>
          <div className="flex gap-4 mt-4">
            <Image src="/Rectangle 8785.png" alt="Icon" width={78} height={72} />
            <Image src="/text.png" alt="Text Logo" width={149} height={74} />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold">Useful Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-xl font-bold">Help?</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-bold">Recent Posts</h3>
          <div className="mt-4 space-y-4">
            <Image
              src="/Resent post cadr 1 (1).png"
              alt="Recent Post 1"
              width={244}
              height={53}
            />
            <Image
              src="/Resent post cadr 2.png"
              alt="Recent Post 2"
              width={244}
              height={53}
            />
            <Image
              src="/Resent post cadr 3.png"
              alt="Recent Post 3"
              width={244}
              height={53}
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-[#4F4F4F] text-white py-4">
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-center md:text-left">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <Image
            src="/Sociali icon.png"
            alt="Social Icons"
            width={240}
            height={34}
            className="mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Footar;




// import React from "react";
// import Image from "next/image";

// const Footar = () => {
//   return (
//     <div className="mt-10">
//       {/* Support Section */}
//       <div className="w-[1170px] max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center border-b border-[#ff9f0d] py-6">
//         <div className="lg:w-1/2">
//           <h2 className="text-2xl font-bold">
//             <span className="text-[#FF9F0D]">St</span>ill You Need Our Support?
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Don’t wait, make a smart & logical quote here. It's pretty easy.
//           </p>
//         </div>
//         <div className="mt-6 lg:mt-0 lg:w-1/2 flex">
//           <input
//             className="flex-grow p-3 bg-[#FF9F0D] text-white rounded-l-md placeholder-white"
//             type="text"
//             placeholder="Enter Your Email"
//           />
//           <button className="p-3 bg-white text-[#ff9f0d] font-medium rounded-r-md">
//             Subscribe Now
//           </button>
//         </div>
//       </div>

//       {/* Footer Content */}
//       <div className="w-full max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* About Us */}
//         <div>
//           <h3 className="text-xl font-bold">About Us</h3>
//           <p className="mt-4 text-sm text-gray-600">
//             Corporate clients and leisure travelers have been relying on
//             Groundlink for dependable, safe, and professional chauffeured car
//             service in major cities across the world.
//           </p>
//           <div className="flex gap-4 mt-4">
//             <Image src="/Rectangle 8785.png" alt="Icon" width={78} height={72} />
//             <Image src="/text.png" alt="Text Logo" width={149} height={74} />
//           </div>
//         </div>

//         {/* Useful Links */}
//         <div>
//           <h3 className="text-xl font-bold">Useful Links</h3>
//           <ul className="mt-4 space-y-2 text-sm text-gray-600">
//             <li>About</li>
//             <li>News</li>
//             <li>Partners</li>
//             <li>Team</li>
//             <li>Menu</li>
//             <li>Contacts</li>
//           </ul>
//         </div>

//         {/* Help Section */}
//         <div>
//           <h3 className="text-xl font-bold">Help?</h3>
//           <ul className="mt-4 space-y-2 text-sm text-gray-600">
//             <li>FAQ</li>
//             <li>Terms & Conditions</li>
//             <li>Reporting</li>
//             <li>Documentation</li>
//             <li>Support Policy</li>
//             <li>Privacy</li>
//           </ul>
//         </div>

//         {/* Recent Posts */}
//         <div>
//           <h3 className="text-xl font-bold">Recent Posts</h3>
//           <div className="mt-4 space-y-4">
//             <Image
//               src="/Resent post cadr 1 (1).png"
//               alt="Recent Post 1"
//               width={244}
//               height={53}
//             />
//             <Image
//               src="/Resent post cadr 2.png"
//               alt="Recent Post 2"
//               width={244}
//               height={53}
//             />
//             <Image
//               src="/Resent post cadr 3.png"
//               alt="Recent Post 3"
//               width={244}
//               height={53}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="w-full bg-[#4F4F4F] text-white py-4">
//         <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//           <p className="text-sm">
//             Copyright © 2022 by Ayeman. All Rights Reserved.
//           </p>
//           <Image
//             src="/Sociali icon.png"
//             alt="Social Icons"
//             width={240}
//             height={34}
//             className="mt-4 md:mt-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footar;













// import React from "react";
// import Image from "next/image";
// const Footar = () => {
//   return (
//     <div className='mt-[123px]'>
//       <div className="w-[1170px] h-[142.62px] ml-[359px] flex border-b-[1px] border-[#ff9f0d]">
//         <div className="">
//           <div className="w-[439px] h-[40px] font-[700] text-[32px] leading-[40px]">
//             <span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?</div>
//             <div className="w-[458px] h-[24px] font-[400] text-[16px] leading-[42px]">
//               Don’t wait make a smart & logical quote here. Its pretty easy.
//             </div>
//             </div>

          

//           <div className="w-[459px] h-[56px] ml-[325px]  flex">
//             <input
//               className="flex py-[16px] px-[20px] bg-[#FF9F0D]"
//               type="text"
//               placeholder=" Enter Your Email"
//             />
//             <div className="w-[163px] h-[56px] py-[16px] px-[20px] text-[#ff9f0d] bg-[#ffffff]">
//               {" "}
//               Subscribe Now
//           </div>
//         </div>
//       </div>

//       <div className="flex mt-[64px]">
//       <div className="pl-[300px]">
//         <div className=" font-[700] text-[24px] leading-[32px]">About Us.</div>
//         <div className="w-[312px] h-[95px] font-[400] text-[16px] mt-[25px] leading-[24px]">
//           orporate clients and leisure travelers has been relying on Groundlink
//           for dependab safe, and professional chauffeured car service in major
//           cities across World.
//         </div>

//         <div className='flex gap-[16px] mt-[25px]'> <Image src="/Rectangle 8785.png" alt="dil" width={78} height={72}></Image> 
//          <Image src="/text.png" alt="pic" width={149} height={74}></Image> </div>
//       </div>

//       <div  className="w-[143px] h-[367px] ml-[120px]">
//          <div className="w-[143px] h-[32px] font-[700] text-[24px] leading-[32px]">Useful Links</div>
//          <div className='mt-[20px] w-[87px] '>About</div>
//          <div className='mt-[20px] w-[87px] '>News</div>
//          <div className='mt-[20px] w-[87px] '>Partners</div>
//          <div className='mt-[20px] w-[87px] '>Team</div>
//          <div className='mt-[20px] w-[87px] '>Menu</div>
//          <div className='mt-[20px] w-[87px] '>Contacts</div>

//       </div>
//       <div  className="w-[170px] h-[363px] ml-[120px]">
//       <div className="w-[67px] h-[32px] font-[700] text-[24px] leading-[32px]">Help?</div>
//          <div className='mt-[20px] w-[170px] '>FAQ</div>
//          <div className='mt-[20px] w-[170px] '>Term & conditions</div>
//          <div className='mt-[20px] w-[170px] '>Reporting</div>
//          <div className='mt-[20px] w-[170px] '>Documentation</div>
//          <div className='mt-[20px] w-[170px] '>Support Policy</div>
//          <div className='mt-[20px] w-[170px] '>Privacy</div>
//       </div>

//       <div  className="w-[170px] h-[363px] ml-[120px]">
//         <div className="w-[139px] h-[32px] font-[700] text-[24px] leading-[32px]">Recent Post</div>
//         <Image className='mt-[20px]' src="/Resent post cadr 1 (1).png" alt="pic" width={244} height={53}></Image> 
//         <Image className='mt-[20px]' src="/Resent post cadr 2.png" alt="pic" width={244} height={53}></Image> 
//         <Image className='mt-[20px]' src="/Resent post cadr 3.png" alt="pic" width={244} height={53}></Image> 
       
//         </div>
    
//     </div>
//     <div className='w-[1920px] h-[99px] pl-[300px] flex items-center bg-[#4F4F4F]'>
//         <div className='w-[384px] h-[24px] flex '>
//         Copyright © 2022 by Ayeman. All Rights Reserved.
//         </div>
//         <Image className="ml-[500px]" src="/Sociali icon.png" alt="pic" width={240} height={34}></Image> 
       
//        </div>
//     </div>
//   );
// };

// export default Footar;
