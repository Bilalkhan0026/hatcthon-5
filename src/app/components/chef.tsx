"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "zm15yzuf", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "v2025-01-18", // Use a valid Sanity API version
  useCdn: false, // Use `false` for fresh data
});



const ChefCards: React.FC = () => {
  const [chefs, setChefs] = useState<IChef[]>([]); // State for storing chef data

  // Fetch Chef Data
  const fetchChefs = async () => {
    try {
      const query = `
        *[_type == "chef"]{
          _id,
          name,
          position,
          experience,
          specialty,
          "imageUrl": image.asset->url,
          description,
          available
        }
      `;

      const data = await sanity.fetch(query);
      setChefs(data);
    } catch (error) {
      console.error("Error fetching chefs:", error);
    }
  };

  useEffect(() => {
    fetchChefs(); // Call fetch function on component mount
  }, []);

  // Render Chef Cards
  return (
    <div className="lg:w-[1320px] lg:mt-[120px] lg:ml-[300px] p-4">
      <h1 className="text-center  font-bold text-4xl  mt-4 mb-4">Meet<span className="text-[#FF9F0D]"> Ou</span>r Chefs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chefs.map((chef) => (
          <div
            key={chef._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg hover:scale-105 duration-300"
          >
            {/* Chef Image */}
            <Image
              src={chef.imageUrl}
              alt={chef.name}
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-md"
              unoptimized
            />
            {/* Chef Details */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{chef.name}</h2>
              <p className="text-slate-600 mt-1">
                <strong>Position:</strong> {chef.position}
              </p>
              <p className="text-slate-600 mt-1">
                <strong>Experience:</strong> {chef.experience} years
              </p>
              <p className="text-slate-600 mt-1">
                <strong>Specialty:</strong> {chef.specialty}
              </p>
              <p className="text-slate-800 mt-2 text-sm">
                {chef.description.length > 100
                  ? `${chef.description.substring(0, 100)}...`
                  : chef.description}
              </p>
              <p className="mt-2">
                <strong>Status:</strong>{" "}
                <span
                  className={`${
                    chef.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {chef.available ? "Available" : "Not Available"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefCards;