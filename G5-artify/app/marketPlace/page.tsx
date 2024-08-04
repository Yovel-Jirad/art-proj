
import React from 'react';
import NullDataError from '@/app/components/NullDataError';
import ProductsCard from '../components/products/ProductsCard';
import getProducts from '@/actions/getProducts';
import Container from '../components/Container';

// Define the MarketplacePage component
export default async function MarketplacePage() {
    const products = await getProducts()

    if (products.length === 0) {
        return <NullDataError title='Oops! No products found.' />;
    }

    return (
        <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-6">
            {products.map((product: any, index: number) => (
                <ProductsCard key={index} data={product} />
            ))}
        </div>
        </Container>

    );
};

