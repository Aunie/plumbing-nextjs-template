"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Wrench, Phone } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-slate-950/90
        border-b border-cyan-500/20
        shadow-xl
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-10
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="
              w-11 h-11
              rounded-xl
              bg-gradient-to-br
              from-blue-600
              to-cyan-400
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <Wrench className="w-6 h-6 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-display font-extrabold text-white leading-none">
              FlowFix
            </h1>

            <p className="text-xs tracking-[3px] uppercase text-cyan-400">
              Plumbing Services
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`
                relative
                group
                transition

                ${
                  pathname === item.href
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }
              `}
            >
              {item.label}

              <span
                className={`
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  bg-cyan-400
                  transition-all
                  duration-300

                  ${
                    pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
  href="/contact"
  className="
    hidden
    md:flex
    items-center
    gap-2
    px-6
    py-3
    rounded-full
    bg-gradient-to-r
    from-blue-600
    to-cyan-500
    hover:from-cyan-500
    hover:to-blue-600
    text-white
    font-semibold
    transition-all
    duration-300
    shadow-xl
    hover:scale-105
  "
>
  <Phone size={18} />
  Get Free Quote
</Link>
      </div>
    </nav>
  );
}