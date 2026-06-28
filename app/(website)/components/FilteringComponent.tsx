"use client";

import { useEffect, useState } from "react";
import SelectedProduct from "./SelectedProduct";
import SectionDivider from "./SectionDivider";

const categories = [
  "All",
  "Emergency Plumbing",
  "Leak Detection",
  "Drain Cleaning",
  "Pipe Installation",
  "Water Heater",
  "Bathroom & Kitchen",
];

export default function FilteringComponent() {
  const [selected, setSelected] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (!selected) return;

    async function fetchServices() {
      const res = await fetch(
  `/api/products?category=${encodeURIComponent(selected)}`,
  {
    cache: "no-store",
  }
);

      const data = await res.json();
      setServices(data);
    }

    fetchServices();
  }, [selected]);

  return (
  <section className="py-10 bg-slate-950">

    <div className="container">

      {/* Dropdown */}

      <div className="flex justify-center mb-14">

        <div className="relative w-full max-w-md">

          {/* Glow */}

          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl" />

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="
              relative
              z-10
              w-full
              appearance-none
              rounded-full
              border
              border-cyan-500/30
              bg-slate-900
              px-7
              py-4
              text-white
              font-medium
              shadow-lg
              backdrop-blur
              transition-all
              duration-300
              cursor-pointer
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500/40
              hover:border-cyan-400
            "
          >
            <option value="" disabled>
              Select Plumbing Service
            </option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}

          </select>

          <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-cyan-400 text-sm">
            ▼
          </div>

        </div>

      </div>

      <SelectedProduct
        products={services}
        selected={selected}
      />

    </div>

</section>
);
}