"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";


interface booking{
  id: number;
  cuustomerName: string;
}
const initialBookings = [
  {
    id: 1,
    customerName: "John Smith",
    contact: "+1 555-1001",
    gender: "Male",
    service: "Classic Haircut",
    revenue: 25,
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Michael Brown",
    contact: "+1 555-1002",
    gender: "Male",
    service: "Beard Styling",
    revenue: 20,
    status: "Completed",
  },
  {
    id: 3,
    customerName: "Emma Wilson",
    contact: "+1 555-1003",
    gender: "Female",
    service: "Hair Coloring",
    revenue: 60,
    status: "Pending",
  },
  {
    id: 4,
    customerName: "Daniel Johnson",
    contact: "+1 555-1004",
    gender: "Male",
    service: "Fade Cut",
    revenue: 35,
    status: "Cancelled",
  },
  {
    id: 5,
    customerName: "Olivia Taylor",
    contact: "+1 555-1005",
    gender: "Female",
    service: "Hair Styling",
    revenue: 50,
    status: "Completed",
  },
  {
    id: 6,
    customerName: "William Davis",
    contact: "+1 555-1006",
    gender: "Male",
    service: "Haircut",
    revenue: 25,
    status: "Pending",
  },
  {
    id: 7,
    customerName: "Sophia Moore",
    contact: "+1 555-1007",
    gender: "Female",
    service: "Hair Coloring",
    revenue: 75,
    status: "Completed",
  },
  {
    id: 8,
    customerName: "James Clark",
    contact: "+1 555-1008",
    gender: "Male",
    service: "Beard Trim",
    revenue: 15,
    status: "Pending",
  },
  {
    id: 9,
    customerName: "Charlotte Hall",
    contact: "+1 555-1009",
    gender: "Female",
    service: "Premium Styling",
    revenue: 90,
    status: "Completed",
  },
  {
    id: 10,
    customerName: "Henry Allen",
    contact: "+1 555-1010",
    gender: "Male",
    service: "Haircut",
    revenue: 25,
    status: "Cancelled",
  },
  {
    id: 11,
    customerName: "Noah Martin",
    contact: "+1 555-1011",
    gender: "Male",
    service: "Fade Cut",
    revenue: 35,
    status: "Completed",
  },
  {
    id: 12,
    customerName: "Ava Young",
    contact: "+1 555-1012",
    gender: "Female",
    service: "Hair Styling",
    revenue: 55,
    status: "Pending",
  },
  {
    id: 13,
    customerName: "Ethan White",
    contact: "+1 555-1013",
    gender: "Male",
    service: "Beard Styling",
    revenue: 20,
    status: "Completed",
  },
  {
    id: 14,
    customerName: "Mia Lewis",
    contact: "+1 555-1014",
    gender: "Female",
    service: "Hair Coloring",
    revenue: 80,
    status: "Pending",
  },
  {
    id: 15,
    customerName: "Lucas Walker",
    contact: "+1 555-1015",
    gender: "Male",
    service: "Classic Haircut",
    revenue: 25,
    status: "Completed",
  },
];

