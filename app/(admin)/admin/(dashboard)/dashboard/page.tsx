"use client";

import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  DollarSign,
  CalendarCheck,
  Users,
  Star,
  Clock3,
  Wrench,
  Droplets,
  TrendingUp,
} from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4100 },
  { month: "Mar", revenue: 5200 },
  { month: "Apr", revenue: 4700 },
  { month: "May", revenue: 6900 },
  { month: "Jun", revenue: 8100 },
];

const stats = [
  {
    title: "Today's Revenue",
    value: "$1,250",
    change: "+18%",
    icon: DollarSign,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Monthly Revenue",
    value: "$2840",
    change: "+22%",
    icon: TrendingUp,
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "Bookings",
    value: "486",
    change: "+42",
    icon: CalendarCheck,
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "Customers",
    value: "1,284",
    change: "+12%",
    icon: Users,
    color: "from-violet-500 to-purple-700",
  },
  {
    title: "Emergency Calls",
    value: "38",
    change: "+8",
    icon: Clock3,
    color: "from-red-500 to-rose-700",
  },
  {
    title: "Completed Jobs",
    value: "924",
    change: "+31",
    icon: Wrench,
    color: "from-orange-500 to-amber-700",
  },
  {
    title: "Water Leak Repairs",
    value: "154",
    change: "+16",
    icon: Droplets,
    color: "from-sky-500 to-cyan-700",
  },
  {
    title: "Customer Rating",
    value: "4.9★",
    change: "Excellent",
    icon: Star,
    color: "from-yellow-400 to-orange-500",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-10" style={{ marginTop: "10px", padding: "30px" }}>

      {/* HEADER */}
      <div
  className="
  rounded-3xl
  border
  border-cyan-500/20
  bg-slate-900/60
  backdrop-blur-xl
  p-8
"
 style={{ marginTop: "10px", padding: "20px" }}
>
  <h1 className="text-5xl font-extrabold text-white">
    Plumbing Dashboard
  </h1>

  <p className="text-slate-400 mt-3 text-lg">
    Welcome back! Here's today's business overview.
  </p>

  <div className="mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500" />
</div>

      {/* STATS */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4" >

  {stats.map((item) => {

    const Icon = item.icon;

    return (

      <div
        key={item.title}
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-500/20
          bg-slate-900/60
          backdrop-blur-xl
          p-7
          transition-all
          duration-500
          hover:-translate-y-2
          hover:scale-[1.03]
          hover:border-cyan-400
          hover:shadow-[0_20px_45px_rgba(6,182,212,.25)]
        "
         style={{ marginTop: "10px", padding: "20px" }} 
      >

        <div
          className={`
            absolute
            top-0
            right-0
            h-32
            w-32
            rounded-full
            blur-3xl
            opacity-20
            bg-gradient-to-br
            ${item.color}
          `}
        />

        <div className="relative z-10 flex justify-between items-start">

          <div>

            <p className="text-slate-400 text-sm">
              {item.title}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-white">
              {item.value}
            </h2>

            <p className="mt-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">
              {item.change}
            </p>

          </div>

          <div
            className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              ${item.color}
              shadow-xl
              transition-transform
              duration-500
              group-hover:rotate-12
              group-hover:scale-110
            `}
          >
            <Icon size={30} className="text-white" />
          </div>

        </div>

      </div>

    );

  })}

</div>

      {/* CHART + SIDE CARD */}
      <div className="grid xl:grid-cols-3 gap-6">

        {/* CHART */}
        <div
          className="
          xl:col-span-2
          bg-blue-950
          border border-[#D4AF37]/20
          rounded-3xl
          p-6
        "
         style={{ marginTop: "10px", padding: "20px" }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Revenue Trend (Last 6 Months)
          </h2>

          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient
                    id="goldRevenue"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#0e162c"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="100%"
                      stopColor="#0e162c"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="#222" />

                <XAxis
                  dataKey="month"
                  stroke="#999"
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#D4AF37"
                  fill="url(#goldRevenue)"
                  strokeWidth={4}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div
          className="
          bg-[#111827]
          border border-[#D4AF37]/20
          rounded-3xl
          p-6
          flex flex-col
          justify-between
        "
         style={{ marginTop: "10px", padding: "20px" }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white">
              Todays Summary
            </h3>

            <div className="space-y-5 mt-8">

              <div>
                <p className="text-white/50">
                  Emergency Plumbing
                </p>
                <p className="text-3xl font-bold">
                  32
                </p>
              </div>

              <div>
                <p className="text-white/50">
                  Drain Cleaning
                </p>
                <p className="text-3xl font-bold">
                  18
                </p>
              </div>

              <div>
                <p className="text-white/50">
                  Leak Detection
                </p>
                <p className="text-3xl font-bold">
                  9
                </p>
              </div>

              <div>
                <p className="text-white/50">
                  Water Heater
                </p>
                <p className="text-3xl font-bold">
                  14
                </p>
              </div>

            </div>
          </div>

          <div
            className="
mt-8
rounded-2xl
border
border-cyan-500/30
bg-gradient-to-r
from-blue-700
via-blue-600
to-cyan-500
text-white
shadow-xl
shadow-cyan-500/20
backdrop-blur-lg
transition-all
duration-300
hover:scale-[1.03]
hover:shadow-cyan-500/40
"
style={{
  padding: "20px",
}}
          >
            <p className="font-semibold text-cyan-100">
  Peak Revenue Day
</p>

<h2 className="text-3xl font-bold mt-2 text-white">
  Saturday
</h2>

<p className="mt-2 text-sm text-cyan-100">
  Highest booking volume with 42 completed plumbing jobs.
</p>
          </div>
        </div>

      </div>

    </div>
  );
}