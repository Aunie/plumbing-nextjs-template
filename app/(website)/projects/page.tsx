export default function ProjectsPage() {
  const projects = [
    {
      title: "Luxury Bathroom Renovation",
      location: "New York",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Commercial Pipe Installation",
      location: "Brooklyn",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Kitchen Plumbing Upgrade",
      location: "Queens",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Water Heater Installation",
      location: "Manhattan",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Drain Cleaning Service",
      location: "Bronx",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Emergency Leak Repair",
      location: "Staten Island",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_35%)]" />

        <div className="container relative z-10 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold" style={{ marginTop: "24px" }}>
            OUR PROJECTS
          </span>

          <h1 className="mt-8 text-6xl md:text-7xl font-display font-extrabold">
            Recent Plumbing Projects
          </h1>

          <div className="title-divider mt-8"  />

          <p className="mt-8 max-w-3xl mx-auto text-slate-300 text-xl leading-9 " style={{ padding: "10px", marginBottom: "10px" }}>
            Discover some of our recently completed residential and
            commercial plumbing projects delivered with precision,
            quality workmanship and reliable service.
          </p>

        </div>

      </section>

      {/* PROJECT GRID */}

      <section className="container pb-28">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8" style={{ marginTop: "24px", padding: "20px" }}>

          {projects.map((project) => (

            <div
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-slate-900
                border
                border-cyan-500/20
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_20px_50px_rgba(6,182,212,.18)]
              "
            >

              <div className="relative h-72 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                <span
                  className="
                    absolute
                    top-5
                    left-5
                    rounded-full
                    bg-cyan-500
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {project.location}
                </span>

              </div>

              <div className="p-8" style={{ marginTop: "24px", padding: "10px" }}> 

                <h3 className="text-2xl font-display font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-400 leading-8">
                  Completed using premium plumbing materials,
                  certified technicians and industry-leading
                  installation standards.
                </p>

                <button
                  className="
                    mt-8
                    rounded-full
                    border
                    border-cyan-400
                    px-7
                    py-3
                    text-cyan-400
                    transition-all
                    duration-300
                    hover:bg-cyan-500
                    hover:text-white
                  "
                  style={{ marginTop: "24px", padding: "10px" }}
                >
                  View Project
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="container pb-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-600 via-blue-700 to-slate-900 p-16 text-center">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.15),transparent_40%)]" />

          <div className="relative z-10">

            <h2 className="text-5xl font-display font-extrabold" style={{ marginTop: "24px", padding: "10px" }}>
              Ready To Start Your Project?
            </h2>

            <p className="mt-6 text-slate-200 text-xl max-w-3xl mx-auto" style={{padding: "10px" }}>
              Whether its an emergency repair, pipe installation,
              drain cleaning or complete plumbing renovation,
              we are ready to help.
            </p>


          </div>

        </div>

      </section>

    </main>
  );
}