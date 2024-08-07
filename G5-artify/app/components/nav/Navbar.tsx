import Link from "next/link";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/actions/getCurrentUser";
import Image from 'next/image';
import logo from "./public/logo.png";

// Navbar.tsx
import dynamic from 'next/dynamic';
import NavigationItems from "./NavigationItems";
import Container from "../Container";

// Dynamically import the ThemeBtn component with ssr: false
const ThemeBtn = dynamic(() => import('../DarkLightButton'), {
  ssr: false,
});

const Navbar = async () => {

  const currentUser= await getCurrentUser();


  return (
    <div className="nav-bar">
      <Container>
        <div className="nav-bar-inner">
          {/* Left side: Logo and Navigation Links */}
          <div className="nav-bar-logo">
            {/* Navigation Links */}
            <Link href="/" className="flex items-center gap-2"> {/* TODO consider removing text and only leaving a picture of a logo */}
            <Image src={logo.src} alt="Home" className="h-8" width={32} height={32} />
            <span className="ml-2">Home-page</span>
            </Link>
          </div>
          {/*className="hidden md:block" */}

          {/* Right side: Account and Cart Icons */}
          <div className="nav-bar-menues">
            {/*div here inorder to not go back to homepage every time */}
            <div className="nav-bar-user-menu"><UserMenu currentUser={currentUser}/></div>
            {/* Cart Icon with badge */}
            <div className="relative">
              <CartCount/>
              {/* Badge */}
            </div>
            <ThemeBtn/>
          </div>
        </div>
      </Container>
      <NavigationItems currentUser={currentUser}/> 
    </div>
 
  );
};

export default Navbar;