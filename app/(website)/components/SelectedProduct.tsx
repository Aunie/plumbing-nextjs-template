import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface SelectedProductProps {
  products: Product[];
  selected: string;
}

export default function SelectedProduct({
  products,
  selected,
}: SelectedProductProps) {
  return (
    <div className="mt-12">

      {selected && (
        <h3 className="
          text-2xl md:text-3xl
          font-display
          font-bold
          text-white
          text-center
          mb-10
        ">
          Available Services
        </h3>
      )}

      <div className="
        grid grid-cols-1 md:grid-cols-3
        gap-10
        container
      ">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}