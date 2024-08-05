import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser"

// Handler for POST requests
export async function POST(request: Request) {
  // Get current user
  const currentUser = await getCurrentUser();

  // If no current user, return an error response
  if(!currentUser){
    return NextResponse.error();
  }

  // Parse request body
  const body = await request.json();
  const { name, description, Size, price, Artist_Name, inStock, images } = body;

  // Create a new product using Prisma
  const product = await prisma.product.create({
    data: {
      name,
      description,
      Artist_Name,
      Size,
      images,
      inStock,
      price: parseFloat(price),
    },
  });

  // Return the created product as JSON response
  return NextResponse.json(product);
}

// Handler for PUT requests
export async function PUT(request: Request) {
  // Parse request body
  const body = await request.json();
  const { id, inStock } = body;

  // Update the product with the provided ID using Prisma
  const product = await prisma.product.update({
    where: { id: id },
    data: { inStock },
  });
  // Return the updated product as JSON response
  return NextResponse.json(product);
}
