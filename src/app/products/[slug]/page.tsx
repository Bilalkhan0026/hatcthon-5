
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";


 interface ProductPageProps {
  params: Promise< { slug: string }>// سیدھا { slug: string }
 }

async function getProduct(slug: string): Promise<IProduct | null> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
      _id,
      name,
      category,
      price,
      originalPrice,
      tags,
      image,
      "imageUrl": image.asset->url,
      description,
      available
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }:ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto mt-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="aspect-square">
          {product.image && (
                       <Image
                         src={urlFor(product.image).url()} alt ="image" width={350} height={500} className="w-full h-[500px] object-cover rounded-md" />
              
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name || "Product Name"}</h1>
          <p className="text-lg text-gray-600">{product.description || "No description available"}</p>
          <p className="text-xl font-semibold text-green-700">${product.price.toFixed(2)}</p>
          <p className="text-md text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-yellow-300 text-black rounded-full px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Available Product Status */}
          <p className={`mt-4 text-lg font-semibold ${product.available ? 'text-green-500' : 'text-red-500'}`}>
            {product.available ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
}





// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// interface Product {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags: string[];
//   image: any;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// interface ProductPageProps {
//   params: { slug: string };
// }

// async function getProduct(slug: string): Promise<Product | null> {
//   return client.fetch(
//     groq`*[_type == "food" && slug.current == $slug][0]{
//       _id,
//       name,
//       category,
//       price,
//       originalPrice,
//       tags,
//       image,
//       "imageUrl": image.asset->url,
//       description,
//       available
//     }`,
//     { slug }
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = params;
//   const product = await getProduct(slug);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <div className="aspect-square">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url() || product.imageUrl}
//               alt={product.name || "Product Image"}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           )}
//         </div>
//         <div className="flex flex-col gap-8">
//           <h1 className="text-4xl font-bold">
//             {product.name || "Product Name"}
//           </h1>
//           <p className="text-lg text-gray-600">
//             {product.description || "No description available"}
//           </p>
//           <p className="text-xl font-semibold text-green-700">
//             ${product.price.toFixed(2)}
//           </p>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// cdn.sanity.io






// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";

// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// interface Product {
//   _id: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags: string[];
//   image: any;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// interface ProductPageProps {
//   params: { slug: string }; // `Promise` کو ہٹا دیا گیا
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "food" && slug.current == $slug][0]{
//           _id,
//           name,
//           category,
//           price,
//           originalPrice,
//           tags,
//           "imageUrl": image.asset->url,
//           description,
//           available
//         }`,
//     { slug } // متغیر فراہم کیا گیا
//   );
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = params; // `await` ہٹا دیا گیا
//   const product = await getProduct(slug);

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <div className="aspect-square">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name || "Product Image"}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           )}
//         </div>
//         <div className="flex flex-col gap-8">
//           <h1 className="text-4xl font-bold">
//             {product.name || "Product Name"}
//           </h1>
//           <p className="text-lg text-gray-600">
//             {product.description || "No description available"}
//           </p>
//           <p className="text-xl font-semibold text-green-700">
//             ${product.price.toFixed(2)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }