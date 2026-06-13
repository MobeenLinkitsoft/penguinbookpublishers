import React from "react";
import { 
  Video, Film, PlayCircle, MonitorPlay, CheckCircle2,
  ChevronLeft, ChevronRight, MessageSquare, Phone, Mail
} from "lucide-react";

export default function BookTrailerPage() {
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
              VIDEO MARKETING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Professional Video Book Trailer Services
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Capture your audience's attention instantly. We produce cinematic, high-definition book trailers that bring your story to life and dramatically boost your social media engagement and pre-orders.
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
                <Video className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option value="book-trailer" selected>Book Trailer Production</option>
                  <option value="animation">Animated Explainer</option>
                  <option value="marketing">Video Marketing</option>
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
          <span className="font-serif italic text-lg">HarperCollinsPublishers</span>
          <span className="uppercase text-sm border-l-2 border-white pl-2 leading-tight">Penguin<br/>Random<br/>House</span>
          <span className="font-serif text-lg">Simon & Schuster</span>
          <span className="tracking-tighter font-bold">amazon</span>
          <span className="tracking-tight font-semibold">iBooks</span>
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Book Video Trailers, Commercials and Marketing
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            In today's fast-paced digital landscape, video content reigns supreme. A cinematic book trailer is the most effective way to communicate your book's mood, setting, and stakes in under 60 seconds. 
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Whether you are launching a dark fantasy epic or a heartwarming romance, our video production team utilizes stunning stock footage, custom animations, professional voiceovers, and stirring soundtracks to create a trailer that stops the scroll and drives clicks to your sales page.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Live Chat</button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          <div className="relative w-full max-w-[450px]">
            {/* Play Button Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-20 h-20 bg-orange-600/90 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 hover:bg-orange-600 transition-all duration-300">
                <PlayCircle className="text-white fill-white" size={32} />
              </div>
            </div>
            {/* Cinematic Stack/Video Thumbnail Mockup */}
            <img 
              src="https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=800&auto=format&fit=crop" 
              alt="Cinematic Video Production" 
              className="w-full h-[350px] object-cover rounded-xl shadow-2xl grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Let us take your book to the next level
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
            Call us right now. Transform your written words into a cinematic experience!
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
          <p className="text-slate-100 text-sm mb-12">A glimpse of the books we have successfully promoted through visual campaigns.</p>
          
          <div className="flex items-center justify-between gap-4">
            <button className="text-white hover:text-orange-400 transition hidden md:block"><ChevronLeft size={40}/></button>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
              {[
                "1589829085413-56de8ae18c73", 
                "1544947950-fa07a98d237f", 
                "1512820790803-83c7326ba487", 
                "1481628169375-3751c6c5188f", 
                "1522869634938-16e04d41e737"
              ].map((imgId, i) => (
                <div key={i} className="relative aspect-[2/3] w-full bg-slate-800 shadow-xl overflow-hidden rounded border border-slate-500/50 group">
                  <img 
                    src={`https://images.unsplash.com/photo-${imgId}?q=80&w=400&auto=format&fit=crop&crop=focalpoint&h=600`} 
                    alt={`Book Trailer Portfolio ${i}`}
                    className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300 cursor-pointer"
                  />
                  {/* Subtle play icon overlay on portfolio to indicate video format */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <PlayCircle className="text-white/80" size={32} />
                  </div>
                </div>
              ))}
            </div>

            <button className="text-white hover:text-orange-400 transition hidden md:block"><ChevronRight size={40}/></button>
          </div>
        </div>
      </section>

      {/* ================= 6-STEP PROCESS GRID ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-600">Process of Video Book Trailer Production</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Step 01 */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Step 01</h4>
              <h3 className="text-xl font-bold text-slate-900">Concept Creation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A clear, detailed, and well-thought-out concept is central and crucial to your video. We establish the core theme, mood, and target audience to align with your story's essence.
              </p>
            </div>

            {/* Step 02 */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Step 02</h4>
              <h3 className="text-xl font-bold text-slate-900">Storyboarding</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To ensure that your video flows in a logical sequence, we sketch a visual storyboard. This frame-by-frame breakdown acts as the blueprint for the upcoming production phase.
              </p>
            </div>

            {/* Step 03 */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Step 03</h4>
              <h3 className="text-xl font-bold text-slate-900">Voice Over</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The right voice captures your audience’s attention. We utilize professional voice actors who bring emotional depth and dramatic pacing to your script's narration.
              </p>
            </div>

            {/* Step 04 */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Step 04</h4>
              <h3 className="text-xl font-bold text-slate-900">Animation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our animation team breathes life into your illustrations or stock footage. We apply kinetic typography, motion graphics, and visual effects to create a dynamic visual experience.
              </p>
            </div>

            {/* Step 05 */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Step 05</h4>
              <h3 className="text-xl font-bold text-slate-900">Music & Sound Effects</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We overlay high-quality royalty-free background music and cinematic sound effects. This audio engineering perfects the pacing and builds tension exactly where it is needed.
              </p>
            </div>

            {/* Step 06 */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-orange-600 uppercase tracking-widest">Step 06</h4>
              <h3 className="text-xl font-bold text-slate-900">Final Approval</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Once everything is compiled, we send you the final video. We allow revisions to ensure you get exactly what you envisioned before providing the high-resolution file.
              </p>
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
                    <option>Book Trailer Services</option>
                    <option>Animated Commercials</option>
                    <option>Book Marketing</option>
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