import type { ReactNode } from "react";
import Navbar from "../../components/nav/navbar";
import Footer from "../../components/nav/Footer";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}