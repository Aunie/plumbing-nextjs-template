
import ToastProvider from "../providers/ToastProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />

      <ToastProvider />
    </>
  );
}