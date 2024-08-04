'use client';

import NavItem from "./NavItem";
import Container from "../Container";
import { SafeUser } from "@/types";

interface UserMenuProps {
    currentUser: SafeUser | null;
}

// NavCategory component to render navigation
const NavigationItems: React.FC<UserMenuProps> = ({ currentUser }) => {

    return (
        <div className="w-full shadow-sm top-20 pt-4">
            <Container>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <NavItem
                            label="Home"
                            path="/" // Path for the Home link
                        />
                        <NavItem
                            label="MarketPlace"
                            path="/marketPlace" // Path for the MarketPlace link
                        />
                        <NavItem
                            label="Exhibitions"
                            path="/exhibitions" // Path for the Exhibitions link
                        />
                        {currentUser && (
                            <NavItem
                                label="Add Product"
                                path="/add-products" // Corrected path for the Add Product link
                            />
                        )}

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavigationItems;
