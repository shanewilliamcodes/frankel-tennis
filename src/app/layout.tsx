import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frankel Jaguars Boys Tennis",
    template: "%s · Frankel Jaguars Tennis",
  },
  description:
    "Official-style home for Frankel Jewish Academy Jaguars boys tennis — schedule, roster, stats, history, news and more. A Division 4 powerhouse from West Bloomfield, Michigan.",
  keywords: [
    "Frankel Jewish Academy",
    "Jaguars tennis",
    "boys tennis",
    "West Bloomfield",
    "Larry Stark",
    "MHSAA Division 4 tennis",
  ],
  openGraph: {
    title: "Frankel Jaguars Boys Tennis",
    description:
      "Schedule, roster, stats, history and news for Frankel Jewish Academy Jaguars boys tennis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
