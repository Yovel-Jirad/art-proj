'use client'; // Indicate usage of client-side code

// Import necessary dependencies
import Link from "next/link";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";

// Define AdminNav component
const AdminNav = ()=> {
// Get current pathname using usePathname hook from next/navigation
  const pathname = usePathname()

  // Render AdminNav component
  return (
   <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
    <Container>
      <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
        {/* Link to '/admin' page with AdminNavItem component */}
        <Link href='/admin'>
          <AdminNavItem label="Summary" icon={MdDashboard} selected={pathname == "/admin" }/>
        </Link>
        {/* Link to '/admin/manage-products' page with AdminNavItem component */}
        <Link href='/admin/manage-products'>
          <AdminNavItem label="Manage Products" icon={MdDns} selected={pathname == "/admin/manage-products" }/>
        </Link>
        
      </div>
    </Container>
   </div>
 );
};

export default AdminNav; // Export AdminNav component