// Import Prisma for database interaction
import prisma from "@/libs/prismadb";

// Async function to retrieve all products
export default async function getProducts() {
  try {
    // Retrieve all products from the database using Prisma's findMany method
    const products = await prisma.product.findMany();

    // Return the retrieved products
    return products;
  } catch (error: any) {
    // Throw error if database operation fails
    console.log("failed here")
    throw new Error(error);
  }
}
