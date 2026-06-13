import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { MessageCircle, Phone, Mail } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Penguin Self Publishing | Premium Book Services",
  description: "End-to-end professional book writing, editing, and publishing solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen text-slate-800 font-sans relative">
        <Navbar />
        
        <main className="flex-grow">{children}</main>
        
        <Footer />

        {/* ================= FLOATING RIGHT SIDEBAR (Global) ================= */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-2xl rounded-l-md overflow-hidden">
          <button className="bg-orange-600 text-white p-3 hover:bg-orange-700 transition flex flex-col items-center justify-center gap-1 group">
            <MessageCircle size={20} className="group-hover:scale-110 transition" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden md:block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Live Chat</span>
          </button>
          <a href="tel:18000000000" className="bg-slate-900 text-white p-3 hover:bg-slate-800 transition flex flex-col items-center justify-center gap-1 group border-y border-slate-700">
            <Phone size={20} className="group-hover:scale-110 transition" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden md:block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Call Now</span>
          </a>
          <a href="mailto:info@penguinselfpublishing.com" className="bg-orange-600 text-white p-3 hover:bg-orange-700 transition flex flex-col items-center justify-center gap-1 group">
            <Mail size={20} className="group-hover:scale-110 transition" />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden md:block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Email Us</span>
          </a>
        </div>
      </body>
    </html>
  );
}