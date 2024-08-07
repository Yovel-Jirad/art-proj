'use client';

// Importing necessary modules and components
import { formatPrices } from "@/Utils/formatPrices";
import { Order } from "@prisma/client"
import moment from "moment";
import { useRouter } from "next/navigation";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import OrderItem from "./OrderItem";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";


// Define the OrderDetails functional component
interface OrderDetailsProps{
    order: Order
}

const OrderDetails: React.FC<OrderDetailsProps> = ({order}) => {

    //const router= useRouter();
    return (
        <div className="max-w-[1150px] m-auto flex flex-col gap-2">
            {/* Heading for order details */}
            <div className="mt-8"> 
                <Heading title="Purchase Details"/>
            </div>
            {/* Purchase ID */}
            <div> Purchase ID: {order.id}</div>
            {/* Total Price */}
            <div> Total Price: {" "}
                <span className="font-bold">{formatPrices(order.amount/100)}</span>
            </div>
            {/* Date */}
            <div> Date: {moment (order.createDate).fromNow()}</div>
            <div>
                {/* Mapping through order products and rendering OrderItem component */}
                {order.products && order.products.map(item =>{
                    return <OrderItem key={item.id} item={item}></OrderItem>
                })}
            </div>


        </div>
    );
};

export default OrderDetails;