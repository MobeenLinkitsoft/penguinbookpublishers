"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronDown, ArrowRight, Phone } from "lucide-react";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Updated to include exact URLs for every service
  const servicesList = [
    { title: "Book Writing", href: "/services/book-writing" },
    { title: "eBook Writing & Publishing", href: "/services/ebook-writing" },
    { title: "Book Editing & Proofreading", href: "/services/proofreading" },
    { title: "Book Cover Design", href: "/services/cover-design" },
    { title: "Book Illustrations", href: "/services/book-illustration" },
    { title: "Book Printing", href: "/services/book-printing" },
    { title: "Book Marketing", href: "/services/book-marketing" },
    { title: "Author's Website", href: "/services/authors-website" },
    { title: "Amazon Publishing", href: "/services/amazon-publishing" },
    { title: "Article Writing", href: "/services/article-writing" },
    { title: "Book Trailer Services", href: "/services/book-trailer" },
    { title: "Kindle Vella", href: "/services/kindle-vella" }
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center">
            <BookOpen className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl leading-none tracking-tight">PENGUIN</span>
            <span className="text-slate-300 text-[10px] tracking-widest uppercase mt-1">Self Publishing</span>
          </div>
        </Link>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-white text-sm font-medium hover:text-orange-500 transition">Home</Link>
          <Link href="/about" className="text-white text-sm font-medium hover:text-orange-500 transition">About Us</Link>
          
          {/* Complex Services Dropdown */}
          <div 
            className="relative py-8"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-white text-sm font-medium hover:text-orange-500 transition outline-none">
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-[80px] left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-2xl border border-slate-100 transition-all duration-200 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
              <div className="p-6 grid grid-cols-2 gap-x-8 gap-y-4">
                {servicesList.map((service, idx) => (
                  <Link key={idx} href={service.href} className="flex items-center gap-3 text-sm text-slate-600 hover:text-orange-600 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-orange-600 transition" />
                    {service.title}
                  </Link>
                ))}
              </div>
              <div className="bg-slate-50 p-4 rounded-b-xl border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Need custom assistance?</span>
                <Link href="/contact" className="text-sm font-bold text-orange-600 flex items-center gap-1 hover:gap-2 transition-all">Talk to an expert <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="text-white text-sm font-medium hover:text-orange-500 transition">Portfolio</Link>
          <Link href="/testimonials" className="text-white text-sm font-medium hover:text-orange-500 transition">Testimonials</Link>
          <Link href="/contact" className="text-white text-sm font-medium hover:text-orange-500 transition">Contact Us</Link>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          <a href="tel:18000000000" className="hidden md:flex items-center gap-2 text-white font-bold hover:text-orange-400 transition">
            <Phone size={18} /> 1-800-000-0000
          </a>
          <Link href="/contact" className="bg-orange-600 text-white px-6 py-2.5 rounded text-sm font-bold uppercase tracking-wider hover:bg-orange-700 transition shadow-lg shadow-orange-600/20">
            Get A Quote
          </Link>
        </div>
      </div>
    </header>
  );
}