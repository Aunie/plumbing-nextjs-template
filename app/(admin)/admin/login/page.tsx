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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-cyan-950/90" />

      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="
        relative
        z-10
        w-full
        max-w-lg
        rounded-3xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        px-14
        py-16
        "
      >
        {/* Logo */}

        <div className="flex justify-center">
          <div
            className="
            w-28
            h-28
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400
            flex
            items-center
            justify-center
            text-6xl
            shadow-[0_0_35px_rgba(34,211,238,0.3)]
            "
          >
            🔧
          </div>
        </div>

        {/* Heading */}

        <div className="text-center mt-6">
          <h1 className="text-5xl font-extrabold tracking-wide text-white">
            Prime Plumbing
          </h1>

          <p className="text-cyan-300 mt-3 text-base tracking-[4px] uppercase">
            Admin Control Panel
          </p>
        </div>

        {/* Username */}

        <div className="mt-10">
          <label className="block text-white text-lg mb-4 font-semibold" style={{
  margin: "10px",
}}>
            Username
          </label>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="
            w-full
            max-w-[475px]
            mx-auto
            block
            rounded-xl
            border
            border-white/10
            bg-black/30
            px-6
            py-5
            text-lg
            text-white
            placeholder:text-gray-400
            outline-none
            transition
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/40
            placeholder:text-base
            "
                      style={{
  padding: "10px", margin: "10px"
}}
          />
        </div>

        {/* Password */}

        <div className="mt-10">
          <label className="block text-white/80 mb-3 font-medium" style={{
  margin: "10px",
}}>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
            w-full
            max-w-[475px]
            mx-auto
            block
            rounded-xl
            border
            border-white/10
            bg-black/30
            px-5
            py-4
            text-white
            placeholder:text-gray-400
            outline-none
            transition
            duration-300
            focus:border-cyan-400
            focus:ring-2
            focus:ring-cyan-500/40
            "
            style={{
  padding: "10px", margin: "10"
}}
          />
        </div>

        {/* Button */}

        <div className="flex justify-center mt-20" style={{
  padding: "20px",
}}>
  <button
    type="submit"
    className="
    w-20
    py-4
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    text-white
    font-bold
    text-lg
    hover:scale-105
    transition-all
    duration-300
    hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
    "
  >
    Login
  </button>
</div>

        {/* Footer */}

        <div className="text-center mt-10 text-white/50 text-sm">
          © 2026 Prime Plumbing. All Rights Reserved.
        </div>
      </form>
    </section>
  );
}