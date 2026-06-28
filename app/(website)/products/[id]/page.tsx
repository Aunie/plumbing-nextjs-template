import { products } from "@/data/products";
import ProductDetail from "../../components/ProductDetail";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <h1 className="text-3xl font-bold">
          Service Not Found
        </h1>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}