import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function TopFeaturedProducts() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-16 sm:py-20 md:py-24 lg:py-32
        bg-gradient-to-br
        from-slate-950
        via-blue-950
        to-cyan-950
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      <div className="container relative z-10">
        {/* Badge */}
        <div className="flex justify-center">
          <div
            className="
              flex items-center gap-2
              px-4 sm:px-5 py-2
              rounded-full
              bg-cyan-500/10
              border border-cyan-400/40
              text-cyan-300
              text-xs sm:text-xs sm:text-sm
              font-medium
            "
          >
            OUR SERVICES
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            mt-8
            text-center
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-display
            font-extrabold
            text-white
            leading-tight
            px-4
          "
        >
          Professional
          <br />
          <span className="text-cyan-400">Plumbing Services</span>
        </h1>

        <div className="title-divider mt-6" />

        {/* Description */}
        <p
          className="
            mt-6
            max-w-3xl
            mx-auto
            text-center
            text-base
            sm:text-lg
            lg:text-xl
            text-slate-300
            leading-7 sm:leading-8
            px-4
          "
          
        >
            Reliable plumbing solutions for homes and businesses.
            Fast response, experienced technicians and affordable pricing.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ marginTop: "24px" }}>
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