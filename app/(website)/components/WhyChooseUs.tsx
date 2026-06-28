import {
  Wrench,
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Licensed Plumbers",
    desc: "Certified professionals delivering safe and reliable plumbing solutions for every project.",
    icon: Wrench,
  },
  {
    title: "24/7 Emergency Service",
    desc: "Available day and night for burst pipes, leaks, blocked drains and urgent plumbing repairs.",
    icon: Clock3,
  },
  {
    title: "Guaranteed Workmanship",
    desc: "Every service is completed with precision and backed by our quality workmanship guarantee.",
    icon: BadgeCheck,
  },
  {
    title: "Trusted & Insured",
    desc: "Fully insured plumbing experts trusted by hundreds of homeowners and businesses.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
    
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_35%)]" />
    
          <div className="container relative z-10">
    
            <div className="text-center mb-16">
    
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm tracking-wide">
                WHY CHOOSE US
              </span>
    
              <h2 className="mt-5 text-5xl font-display font-extrabold text-white">
                Trusted Plumbing Professionals
              </h2>
    
              <div className="title-divider mt-6" />
    
              <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
            We combine years of experience, modern equipment and exceptional
            customer service to provide reliable plumbing solutions for homes
            and commercial properties.
              </p>
    
            </div>
    
            <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
          style={{ marginTop: "24px" }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-gradient-to-br
                  from-slate-900
                  via-blue-950
                  to-slate-900
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-cyan-400
                  hover:shadow-2xl
                  hover:shadow-cyan-500/20
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-16
                    h-16
                    rounded-2xl
                    bg-cyan-500/10
                    border
                    border-cyan-500/30
                    mb-6
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon
                    className="
                      w-8
                      h-8
                      text-cyan-400
                    "
                  />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-slate-300
                    leading-7
                  "
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
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