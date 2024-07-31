// Importing Prisma for database operations
import prisma from '@/libs/prismadb'

// Defining interface for function parameters
interface IParams{
    productId?: string // Optional parameter: productId
}

// Function to retrieve a product by its ID
export default async function getProductById(params: IParams){
    try {
        // Destructuring productId from params
        const {productId} = params;
        // Retrieving the product from the database using Prisma
        const product = await prisma.product.findUnique({
            where:{
                id: productId // Searching for the product by its ID
            }
        })
        // If the product is not found, return null
        if(!product){
            return null;
        }
        // If the product is found, return it
        return product;
    } catch (error: any) {
        // If an error occurs, throw an error
        throw new Error(error)
    }
}