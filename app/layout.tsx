import type { Metadata } from "next";
import Container from "@/components/Container";
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
    <html lang="en">
      <body className="antialiased font-sans">
        <Container>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
