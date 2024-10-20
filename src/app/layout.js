"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import { useEffect } from "react";

const humane = localFont({
  src: [
    {
      path: "./fonts/Humane-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Humane-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Humane-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Humane-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-humane", // Definišeš jednu promenljivu za sve težine
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi", // Definišeš jednu promenljivu za sve težine
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleLoad = () => {
      const fadeUpElements = document.querySelectorAll(".showOnLoad.showFadeUp");
      fadeUpElements.forEach((element) => {
        element.classList.add("fadeUp");
      });

      const fadeLeftElements = document.querySelectorAll(".showOnLoad.showFadeLeft");
      fadeLeftElements.forEach((element) => {
        element.classList.add("fadeLeft");
      });
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${humane.variable} ${satoshi.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
