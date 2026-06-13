import React from "react";
import { 
  Smartphone, BookOpen, DollarSign, Users, Zap, Star, MessageCircle, 
  Globe, PenTool, LayoutTemplate, Share2, CheckCircle2,
  ChevronLeft, ChevronRight, MessageSquare, Phone, Mail
} from "lucide-react";

export default function KindleVellaPage() {
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
              EPISODIC PUBLISHING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Extend the Reach of Your Stories with Our Amazon Kindle Vella Experts.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Tap into the fastest-growing mobile reading format. We help authors write, format, and publish serialized fiction on Kindle Vella to monetize their stories episode by episode.
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
                <Smartphone className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option value="kindle-vella" selected>Kindle Vella Publishing</option>
                  <option value="episodic-writing">Episodic Ghostwriting</option>
                  <option value="amazon-publishing">Standard Amazon KDP</option>
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
          <span className="uppercase text-sm border-l-2 border-white pl-2 leading-tight">Penguin<br/>Random<br/>House</span>
          <span className="font-serif text-lg">Simon & Schuster</span>
          <span className="tracking-tighter font-black text-2xl">amazon</span>
          <span className="font-serif text-lg border border-white px-2 py-1">hachette BOOK GROUP</span>
          <span className="tracking-tight font-semibold">kobo</span>
        </div>
      </section>

      {/* ================= 4-BOX FEATURE GRID ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Amazon Kindle Vella Services</h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">Vella utilizes a unique token-based system, unlocking an entirely new demographic of mobile-first readers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-500 text-center space-y-4 hover:-translate-y-1 transition-transform">
              <BookOpen className="text-orange-500 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900">Serial Publishing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Publish your story one short episode (600–5,000 words) at a time, keeping readers hooked.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-500 text-center space-y-4 hover:-translate-y-1 transition-transform">
              <MessageCircle className="text-orange-500 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900">Interactive</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Readers can "Thumbs Up" episodes, follow your story, and crown it as a weekly "Fave".</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-500 text-center space-y-4 hover:-translate-y-1 transition-transform">
              <DollarSign className="text-orange-500 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900">Earn Royalties</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Readers purchase tokens to unlock your episodes, earning you direct royalties on top of launch bonuses.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-orange-500 text-center space-y-4 hover:-translate-y-1 transition-transform">
              <Users className="text-orange-500 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900">Reach New Readers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Tap into a younger, mobile-centric audience that prefers bite-sized, bingeable content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION (Mobile Reading) ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="relative flex justify-center items-center h-[400px]">
          <div className="relative w-full max-w-[350px]">
            {/* Dotted pattern background */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(#e2e8f0_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=800&auto=format&fit=crop" 
              alt="Mobile Reader" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Optimize Your Story for Mobile Readers.
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Writing for Kindle Vella isn't the same as writing a traditional novel. Episodes need rapid pacing, frequent cliffhangers, and highly engaging author notes.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Our specialized ghostwriters and editors are trained in episodic formatting. We help you structure your seasons, optimize episode tags, and write compelling "Author Notes" that build a dedicated community around your serial.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
            <button className="border-2 border-slate-800 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-800 hover:text-white transition uppercase tracking-wider text-sm">Learn More</button>
          </div>
        </div>
      </section>

      {/* ================= ORANGE ICON GRID (Things you need to know) ================= */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Things You Need To Know About Kindle Vella</h2>
            <p className="text-orange-100 text-sm max-w-2xl mx-auto">Vella is an entirely different ecosystem. Here are the core mechanics of the platform.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: <BookOpen />, title: "Short Episodes", text: "Publish in bite-sized chunks ranging from 600 to 5,000 words." },
              { icon: <Zap />, title: "First 3 Free", text: "The first three episodes of every story are permanently free to hook readers." },
              { icon: <DollarSign />, title: "Earn Royalties", text: "Readers unlock further episodes using tokens, which translates to royalties." },
              { icon: <Star />, title: "New Kind of Format", text: "Vella favors fast pacing, high drama, and frequent cliffhangers." },
              { icon: <Users />, title: "Author & Readers", text: "Interact directly with fans via the 'Author Notes' section." },
              { icon: <Smartphone />, title: "Mobile Readership", text: "Designed specifically for reading on the iOS and Android Kindle apps." },
              { icon: <MessageCircle />, title: "Reader Feedback", text: "Readers can leave a 'Thumbs Up' on episodes they loved." },
              { icon: <Globe />, title: "Instant Engagement", text: "Build an audience instantly as you write, rather than waiting for a full book launch." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3">
                <div className="text-orange-200 mb-2">{item.icon}</div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-xs text-orange-100 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DARK CTA BANNER ================= */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
              Want To Learn More About Kindle Vella?
            </h2>
            <p className="text-slate-400 text-sm">Consult with our serial publishing experts today.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-700 transition shadow-lg">
              <Phone size={20} />
            </button>
            <button className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-700 transition shadow-lg">
              <MessageSquare size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 6-GRID PROCESS SECTION ================= */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 uppercase">Our Process</h2>
            <div className="w-16 h-1 bg-orange-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl text-center space-y-4 hover:shadow-md transition">
              <PenTool className="text-orange-600 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900 text-lg">Episodic Outlining</h3>
              <p className="text-sm text-slate-600">We plot your story to ensure every single 1,500-word chunk ends with a compelling hook.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl text-center space-y-4 hover:shadow-md transition">
              <BookOpen className="text-orange-600 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900 text-lg">Serial Writing</h3>
              <p className="text-sm text-slate-600">Our ghostwriters draft the content, maintaining a consistent, addictive narrative flow.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl text-center space-y-4 hover:shadow-md transition">
              <LayoutTemplate className="text-orange-600 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900 text-lg">Vella Formatting</h3>
              <p className="text-sm text-slate-600">We format the text specifically for the Vella platform, separating author notes and episode tags.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl text-center space-y-4 hover:shadow-md transition">
              <Smartphone className="text-orange-600 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900 text-lg">Square Cover Design</h3>
              <p className="text-sm text-slate-600">Vella uses square images instead of standard book covers. Our designers create eye-catching thumbnail art.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl text-center space-y-4 hover:shadow-md transition">
              <Zap className="text-orange-600 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900 text-lg">Scheduled Publishing</h3>
              <p className="text-sm text-slate-600">We manage the backend, scheduling episodes to drop consistently (e.g., twice a week) to satisfy the algorithm.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl text-center space-y-4 hover:shadow-md transition">
              <Share2 className="text-orange-600 mx-auto" size={32} />
              <h3 className="font-bold text-slate-900 text-lg">Marketing & Promotion</h3>
              <p className="text-sm text-slate-600">We drive off-platform traffic to your Vella story using targeted TikTok, Facebook, and Instagram campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO SLIDER (Fixed from original template) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Recent Portfolio</h2>
          <p className="text-slate-500 text-sm mb-12">A glimpse of the serials we have successfully launched on the Kindle Vella platform.</p>
          
          <div className="flex items-center justify-between gap-4">
            <button className="text-slate-400 hover:text-orange-600 transition hidden md:block"><ChevronLeft size={40}/></button>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
              {[
                "1589829085413-56de8ae18c73", 
                "1544947950-fa07a98d237f", 
                "1512820790803-83c7326ba487", 
                "1481628169375-3751c6c5188f", 
                "1522869634938-16e04d41e737"
              ].map((imgId, i) => (
                <div key={i} className="aspect-square w-full bg-slate-800 shadow-lg overflow-hidden rounded-xl border border-slate-200">
                  <img 
                    src={`https://images.unsplash.com/photo-${imgId}?q=80&w=400&auto=format&fit=crop&crop=focalpoint&h=400`} 
                    alt={`Vella Square Cover ${i}`}
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <button className="text-slate-400 hover:text-orange-600 transition hidden md:block"><ChevronRight size={40}/></button>
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
                    <option>Kindle Vella Publishing</option>
                    <option>Episodic Writing</option>
                    <option>Amazon KDP</option>
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