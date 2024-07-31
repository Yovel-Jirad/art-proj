'use client';

import Button from "@/app/components/Button";
import ProductsImg from "@/app/components/products/ProductsImg";
import { useCart } from "@/hooks/useCart";
import { formatPrices } from "@/Utils/formatPrices";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: string;
    name: string;
    description: string;
    Artist_Name: string;
    Size: string;
    selectedImg: SelectedImgType;
    price: number;
};

export type SelectedImgType = {
    color: string;
    colorCode: string;
    image: string;
};

// Horizontal divider component
const Horizontal = () => {
    return <hr className="w-[80%] my-2 bg-violet-500" />;
};

// ProductDetails component
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { handleAddProductToCart, cartProducts } = useCart();

    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        Artist_Name: product.Artist_Name,
        Size: product.Size,
        selectedImg: product.images && product.images.length > 0 ? { ...product.images[0] } : null,
        price: product.price
    });

    const router = useRouter();

    // Check if the product is already in the cart when cartProducts or product.id change
    useEffect(() => {
        setIsProductInCart(false);

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts, product.id]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
            {/* Product Image */}
            <div className="md:order-2">
                <ProductsImg cartProduct={cartProduct} product={product} />
            </div>
            {/* Product Details */}
            <div className="md:order-1 p-4 bg-white shadow-md rounded-lg flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">{product.name}</h2>
                    <div className="text-base md:text-lg lg:text-xl text-justify mb-4">{product.Artist_Name}</div>
                    <div className="text-base md:text-lg lg:text-xl text-justify mb-4">{product.Size}</div>
                    <div className="text-base md:text-lg lg:text-xl text-justify mb-4">{product.description}</div>
                    <div className="text-base md:text-lg lg:text-xl text-justify mb-4">{formatPrices(product.price)}</div>
                    {/* Horizontal Divider */}
                    <Horizontal />
                </div>
                <div className="mt-auto">
                    {/* Add to Cart or View Cart button based on whether the product is already in the cart */}
                    {isProductInCart ? (
                        <>
                            <p className="text-base md:text-lg lg:text-xl mb-2 text-slate-500 flex items-center gap-1">
                                <MdCheckCircle className="text-teal-400" size={20} />
                                <span>Product added to cart</span>
                            </p>
                            <div className="max-w-[300px]">
                                <Button label="View Cart" onClick={() => router.push('/cart')} />
                            </div>
                        </>
                    ) : (
                        <div className="max-w-[300px]">
                            <Button label="Add To Cart" onClick={() => handleAddProductToCart(cartProduct)} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
