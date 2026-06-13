import React from "react";
import { 
  CheckCircle2, Search, Edit3, LayoutTemplate, MonitorSmartphone,
  ChevronLeft, ChevronRight, MessageSquare, Phone, Mail, FileText
} from "lucide-react";

export default function EbookWritingPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Bring Your Ideas to Life with Professional eBook Writing Services
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Our expert eBook writers specialize in turning your concepts into engaging, high-quality digital manuscripts ready for Kindle, Apple Books, and worldwide distribution.
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
                <MonitorSmartphone className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option>eBook Writing</option>
                  <option>eBook Publishing</option>
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
          <span className="font-serif italic text-lg">HarperCollinsPublishers</span>
          <span className="uppercase text-sm border-l-2 border-white pl-2 leading-tight">Penguin<br/>Random<br/>House</span>
          <span className="font-serif text-lg">Simon & Schuster</span>
          <span className="tracking-tighter font-bold text-2xl">amazon</span>
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 (With Digital Mockup) ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Take Your eBook to the Next Level with Professional eBook Writing Services
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Writing an eBook requires more than just compiling text. It demands a deep understanding of digital formatting, reader engagement, and platform-specific requirements like Amazon KDP formatting.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Whether you want to generate leads for your business, establish authority in your niche, or publish the next great digital fiction, our team of dedicated ghostwriters and digital strategists are here to execute your vision flawlessly.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Live Chat</button>
          </div>
        </div>
        
        {/* Digital Device Mockup (Laptop + Tablet) */}
        <div className="relative flex justify-center items-center h-[400px]">
           {/* Laptop Base */}
           <div className="absolute right-0 bottom-10 w-[300px] h-[180px] bg-slate-800 rounded-t-xl shadow-2xl border-4 border-slate-900 overflow-hidden transform -rotate-2">
             <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="eBook Content" />
           </div>
           {/* Tablet Overlap */}
           <div className="absolute left-10 bottom-4 w-[160px] h-[240px] bg-white rounded-2xl shadow-2xl border-8 border-slate-900 overflow-hidden transform rotate-3 flex flex-col">
             <div className="h-full w-full bg-slate-100 flex flex-col items-center justify-center p-4">
               <span className="font-serif font-bold text-slate-800 text-center leading-tight">Your<br/>Digital<br/>Masterpiece</span>
             </div>
           </div>
        </div>
      </section>

      {/* ================= EXPERT APPROACH (3-Column) ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Expert eBook Writing Services Tailored to Your Needs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <Search size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Thorough Topic Research</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Before the first word is typed, our writers conduct extensive research to ensure your eBook is highly informative, fact-checked, and perfectly positioned for your target demographic.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <FileText size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Streamlined Writing Process</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                A collaborative and transparent workflow where you receive regular drafts. Our writers seamlessly adopt your tone of voice to create a manuscript that sounds exactly like you.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <LayoutTemplate size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Quality Assurance and Formatting</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Once approved, the manuscript undergoes rigorous editorial reviews. Finally, we format it beautifully for digital reading devices like Kindle, iPad, and generic eReaders (EPUB/MOBI).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Let us take your book to the next level
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
            We help bring your ideas to life in the form of a meticulously written and published eBook
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
          <p className="text-slate-100 text-sm mb-12">A glimpse of our recently published eBooks across multiple digital platforms.</p>
          
          <div className="flex items-center justify-between gap-4">
            <button className="text-white hover:text-orange-400 transition hidden md:block"><ChevronLeft size={40}/></button>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="aspect-[2/3] w-full bg-slate-800 shadow-xl overflow-hidden rounded border border-slate-500/50">
                  <img 
                    src={`https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop&crop=focalpoint&h=600&rnd=${i + 10}`} 
                    alt={`eBook Portfolio ${i}`}
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
              {/* Dotted pattern decoration */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#e2e8f0_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" 
                alt="eBook Writing Process" 
                className="w-full h-[500px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-10">
              
              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">1</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Initial Consultation & Topic Selection</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We start by understanding your goals, target audience, and core message. If you are unsure about the topic, our strategists will help identify trending niches to maximize your eBook's impact.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">2</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Extensive Research & Writing</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our ghostwriters dive deep into research, ensuring the content is accurate and highly engaging. We write chapter by chapter, allowing you to review the tone and direction consistently.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">3</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Review, Editing and Proofreading</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A first draft is never final. Our veteran editors refine the manuscript, correcting grammar, improving flow, and ensuring the narrative hooks digital readers from the first page.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">4</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Formatting & Design</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Digital readers require flawless formatting. We typeset your eBook for flawless rendering on Kindle, Apple Books, and other eReaders, paired with a stunning, click-worthy cover.
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
                    <option>eBook Writing</option>
                    <option>eBook Publishing</option>
                    <option>Cover Design</option>
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