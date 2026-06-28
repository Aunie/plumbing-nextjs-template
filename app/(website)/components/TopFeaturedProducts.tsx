import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function TopFeaturedProducts() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_35%)]" />

      <div className="container relative z-10">

        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm tracking-wide">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-5xl font-display font-extrabold text-white">
            Professional Plumbing Services
          </h2>

          <div className="title-divider mt-6" />

          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
            Reliable plumbing solutions for homes and businesses.
            Fast response, experienced technicians and affordable pricing.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}