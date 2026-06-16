"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  FileText, Search, List, PenTool, Edit3, LayoutTemplate, CheckCircle2,
  ThumbsUp, ThumbsDown, Target, TrendingUp, Award,
  MessageSquare, Phone, Mail, 
  ChevronRight
} from "lucide-react";
import QuoteModal from "@/components/global/QuoteModal"; // Ensure path matches your setup
import { Crisp } from "crisp-sdk-web";

export default function ArticleWritingPage() {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Infinite Logo Marquee Array
  const trustLogos = Array.from({ length: 14 }).map((_, i) => `/Logos/log${i + 1}.png`);
  const seamlessLogos = [...trustLogos, ...trustLogos];

  // All 86 Portfolio Books
  const portfolioBooks = Array.from({ length: 12 }).map((_, i) => `/Book/Book${i + 1}.jpg`);

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      
      {/* Global Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative w-full min-h-[750px] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-white text-xs font-bold uppercase tracking-widest">Article Writing Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              High-Quality Article Writing Services to Boost Your Digital Presence.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
              Engage your readers, build authority in your niche, and drive organic traffic to your website with expertly crafted, SEO-optimized articles and blog posts written by industry specialists.
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
              <h3 className="text-2xl font-black text-slate-900 mb-2">Get Started!</h3>
              <p className="text-sm text-slate-500 mb-8">Consult with a content strategist for free.</p>
              
             <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
              >
               <input type="hidden" name="access_key" value="75a6dce0-fd56-4a07-8fdf-96b1af7c5da2" />
                  <input 
    type="hidden" 
    name="redirect" 
    value="https://penguinbookpublishers.com/thank-you" 
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
                <div key={index} className="relative h-12 w-32 shrink-0 flex items-center justify-center">
                  <Image src={logoUrl} alt="Partner Logo" fill sizes="128px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. INTRO SPLIT SECTION ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Why Hire Article Writing Services?
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            In the digital age, content is king. Whether you are an author trying to build a readership, or a business aiming to dominate search engine results, publishing consistent, high-quality articles is essential. 
          </p>
          <ul className="space-y-4 pt-2">
            {[
              "Boost Search Engine Rankings (SEO)",
              "Establish Industry Authority",
              "Engage and Retain your Audience",
              "Drive Conversions and Book Sales"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-800 font-bold text-sm">
                <CheckCircle2 className="text-orange-600" size={20} /> {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-widest text-sm shadow-md"
            >
              Get A Quote
            </button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          <div className="relative w-full max-w-[450px]">
            <div className="absolute inset-0 bg-orange-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" 
              alt="Content Writing" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* ================= 4. ALL PORTFOLIO BOOKS GRID ================= */}
      <section className="py-24 bg-slate-900 text-white border-y-[6px] border-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Content Showcase</h4>
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Our Portfolio</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {portfolioBooks.map((cover, i) => (
              <div key={i} className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl border border-slate-700 group cursor-pointer hover:border-orange-500 transition-colors">
                <Image 
                  src={cover} 
                  alt={`Portfolio ${i + 1}`} 
                  fill 
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xs uppercase tracking-widest border border-white px-3 py-1.5 rounded">View</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. ARTICLE PROCESS GRID ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Article Writing Process</h2>
            <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Search size={24}/>, title: "Niche Research", desc: "We conduct deep dives into your industry to ensure factual accuracy and uncover trending topics." },
              { icon: <List size={24}/>, title: "Strategic Outlining", desc: "Crafting a logical structure with clear headings to ensure readability and maximum SEO benefits." },
              { icon: <PenTool size={24}/>, title: "Expert Drafting", desc: "Our native-speaking writers create engaging, original content that mirrors your brand's unique voice." },
              { icon: <Edit3 size={24}/>, title: "Editorial Review", desc: "Rigorous proofreading and copy-editing to eliminate all grammatical errors and improve flow." },
              { icon: <Target size={24}/>, title: "SEO Optimization", desc: "Strategic placement of primary and secondary keywords, meta tags, and internal link planning." },
              { icon: <LayoutTemplate size={24}/>, title: "Final Formatting", desc: "We format the article for web readability, utilizing bullet points, bold text, and optimal paragraph lengths." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6. PROS & CONS SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900">Pros & Cons of Article Writing Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-slate-50 p-10 rounded-2xl shadow-sm border-t-4 border-emerald-500">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
                <ThumbsUp className="text-emerald-500" size={32} />
                <h3 className="text-2xl font-bold text-slate-900">The Pros</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Award className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">Professional Quality</h4>
                    <p className="text-sm text-slate-600 mt-1">Access to elite writers ensures polished, error-free, and highly engaging content.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <TrendingUp className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">SEO Expertise</h4>
                    <p className="text-sm text-slate-600 mt-1">Writers understand keyword density and metadata, driving organic traffic to your site.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl shadow-sm border-t-4 border-rose-500">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
                <ThumbsDown className="text-rose-500" size={32} />
                <h3 className="text-2xl font-bold text-slate-900">The Cons</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <ChevronRight className="text-rose-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">Financial Investment</h4>
                    <p className="text-sm text-slate-600 mt-1">High-quality content requires a budget. It is an investment rather than a free DIY endeavor.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ChevronRight className="text-rose-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">Finding the Right Voice</h4>
                    <p className="text-sm text-slate-600 mt-1">It may take a draft or two for the writer to perfectly capture your unique personal tone.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CONTACT FORM SECTION ================= */}
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
    type="hidden" 
    name="redirect" 
    value="https://penguinbookpublishers.com/thank-you" 
  />
  
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