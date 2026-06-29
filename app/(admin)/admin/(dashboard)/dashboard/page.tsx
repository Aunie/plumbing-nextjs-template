"use client";

import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4100 },
  { month: "Mar", revenue: 5200 },
  { month: "Apr", revenue: 4700 },
  { month: "May", revenue: 6900 },
  { month: "Jun", revenue: 8100 },
];

export default function Dashboard() {
  return (
    <div className="space-y-10"     style={{ marginTop: "10px", padding: "30px" }}>

      {/* HEADER */}
      <div>
        <h1 className="text-5xl font-bold text-[#D4AF37]">
          Dashboard
        </h1>

        <p className="text-white/50 mt-2 text-lg">
          Welcome back to Royal Barber Administration
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div
          className="
          p-6
          rounded-3xl
          bg-gradient-to-br
          from-[#D4AF37]
          to-[#B8860B]
          text-black
          shadow-xl
          hover:scale-105
          transition-all
          duration-300
        "
        >
          <p className="text-sm font-semibold uppercase text-center">
            Todays Revenue
          </p>

          <h2 className="text-5xl font-bold mt-4 text-center">
            $1,250
          </h2>

          <p className="mt-3 text-black/70 ">
            +18% from yesterday
          </p>
        </div>

        <div
          className="
          p-6
          rounded-3xl
          bg-gradient-to-br
          from-[#2563EB]
          to-[#1E40AF]
          text-white
          shadow-xl
          hover:scale-105
          transition-all
          duration-300
        "
        >
          <p className="text-white/60">
            Total Bookings
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            486
          </h2>

          <p className="text-green-400 mt-3">
            +42 this week
          </p>
        </div>

        <div
          className="
          p-6
          rounded-3xl
          bg-gradient-to-br
          from-[#7C3AED]
          to-[#5B21B6]
          text-white
          shadow-xl
          hover:scale-105
          transition-all
          duration-300
        "
        >
          <p className="text-white/60">
            Total Reviews
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            328
          </h2>

          <p className="text-yellow-400 mt-3">
            4.9 ★ Rating
          </p>
        </div>

        <div
          className="
          p-6
          rounded-3xl
          bg-gradient-to-br
          from-[#10B981]
          to-[#047857]
          text-white
          shadow-xl
          hover:scale-105
          transition-all
          duration-300
        "
        >
          <p className="text-white/60">
            Monthly Revenue
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            $8,100
          </h2>

          <p className="text-green-400 mt-3">
            +22% growth
          </p>
        </div>

      </div>

      {/* CHART + SIDE CARD */}
      <div className="grid xl:grid-cols-3 gap-6">

        {/* CHART */}
        <div
          className="
          xl:col-span-2
          bg-[#111827]
          border border-[#D4AF37]/20
          rounded-3xl
          p-6
        "
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
                      stopColor="#D4AF37"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="100%"
                      stopColor="#D4AF37"
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
        >
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37]">
              Todays Summary
            </h3>

            <div className="space-y-5 mt-8">

              <div>
                <p className="text-white/50">
                  Haircuts
                </p>
                <p className="text-3xl font-bold">
                  32
                </p>
              </div>

              <div>
                <p className="text-white/50">
                  Beard Styling
                </p>
                <p className="text-3xl font-bold">
                  18
                </p>
              </div>

              <div>
                <p className="text-white/50">
                  Hair Coloring
                </p>
                <p className="text-3xl font-bold">
                  9
                </p>
              </div>

              <div>
                <p className="text-white/50">
                  New Customers
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
            p-5
            bg-gradient-to-r
            from-[#D4AF37]
            to-[#B8860B]
            text-black
          "
          >
            <p className="font-semibold">
              Peak Revenue Day
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Saturday
            </h2>
          </div>
        </div>

      </div>

    </div>
  );
}