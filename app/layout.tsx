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
        <div style={{ maxWidth: "1136px", margin: "0 auto", padding: "0 32px" }}>
          <Navbar />
        </div>
        <main>{children}</main>
        <div style={{ maxWidth: "1136px", margin: "0 auto", padding: "0 32px" }}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
