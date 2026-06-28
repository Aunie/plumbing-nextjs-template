"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#111827",
          color: "#fff",
          borderRadius: "14px",
          padding: "14px 18px",
          border: "1px solid #D4AF37",
        },
        success: {
          style: {
            background: "#0B0F19",
            color: "#D4AF37",
            border: "1px solid #D4AF37",
          },
        },
        error: {
          style: {
            background: "#1f2937",
            color: "#ef4444",
          },
        },
      }}
    />
  );
}