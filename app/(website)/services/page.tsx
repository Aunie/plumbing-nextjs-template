import FilteringComponent from "../components/FilteringComponent";

export default function BookingPage() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_35%)]" />

      <div className="relative z-10">

        {/* Hero */}
        <div className="container pt-20 pb-10 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold"                     style={{
  padding: "10px", marginTop: "10px"
}}>
            OUR SERVICES
          </span>

          <h1
            className="
              mt-5
              text-5xl
              md:text-6xl
              font-display
              font-extrabold
              text-white
            "
            
          >
            Professional Plumbing Services
          </h1>

          <div className="title-divider mt-6" />

          <p
            className="
              max-w-3xl
              mx-auto
              text-lg
              text-slate-300
              leading-8
            "
                                style={{
  padding: "10px", marginTop: "10px"
}}
          >
            Explore our complete range of residential and commercial
            plumbing solutions. From emergency repairs to new installations,
            our certified plumbers deliver reliable, affordable and
            high-quality workmanship.
          </p>

                {/* Services */}
        <FilteringComponent />
        </div>

      </div>

    </section>
  );
}