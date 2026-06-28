'use client'
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";


export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen bg-[#0B0F19] text-white">

      {/* SIDEBAR */}
      <aside className="w-80 bg-[#111827] border-r border-white/10 px-6 py-10">

        {/* BRAND */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-[#D4AF37] tracking-wide">
            Royal Barber
          </h1>
          <p className="text-sm text-white/50 mt-2">
            Admin Dashboard Panel
          </p>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-5">

          {[
            { href: "/admin/dashboard", label: "Dashboard" },
            { href: "/admin/bookings", label: "Manage Bookings" },
            { href: "/admin/reviews", label: "Manage Reviews" },
            { href: "/admin/revenue", label: "Revenue" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
  px-6 py-4
  rounded-full
  text-2xl font-semibold
  border
  transition-all duration-300

  ${
    pathname === item.href
      ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.35)]"
      : "text-white/70 border-white/10 hover:bg-[#D4AF37]/20 hover:text-white hover:border-[#D4AF37]/40"
  }

  active:scale-[0.98]
`}
            >
              {item.label}
            </Link>
          ))}

        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}