import Link from "next/link";
import {
  Wrench,
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.08),transparent_40%)]" />

      {/* Top Border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="container relative z-10 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-display font-extrabold text-white">
              Aqua<span className="text-cyan-400">Flow</span>
            </h2>

            <p className="mt-6 text-slate-300 leading-8">
              Trusted plumbing professionals providing residential and
              commercial plumbing services with fast response and guaranteed
              workmanship.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Our Services
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-cyan-400" />
                Leak Detection
              </li>

              <li className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-cyan-400" />
                Drain Cleaning
              </li>

              <li className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-cyan-400" />
                Water Heater Repair
              </li>

              <li className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-cyan-400" />
                Pipe Installation
              </li>

              <li className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-cyan-400" />
                Emergency Plumbing
              </li>

            </ul>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link href="/" className="text-slate-300 hover:text-cyan-400 transition">
                Home
              </Link>

              <Link href="/booking" className="text-slate-300 hover:text-cyan-400 transition">
                Services
              </Link>

              <Link href="/projects" className="text-slate-300 hover:text-cyan-400 transition">
                Projects
              </Link>

              <Link href="/about" className="text-slate-300 hover:text-cyan-400 transition">
                About Us
              </Link>

              <Link href="/contact" className="text-slate-300 hover:text-cyan-400 transition">
                Contact
              </Link>

            </div>

            <div className="flex gap-5 mt-8">

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-blue-900 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaFacebookF className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-blue-900 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-slate-300">

              <div className="flex gap-3">
                <Phone className="text-cyan-400 mt-1 w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-cyan-400 mt-1 w-5 h-5" />
                <span>info@aquaflowplumbing.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-cyan-400 mt-1 w-5 h-5" />
                <span>New York, United States</span>
              </div>

              <div className="flex gap-3">
                <Clock3 className="text-cyan-400 mt-1 w-5 h-5" />
                <span>24/7 Emergency Service</span>
              </div>

            </div>

            {/* Map */}

            <div className="mt-8 overflow-hidden rounded-2xl border border-cyan-500/20">

              <iframe
                title="Location"
                width="100%"
                height="180"
                loading="lazy"
                src="https://www.google.com/maps?q=40.7128,-74.0060&z=13&output=embed"
              />

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm">
            © 2026 AquaFlow Plumbing. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-sm">

            <Link
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}