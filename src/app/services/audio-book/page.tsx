"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mic,
  Headphones,
  Volume2,
  Globe,
  MessageSquare,
  Phone,
  Mail,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";
import QuoteModal from "@/components/global/QuoteModal";
import { Crisp } from "crisp-sdk-web";

export default function AudiobookPublishingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];
  const portfolioBooks = Array.from({ length: 12 }).map(
    (_, i) => `/Book/Book${i + 1}.jpg`,
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Audiobook Production
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Bring Your Stories to Life with Professional Audiobook Production.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              Turn your manuscript into an immersive auditory experience. From
              professional narration to studio-grade sound engineering, we
              handle everything to get your book on Audible, Amazon, and iTunes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-600 text-white px-8 py-4 rounded font-bold hover:bg-orange-700 transition flex items-center gap-2 shadow-lg shadow-orange-600/20 uppercase tracking-widest text-sm"
              >
                Get A Quote
              </button>
              <button
                onClick={() => Crisp.chat.open()}
                className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 transition flex items-center gap-2 uppercase tracking-widest text-sm"
              >
                Live Chat
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/20 relative">
              <div className="absolute -top-6 right-8 bg-orange-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded shadow-lg">
                20% Off Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Get Started!
              </h3>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
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
                  name="name"
                  placeholder="Full Name *"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-orange-500 outline-none transition bg-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-orange-500 outline-none transition bg-transparent"
                />
                <input
                  type="tel"
                  name="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-orange-500 outline-none transition bg-transparent"
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
  <option value="book-editing">Book Editing & Proofreading</option>
  <option value="cover-design">Book Cover Design</option>
  <option value="book-illustrations">Book Illustrations</option>
  <option value="book-printing">Book Printing</option>
  <option value="book-marketing">Book Marketing</option>
  <option value="authors-website">Author's Website</option>
  <option value="global-distributions">Global Distributions</option>
  <option value="article-writing">Article Writing & Blogs</option>
  <option value="book-trailer">Book Video Trailer</option>
  <option value="audio-book">Audio Book</option>
</select>
                <input
                  type="tel"
                  name="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white flex-grow min-h-[120px] resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-bold py-4 mt-6 rounded uppercase tracking-widest hover:bg-orange-600 transition shadow-xl text-sm"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <section className="bg-white py-6 border-b border-slate-200 overflow-hidden">
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { animation: marquee 35s linear infinite; display: flex; width: max-content; }`}</style>
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-20 opacity-60">
              {seamlessLogos.map((logo, i) => (
                <div key={i} className="relative h-12 w-32 shrink-0">
                  <Image
                    src={logo}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16">
            Audiobook Production Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mic />,
                title: "Professional Narration",
                desc: "Access to world-class voice talent for any genre.",
              },
              {
                icon: <Headphones />,
                title: "Studio Recording",
                desc: "Flawless audio capture in professional-grade studios.",
              },
              {
                icon: <Volume2 />,
                title: "Mixing & Mastering",
                desc: "Post-production to ensure radio-quality sound.",
              },
              {
                icon: <Globe />,
                title: "Global Distribution",
                desc: "Seamless upload to Audible, iTunes, and Amazon.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{f.title}</h4>
                <p className="text-xs text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16">
            Audiobook Library
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {portfolioBooks.map((cover, i) => (
              <div
                key={i}
                className="aspect-square relative rounded-xl overflow-hidden shadow-2xl border border-slate-700"
              >
                <Image
                  src={cover}
                  alt="Audiobook"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16">
            Production Workflow
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[500px] bg-slate-200 rounded-2xl overflow-hidden relative">
              <Image
                src="/image1.png"
                alt="Recording"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-10">
              {[
                {
                  title: "Casting & Scripting",
                  desc: "We select the perfect narrator for your book's tone.",
                },
                {
                  title: "Professional Recording",
                  desc: "High-fidelity recording sessions in our sound labs.",
                },
                {
                  title: "Post-Production",
                  desc: "Expert audio editing, noise reduction, and sound design.",
                },
                {
                  title: "Quality Assurance",
                  desc: "Multi-stage QA to meet industry standards.",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="text-6xl font-bold text-slate-200">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
