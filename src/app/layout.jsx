import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GradientBackground from "@/components/GradientBackground";
import BackToTopButton from '@/components/BackToTopButton'
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Viola Bergere",
  },
  description: "Passionate about crafting innovative, user-friendly applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={`${montserrat.className} h-full relative`}>
        <GradientBackground />
        <GoogleAnalytics />
        <Navbar />
        <main className="flex min-h-screen items-center justify-center p-3">{children}</main>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
