import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Viola Bergere",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <GradientBackground />
        <Navbar />
        <main className="p-3">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
