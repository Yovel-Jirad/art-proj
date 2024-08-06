'use client';

// Importing necessary modules and components
import { formatPrices } from "@/Utils/formatPrices";
import { truncateText } from "@/Utils/truncateText";
import { CartProductType } from "@prisma/client";
import Image from "next/image";
import DownloadImage from "./DownloadImage";

interface OrderItemProps{
  item: CartProductType
}

// Define the OrderItem functional component
const OrderItem: React.FC<OrderItemProps> = ({item}) => {


  return (
    <div>
      {/* Products ordered */}
      <h1 className="text-3xl font-bold mt-4 mb-2">{item.name}</h1>
      <h4 className="font-light italic mt-4 mb-2">{item.Artist_Name}</h4>
      <div className="
      grid grid grid-cols-[2fr,auto,auto] text-xs 
      md:text-sm gap-4 border-t-[1.5px] border-white py-4 items-center">
        {/* Column 1: Product Image and Name */}
        <div className=" col-span-2 justify-self-start flex gap-2 md:gap-6 items-center">
          <div className=" relative w-[500px] aspect-square">
            {/* Displaying product image */}
            <Image src={item.selectedImg.image} alt={item.name} fill className="object-contain"/>
          </div>
        </div>
        {/* Column 2: Download Button */}
        <div className="justify-self-center">
          <DownloadImage key={item.id} item={item}/>
        </div>
      </div>
    </div>
  )
};

export default OrderItem;