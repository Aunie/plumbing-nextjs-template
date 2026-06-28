import Link from "next/link";
import { ShieldCheck, Clock3, Wrench } from "lucide-react";

export default function HeroSection() {
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

      <div className="container relative z-10 flow-root">

        
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
            <ShieldCheck size={16} className="sm:w-[18px] sm:h-[18px]" />
            Trusted Plumbing Professionals
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
          Fast & Reliable
          <br />
          <span className="text-cyan-400">Plumbing Solutions</span>
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
          From emergency pipe repairs and leak detection to water heater
          installation and drain cleaning, our certified plumbers deliver
          dependable solutions for homes and businesses 24 hours a day.
        </p>

        {/* CTA + Statistics */}
<div className="mt-16">
  {/* CTA */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4" style={{ marginTop: "16px" }}>
    <Link href="/services" className="w-full sm:w-auto">
      <button
        className="
          w-full sm:w-auto px-8 py-3.5 mx-2
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

    <Link href="/contact" className="w-full sm:w-auto" >
      <button
        className="
          w-full sm:w-auto px-8 py-3.5 mx-2
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
      sm:pt-24
      lg:pt-28
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
      gap-5
      px-4
      sm:px-0
      mt-24
    "
    style={{ marginTop: "16px" }}
  >
    {[
            {
              number: "10+",
              text: "Years Experience",
              icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
            },
            {
              number: "24/7",
              text: "Emergency Service",
              icon: <Clock3 className="w-5 h-5 sm:w-6 sm:h-6" />,
            },
            {
              number: "2500+",
              text: "Projects Completed",
              icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
            },
            {
              number: "100%",
              text: "Customer Satisfaction",
              icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
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
                p-6 sm:p-7 lg:p-8
                text-center
                hover:border-cyan-400/40
                transition
              "
            >
              <div className="flex justify-center text-cyan-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white">{item.number}</h3>

              <p className="mt-2 text-sm sm:text-base text-slate-300">{item.text}</p>
            </div>
          ))}
  </div>

</div>
        
        
      </div>


    </section>
  );
}
