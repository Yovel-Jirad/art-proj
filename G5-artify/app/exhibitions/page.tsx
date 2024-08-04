import React from 'react';
import NullDataError from '@/app/components/NullDataError';
import Container from '../components/Container';
import getProductsByArtist from '@/actions/getProductsByArtist';
import ProductPreview from './productPreview';


// Define the Product type based on your Prisma schema
interface Product {
  id: string;
  images: { image: string }[]; // Assuming image is in this format
  Artist_Name: string;
}

// Define the Exhibitions component
export default async function Exhibitions() {
  // Fetch products grouped by artist
  const products = await getProductsByArtist();

  if (products.length === 0) {
    return <NullDataError title='Oops! No products found.' />;
  }

  // Organize products by artist
  const productsByArtist = products.reduce((acc, product: Product) => {
    const artistProducts = acc.get(product.Artist_Name) || [];
    artistProducts.push(product);
    acc.set(product.Artist_Name, artistProducts);
    return acc;
  }, new Map<string, Product[]>());

  return (
    <Container>
      <div className="space-y-8">
        {Array.from(productsByArtist.entries()).map(([artistName, artistProducts]) => (
          <div key={artistName}>
            <h2 className="text-2xl font-bold mb-4">{artistName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {artistProducts.map((product) => (
                // Use ProductPreview instead of ProductsCard
                <ProductPreview
                  key={product.id} // Adding a key for unique identification
                  data={product}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
