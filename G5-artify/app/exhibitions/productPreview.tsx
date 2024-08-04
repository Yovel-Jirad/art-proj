'use client'

import React from 'react';
import Image from "next/image";

// Define the props type for ProductPreview
interface ProductPreviewProps {
  data: any;
}

// Define the ProductPreview component
const ProductPreview: React.FC<ProductPreviewProps> = ({ data }) => {

    return (
      <div className="
        flex flex-col 
        items-center 
        w-full 
        p-4 
        border 
        border-gray-200 
        rounded-lg 
        shadow-lg 
        hover:shadow-xl 
        transition-shadow 
        duration-300
        bg-white
        text-center
      ">
        <div className="
            relative 
            w-full 
            h-64 
            bg-gray-100 
            rounded-lg 
            overflow-hidden
        ">
            <Image
                fill
                src={(data.images ?? [])[0]?.image}
                alt={data.Artist_Name}
                className="object-cover"
            />
        </div>
        <div className="mt-4 text-lg font-semibold text-gray-800">
            {data.name}
        </div>
      </div>
    );
};

export default ProductPreview;
