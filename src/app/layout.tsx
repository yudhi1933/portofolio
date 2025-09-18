import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Yudhi – Frontend Developer",
  description: "Portfolio of Yudhi: React, Next.js, Tailwind, POS & LMS projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
