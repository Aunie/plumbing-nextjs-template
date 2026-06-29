export default function ContactPage() {
  return (
  <main className="bg-slate-950 text-white">

    {/* HERO */}
    <section className="relative overflow-hidden py-28">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.08),transparent_35%)]" />

      <div className="container relative z-10 text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold" style={{ marginTop: "24px", padding: "10px" }}>
          CONTACT US
        </span>

        <h1 className="mt-7 text-5xl md:text-7xl font-display font-extrabold">
          Get In Touch With Our
          <span className="text-cyan-400"> Plumbing Experts</span>
        </h1>

        <div className="title-divider mt-8" />

        <p className="mt-8 text-slate-300 text-xl max-w-3xl mx-auto leading-9" style={{ marginTop: "24px", padding: "20px" }}>
          Need emergency plumbing, pipe installation or leak repair?
          Our certified plumbers are available to help residential and
          commercial customers with reliable solutions.
        </p>

      </div>

    </section>

    {/* CONTACT */}
    <section className="container py-20" style={{ marginTop: "24px", padding: "20px" }}>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div style={{ marginTop: "24px", padding: "10px" }}>

          <h2 className="text-4xl font-display font-extrabold">
            Let's Talk
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            Whether it's an emergency plumbing issue, drain cleaning,
            water heater installation or a complete plumbing project,
            we're here to help.
          </p>

          <div className="space-y-6 mt-10">

            {[
              {
                title: "Phone",
                value: "+1 (555) 123-4567",
              },
              {
                title: "Email",
                value: "support@plumbingpro.com",
              },
              {
                title: "Office",
                value: "123 Main Street, New York",
              },
              {
                title: "Working Hours",
                value: "24/7 Emergency Service",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  bg-slate-900
                  border border-cyan-500/20
                  hover:border-cyan-400
                  transition-all
                  duration-300
                  p-6
                "
              >
                <h3 className="text-cyan-400 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg text-slate-200">
                  {item.value}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div
          className="
            rounded-[36px]
            border border-cyan-500/20
            bg-slate-900
            p-10
            shadow-xl
          "
          style={{ marginTop: "24px", padding: "10px" }}
        >

          <h2 className="text-3xl font-display font-bold">
            Request Service
          </h2>

          <p className="mt-3 text-slate-400">
            Fill out the form and our team will contact you shortly.
          </p>

          <div className="space-y-6 mt-8">

            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full
                rounded-2xl
                bg-slate-950
                border border-slate-700
                px-6 py-4
                outline-none
                transition
                focus:border-cyan-400
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full
                rounded-2xl
                bg-slate-950
                border border-slate-700
                px-6 py-4
                outline-none
                transition
                focus:border-cyan-400
              "
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="
                w-full
                rounded-2xl
                bg-slate-950
                border border-slate-700
                px-6 py-4
                outline-none
                transition
                focus:border-cyan-400
              "
            />

            <textarea
              rows={5}
              placeholder="Tell us about your plumbing issue..."
              className="
                w-full
                rounded-2xl
                bg-slate-950
                border border-slate-700
                px-6 py-4
                outline-none
                resize-none
                transition
                focus:border-cyan-400
              "
            />

            <button
              className="
                w-full
                rounded-full
                bg-cyan-500
                py-4
                font-semibold
                text-slate-950
                hover:bg-cyan-400
                hover:scale-[1.02]
                transition-all
              "
            >
              Request Plumbing Service
            </button>

          </div>

        </div>

      </div>

    </section>

    {/* LOCATION */}

    <section className="container pb-24" style={{ marginTop: "24px", padding: "30px" }}>

  <div className="relative overflow-hidden rounded-[40px] h-[500px] border border-cyan-500/20">

    <iframe
      title="Office Location"
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=Manhattan,New+York,NY&z=14&output=embed"
      className="absolute inset-0"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-slate-950/50" />

    {/* Content */}
    <div className="absolute inset-0 flex items-center justify-center">

      <div className="text-center z-10">

        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-semibold">
          OUR LOCATION
        </span>

        <h2 className="mt-6 text-5xl font-display font-extrabold text-white">
          Visit Our Office
        </h2>

        <p className="mt-5 text-xl text-slate-200">
          Fast • Reliable • Professional Plumbing Services
        </p>

      </div>

    </div>

  </div>

</section>

  </main>
);
}