"use client";

import { useMemo, useState } from "react";
import toast from "react-hot-toast";


interface Booking {
  id: number;
  customerName: string;
  address: string;
  contact: string;
  service: string;
  revenue: number;
  status: string;
}

const initialBookings: Booking[] = [
  {
    id: 1,
    customerName: "John Smith",
    address: "123 Maple Street, New York",
    contact: "+1 555-1001",
    service: "Pipe Leak Repair",
    revenue: 120,
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Michael Brown",
    address: "45 Oak Avenue, Chicago",
    contact: "+1 555-1002",
    service: "Drain Cleaning",
    revenue: 95,
    status: "Completed",
  },
  {
    id: 3,
    customerName: "Emma Wilson",
    address: "89 Pine Road, Houston",
    contact: "+1 555-1003",
    service: "Water Heater Installation",
    revenue: 450,
    status: "Pending",
  },
  {
    id: 4,
    customerName: "Daniel Johnson",
    address: "17 Cedar Lane, Dallas",
    contact: "+1 555-1004",
    service: "Bathroom Plumbing",
    revenue: 180,
    status: "Cancelled",
  },
  {
    id: 5,
    customerName: "Olivia Taylor",
    address: "222 Elm Street, Phoenix",
    contact: "+1 555-1005",
    service: "Kitchen Plumbing",
    revenue: 250,
    status: "Completed",
  },
  {
    id: 6,
    customerName: "William Davis",
    address: "78 Birch Drive, Miami",
    contact: "+1 555-1006",
    service: "Pipe Replacement",
    revenue: 320,
    status: "Pending",
  },
  {
    id: 7,
    customerName: "Sophia Moore",
    address: "91 Walnut Street, Seattle",
    contact: "+1 555-1007",
    service: "Water Heater Installation",
    revenue: 480,
    status: "Completed",
  },
  {
    id: 8,
    customerName: "James Clark",
    address: "55 Lake View, Denver",
    contact: "+1 555-1008",
    service: "Faucet Repair",
    revenue: 85,
    status: "Pending",
  },
  {
    id: 9,
    customerName: "Charlotte Hall",
    address: "310 River Road, Boston",
    contact: "+1 555-1009",
    service: "Sewer Line Inspection",
    revenue: 550,
    status: "Completed",
  },
  {
    id: 10,
    customerName: "Henry Allen",
    address: "65 Hill Street, Atlanta",
    contact: "+1 555-1010",
    service: "Pipe Replacement",
    revenue: 310,
    status: "Cancelled",
  },
  {
    id: 11,
    customerName: "Noah Martin",
    address: "14 Green Park, Austin",
    contact: "+1 555-1011",
    service: "Bathroom Plumbing",
    revenue: 200,
    status: "Completed",
  },
  {
    id: 12,
    customerName: "Ava Young",
    address: "88 Sunset Blvd, San Diego",
    contact: "+1 555-1012",
    service: "Kitchen Plumbing",
    revenue: 260,
    status: "Pending",
  },
  {
    id: 13,
    customerName: "Ethan White",
    address: "19 Rose Street, Orlando",
    contact: "+1 555-1013",
    service: "Drain Cleaning",
    revenue: 100,
    status: "Completed",
  },
  {
    id: 14,
    customerName: "Mia Lewis",
    address: "27 Palm Avenue, Las Vegas",
    contact: "+1 555-1014",
    service: "Water Heater Installation",
    revenue: 470,
    status: "Pending",
  },
  {
    id: 15,
    customerName: "Lucas Walker",
    address: "9 King Street, San Francisco",
    contact: "+1 555-1015",
    service: "Pipe Leak Repair",
    revenue: 140,
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
      return `
        bg-green-500/15
        text-green-400
        border-green-500/30
        shadow-green-500/20
      `;

    case "Cancelled":
      return `
        bg-red-500/15
        text-red-400
        border-red-500/30
        shadow-red-500/20
      `;

    default:
      return `
        bg-yellow-500/15
        text-yellow-400
        border-yellow-500/30
        shadow-yellow-500/20
      `;
  }
};

  return (
    <div className="max-w-[1700px] mx-auto px-4 xl:px-8 space-y-10" style={{ marginTop: "10px", padding: "20px" }}>
      <div>
        <h1 className="text-5xl font-bold text-cyan-400">
          Service Requests
        </h1>

        <p className="text-slate-400 mt-2">
          View and manage all plumbing service requests.
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
        {/* TOTAL BOOKINGS */}
        <div
          className="
      rounded-3xl
      p-6
      bg-gradient-to-br
      from-blue-700
    to-cyan-500
    text-white
      shadow-xl
      hover:scale-[1.03]
      transition-all
      duration-300
    "
          style={{ marginTop: "10px", padding: "10px" }}
        >
          <p className="uppercase text-sm font-semibold">Total Requests</p>

          <h2 className="text-5xl font-bold mt-4">152</h2>

          <p className="mt-3 text-black/70">+18 new requests this week</p>
        </div>

        {/* PENDING BOOKINGS */}
        <div
          className="
      rounded-3xl
      p-6
      bg-gradient-to-br
      from-amber-500
to-orange-600
      text-white
      shadow-xl
      hover:scale-[1.03]
      transition-all
      duration-300
    "
          style={{ marginTop: "10px", padding: "10px" }}
        >
          <p className="uppercase text-sm font-semibold">Pending Jobs</p>

          <h2 className="text-5xl font-bold mt-4">28</h2>

          <p className="mt-3 text-white/80">Waiting for plumber assignment</p>
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
          style={{ marginTop: "10px", padding: "10px" }}
        >
          <p className="uppercase text-sm font-semibold">Completed Jobs</p>

          <h2 className="text-5xl font-bold mt-4">124</h2>

          <p className="mt-3 text-white/80">Successfully completed Services</p>
        </div>
      </div>

      {/* FILTERS */}
      <div
        className="
    bg-slate-900/70
border border-cyan-500/20
    rounded-3xl
    p-6
    flex flex-wrap
    items-center
    gap-5
  "
        style={{ marginTop: "10px", padding: "10px" }}
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
      focus:border-cyan-400
focus:ring-2
focus:ring-cyan-500/30
      outline-none
    "
          style={{ marginTop: "10px", padding: "10px" }}
        />


      </div>

      {/* TABLE */}
      <div
        className="
    rounded-[36px]
    bg-slate-900/70
    p-8
    border border-cyan-500/20
    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
    overflow-hidden
  "
        style={{ marginTop: "10px", padding: "10px", textAlign: "center" }}
      >
        <div
          className="
          overflow-hidden
          rounded-3xl
          border border-cyan-500/20
          bg-slate-900/70
        "
        >
          <table className="w-full border-collapse">
            <thead className="bg-slate-950 border-b border-cyan-500/30">
              <tr className="border-b border-white/10">
                <th className="
px-6
py-5
text-center
text-sm
uppercase
tracking-wider
text-cyan-400
font-bold
border
border-cyan-500/20
">
                  Customer
                </th>
                <th className="
px-6
py-5
text-center
text-sm
uppercase
tracking-wider
text-cyan-400
font-bold
border
border-cyan-500/20
">
                  Address
                </th>
                <th className="
px-6
py-5
text-center
text-sm
uppercase
tracking-wider
text-cyan-400
font-bold
border
border-cyan-500/20
">
                  Contact #
                </th>
                <th className="
px-6
py-5
text-center
text-sm
uppercase
tracking-wider
text-cyan-400
font-bold
border
border-cyan-500/20
">
                  Service
                </th>
                <th className="
px-6
py-5
text-center
text-sm
uppercase
tracking-wider
text-cyan-400
font-bold
border
border-cyan-500/20
">
                  Revenue
                </th>
                <th className="
px-6
py-5
text-center
text-sm
uppercase
tracking-wider
text-cyan-400
font-bold
border
border-cyan-500/20
">
                  Status
                </th>
                <th className="
px-6
py-5
text-center
text-sm
uppercase
tracking-wider
text-cyan-400
font-bold
border
border-cyan-500/20
">
                  Change Status
                </th>
              </tr>
            </thead>

            <tbody>
              {paginatedBookings.map((booking) => (
                <tr
  key={booking.id}
  className="
  border-b
  border-cyan-500/10
  hover:bg-cyan-500/5
  transition-all
  duration-300
"
>
                  <td className="p-8 py-7 font-medium">
                    {booking.customerName}
                  </td>

                  <td className="p-8 py-7">{booking.address}</td>
                  <td className="p-8 py-7">{booking.contact}</td>

                  <td className="p-8 py-7">{booking.service}</td>

                  <td className="p-8 py-7 text-cyan-400 font-bold">
                    ${booking.revenue}
                  </td>

                  <td className="p-8 py-7" style={{ marginTop: "10px", padding: "10px" }}>
                    <span
  className={`
    inline-flex
    items-center
    justify-center
    min-w-[120px]
    px-5
    py-2.5
    rounded-full
    border
    text-sm
    font-semibold
    tracking-wide
    shadow-lg
    transition-all
    duration-300
    ${statusBadge(booking.status)}
  `}
>
  <span
    className={`
      mr-2
      h-2.5
      w-2.5
      rounded-full
      ${
        booking.status === "Completed"
          ? "bg-green-400"
          : booking.status === "Cancelled"
          ? "bg-red-400"
          : "bg-yellow-400"
      }
    `}
  />
  {booking.status}
</span>
                  </td>

                  <td
  className="
  px-6
  py-5
  border
  border-cyan-500/10
"
>
  <div className="flex justify-center items-center gap-3"></div>
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



    bg-gradient-to-r
    from-blue-600
via-blue-500
to-cyan-500

text-white

    shadow-lg
    shadow-cyan-500/20

    transition-all
    duration-300

    hover:scale-105
    hover:shadow-[0_10px_30px_rgba(6,182,212,0.45)]

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
      bg-slate-900/70
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
      bg-slate-900/70
      border border-cyan-500/20
      text-cyan-400
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
      bg-slate-900/70
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