export default function BookingsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedStatus, setSelectedStatus] = useState<Record<number, string>>(
    {},
  );

  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking: any) => {
      const searchMatch = booking.customerName
        .toLowerCase()
        .includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All" ? true : booking.status === statusFilter;

      return searchMatch && statusMatch;
    });
  }, [bookings, search, statusFilter]);

  const totalPages = Math.ceil(filteredBookings.length / pageSize);

  const paginatedBookings = filteredBookings.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  const updateStatus = (id: number, status: string) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status } : booking,
      ),
    );
  };

  const handleStatusChange = (
  id: number
) => {
  const newStatus =
    selectedStatus[id];

  if (!newStatus) {
    toast.error(
      "Please select a status first"
    );
    return;
  }

  setBookings((prev) =>
    prev.map((booking) =>
      booking.id === id
        ? {
            ...booking,
            status: newStatus,
          }
        : booking
    )
  );

  toast.success(
    `Booking status updated to ${newStatus}`
  );
};

  const statusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";

      case "Cancelled":
        return "bg-red-500/20 text-red-400 border-red-500/30";

      default:
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    }
  };

  return (
    <div className="max-w-[1700px] mx-auto px-4 xl:px-8 space-y-10">
      <div>
        <h1 className="text-5xl font-bold text-[#D4AF37]">Manage Bookings</h1>

        <p className="text-white/50 mt-2">
          View and manage all customer bookings.
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* TOTAL BOOKINGS */}
        <div
          className="
      rounded-3xl
      p-6
      bg-gradient-to-br
      from-[#D4AF37]
      to-[#B8860B]
      text-black
      shadow-xl
      hover:scale-[1.03]
      transition-all
      duration-300
    "
        >
          <p className="uppercase text-sm font-semibold">Total Bookings</p>

          <h2 className="text-5xl font-bold mt-4">486</h2>

          <p className="mt-3 text-black/70">+32 bookings this week</p>
        </div>

        {/* PENDING BOOKINGS */}
        <div
          className="
      rounded-3xl
      p-6
      bg-gradient-to-br
      from-orange-500
      to-red-500
      text-white
      shadow-xl
      hover:scale-[1.03]
      transition-all
      duration-300
    "
        >
          <p className="uppercase text-sm font-semibold">Pending</p>

          <h2 className="text-5xl font-bold mt-4">74</h2>

          <p className="mt-3 text-white/80">Awaiting confirmation</p>
        </div>

        {/* COMPLETED BOOKINGS */}
        <div
          className="
      rounded-3xl
      p-6
      bg-gradient-to-br
      from-emerald-500
      to-green-700
      text-white
      shadow-xl
      hover:scale-[1.03]
      transition-all
      duration-300
    "
        >
          <p className="uppercase text-sm font-semibold">Completed</p>

          <h2 className="text-5xl font-bold mt-4">392</h2>

          <p className="mt-3 text-white/80">Successfully completed</p>
        </div>
      </div>

      {/* FILTERS */}
      <div
        className="
    bg-[#111827]
    border border-[#D4AF37]/20
    rounded-3xl
    p-6
    flex flex-wrap
    items-center
    gap-5
  "
      >
        <input
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
      h-14
      px-5
      rounded-2xl
      bg-[#0B0F19]
      border border-white/10
      text-white
      w-[350px]
      focus:border-[#D4AF37]
      outline-none
    "
        />

       
      </div>

      {/* TABLE */}
      <div
        className="
    rounded-[36px]
    bg-[#111827]
    p-8
    border border-[#D4AF37]/20
    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
    overflow-hidden
  "
      >
        <div
          className="
          overflow-hidden
          rounded-3xl
          border border-[#D4AF37]/20
          bg-[#111827]
        "
        >
          <table className="w-full">
            <thead className="bg-[#0B0F19]">
              <tr className="border-b border-white/10">
                <th className="px-8 py-7 text-sm uppercase tracking-wider text-[#D4AF37] font-bold">
                  Customer
                </th>
                <th className="px-8 py-7 text-sm uppercase tracking-wider text-[#D4AF37] font-bold">
                  Gender
                </th>
                <th className="px-8 py-7 text-sm uppercase tracking-wider text-[#D4AF37] font-bold">
                  Contact #
                </th>
                <th className="px-8 py-7 text-sm uppercase tracking-wider text-[#D4AF37] font-bold">
                  Service
                </th>
                <th className="px-8 py-7 text-sm uppercase tracking-wider text-[#D4AF37] font-bold">
                  Revenue
                </th>
                <th className="px-8 py-7 text-sm uppercase tracking-wider text-[#D4AF37] font-bold">
                  Status
                </th>
                <th className="px-8 py-7 text-sm uppercase tracking-wider text-[#D4AF37] font-bold">
                  Change Status
                </th>
              </tr>
            </thead>

            <tbody>
              {paginatedBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="
                  border-b border-white/5
                  hover:bg-[#D4AF37]/5
                  hover:scale-[1.002]
                  transition-all duration-300
                "
                >
                  <td className="p-8 py-7 font-medium">
                    {booking.customerName}
                  </td>

                  <td className="p-8 py-7">{booking.gender}</td>
                  <td className="p-8 py-7">{booking.contact}</td>

                  <td className="p-8 py-7">{booking.service}</td>

                  <td className="p-8 py-7 text-[#D4AF37] font-bold">
                    ${booking.revenue}
                  </td>

                  <td className="p-8 py-7">
                    <span
                      className={`
                      px-4 py-2
                      rounded-full
                      border
                      text-sm
                      ${statusBadge(booking.status)}
                    `}
                    >
                      {booking.status}
                    </span>
                  </td>

                   <td className="flex items-center gap-3">
                    <select
          value={
            selectedStatus[booking.id] ??
            booking.status
          }
          onChange={(e) =>
            setSelectedStatus((prev) => ({
              ...prev,
              [booking.id]: e.target.value,
            }))
          }
        >
          <option className="text-black">Pending</option>
          <option className="text-black">Cancelled</option>
          <option className="text-black">Completed</option>
        </select>
         <button
  onClick={() =>
    handleStatusChange(
      booking.id
    )
  }
  className="
    cursor-pointer

    px-5
    py-2.5

    rounded-xl

    font-semibold
    text-sm
    tracking-wide

    text-black

    bg-gradient-to-r
    from-[#D4AF37]
    via-[#E5C158]
    to-[#B8860B]

    shadow-lg
    shadow-[#D4AF37]/20

    transition-all
    duration-300

    hover:scale-105
    hover:shadow-[0_10px_30px_rgba(212,175,55,0.45)]

    active:scale-95
  "
>
  Change
</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-5 pt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="
      px-6 py-3
      rounded-2xl
      bg-[#111827]
      border border-white/10
      hover:border-[#D4AF37]
      disabled:opacity-40
    "
        >
          Previous
        </button>

        <div
          className="
      px-6 py-3
      rounded-2xl
      bg-[#111827]
      border border-[#D4AF37]/20
      text-[#D4AF37]
      font-semibold
    "
        >
          Page {page} of {totalPages}
        </div>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="
      px-6 py-3
      rounded-2xl
      bg-[#111827]
      border border-white/10
      hover:border-[#D4AF37]
      disabled:opacity-40
    "
        >
          Next
        </button>
      </div>
    </div>
  );
}
