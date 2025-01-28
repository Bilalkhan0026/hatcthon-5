"use client";

import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully placed!", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className=" bg-gray-50 p-4 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                 {item.image && (
                               <Image
                                 src={urlFor(item.image).url()} alt ="image" width={250} height={200}className="w-16 h-16 object-cover rounded-lg" />
                                 
                             )}
                    
                  
                  <div>
                    <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="bg-gray-300 px-2 py-1 rounded-lg text-gray-800 hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="text-lg text-gray-800 font-medium">{item.inventory}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="bg-gray-300 px-2 py-1 rounded-lg text-gray-800 hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <h3 className="text-xl font-bold text-gray-800">Total: ${calculateTotal()}</h3>
              <button
                onClick={handleProceed}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center text-lg">Your cart is empty!</p>
        )}
      </div>
    </div>
  );
}







// "use client"

// import React, { useEffect, useState } from 'react'
// import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
// import Swal from 'sweetalert2'
// import { Result } from 'postcss'
// import { set } from 'sanity'

// export default function CartPage() {
//     const [cartItems, setCartItems] = useState<IProduct[]>([])
//     useEffect(() => {
//         setCartItems(getCartItems())
//     },[])

//     const handleRemove =(id:string) => {
//         Swal.fire({
//             title: "Are you sure",
//             text: "you will not be able to recover this item!",
//             icon:"warning",
//             showCancelButton: true,
//              confirmButtonColor: "#3085d6",
//              cancelButtonColor: "#d33",
//              confirmButtonText: "yes, remove it!"
//         }).then((result) => {
//             if(result.isConfirmed){
//                 removeFromCart(id)
//                 setCartItems(getCartItems())
//                 Swal.fire("Removed!","Item has been removed.","success");
//             }
//         })
//     }
//       const handleQuantityChange = (id: string,quantity : number) => {
//         updateCartQuantity(id, quantity);
//         setCartItems(getCartItems())
//       }
//       const handleIncrement = (id: string) =>{
//      const product = cartItems.find((item) => item._id === id );
//      if(product)
//         handleQuantityChange(id, product.inventory +1)
//       }
//       const handledecrement = (id: string) =>{
//      const product = cartItems.find((item) => item._id === id );
//      if(product && product.inventory > 1)
//         handleQuantityChange(id, product.inventory -1)
//       }
//       const calclatedTotal = ()=>{
//         return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
//       }
//       const handleProceed = ()=> {
//         Swal.fire({
//             title: "proseed to checkout?",
//             text: "Please review your cart before checkout",
//             icon: "question",
//             showCancelButton: true,
//             confirmButtonColor:"#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText:"Yes, proceed"
//         }).then((result) => {
//             if(result.isConfirmed){
//                 Swal.fire("success", "your order has been succussfully", "success")
//                 setCartItems([])
//             }
//         })
//       }
//   return (
//     <div className=''>
//       <div>
   
//             </div>
        
//       </div>
//     </div>
//   )
// }
