import { Product } from "@/data/products";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-slate-900
        via-blue-950
        to-slate-950
        border
        border-cyan-500/20
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400
        hover:shadow-cyan-500/20
      "
    >
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden">

          <img
            src={product.image}
            alt={product.name}
            className="
              h-64
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <span
            className="
              absolute
              top-5
              left-5
              px-4
              py-2
              rounded-full
              bg-cyan-500
              text-white
              text-xs
              font-semibold
            "
          >
            {product.category}
          </span>

        </div>
      </Link>

      {/* CONTENT */}

      <div className="p-7">

        <Link href={`/products/${product.id}`}>
          <h3
            className="
              text-2xl
              font-bold
              text-white
              group-hover:text-cyan-400
              transition
            "
          >
            {product.name}
          </h3>
        </Link>

        <p className="mt-4 text-slate-300 leading-7">
          {product.description}
        </p>

        <div className="mt-8 flex justify-between items-center">

          <div>
            <p className="text-sm text-slate-400">
              Starting From
            </p>

            <h4 className="text-3xl font-extrabold text-cyan-400">
              ${product.price}
            </h4>
          </div>

                  <Link href={`/products/${product.id}`}>
            <button
              className="
                px-6
                py-3
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
                shadow-cyan-500/30
              "
            >
              Booking
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}