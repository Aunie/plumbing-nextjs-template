import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(req, { params }) {
  const { id } = await params; // 🔥 IMPORTANT FIX

  const productId = Number(id);

  console.log("id:", productId);

  if (!id || isNaN(productId)) {
    return NextResponse.json(
      { message: "Invalid product id" },
      { status: 400 }
    );
  }

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    id: product.id,
    price: product.price,
  });
}