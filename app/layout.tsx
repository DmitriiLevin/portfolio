import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="antialiased font-sans bg-background text-foreground">
        <div style={{ maxWidth: "1136px", margin: "0 auto", padding: "0 max(20px, 32px)" }} className="relative z-20 bg-background">
          <Navbar />
        </div>
        <main className="overflow-x-hidden">{children}</main>
        <div style={{ maxWidth: "1136px", margin: "0 auto", padding: "0 32px" }}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
