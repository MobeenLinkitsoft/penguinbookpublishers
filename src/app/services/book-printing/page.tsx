"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Printer,
  Package,
  Layers,
  Settings,
  BookCopy,
  CheckCircle2,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import QuoteModal from "@/components/global/QuoteModal"; // Ensure path matches your setup
import { Crisp } from "crisp-sdk-web";

export default function BookPrintingPage() {
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
                Book Printing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Your Source for Top-Quality Book Printing and Delivery Services.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              We provide authors with complete book printing and publishing
              services. Get your printed books—from premium hardcovers to crisp
              paperbacks—delivered right to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-orange-600 text-white px-8 py-4 rounded font-bold hover:bg-orange-700 transition flex items-center gap-2 shadow-lg shadow-orange-600/20 uppercase tracking-widest text-sm"
              >
                Get A Quote
              </button>
              <button  onClick={() => Crisp.chat.open()} className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-slate-900 transition flex items-center gap-2 uppercase tracking-widest text-sm">
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
                Consult with a printing expert for free.
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
            Your Book is Written, Formatted, And Designed. What's Next?
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Holding a physical copy of your book is the ultimate reward for any
            author. We provide state-of-the-art Print on Demand (POD) and bulk
            printing solutions. From high-quality paper stock to perfect
            binding, we ensure your book feels as premium as it reads.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Whether you need a short run of 50 copies for a local launch or
            5,000 copies for worldwide distribution, our fulfillment network
            guarantees fast, affordable, and flawless delivery.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-widest text-sm shadow-md"
            >
              Get A Quote
            </button>
            <button  onClick={() => Crisp.chat.open()} className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-900 hover:text-white transition uppercase tracking-widest text-sm shadow-md">
              Live Chat
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[400px]">
          {/* Overlapping Real Book Covers to represent Print */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            <div className="absolute w-56 h-80 rounded-lg shadow-2xl overflow-hidden transform -rotate-6 hover:-rotate-3 transition duration-500 border-4 border-white z-0 -translate-x-12">
              <Image
                src="/Book/Book15.jpg"
                alt="Printed Book 1"
                fill
                className="object-cover opacity-90"
              />
            </div>
            <div className="absolute w-56 h-80 rounded-lg shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition duration-500 border-4 border-white z-10 translate-x-12">
              <Image
                src="/Book/Book16.jpg"
                alt="Printed Book 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
              Standard And Custom Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <Layers size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Binding & Paper Types
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Select from perfect binding (paperback), case laminate
                (hardcover), or dust jackets. Choose cream or white paper for
                fiction, or premium glossy stock for children's books and
                photography.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <Settings size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Customization Options
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Stand out on the shelves with custom trim sizes, matte or glossy
                cover finishes, foil stamping, embossing, and specialized
                interior color printing to match your exact vision.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1">
                <Package size={28} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">
                Short Run & Bulk Orders
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                No minimum order requirements. Print exactly what you need.
                Leverage Print on Demand (POD) for ongoing sales, or order in
                bulk to reduce cost-per-unit for your personal inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-900 text-white border-y-[6px] border-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
            Print Showcase
          </h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">
            Our Printed Portfolio
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div
                key={i}
                className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl border border-slate-700 group cursor-pointer hover:border-orange-500 transition-colors"
              >
                <Image
                  src={cover}
                  alt={`Printed Portfolio ${i + 1}`}
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
            Let us take your book to the next level
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest">
            Call us right now. Bring your digital manuscript into the physical
            world!
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
              Our Process For Book Printing
            </h2>
            <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#e2e8f0_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
              {/* Using img tag here for external Unsplash URL to bypass Next config issues securely */}
              <img
                src="/image.png"
                alt="Printing Press Process"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-slate-200 grayscale-[20%]"
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
                    Printing Consultation & Specs
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We finalize the physical attributes of your book. You select
                    the trim size, paper weight, binding type (paperback vs.
                    hardcover), and cover finish (matte vs. glossy).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Proofing & Sample Copy
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before mass printing, we run a digital or physical proof.
                    This ensures the bleeds are correct, the colors print
                    accurately, and the text margins are perfect.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Mass Printing & Quality Check
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Once approved, your book hits the press. Our production
                    managers conduct rigorous quality assurance checks to ensure
                    every single copy meets our pristine standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-300 font-serif leading-none shrink-0 w-16 text-center">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Packaging & Worldwide Delivery
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The final books are securely boxed to prevent damage. We
                    ship directly to your doorstep, your publisher, or straight
                    to global distribution warehouses.
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
