// Importing Prisma for database operations
import prisma from '../libs/prismadb'

// Function to retrieve products by user name
export default async function getProductByUserName(userName: string) {
  try {
    // Retrieving products associated with the given user name from the database
    const products = await prisma.product.findMany({
      where: {
        Artist_Name: userName, // Filtering products by the given user name
      },
    });

    // Returning the retrieved products
    return products;
  } catch (error) {
    // Improved error handling with descriptive message
    console.error("Error retrieving products by user name:", error);
    throw new Error("An error occurred while retrieving products.");
  }
}
