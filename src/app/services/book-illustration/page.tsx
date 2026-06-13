import React from "react";
import { 
  Paintbrush, Smile, Wand2, Image as ImageIcon, Layers, PenTool,
  ChevronLeft, ChevronRight, MessageSquare, Phone, Mail
} from "lucide-react";

export default function BookIllustrationsPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[600px] flex flex-col justify-center">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">
              BOOK ILLUSTRATIONS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Book Illustration Services at Penguin Self Publishing
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Visuals speak volumes. Breathe life into your characters, worlds, and narratives with our award-winning book illustration services, tailored for children's books, graphic novels, and custom cover art.
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
                <Paintbrush className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option value="illustrations" selected>Book Illustrations</option>
                  <option value="cover-design">Cover Design</option>
                  <option value="formatting">Formatting</option>
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
          <span className="tracking-tighter font-serif">Scribd.</span>
          <span className="font-serif text-lg border border-white px-2 py-1">hachette BOOK GROUP</span>
          <span className="font-serif italic text-lg">HarperCollinsPublishers</span>
          <span className="uppercase text-sm border-l-2 border-white pl-2 leading-tight">Penguin<br/>Random<br/>House</span>
          <span className="font-serif text-lg">Simon & Schuster</span>
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Book Illustration Services
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Penguin Self Publishing offers a diverse range of illustration styles to match the tone of your manuscript. From whimsical watercolors for children's books to hyper-realistic digital paintings for sci-fi and fantasy, our artists bring your imagination to the page.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            We don't just draw; we tell stories visually. Our illustrators work closely with you to ensure character consistency, mood lighting, and engaging compositions that make readers want to turn the page.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Live Chat</button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Custom Full Cover Spread Mockup (Back, Spine, Front) */}
          <div className="flex transform -rotate-12 hover:rotate-0 transition-transform duration-700 shadow-2xl">
            {/* Back Cover */}
            <div className="w-[180px] h-[280px] bg-slate-800 p-4 flex flex-col justify-between border-y border-l border-slate-700 rounded-l-md">
              <div className="space-y-2">
                <div className="w-full h-1 bg-slate-600 rounded"></div>
                <div className="w-5/6 h-1 bg-slate-600 rounded"></div>
                <div className="w-full h-1 bg-slate-600 rounded"></div>
                <div className="w-4/5 h-1 bg-slate-600 rounded"></div>
              </div>
              <div className="w-16 h-8 bg-white/90 self-end flex items-center justify-center text-[6px] font-mono text-black">BARCODE</div>
            </div>
            {/* Spine */}
            <div className="w-[30px] h-[280px] bg-slate-900 border-y border-slate-800 flex items-center justify-center shadow-inner">
              <span className="text-white text-[10px] tracking-widest font-serif" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>INTO THE WILD</span>
            </div>
            {/* Front Cover */}
            <div className="w-[180px] h-[280px] bg-emerald-900 border-y border-r border-emerald-800 rounded-r-md flex flex-col items-center justify-center p-4 relative overflow-hidden">
               <div className="absolute inset-0 opacity-60 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center"></div>
               <h3 className="font-serif text-white font-black text-2xl text-center leading-none relative z-10 drop-shadow-lg uppercase">Into<br/>The<br/>Wild</h3>
               <span className="text-white/90 text-[8px] tracking-widest uppercase absolute bottom-6 z-10 font-bold">Illustrated Edition</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6-GRID SERVICES SECTION ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">What We Offer</p>
            <h2 className="text-3xl font-bold text-slate-900 uppercase">Book Illustration Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Box 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <Smile size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Children's Book Illustration</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vibrant, colorful, and highly engaging illustrations that capture the attention of young readers and perfectly complement your storytelling.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <Wand2 size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Character Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We develop unique, memorable characters from scratch. From rough sketches to full-color turnarounds, we establish iconic looks for your protagonists.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <ImageIcon size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Concept Art & Environments</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building immersive worlds for sci-fi and fantasy novels. We paint sprawling landscapes, intricate cities, and moody atmospheres that draw readers in.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Comic & Graphic Novels</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Full-service comic production including storyboarding, penciling, inking, and lettering. We handle panel layouts to maximize narrative pacing.
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <Paintbrush size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Cover Illustrations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Standalone, high-impact artwork specifically designed for book covers. We leave safe zones for typography while creating a visually arresting centerpiece.
              </p>
            </div>

            {/* Box 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                <PenTool size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Line Art & Spot Illustrations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Elegant black-and-white chapter headers, maps, and spot illustrations that add a touch of class to the interior pages of traditional novels.
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
            Call us right now. Don't let your unwritten book stay unwritten any further!
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

      {/* ================= MINI PORTFOLIO ROW (Illustration Focused) ================= */}
      <section className="py-20 bg-slate-400">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Our Recent Portfolio</h2>
          <p className="text-slate-100 text-sm mb-12">A glimpse of our recently illustrated books, from whimsical children's tales to dark fantasy covers.</p>
          
          <div className="flex items-center justify-between gap-4">
            <button className="text-white hover:text-orange-400 transition hidden md:block"><ChevronLeft size={40}/></button>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
              {/* Using more art/illustration focused placeholders */}
              {[
                "1550684848-fac1c5b4e853", 
                "1560159905-6eb75468165b", 
                "1580461041416-c6e9d7247d8b", 
                "1579547365691-bbaabfc8e84a", 
                "1524679708947-f0b3dd1d29fa"
              ].map((imgId, i) => (
                <div key={i} className="aspect-[2/3] w-full bg-slate-800 shadow-xl overflow-hidden rounded border border-slate-500/50">
                  <img 
                    src={`https://images.unsplash.com/photo-${imgId}?q=80&w=400&auto=format&fit=crop&crop=focalpoint&h=600`} 
                    alt={`Illustration Portfolio ${i}`}
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
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop" 
                alt="Illustration Process" 
                className="w-full h-[500px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-10">
              
              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">1</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Creative Brief & Script Review</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We start by reviewing your manuscript and discussing your target audience, preferred art style, and overall vision. We establish the character descriptions and environmental settings.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">2</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Storyboarding & Sketches</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before adding color, we create rough black-and-white sketches and storyboards. This allows you to review the composition, pacing, and character expressions early in the process.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">3</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Coloring & Rendering</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Once the sketches are approved, our artists apply full colors, lighting, and textures. We send you the fully rendered artwork for final feedback and minor revisions.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">4</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Final Delivery & Formatting</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We deliver the high-resolution illustrations in your required formats. If you opted for publishing services, we integrate the art seamlessly into the text layout for print and digital.
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
                    <option>Book Illustrations</option>
                    <option>Cover Design</option>
                    <option>Children's Book Art</option>
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