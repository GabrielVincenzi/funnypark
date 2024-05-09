import type { Metadata } from "next";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "FunnyPark",
  description: "Data to inform",
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}