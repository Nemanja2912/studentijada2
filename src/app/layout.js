import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";

const humane = localFont({
  src: [
    {
      path: "./fonts/Humane-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Humane-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Humane-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Humane-Bold.otf",
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
  return (
    <html lang="en">
      <body className={`${humane.variable} ${satoshi.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
