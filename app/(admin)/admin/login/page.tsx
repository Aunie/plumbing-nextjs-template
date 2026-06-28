"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Login Successful");
      router.push("/admin/dashboard");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
    "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
        absolute inset-0
        bg-cover bg-center
      "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        className="
        absolute inset-0
        bg-black/75
        backdrop-blur-[2px]
      "
      />

      {/* GLOW EFFECT */}
      <div
        className="
       absolute
  w-[600px]
  h-[600px]
  rounded-full
  bg-[#D4AF37]/10
  blur-[140px]
  animate-pulse
      "
      />

      {/* LOGIN CARD */}
      <form
        onSubmit={handleLogin}
        className="
          relative z-10
          w-full max-w-md
          p-10
          rounded-3xl
          border border-[#D4AF37]/20
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_50px_rgba(212,175,55,0.15)]
          animate-fadeIn
        "
      >
        {/* LOGO */}
        <div className="text-center">
          <div
            className="
            w-20 h-20
            mx-auto
            rounded-full
            border-2 border-[#D4AF37]
            flex items-center justify-center
            text-3xl
            mb-4
          "
          >
            ✂️
          </div>

          <h1
            className="
            text-4xl
            font-bold
            text-[#D4AF37]
          "
          >
            Royal Barber
          </h1>

          <p className="text-white/60 mt-2">Admin Dashboard Access</p>
        </div>

        {/* USERNAME */}
        <label className="block mb-3 text-white/80 text-sm font-medium tracking-wide">
          Username
        </label>

        <input
          className="
    w-full
    p-4
    rounded-xl
    bg-black/30
    border border-white/10
    text-white
    outline-none
    transition-all
    duration-300
    focus:border-[#D4AF37]
    focus:ring-2
    focus:ring-[#D4AF37]/30
    pb-7
    mb-7
  "
   value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Enter Username"
        />

        {/* PASSWORD */}
        <div className="mt-7">
          <label className="block mb-3 text-white/80 text-sm font-medium tracking-wide">
          Password
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
             w-full
    p-4
    rounded-xl
    bg-black/30
    border border-white/10
    text-white
    outline-none
    transition-all
    duration-300
    focus:border-[#D4AF37]
    focus:ring-2
    focus:ring-[#D4AF37]/30
            "
          />
        </div>

        {/* LOGIN BUTTON */}
       <div className="flex justify-center mt-10">
  <button
    type="submit"
    className="
      min-w-[180px]
      px-8
      py-3.5
      rounded-xl
      font-bold
      text-black
      bg-[#D4AF37]
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]
      transition-all
      duration-300
    "
  >
    Login
  </button>
</div>

        <p className="text-center text-white/40 text-xs mt-6">
          Royal Barber Administration Portal
        </p>
      </form>
    </section>
  );
}
