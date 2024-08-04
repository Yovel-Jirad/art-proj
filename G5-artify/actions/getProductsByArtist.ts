import prisma from "@/libs/prismadb";

export default async function getProductsByArtist() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        Artist_Name: 'asc', 
      },
    });

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}
