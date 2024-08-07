'use client';

import Link from "next/link";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import Avatar from "../Avatar";

interface UserMenuProps{
    currentUser: SafeUser | null;
}


const UserMenu: React.FC<UserMenuProps>=({currentUser}) => {
    
    // State to manage the open/close state of the menu
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the open/close state of the menu
    const toggleOpen=useCallback(()=>{
        setIsOpen(prev => !prev);
    },[]);

    return (
    <div className="relative z-30">
        {/* User menu button */}
        <div onClick={toggleOpen} className="user-menu">
            <Avatar/>
            <AiFillCaretDown />

        </div>
        {/* Menu items */}
        {isOpen && (
            <div className="opened-user-menu">
                {currentUser ? (
                    <div>
                        {/* Link to user orders */}
                        <Link href="/orders">
                            <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                        </Link>
                        {/* Manage Products links */}
                        <Link href="/manage-products">
                            <MenuItem onClick={toggleOpen}>Manage Products</MenuItem>
                        </Link>
                        <hr />
                        {/* Logout option */}
                        <MenuItem onClick={()=>{
                            toggleOpen();
                            signOut({ callbackUrl: '/' });
                        }}> Logout</MenuItem>
                    </div>) : <div>
                    {/* Link to login */}
                    <Link href="/login">
                        <MenuItem onClick={toggleOpen}>Login</MenuItem>
                    </Link>
                    {/* Link to register */}
                    <Link href="/register">
                        <MenuItem onClick={toggleOpen}>Register</MenuItem>
                    </Link>
                </div>
                }
            </div>
        )}
    </div>
  );
};

export default UserMenu;