import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Carter",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Outstanding plumbing service! The technician fixed our leaking pipe quickly and professionally. Highly recommended.",
  },
  {
    name: "Michael Brown",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "Excellent emergency response. They arrived within an hour and solved our blocked drain without any hassle.",
  },
  {
    name: "Daniel Smith",
    image: "https://i.pravatar.cc/150?img=8",
    review:
      "Very professional team with fair pricing. Everything was completed neatly and on time.",
  },
  {
    name: "David Wilson",
    image: "https://i.pravatar.cc/150?img=9",
    review:
      "From installation to cleanup, the whole experience was exceptional. Definitely my go-to plumbing company.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,.08),transparent_35%)]" />

      <div className="container relative z-10">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm tracking-wide">
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-5xl font-display font-extrabold text-white">
            What Our Customers Say
          </h2>

          <div className="title-divider mt-6" />

          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
            Our customers trust us for reliable plumbing solutions,
            fast response times and exceptional workmanship.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" style={{ marginTop: "24px" }}>

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                group
                rounded-3xl
                bg-gradient-to-br
                from-slate-900
                via-blue-950
                to-slate-900
                border
                border-cyan-500/20
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-400
                hover:shadow-2xl
                hover:shadow-cyan-500/20
              "
            >
              {/* Customer Image */}

              <img
                src={t.image}
                alt={t.name}
                className="
                  w-24
                  h-24
                  rounded-full
                  object-cover
                  mx-auto
                  border-4
                  border-cyan-500/40
                "
              />

              {/* Name */}

              <h3 className="mt-6 text-2xl font-bold text-white">
                {t.name}
              </h3>

              {/* Rating */}

              <div className="flex justify-center mt-4">

                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-cyan-400 text-cyan-400"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="mt-6 text-slate-300 leading-7">
                "{t.review}"
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Bottom Divider */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-cyan-500/40
          to-transparent
        "
      />

    </section>
  );
}