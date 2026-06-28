export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      review:
        "Excellent plumbing service! They arrived within 30 minutes and fixed our burst pipe quickly. Professional team and transparent pricing.",
    },
    {
      name: "Sarah Williams",
      role: "Restaurant Owner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      review:
        "Our commercial kitchen plumbing was repaired the same day. Highly skilled technicians and outstanding customer service.",
    },
    {
      name: "David Miller",
      role: "Property Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      review:
        "We've used them for multiple apartment buildings. Reliable, punctual and always deliver quality workmanship.",
    },
    {
      name: "Emily Brown",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
      review:
        "Installed our new water heater perfectly. The technicians explained everything clearly and left the area spotless.",
    },
    {
      name: "Robert Wilson",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
      review:
        "Fast emergency response at midnight. They solved a major leak before it caused serious damage. Highly recommended!",
    },
    {
      name: "Jessica Taylor",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      review:
        "Professional, friendly and affordable. The bathroom plumbing renovation exceeded our expectations.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_35%)]" />

        <div className="container relative z-10 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold">
            CLIENT TESTIMONIALS
          </span>

          <h1 className="mt-8 text-6xl md:text-7xl font-display font-extrabold">
            What Our Clients Say
          </h1>

          <div className="title-divider mt-8" />

          <p className="mt-8 max-w-3xl mx-auto text-slate-300 text-xl leading-9">
            Customer satisfaction is our highest priority. Here's what
            homeowners and businesses say about our plumbing services.
          </p>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="container pb-28">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="
                group
                rounded-3xl
                border
                border-cyan-500/20
                bg-slate-900
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_20px_50px_rgba(6,182,212,.18)]
              "
            >

              <div className="flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-20
                    w-20
                    rounded-full
                    object-cover
                    border-2
                    border-cyan-400
                  "
                />

                <div>

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400">
                    {item.role}
                  </p>

                </div>

              </div>

              <div className="mt-6 flex text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p className="mt-6 leading-8 text-slate-300">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="container pb-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-600 via-blue-700 to-slate-900 p-16 text-center">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.12),transparent_45%)]" />

          <div className="relative z-10">

            <h2 className="text-5xl font-display font-extrabold">
              Experience Our Professional Service
            </h2>

            <p className="mt-6 text-slate-200 text-xl max-w-3xl mx-auto">
              Join hundreds of satisfied homeowners and businesses who
              trust us for reliable plumbing solutions.
            </p>

            {/* <button
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
              Book Plumbing Service
            </button> */}

          </div>

        </div>

      </section>

    </main>
  );
}