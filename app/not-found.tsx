"use client";

import Link from "next/link";
import { Home, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-cyan-950
    "
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
        bg-[size:50px_50px]
      "
      />

      <div
        className="
        relative
        z-10
        max-w-3xl
        mx-auto
        text-center
        px-6
      "
      >
        {/* Icon */}
        <div
          className="
          mx-auto
          w-28
          h-28
          rounded-full
          flex
          items-center
          justify-center
          bg-cyan-500/10
          border
          border-cyan-400/30
          shadow-[0_0_40px_rgba(6,182,212,.25)]
          animate-pulse-blue
        "
        >
          <Wrench className="w-14 h-14 text-cyan-400 animate-float-tool" />
        </div>

        {/* 404 */}
        <h1
          className="
          mt-10
          text-8xl
          md:text-9xl
          font-black
          text-white
        "
        >
          404
        </h1>

        <div className="title-divider mt-6" />

        {/* Heading */}
        <h2
          className="
          mt-8
          text-4xl
          md:text-5xl
          font-display
          font-extrabold
          text-white
        "
        >
          Oops! Pipe Not Found
        </h2>

        {/* Description */}
        <p
          className="
          mt-6
          text-lg
          leading-8
          text-slate-300
          max-w-2xl
          mx-auto
        "
        >
          The page you're looking for seems to have gone down the drain.
          Don't worry—our plumbing experts can fix pipes, but this page
          doesn't exist.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
          <Link href="/">
            <button
              className="
              flex
              items-center
              justify-center
              gap-2
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-blue-600
              via-blue-500
              to-cyan-500
              text-white
              font-semibold
              shadow-xl
              hover:scale-105
              transition-all
              duration-300
            "
            >
              <Home size={20} />
              Back To Home
            </button>
          </Link>

          <Link href="/services">
            <button
              className="
              px-8
              py-4
              rounded-full
              border
              border-cyan-400
              text-cyan-300
              hover:bg-cyan-400
              hover:text-slate-950
              transition-all
              duration-300
            "
            >
              View Services
            </button>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-14 text-sm text-slate-500">
          Prime Plumbing • Fast • Reliable • Professional
        </p>
      </div>
    </section>
  );
}