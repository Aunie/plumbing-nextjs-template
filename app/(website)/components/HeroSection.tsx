import Link from "next/link";
import { ShieldCheck, Clock3, Wrench } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24 md:py-32
        bg-gradient-to-br
        from-slate-950
        via-blue-950
        to-cyan-950
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

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
              px-5 py-2
              rounded-full
              bg-cyan-500/10
              border border-cyan-400/40
              text-cyan-300
              text-sm
              font-medium
            "
          >
            <ShieldCheck size={18} />
            Trusted Plumbing Professionals
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            mt-8
            text-center
            text-5xl
            md:text-7xl
            font-display
            font-extrabold
            text-white
            leading-tight
          "
        >
          Fast & Reliable
          <br />

          <span className="text-cyan-400">
            Plumbing Solutions
          </span>
        </h1>

        <div className="title-divider mt-6" />

        {/* Description */}
        <p
          className="
            mt-8
            max-w-3xl
            mx-auto
            text-center
            text-lg
            md:text-xl
            text-slate-300
            leading-8
          "
        >
          From emergency pipe repairs and leak detection to water heater
          installation and drain cleaning, our certified plumbers deliver
          dependable solutions for homes and businesses 24 hours a day.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">

          <Link href="/services">
            <button
              className="
                px-9 py-4
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                font-semibold
                shadow-xl
                hover:scale-105
                transition
              "
            >
              Explore Services
            </button>
          </Link>

          <Link href="/contact">
            <button
              className="
                px-9 py-4
                rounded-full
                border
                border-cyan-400
                text-cyan-300
                hover:bg-cyan-400
                hover:text-slate-950
                transition
              "
            >
              Get Free Quote
            </button>
          </Link>

        </div>

        {/* Statistics */}
        <div
          className="
            mt-20
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "
        >
          {[
            {
              number: "10+",
              text: "Years Experience",
              icon: <Wrench size={24} />,
            },
            {
              number: "24/7",
              text: "Emergency Service",
              icon: <Clock3 size={24} />,
            },
            {
              number: "2500+",
              text: "Projects Completed",
              icon: <ShieldCheck size={24} />,
            },
            {
              number: "100%",
              text: "Customer Satisfaction",
              icon: <ShieldCheck size={24} />,
            },
          ].map((item) => (
            <div
              key={item.text}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
                hover:border-cyan-400/40
                transition
              "
            >
              <div className="flex justify-center text-cyan-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="mt-2 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}