import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import FloatingSidebar from "@/components/global/FloatingSidebar"; // 1. Import it
import "./globals.css";
import CrispChat from "@/components/global/CrispChat";
import { ModalProvider } from "@/context/ModalContext";
import localFont from "next/font/local";

const gilroy = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Penguin Book Publishers | Premium Book Services",
  description: "End-to-end professional book writing, editing, and publishing solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${gilroy.className} bg-slate-50 antialiased flex flex-col min-h-screen text-slate-800 relative`}>
        <ModalProvider>
          <CrispChat />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          
          <FloatingSidebar /> {/* 2. Use it here */}
        </ModalProvider>
      </body>
    </html>
  );
}