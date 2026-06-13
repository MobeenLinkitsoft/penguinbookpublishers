import React from "react";
import { MessageSquare, Phone, Mail } from "lucide-react";

export default function PortfolioPage() {
  // Array to generate 40 dummy book covers to match the image density
  const portfolioItems = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    // Using a mix of high-quality portrait placeholders
    image: `https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop&crop=focalpoint&h=600`,
    title: `Published Work ${i + 1}`
  }));

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[450px] flex flex-col justify-center">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our Portfolio
          </h1>
        </div>
      </section>

      {/* ================= TRUST LOGO BANNER ================= */}
      <section className="bg-orange-600 py-6 border-b border-orange-700 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 text-white font-bold text-xl md:text-2xl opacity-90">
          <span className="tracking-tighter font-serif">Scribd.</span>
          <span className="font-serif text-lg border border-white px-2 py-1">hachette BOOK GROUP</span>
          <span className="font-serif text-lg italic">HarperCollinsPublishers</span>
          <span className="uppercase text-sm border-l-2 border-white pl-2 leading-tight">Penguin<br/>Random<br/>House</span>
          <span className="font-serif text-lg">Simon & Schuster</span>
        </div>
      </section>

      {/* ================= MAIN PORTFOLIO GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Our Recent Portfolio</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We take pride in our work. Here is a glimpse of some of our recent publications across various genres.
          </p>
        </div>

        {/* Dense Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Aspect ratio container for book cover (2:3 approx) */}
              <div className="aspect-[2/3] w-full bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Let us take your book to the next level</h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest">
            We help bring your ideas to life in the form of a well-written and published book.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-orange-600 text-white px-10 py-3.5 rounded font-bold hover:bg-orange-700 transition shadow-md uppercase text-sm tracking-widest">
              (661) 460-8454
            </button>
            <button className="border-2 border-slate-800 text-slate-900 px-10 py-3.5 rounded font-bold hover:bg-slate-800 hover:text-white transition uppercase text-sm tracking-widest">
              Live Chat
            </button>
            <button className="bg-orange-600 text-white px-10 py-3.5 rounded font-bold hover:bg-orange-700 transition shadow-md uppercase text-sm tracking-widest">
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Drop Us A Line</h2>
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest">Fill out your details below and we'll get back to you shortly.</p>
          </div>

          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-orange-100 max-w-4xl mx-auto relative z-10">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required 
                    className="w-full border-b border-slate-300 p-4 text-sm focus:border-orange-600 outline-none transition text-slate-700 bg-transparent" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className="w-full border-b border-slate-300 p-4 text-sm focus:border-orange-600 outline-none transition text-slate-700 bg-transparent" 
                  />
                  <select className="w-full border-b border-slate-300 p-4 text-sm focus:border-orange-600 outline-none transition text-slate-500 bg-transparent appearance-none cursor-pointer">
                    <option>Book Writing</option>
                    <option>Ghostwriting</option>
                    <option>Editing</option>
                  </select>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full border-b border-slate-300 p-4 text-sm focus:border-orange-600 outline-none transition text-slate-700 bg-transparent" 
                  />
                  <textarea 
                    placeholder="Message" 
                    required 
                    className="w-full border-b border-slate-300 p-4 text-sm focus:border-orange-600 outline-none transition text-slate-700 bg-transparent flex-grow min-h-[120px] resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-600 text-white font-bold py-4 rounded-md uppercase tracking-widest hover:bg-orange-700 transition shadow-lg shadow-orange-600/20 mt-4"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="text-center group">
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Discuss Your Project</h4>
              <button className="w-full border border-orange-400 text-orange-600 font-bold py-3 px-4 rounded hover:bg-orange-600 hover:text-white transition-all shadow-sm flex items-center justify-center gap-2">
                <MessageSquare size={18} /> Live Chat
              </button>
            </div>

            <div className="text-center group">
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Make a Call</h4>
              <a href="tel:6614608454" className="w-full border border-orange-400 text-orange-600 font-bold py-3 px-4 rounded hover:bg-orange-600 hover:text-white transition-all shadow-sm flex items-center justify-center gap-2">
                <Phone size={18} /> (661) 460-8454
              </a>
            </div>

            <div className="text-center group">
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Send us Email</h4>
              <a href="mailto:info@penguinselfpublishing.com" className="w-full border border-orange-400 text-orange-600 font-bold py-3 px-4 rounded hover:bg-orange-600 hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 truncate text-sm">
                <Mail size={18} /> info@penguinselfpublishing.com
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}