import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "./providers/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FlowFix Plumbing | 24/7 Emergency Plumbing Services",
  description:
    "Professional residential and commercial plumbing services including leak detection, drain cleaning, water heater installation and emergency repairs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${manrope.variable}
        ${inter.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-screen">
        {children}
         {/* ✅ GLOBAL TOAST LAYER */}
        <ToastProvider />
      </body>
    </html>
  );
}