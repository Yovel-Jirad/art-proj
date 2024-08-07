"use client";

import { Order, User } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { formatPrices } from "@/Utils/formatPrices";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone, MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import { JSX, useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import moment from "moment";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

interface OrdersClientProps {
    orders: ExtendedOrder[];
}

// Define ExtendedOrder type to include both Order and User data
type ExtendedOrder = Order & {
    user: User;
};

const OrdersClient: React.FC<OrdersClientProps> = ({ orders }) => {
    const router = useRouter();


    // Determine if dark mode is enabled based on the user's preference
    let isDarkModeEnabled = false;
    let darkMode = false;

    if (typeof window !== 'undefined') {
        isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
        darkMode = isDarkModeEnabled ;
    }


    // Initialize rows array to store order data for the DataGrid component
    let rows: any = [];

    // Populate rows array with order data
    if (orders) {
        rows = orders.map((order) => ({
            id: order.id,
            price: formatPrices(order.amount / 100),
            date: moment(order.createDate).fromNow(),
        }));
    }

    // Define columns for the DataGrid
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", flex: 0.4},
        // Define column for price with custom rendering
        {
            field: "price",
            headerName: "Price (USD)",
            flex: 0.2,
            renderCell: (params) => <div className="font-bold">{params.row.price}</div>,
        },      
        {
            field: "date",
            headerName: "Date",
            flex: 0.2,
        },
        // Define column for actions with custom rendering
        {
            field: "action",
            headerName: "Actions",
            width: 200,
            renderCell: (params) => (
                <div className="flex justify-between gap-4 w-full">
                    <ActionBtn
                        icon={MdRemoveRedEye}
                        onClick={() => router.push(`/order/${params.row.id}`)}
                        
                    />
                </div>
            ),
        },
    ];

    return (
        <div className={`max-w-[1150px] m-auto text-xl`}>
            <div className="mb-4 mt-8">
                <Heading title="Your Purchases" center />
            </div>
            <div className="bg-gray-500" style={{ height: 600, width: "100%" }}>
                <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[9, 20]}
                disableRowSelectionOnClick
                sx={{
                    '& .MuiDataGrid-row': {
                        color: 'white', 
                    },
                    '& .MuiDataGrid-columnHeader': {
                        color: 'white', 
                    },
                    '& .MuiDataGrid-footerContainer, & .MuiTablePagination-toolbar': {
                        color: 'white', 
                    },
                    '& .Mui-selected': {
                        color: 'white', 
                    },
                    '& .MuiTablePagination-select, & .MuiTablePagination-selectLabel': {
                        color: 'white', 
                    },
                }}
                />
            </div>
        </div>
    );
};

export default OrdersClient;
