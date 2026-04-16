import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dmytro Levin",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body
        className="antialiased font-sans bg-background text-foreground"
      >
        <div
          style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 48px" }}
          className="relative z-20 bg-background"
        >
          <Navbar />
        </div>
        <main className="overflow-x-hidden">{children}</main>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 48px" }}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
