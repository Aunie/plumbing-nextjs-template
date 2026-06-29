"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

const timeSlots = [
  { label: "10:00 AM - 11:00 AM", booked: false },
  { label: "11:00 AM - 12:00 PM", booked: true },
  { label: "12:00 PM - 1:00 PM", booked: false },
  { label: "1:00 PM - 2:00 PM", booked: true },
  { label: "2:00 PM - 3:00 PM", booked: false },
  { label: "3:00 PM - 4:00 PM", booked: false },
  { label: "4:00 PM - 5:00 PM", booked: false },
];

export default function ProductDetail({ product }: Props) {
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [serviceNote, setServiceNote] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [openCalendar, setOpenCalendar] = useState(false);

  const today = new Date();
  // generate next 7 days
const dates = Array.from({ length: 7 }).map((_, i) => {
  const d = new Date();
  d.setDate(today.getDate() + i);

  return {
    label: d.toDateString(),
    day: d.toLocaleDateString("en-US", { weekday: "short" }),
    date: d.getDate(),
    full: d,
  };
});

  const handleConfirm = () => {
    toast((t) => (
      <div className="text-white bg-slate-900 p-5 rounded-xl border border-[#D4AF37]/30 shadow-xl min-w-[340px]">
        <p className="font-bold text-lg text-cyan-400 mb-3">
          Confirm Booking?
        </p>

        <div className="text-sm space-y-2 leading-relaxed">

  <p>
    <b>Service:</b> {product.name}
  </p>

  <p>
    <b>Customer:</b> {name}
  </p>

  <p>
    <b>Email:</b> {email}
  </p>

  <p>
    <b>Phone:</b> +1 {phone}
  </p>

  <p>
    <b>City:</b> {city}
  </p>

  <p>
    <b>Address:</b> {address}
  </p>

  <p>
    <b>Date:</b> {date}
  </p>

  <p>
    <b>Time:</b> {time}
  </p>

  {serviceNote && (
    <p>
      <b>Problem:</b> {serviceNote}
    </p>
  )}

</div>

        <div className="flex gap-3 mt-5">
          <button
  onClick={() => {
    toast.dismiss(t.id);

    toast.success(
      `🔧 Service Request Confirmed!

${product.name}

${name}

${date}

${time}`,
      {
        duration: 5000,
        style: {
          background: "#0f172a",
          color: "#22d3ee",
          fontSize: "14px",
          padding: "14px",
          border: "1px solid #06b6d4",
          borderRadius: "12px",
          whiteSpace: "pre-line",
        },
      }
    );
  }}
  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
>
  Yes
</button>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  

  return (
    <section className="min-h-screen py-24 bg-[#0B0F19] text-white">
      <div className="container pt-20 pb-10 text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold" style={{ marginTop: "24px", padding: "10px" }}>
            Book Service Page
          </span>

          <h1
            className="
              mt-5
              text-5xl
              md:text-6xl
              font-display
              font-extrabold
              text-white
            "
          >
            Professional Plumbing Services
          </h1>

          <div className="title-divider mt-6" />

        </div>
      <div className="container grid md:grid-cols-2 gap-14 items-start">
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            className="w-[450px] rounded-3xl border border-cyan-500/20"
          />
        </div>

        {/* FORM */}
        <div className="bg-slate-900 p-10 rounded-3xl border border-cyan-500/20" style={{ padding: "20px" }}>
          <h1 className="text-4xl font-bold text-cyan-400">{product.name}</h1>

          <p className="text-white/60 mt-2">{product.description}</p>

          <p className="text-2xl mt-4 font-bold">${product.price}</p>

          {/* NAME */}
          <label className="text-lg mt-6 block">Customer Name</label>
          <input
            className="w-full p-3 mt-2 bg-[#0B0F19] rounded-xl border border-white/10" style={{ marginTop: "10px", padding: "10px" }}
            value={name}
            onChange={(e) => {
              const val = e.target.value;
              if (/^[a-zA-Z\s]*$/.test(val)) {
                setName(val);
              }
            }}
            placeholder="Enter your name"
          />

          {/* PHONE */}
          <label className="text-lg mt-6 block">Contact Number</label>

          <div className="flex mt-2 items-center bg-[#0B0F19] rounded-xl border border-white/10 overflow-hidden">
            {/* +1 circle */}
            <div className="flex items-center gap-2 px-3 border-r border-white/10">
              <span className="text-lg">🇺🇸</span>

              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#D4AF37] text-black font-bold text-xs">
                +1
              </span>
            </div>

            <input
              className="w-full p-3 bg-transparent outline-none" style={{ marginTop: "10px", padding: "10px" }}
              value={phone}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, ""); // only numbers
                setPhone(val);
              }}
              placeholder="Phone number"
              maxLength={10}
            />
          </div>

          {/* EMAIL */}
          <label className="text-lg mt-6 block">Email Address</label>

          <input
            className="w-full p-3 mt-2 bg-[#0B0F19] rounded-xl border border-white/10" style={{ marginTop: "10px", padding: "10px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        { /* City*/}

              <label className="text-lg mt-6 block">
City
</label>

<input
  className="w-full p-3 mt-2 bg-slate-900 rounded-xl border border-cyan-500/20 focus:border-cyan-400 outline-none" style={{ marginTop: "10px", padding: "10px" }}
  value={city}
  onChange={(e) => setCity(e.target.value)}
  placeholder="New York"
/>
         { /* Address */}

         <label className="text-lg mt-6 block">
Service Address
</label>

<textarea
  rows={3}
  className="w-full p-3 mt-2 bg-slate-900 rounded-xl border border-cyan-500/20 focus:border-cyan-400 outline-none resize-none" style={{ marginTop: "10px", padding: "10px" }}
  value={address}
  onChange={(e) => setAddress(e.target.value)}
  placeholder="Street Address"
/>
        {/* Problem */}

        <label className="text-lg mt-6 block">
Describe the Plumbing Issue
</label>

<textarea
  rows={4}
  className="w-full p-3 mt-2 bg-slate-900 rounded-xl border border-cyan-500/20 focus:border-cyan-400 outline-none resize-none" style={{ marginTop: "10px", padding: "10px" }}
  value={serviceNote}
  onChange={(e) => setServiceNote(e.target.value)}
  placeholder="Leak, clogged drain, broken pipe, water heater issue..."
/>
         {/* DATE */}
<label className="text-lg mt-6 block">Select Date</label>

<button
  onClick={() => setOpenCalendar(!openCalendar)}
  className="w-full mt-2 p-3 bg-[#0B0F19] border border-white/10 rounded-xl hover:border-cyan-400 transition"
>
  {date || "Select Date (Next 7 Days)"}
</button>

{/* CALENDAR UI */}
{openCalendar && (
  <div className="mt-4 p-4 rounded-2xl bg-[#0B0F19] border border-[#D4AF37]/30 shadow-lg animate-fadeIn">

    <div className="grid grid-cols-4 gap-2" style={{ marginTop: "10px", padding: "10px" }}>
      {dates.map((d, i) => {
        const isSelected = date === d.label;

        return (
          <button
            key={i}
            onClick={() => {
              setDate(d.label);
              setOpenCalendar(false);
            }}
            className={`
              p-3 rounded-xl border text-center transition-all
              ${
                isSelected
                  ? "bg-[#D4AF37] text-black font-bold"
                  : "bg-transparent text-white/70 border-white/10 hover:border-cyan-400"
              }
            `}
          >
            <div className="text-xs">{d.day}</div>
            <div className="text-lg font-semibold">{d.date}</div>
          </button>
        );
      })}
    </div>

    <p className="text-xs text-white/40 mt-3 text-center">
      Only next 7 days are available for booking
    </p>
  </div>
)}

          {/* TIME */}
          <label className="text-lg mt-6 block">Available Slots</label>

          <div className="grid grid-cols-2 gap-2 mt-2">
            {timeSlots.map((slot) => {
              const isBooked = slot.booked;

              return (
                <button
                  key={slot.label}
                  disabled={isBooked}
                  onClick={() => {
                    if (!isBooked) setTime(slot.label);
                  }}
                  className={`
          p-3 rounded-lg border text-sm transition-all

          ${
            isBooked
              ? "bg-red-500/20 text-red-400 cursor-not-allowed opacity-60"
              : time === slot.label
                ? "bg-green-500 text-black font-bold border-green-400"
                : "bg-[#0B0F19] border-green-500/40 text-green-400 hover:border-green-400"
          }
        `}
                >
                  {slot.label}

                  {isBooked && (
                    <span className="block text-xs text-red-400 font-semibold">
                      BOOKED
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-14">
  <button
    onClick={handleConfirm}
    className="
      px-8
      py-4
      rounded-full
      bg-gradient-to-r
      from-blue-600
      to-cyan-500
      text-white
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      shadow-lg
      shadow-cyan-500/30
    "
    style={{ marginTop: "10px", padding: "10px" }}
  >
    Confirm Booking
  </button>
</div>
        </div>
      </div>
    </section>
  );
}
