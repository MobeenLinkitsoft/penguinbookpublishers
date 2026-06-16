"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageSquare, Phone, Mail } from "lucide-react";
import QuoteModal from "@/components/global/QuoteModal";
import { Crisp } from "crisp-sdk-web";

export default function PortfolioPage() {
  // Generates 86 items mapping to public/Book/Book1.jpg through public/Book/Book86.jpg
  const portfolioItems = Array.from({ length: 86 }).map((_, i) => ({
    id: i,
    image: `/Book/Book${i + 1}.jpg`,
    title: `Published Work ${i + 1}`,
  }));

  // Generates array for the 14 logos
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Double the array so the infinite scroll animation is completely seamless
  const seamlessLogos = [...trustLogos, ...trustLogos];

  return (
    <div className="w-full bg-white min-h-screen">
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[450px] flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* ================= AUTO-MOVING LOGO SLIDER ================= */}
      <section className="bg-orange-600 py-6 border-b border-orange-700 shadow-inner overflow-hidden">
        {/* Inline styles for the infinite marquee animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-16 pr-12 md:pr-16 opacity-90">
              {seamlessLogos.map((logoUrl, index) => (
                <div
                  key={index}
                  className="relative h-10 w-28 md:w-32 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logoUrl}
                    alt={`Partner Logo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 112px, 128px"
                    className="object-contain brightness-0 invert"
                    /* Note: 'brightness-0 invert' turns logos solid white. Remove this class if you want their original colors! */
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN PORTFOLIO GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Recent Portfolio
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We take pride in our work. Here is a glimpse of some of our recent
            publications across various genres.
          </p>
        </div>

        {/* Dense Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="aspect-[2/3] w-full bg-slate-100 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">
            Let us take your book to the next level
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest">
            We help bring your ideas to life in the form of a well-written and
            published book.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-orange-600 text-white px-10 py-3.5 rounded font-bold hover:bg-orange-700 transition shadow-md uppercase text-sm tracking-widest">
              +1 646 344 0382
            </button>
            <button
              onClick={() => Crisp.chat.open()}
              className="border-2 border-slate-800 text-slate-900 px-10 py-3.5 rounded font-bold hover:bg-slate-800 hover:text-white transition uppercase text-sm tracking-widest"
            >
              Live Chat
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 text-white px-10 py-3.5 rounded font-bold hover:bg-orange-700 transition shadow-md uppercase text-sm tracking-widest"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-20 relative bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Drop Us A Line
            </h2>
            <p className="text-orange-600 font-bold text-sm uppercase tracking-wide">
              Fill out your details below and we'll get back to you shortly.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-orange-100 max-w-4xl mx-auto relative z-10">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                  <input
                    type="hidden"
                    name="access_key"
                    value="75a6dce0-fd56-4a07-8fdf-96b1af7c5da2"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://penguinbookpublishers.com/thank-you"
                  />

                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                  />
                  <select
                    name="service"
                    required
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-500 bg-white appearance-none"
                  >
                    <option value="" disabled selected>
                      Select Service
                    </option>
                    <option value="book-writing">GhostWriting</option>
                    <option value="book-publishing">Book Publishing</option>
                    <option value="book-editing">
                      Book Editing & Proofreading
                    </option>
                    <option value="cover-design">Book Cover Design</option>
                    <option value="book-illustrations">
                      Book Illustrations
                    </option>
                    <option value="book-printing">Book Printing</option>
                    <option value="book-marketing">Book Marketing</option>
                    <option value="authors-website">Author's Website</option>
                    <option value="global-distributions">
                      Global Distributions
                    </option>
                    <option value="article-writing">
                      Article Writing & Blogs
                    </option>
                    <option value="book-trailer">Book Video Trailer</option>
                    <option value="audio-book">Audio Book</option>
                  </select>
                </div>
                <div className="flex flex-col gap-6">
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                  />
                  <textarea
                    placeholder="Message"
                    required
                    name="message"
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white flex-grow min-h-[120px] resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-bold py-4 rounded-md uppercase tracking-wider hover:bg-orange-700 transition shadow-md"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white"
              >
                Live Chat
              </button>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a
                href="tel:+1 646 344 0382"
                className="block w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white"
              >
                +1 646 344 0382
              </a>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a
                href="mailto:info@penguinbookpublishers.net"
                className="block w-full border border-orange-400 text-orange-600 font-medium py-3 px-2 rounded-md hover:bg-orange-50 transition bg-white text-sm md:text-base"
              >
                info@penguinbookpublishers.net
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
