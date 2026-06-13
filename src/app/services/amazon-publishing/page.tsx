import React from "react";
import { 
  UploadCloud, Globe, BookOpen, CheckCircle2, ShoppingCart,
  ChevronLeft, ChevronRight, MessageSquare, Phone, Mail
} from "lucide-react";

export default function AmazonPublishingPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[600px] flex flex-col justify-center">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">
              AMAZON KDP PUBLISHING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ensuring Worldwide Publication of your Stories on Amazon.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Navigate the complexities of Kindle Direct Publishing with ease. Our experts handle the formatting, metadata optimization, and backend uploads to ensure your book dominates Amazon's global marketplace.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="border-2 border-white text-white px-8 py-3.5 rounded font-bold hover:bg-white hover:text-slate-900 transition flex items-center gap-2 uppercase text-sm tracking-wider">
                Get A Quote
              </button>
              <button className="bg-orange-600 text-white px-8 py-3.5 rounded font-bold hover:bg-orange-700 transition flex items-center gap-2 shadow-lg uppercase text-sm tracking-wider">
                Live Chat
              </button>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center opacity-50">
                <UploadCloud className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option value="amazon-publishing" selected>Amazon Publishing</option>
                  <option value="marketing">Amazon Book Marketing</option>
                  <option value="formatting">KDP Formatting</option>
                </select>
                <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3.5 mt-2 rounded uppercase tracking-wider hover:bg-orange-700 transition shadow-lg">
                  Submit Your Request
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TRUST LOGO BANNER ================= */}
      <section className="bg-orange-600 py-6 border-b border-orange-700 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 text-white font-bold text-xl md:text-2xl opacity-90">
          <span className="font-serif text-lg border border-white px-2 py-1">hachette BOOK GROUP</span>
          <span className="font-serif text-lg">Simon & Schuster</span>
          <span className="tracking-tighter font-black text-2xl">amazon</span>
          <span className="font-serif italic text-lg">HarperCollinsPublishers</span>
          <span className="uppercase text-sm border-l-2 border-white pl-2 leading-tight">Penguin<br/>Random<br/>House</span>
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 (Fanned Books Mockup) ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Providing the most Ideal and Robust Publishing Process on Amazon.
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Publishing on Amazon is more than just uploading a file. It requires strategic categorization, keyword indexing, and perfect formatting to ensure the Kindle algorithm favors your title. 
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Our publishing executives manage the entire backend. We configure your KDP dashboard, set up author central accounts, assign ISBNs, and execute a launch strategy that maximizes your visibility across all Amazon territories.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Live Chat</button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Custom Fanned Books Mockup */}
          <div className="relative w-[350px] h-[400px] flex justify-center items-center">
             {/* Left Book */}
             <div className="absolute w-[180px] h-[270px] bg-slate-800 rounded shadow-xl transform -rotate-12 -translate-x-20 z-10 border border-slate-700 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Book 1"/>
             </div>
             {/* Right Book */}
             <div className="absolute w-[180px] h-[270px] bg-slate-800 rounded shadow-xl transform rotate-12 translate-x-20 z-10 border border-slate-700 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Book 2"/>
             </div>
             {/* Center Book (Top) */}
             <div className="absolute w-[200px] h-[300px] bg-white rounded shadow-2xl z-20 border border-slate-200 transform -translate-y-4 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1512820790803-83c7326ba487?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Book 3 Main"/>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                 <span className="text-white font-bold tracking-widest text-sm uppercase">Best Seller</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= 3-COLUMN APPROACH SECTION ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Speak to our Professional executives about your queries related to Publishing your Book on Amazon.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Global Distribution</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We don't just stop at the US market. We ensure your book is configured for international Amazon marketplaces (UK, CA, AU, etc.) so readers worldwide can purchase your work.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">KDP Formatting</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Amazon has strict guidelines for eBook (MOBI/EPUB) and Print-on-Demand files. We rigorously format your interior layouts and covers to bypass all KDP automated rejection errors.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <ShoppingCart size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Royalty Optimization</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We consult with you on optimal pricing strategies, KDP Select enrollment, and metadata setup (7 backend keywords and 2 categories) to maximize your sales and royalty percentages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Want To Speak To A Professional About Publishing A Book?
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
            Call us right now. Let's get your manuscript trending on Amazon's charts!
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-orange-600 text-white px-10 py-3.5 rounded font-bold hover:bg-orange-700 transition shadow-md uppercase text-sm tracking-wider">
              (661) 460-8454
            </button>
            <button className="border-2 border-slate-800 text-slate-900 px-10 py-3.5 rounded font-bold hover:bg-slate-800 hover:text-white transition uppercase text-sm tracking-wider">
              Live Chat
            </button>
            <button className="bg-orange-600 text-white px-10 py-3.5 rounded font-bold hover:bg-orange-700 transition shadow-md uppercase text-sm tracking-wider">
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= MINI PORTFOLIO ROW ================= */}
      <section className="py-20 bg-slate-400">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Our Recent Portfolio</h2>
          <p className="text-slate-100 text-sm mb-12">A glimpse of books we have successfully published and ranked on Amazon.</p>
          
          <div className="flex items-center justify-between gap-4">
            <button className="text-white hover:text-orange-400 transition hidden md:block"><ChevronLeft size={40}/></button>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
              {[
                "1544947950-fa07a98d237f", 
                "1512820790803-83c7326ba487", 
                "1481628169375-3751c6c5188f", 
                "1522869634938-16e04d41e737",
                "1589829085413-56de8ae18c73" 
              ].map((imgId, i) => (
                <div key={i} className="aspect-[2/3] w-full bg-slate-800 shadow-xl overflow-hidden rounded border border-slate-500/50">
                  <img 
                    src={`https://images.unsplash.com/photo-${imgId}?q=80&w=400&auto=format&fit=crop&crop=focalpoint&h=600`} 
                    alt={`Amazon Publishing Portfolio ${i}`}
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <button className="text-white hover:text-orange-400 transition hidden md:block"><ChevronRight size={40}/></button>
          </div>
        </div>
      </section>

      {/* ================= 4-STEP PROCESS SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#e2e8f0_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" 
                alt="Publishing Process" 
                className="w-full h-[500px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-10">
              
              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">1</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Draft Evaluation</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our publishers begin by reviewing your final manuscript to ensure it meets Amazon’s community guidelines and content standards, preparing it for the backend process.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">2</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Editing and Proofreading</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A mandatory final sweep is conducted to eliminate any residual errors. Amazon readers are highly critical of typos, so we ensure the prose is completely flawless before uploading.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">3</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Formatting & Design</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We convert your document into standard digital formats (EPUB/MOBI) with dynamic table of contents, and configure the print-ready PDF dimensions for KDP paperback and hardcover.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">4</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Book Publishing</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We hit publish. We handle the entire KDP dashboard setup, inputting your optimized metadata, descriptions, pricing, and tax information, ensuring a smooth global rollout.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-24 relative bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Drop Us A Line</h2>
            <p className="text-orange-600 font-bold text-sm uppercase tracking-wide">Fill out your details below and we'll get back to you shortly.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-orange-100 max-w-4xl mx-auto relative z-10">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-6">
                  <input type="text" placeholder="Name" required className="w-full border-b border-slate-300 p-3.5 text-sm focus:border-orange-600 outline-none transition bg-transparent" />
                  <input type="email" placeholder="Email Address" required className="w-full border-b border-slate-300 p-3.5 text-sm focus:border-orange-600 outline-none transition bg-transparent" />
                  <select className="w-full border-b border-slate-300 p-3.5 text-sm focus:border-orange-600 outline-none transition text-slate-500 bg-transparent">
                    <option>Amazon Publishing</option>
                    <option>Book Marketing</option>
                    <option>Book Formatting</option>
                  </select>
                </div>
                <div className="flex flex-col gap-6">
                  <input type="tel" placeholder="Phone Number" required className="w-full border-b border-slate-300 p-3.5 text-sm focus:border-orange-600 outline-none transition bg-transparent" />
                  <textarea placeholder="Message" required className="w-full border-b border-slate-300 p-3.5 text-sm focus:border-orange-600 outline-none transition bg-transparent flex-grow min-h-[120px] resize-none"></textarea>
                </div>
              </div>
              <button type="submit" className="w-full bg-orange-600 text-white font-bold py-4 rounded-md uppercase tracking-wider hover:bg-orange-700 transition shadow-md mt-4">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button className="w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white shadow-sm flex justify-center items-center gap-2">
                <MessageSquare size={18} /> Live Chat
              </button>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a href="tel:6614608454" className="w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white shadow-sm flex justify-center items-center gap-2">
                <Phone size={18} /> (661) 460-8454
              </a>
            </div>
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a href="mailto:info@penguinselfpublishing.com" className="w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white shadow-sm flex justify-center items-center gap-2 text-sm md:text-base">
                <Mail size={18} /> info@penguinselfpublishing.com
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}