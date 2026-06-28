export default function AboutPage() {
  const barbers = [
    {
      name: "Ali Abbas",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Usman Khan",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ahmed Raza",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <main className="bg-[#111827] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-32 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_35%)]" />

        <div className="container relative z-10 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold">
            ABOUT US
          </span>

          <h1 className="mt-8 text-6xl md:text-8xl font-display font-extrabold text-white">
            Trusted Plumbing Experts
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-slate-300 text-xl leading-9">
            Delivering reliable residential and commercial plumbing solutions
            with experienced technicians, fast response times and quality
            workmanship.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-display font-extrabold text-white">
              Our Company
            </h2>

            <p className="mt-8 text-lg text-white/70 leading-relaxed">
              Founded with a commitment to quality workmanship, our plumbing
              company has helped hundreds of homeowners and businesses solve
              everything from emergency leaks to complete plumbing
              installations. We combine modern equipment, certified technicians
              and transparent pricing to provide dependable plumbing services
              you can trust every day.
            </p>

            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Reliable plumbing solutions using modern tools, premium materials
              and experienced professionals.
            </p>
          </div>

          <div
            className="
    relative
    rounded-[40px]
    h-[500px]
    bg-cover
    bg-center
    overflow-hidden
    shadow-2xl
  "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-slate-950/30" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#D4AF37]">Why Choose Us</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            "Licensed Plumbers",
            "24/7 Emergency Support",
            "Upfront Pricing",
            "Guaranteed Work",
          ].map((item) => (
            <div
              key={item}
              className="
                p-8
                rounded-3xl
                bg-slate-900
                border border-[#D4AF37]/20
                hover:border-[#D4AF37]
                hover:-translate-y-2
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-cyan-500/20
              "
            >
              <h3 className="text-2xl font-bold text-[#D4AF37]">{item}</h3>

              <p className="mt-4 text-white/60">
                Premium grooming services delivered by experienced
                professionals.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="container py-24">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: "15+", title: "Years Experience" },
            { number: "8,500+", title: "Projects Completed" },
            { number: "24/7", title: "Emergency Support" },
            { number: "4.9★", title: "Customer Rating" },
          ].map((item) => (
            <div
              key={item.title}
              className="
                text-center
                p-10
                rounded-3xl
                bg-gradient-to-br
                from-[#D4AF37]
                to-[#B8860B]
                text-black
              "
            >
              <h3 className="text-5xl font-bold">{item.number}</h3>

              <p className="mt-3 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="container py-24">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#D4AF37]">
            Meet Our Plumbing Experts
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="
        rounded-3xl
        overflow-hidden
        bg-slate-900
        border border-[#D4AF37]/20
        hover:-translate-y-2
        hover:border-[#D4AF37]
        hover:shadow-[0_20px_40px_rgba(212,175,55,0.25)]
        transition-all
        duration-500
      "
            >
              <div
                className="
          h-80
          bg-cover
          bg-center
          relative
        "
                style={{
                  backgroundImage: `url(${barber.image})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white">{barber.name}</h3>

                <p className="text-cyan-400 mt-2 text-lg">Licensed Plumber</p>

                <p className="text-white/60 mt-3">
                  Certified Plumbing Specialist
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="rounded-[40px] overflow-hidden relative bg-gradient-to-r from-cyan-600 via-blue-700 to-slate-900 p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.12),transparent_45%)]" />

          <div className="relative z-10">
            <h2 className="text-5xl font-display font-extrabold text-white">
              Need Professional Plumbing Help?
            </h2>

            <p className="mt-6 text-slate-200 text-xl max-w-3xl mx-auto">
              From emergency plumbing repairs to complete installations, our
              certified plumbers are ready to help you anytime.
            </p>

            <button
              className="
mt-10
px-10
py-4
rounded-full
bg-white
text-slate-900
font-semibold
hover:scale-105
transition-all
duration-300
"
            >
              Request Service
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
