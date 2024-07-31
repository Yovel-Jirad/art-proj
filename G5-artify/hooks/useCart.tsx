import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

type CartContextType = {
    cartTotalQty: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleClearCart: () => void;
    paymentIntent: string | null;
    handleSetPaymentIntent: (val: string | null) => void;
    handleDownloadAllImages: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface CartContextProviderProps {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
    const [cartTotalQty, setCartTotalQty] = useState<number>(0);
    const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);
    const [cartProducts, setcartProducts] = useState<CartProductType[] | null>([]);
    const [paymentIntent, SetPaymentIntent] = useState<string | null>(null);

    useEffect(() => {
        const cartItems: any = localStorage.getItem('itemsInCart');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);
        const ArtifyPaymentProccessIntent: any = localStorage.getItem('ArtifyPaymentProccessIntent');
        const paymentIntent: string | null = JSON.parse(ArtifyPaymentProccessIntent);

        setcartProducts(cProducts);
        SetPaymentIntent(paymentIntent);
    }, []);

    useEffect(() => {
        const getTotals = () => {
            if (cartProducts) {
                const { total, qty } = cartProducts.reduce(
                    (acc, item) => {
                        const itemTotal = item.price;
                        acc.total += itemTotal;
                        acc.qty += 1;
                        return acc;
                    },
                    {
                        total: 0,
                        qty: 0,
                    }
                );
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            }
        };

        getTotals();
    }, [cartProducts]);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setcartProducts((prev) => {
            let updateCart;

            if (prev) {
                updateCart = [...prev, product];
            } else {
                updateCart = [product];
            }

            toast.success('Product added to cart');
            localStorage.setItem('itemsInCart', JSON.stringify(updateCart));

            return updateCart;
        });
    }, []);

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => item.id !== product.id);
            setcartProducts(filteredProducts);
            toast.success('Product Removed');
            localStorage.setItem('itemsInCart', JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const handleClearCart = useCallback(() => {
        setcartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem('itemsInCart', JSON.stringify(null));
    }, [cartProducts]);

    const handleSetPaymentIntent = useCallback((val: string | null) => {
        SetPaymentIntent(val);
        localStorage.setItem('ArtifyPaymentProccessIntent', JSON.stringify(val));
    }, [paymentIntent]);

    const downloadImage = useCallback((url: string, filename: string) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = filename;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }, []);

    const handleDownloadAllImages = useCallback(() => {
        if (cartProducts) {
            cartProducts.forEach(product => {
                const { image } = product.selectedImg;
                const filename = `${product.name}.jpg`;
                downloadImage(image, filename);
            });
            toast.success('Images downloaded successfully');
        }
    }, [cartProducts, downloadImage]);

    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleClearCart,
        paymentIntent,
        handleSetPaymentIntent,
        handleDownloadAllImages,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartContextProvider');
    }
    return context;
};
