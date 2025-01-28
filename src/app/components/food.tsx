"use client"
import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'
import { allProduct, } from '@/sanity/lib/queries'
import React,{useEffect, useState} from 'react'
import Link from 'next/link';
import { addToCart } from '../actions/actions';
import Swal from "sweetalert2";

export default function Food() {
  const [product, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    async function fetctproduct() {
      const fetchedProduct: IProduct[] =await client.fetch(allProduct)
      setProduct(fetchedProduct)
    }
    fetctproduct()
  },[]);


  const handleAddToCart = (e: React.MouseEvent, product: IProduct) => {
    e.preventDefault()
    //  add to cart   
             Swal.fire({
              position:"top-right",
              icon: "success",
              title: `${product.name} added to cart`,
              showConfirmButton: false,
              timer: 1500
             })
    addToCart(product)
   
    
  }


  return (
    <div className="lg:w-[1320px] lg:mt-[120px] lg:ml-[300px] p-4">
    <h1 className="text-center text-3xl font-bold text-white mt-4 mb-4">Products From
       <span className="text-[#FF9F0D]">API s</span> Data
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        product.map((product)=>(
          <div key={product._id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-lg hover:scale-105 duration-300">
           <Link href={`products/${product.slug.current}`}>
            {product.image && (
              <Image
                src={urlFor(product.image).url()} alt ="image" width={300} height={300} className="w-full h-72 object-cover rounded-md" />
                
            )}
           
            <div className="mt-4">
              <h2 className="text-lg text-slate-800 font-semibold">{product.name}</h2>
            
              <p className="text-slate-800 mt-2 text-sm">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.originalPrice > 0 && (
                    <p className="text-sm text-green-600">
                      {product.originalPrice}% Off
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-yellow-300 text-black rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div></div>
              </Link>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={(e) => handleAddToCart(e,product)}
              >
                Add To Cart
              </button>
              



          </div>
        ))
      }
      </div>
    </div>
  )
}










// "use client";

// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// const sanity = sanityClient({
//   projectId: "oloflfzm",
//   dataset: "production",
//   apiVersion: "v2025-01-18",
//   useCdn: false,
// });

// interface Product {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags: string[];
//   imageUrl: string;
//   description: string;
//   available: boolean;
//   slug: {
//     _type: "slug";
//     current: string;
//   };
// }

// function truncateDescription(description: string, maxLength: number = 100): string {
//   if (description.length > maxLength) {
//     return description.substring(0, maxLength) + "...";
//   }
//   return description;
// }

// const ProductCards: React.FC = () => {
//   const [Products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const query = `
//         *[_type == "food"]{
//           _id,
//           name,
//           category,
//           price,
//           originalPrice,
//           tags,
//           "imageUrl": image.asset->url,
//           description,
//           available,
//           slug
//         }
//       `;

//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error Fetching Products: ", error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} has been added to your cart!`);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-center text-3xl font-bold text-slate-800 mt-4 mb-4">
//         Products From API's Data
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {Products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg p-4 hover:shadow-lg hover:scale-105 duration-300"
//           >
//             <Link href={`products/${product.slug.current}`}>
//               <Image
//                 src={product.imageUrl || "/placeholder.png"}
//                 alt={product.name}
//                 width={300}
//                 height={300}
//                 className="w-full h-72 object-cover rounded-md"
//                 unoptimized
//               />
//             </Link>
//             <div className="mt-4">
//               <h2 className="text-lg font-semibold">{product.name}</h2>
//               <p className="text-slate-800 mt-2 text-sm">
//                 {truncateDescription(product.description || "")}
//               </p>

//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="text-slate-600 font-bold">
//                     ${product.price.toFixed(2)}
//                   </p>
//                   {product.originalPrice > 0 && (
//                     <p className="text-sm text-green-600">
//                       {product.originalPrice}% Off
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.tags?.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="text-xs bg-yellow-300 text-black rounded-full px-2 py-1"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <button
//                 className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                 onClick={() => addToCart(product)}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold text-red-800">Cart Summary</h2>
//         {cart.length > 0 ? (
//           <ul className="space-y-4">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
//               >
//                 <div>
//                   <p className="font-medium text-slate-900">{item.name}</p>
//                   <p className="text-sm text-blue-600">
//                     ${item.price.toFixed(2)}
//                   </p>
//                 </div>
//                 <Image
//                   src={item.imageUrl || "/placeholder.png"}
//                   alt={item.name}
//                   width={50}
//                   height={50}
//                   className="rounded-md"
//                   unoptimized
//                 />
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-black text-center">Your Cart Is Empty</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCards;













// "use client";

// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";


// const sanity = sanityClient({
//   projectId: "zm15yzuf",
//   dataset: "production",
//   apiVersion: "v2025-01-18",
//   useCdn: false,
// });

// interface Product {
//     _id: string;
//     name: string;
//     category: string;
//     price: number;
//     originalPrice: number;
//     tags: string[];
//     imageUrl: string;
//     description: string;
//     available: boolean;
//     sulg : {
//         _type : "slug"
//         current : string;
//     }
//   }

// function truncateDescription(description: string, maxLength: number = 100): string {
//   if (description.length > maxLength) {
//     return description.substring(0, maxLength) + "...";
//   }
//   return description;
// }

// const ProductCards: React.FC = () => {
//   const [Products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//         const query = `
//         *[_type == "food"]{
//           _id,
//           name,
//           category,
//           price,
//           originalPrice,
//           tags,
//           "imageUrl": image.asset->url,
//           description,
//           available
//         }
//       `;

//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error Fetching Products: ", error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} has been added to your cart!`);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-center text-3xl font-bold text-slate-800 mt-4 mb-4">
//         Products From API's Data
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
//         {Products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-lg p-4 hover:shadow-lg hover:scale-105 duration-300"
//           >
//             <Link href={`/Product/${product.sulg.current}`}>
//             <Image
//               src={product.imageUrl}
//               alt={product.name}
//               width={300}
//               height={300}
//               className="w-full h-72 object-cover rounded-md"
//               unoptimized
//             />
//              </Link>
//             <div className="mt-4">
//               <h2 className="text-lg font-semibold">{product.name}</h2>
//               <p className="text-slate-800 mt-2 text-sm">
//                 {truncateDescription(product.description)}
//               </p>
              
//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="text-slate-600 font-bold">
//                     ${product.price.toFixed(2)}
//                   </p>
                  
//                   {product.originalPrice > 0 && (
//                     <p className="text-sm text-green-600">
//                       {product.originalPrice}% Off
//                     </p>
                
//                   )}
                   
//                 </div>
                
//               </div>
             
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="text-xs bg-yellow-300 text-black rounded-full px-2 py-1"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <button
//                 className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                 onClick={() => addToCart(product)}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold text-red-800">Cart Summary</h2>
//         {cart.length > 0 ? (
//           <ul className="space-y-4">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
//               >
//                 <div>
//                   <p className="font-medium text-slate-900">{item.name}</p>
//                   <p className="text-sm text-blue-600">
//                     ${item.price.toFixed(2)}
//                   </p>
//                 </div>
//                 <Image
//                   src={item.imageUrl}
//                   alt={item.name}
//                   width={50}
//                   height={50}
//                   className="rounded-md"
//                   unoptimized
//                 />
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-black text-center">Your Cart Is Empty</p>
//         )}
//       </div>
      
//     </div>
//   );
// };

// export default ProductCards;