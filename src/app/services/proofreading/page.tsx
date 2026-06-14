"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  FileSearch,
  Highlighter,
  CheckCheck,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import QuoteModal from "@/components/global/QuoteModal"; // Ensure path matches your setup
import { Crisp } from "crisp-sdk-web";

export default function BookEditingPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books
  const portfolioBooks = Array.from({ length: 12 }).map(
    (_, i) => `/Book/Book${i + 1}.jpg`,
  );

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Book Editing & Proofreading
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Flawless Book Editing Services to Perfect Your Manuscript.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              Don't let grammatical errors or plot holes ruin a great story. Our
              elite team of editors provides comprehensive developmental
              editing, line editing, and proofreading to ensure your book is
              market-ready.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-600 text-white px-8 py-4 rounded font-bold hover:bg-orange-700 transition flex items-center gap-2 shadow-lg shadow-orange-600/20 uppercase tracking-widest text-sm"
              >
                Get A Quote
              </button>
              <button onClick={() => Crisp.chat.open()}  className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 transition flex items-center gap-2 uppercase tracking-widest text-sm">
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md border border-white/20 relative">
              <div className="absolute -top-6 right-8 bg-orange-600 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded shadow-lg">
                20% Off Today
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Get Started!
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Consult with an editorial expert for free.
              </p>
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
                  type="text"
                  placeholder="Full Name *"
                  name="name"
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
                  name="tel"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-orange-500 outline-none transition bg-transparent"
                />
                <select
                  name="service"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-transparent"
                >
                  <option value="" disabled selected>
                    Select Service
                  </option>
                  <option value="book-writing">Book Writing</option>
                  <option value="ebook-writing">
                    eBook Writing & Publishing
                  </option>
                  <option value="book-editing">
                    Book Editing & Proofreading
                  </option>
                  <option value="cover-design">Book Cover Design</option>
                  <option value="book-illustrations">Book Illustrations</option>
                  <option value="book-printing">Book Printing</option>
                  <option value="book-marketing">Book Marketing</option>
                  <option value="authors-website">Author's Website</option>
                  <option value="amazon-publishing">Amazon Publishing</option>
                  <option value="article-writing">Article Writing</option>
                  <option value="book-trailer">Book Trailer Services</option>
                  <option value="kindle-vella">Kindle Vella</option>
                </select>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="w-full border-b-2 border-slate-200 p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-transparent"
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

      {/* ================= 2. INFINITE MARQUEE LOGOS ================= */}
      <section className="bg-orange-600 py-6 border-b border-slate-200 overflow-hidden">
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 35s linear infinite; display: flex; width: max-content; }
          .animate-marquee:hover { animation-play-state: paused; }
        `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-20 pr-12 md:pr-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {seamlessLogos.map((logoUrl, index) => (
                <div
                  key={index}
                  className="relative h-12 w-32 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logoUrl}
                    alt="Partner Logo"
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SPLIT SECTION 1 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Elevate Your Writing with Expert Proofreading and Editing
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Even the most brilliant authors need a second pair of eyes. A single
            typo or structural inconsistency can pull readers out of your story
            and result in negative reviews.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Our editorial team consists of veteran publishers and
            NYT-bestselling editors. We don't just correct grammar; we enhance
            your tone, refine your pacing, and ensure your manuscript meets the
            highest international publishing standards.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-widest text-sm shadow-md"
            >
              Get A Quote
            </button>
            <button onClick={() => Crisp.chat.open()}  className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-900 hover:text-white transition uppercase tracking-widest text-sm shadow-md">
              Live Chat
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[400px]">
          {/* Real Book Mockup instead of CSS Dummy */}
          <div className="relative w-64 h-96 rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition duration-500 border-4 border-white">
            <Image
              src="/Book/Book18.jpg"
              alt="Edited Book Example"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= 4. CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Comprehensive Editing Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <FileSearch size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Developmental Editing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We analyze the big picture. Our editors review your plot,
                pacing, character arcs, and thematic consistency, providing
                detailed feedback to strengthen your core narrative.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <Highlighter size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Line Copy Editing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We go through your manuscript line by line to improve sentence
                structure, vocabulary, and flow, ensuring your writing is
                engaging, clear, and perfectly stylized.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <CheckCheck size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Final Proofreading
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                The final polish. We eliminate all remaining typos, spelling
                errors, grammatical mistakes, and formatting inconsistencies
                before your book goes to print.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-900 text-white border-y-[6px] border-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
            Our Library
          </h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">
            Edited & Published Books
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div
                key={i}
                className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl border border-slate-700 group cursor-pointer hover:border-orange-500 transition-colors"
              >
                <Image
                  src={cover}
                  alt={`Portfolio Book ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xs uppercase tracking-widest border border-white px-3 py-1.5 rounded">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Let's perfect your manuscript together.
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest">
            Call us right now. A flawless book is just an editorial review away!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-slate-900 text-white px-10 py-3.5 rounded font-bold hover:bg-slate-800 transition shadow-md uppercase text-sm tracking-widest">
              +1 646 344 0382
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

      {/* ================= 7. 4-STEP PROCESS SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Our Four-Step Editorial Process
            </h2>
            <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#e2e8f0_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
              {/* Using img tag here for external Unsplash URL to bypass Next config issues securely */}
              <img
                src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=800&auto=format&fit=crop"
                alt="Editing Process"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-slate-200"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Manuscript Evaluation
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We start by reviewing your entire manuscript to identify its
                    strengths and weaknesses. We match your book with an editor
                    who specializes in your specific genre.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Structural & Line Editing
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our editors dive in to refine sentence structures, fix
                    pacing issues, and eliminate redundancies. We ensure your
                    narrative flows smoothly from cover to cover.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Author Review & Revision
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We send the edited draft back to you with tracked changes
                    and suggestions. You maintain complete creative control over
                    which edits to accept or modify.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Final Proofread
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A fresh pair of eyes conducts a final sweep of the
                    manuscript to catch any residual typos, spelling errors, or
                    punctuation mistakes before publication formatting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. BOTTOM CONTACT FORM SECTION ================= */}
     <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Titles */}
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Drop Us A Line
            </h2>
            <p className="text-orange-600 font-bold text-sm">
              Fill out your details below and we'll get back to you shortly.
            </p>
          </div>

          {/* Form Container with Soft Orange Shadow */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-slate-100 max-w-4xl mx-auto relative z-10">
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input type="hidden" name="access_key" value="75a6dce0-fd56-4a07-8fdf-96b1af7c5da2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                  />
                  <select name="service" className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-500 bg-white appearance-none">
                    <option value="" disabled selected>
                      Select Service
                    </option>
                    <option value="book-writing">Book Writing</option>
                    <option value="ebook-writing">
                      eBook Writing & Publishing
                    </option>
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
                    <option value="amazon-publishing">Amazon Publishing</option>
                    <option value="article-writing">Article Writing</option>
                    <option value="book-trailer">Book Trailer Services</option>
                    <option value="kindle-vella">Kindle Vella</option>
                  </select>
                </div>

                {/* Right Column */}
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
                    name="message"
                    required
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white flex-grow min-h-[120px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
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
            {/* Box 1 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button
                onClick={() => Crisp.chat.open()}
                className="w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white"
              >
                Live Chat
              </button>
            </div>

            {/* Box 2 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a
                href="tel:+1 646 344 0382"
                className="block w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white"
              >
                +1 646 344 0382
              </a>
            </div>

            {/* Box 3 */}
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a
                href="mailto:info@penguinbookpublishers.net"
                className="block w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white text-sm md:text-base"
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
