'use client'
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";


export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div
      className="
    flex
    min-h-screen
    bg-gradient-to-br
    from-slate-950
    via-blue-950
    to-cyan-950
    text-white
  "
   style={{ marginTop: "10px", padding: "20px" }}
    >

      {/* SIDEBAR */}
      <aside
        className="
    w-80
    bg-slate-900/80
    backdrop-blur-xl
    border-r
    border-cyan-500/20
    px-8
    py-10
    shadow-2xl
  "
   style={{ marginTop: "10px", padding: "20px" }}
      >

        {/* BRAND */}
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-cyan-400">
            Prime Plumbing
          </h1>

          <p className="text-sm text-slate-400 mt-2">
            Admin Dashboard
          </p>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-4">

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
flex
items-center
px-6
py-4
rounded-2xl
font-semibold
text-lg
transition-all
duration-300
border

${pathname === item.href
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-cyan-400 shadow-lg shadow-cyan-500/30"
                  : "bg-slate-900/40 border-cyan-500/10 text-slate-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-white"
                }
`}
            >
              {item.label}
            </Link>
          ))}

        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main
  className="
    flex-1
    p-8
    lg:p-12
    overflow-y-auto
  "
>
  {children}
</main>

    </div>
  );
}