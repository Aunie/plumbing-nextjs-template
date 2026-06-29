"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "24/7 Emergency Plumbing",
    desc: "Fast, reliable emergency plumbing services available day and night for your home or business.",
    img: "/images/1.png",
  },
  {
    title: "Water Heater Installation",
    desc: "Professional installation, repair and maintenance of all major water heater brands.",
    img: "/images/2.png",
  },
  {
    title: "Drain Cleaning Experts",
    desc: "Advanced drain cleaning solutions to remove stubborn blockages quickly and efficiently.",
    img: "/images/3.png",
  },
  {
    title: "Leak Detection & Pipe Repair",
    desc: "Accurate leak detection and durable pipe repair services using modern equipment.",
    img: "/images/4.png",
  },
];

export default function SliderComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[700px] w-full overflow-hidden">

      {/* Background Image */}
  <Image
    key={slide.img}
    src={`${slide.img}?v=${index}`}
    alt={slide.title}
    fill
    unoptimized
    className="object-cover object-center"
    sizes="100vw"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-6">

          <span className="
            inline-block
            px-5 py-2
            rounded-full
            border border-[#2563EB]
            text-[#2563EB]
            text-sm
            tracking-[3px]
            uppercase
            mb-6
          "
                              style={{
  padding: "10px", marginTop: "10px"
}}
          >
            Trusted Plumbing Experts
          </span>

          <h1 className="
            text-5xl
            md:text-7xl
            font-display
            font-bold
            leading-tight
          ">
            {slide.title}
          </h1>

          <p className="
            mt-6
            text-lg
            md:text-2xl
            text-white/80
            max-w-2xl
            mx-auto
          ">
            {slide.desc}
          </p>

          <div className="
            mt-10
            flex flex-col sm:flex-row
            gap-4
            justify-center
          ">
            <Link href={`/services`}>
            <button
              className="
                px-10 py-4
                bg-[#2563EB]
                text-white
                font-semibold
                rounded-full
                hover:scale-105
                transition
              "
                    style={{
  padding: "10px", marginTop: "10px"
}}
            >
               Our Services
            </button>
            </Link>
            <button
              className="
                px-8 py-4
                border
                border-white
                rounded-full
                hover:bg-white
                hover:text-black
                transition
              "
                                style={{
  padding: "10px", marginTop: "10px"
}}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Previous */}
      <button
        onClick={prev}
        className="
          absolute left-6 top-1/2 -translate-y-1/2
          w-12 h-12
          rounded-full
          bg-white/10
          hover:bg-[#2563EB]
          hover:text-black
          text-white
          backdrop-blur-md
          transition
        "
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="
          absolute right-6 top-1/2 -translate-y-1/2
          w-12 h-12
          rounded-full
          bg-white/10
          hover:bg-[#2563EB]
          hover:text-black
          text-white
          backdrop-blur-md
          transition
        "
      >
        ›
      </button>

      {/* Dots */}
      <div className="
        absolute bottom-8
        left-1/2
        -translate-x-1/2
        flex gap-3
      ">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              transition-all duration-300
              ${
                i === index
                  ? "w-10 h-3 bg-[#2563EB] rounded-full"
                  : "w-3 h-3 bg-white/40 rounded-full"
              }
            `}
          />
        ))}
      </div>
        
    </section>
  );
}