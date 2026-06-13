import { 
  MessageSquare, BookOpen, CheckCircle2, 
  PenTool, LayoutTemplate, TrendingUp, Star 
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[700px] flex flex-col">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply" />

        <div className="relative z-10 flex-grow flex items-center pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block py-1 px-3 border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest rounded-full">
                Become a Published Author Now
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Penguin Self Publishing Focused On Book Writing & Marketing Services.
              </h1>
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Get your book published today with Penguin Publishing! We offer comprehensive self-publishing services for independent authors worldwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="border-2 border-white text-white px-8 py-3.5 rounded font-bold hover:bg-white hover:text-slate-900 transition flex items-center gap-2">
                  Get A Quote
                </button>
                <button className="bg-orange-600 text-white px-8 py-3.5 rounded font-bold hover:bg-orange-700 transition flex items-center gap-2 shadow-lg shadow-orange-600/20">
                  <MessageSquare size={18} /> Live Chat
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-end">
              <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center opacity-50">
                  <BookOpen className="text-orange-200" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Started!</h3>
                <p className="text-sm text-slate-500 mb-6">Fill out the form below to claim your discount.</p>
                
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition bg-white" />
                  <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition bg-white" />
                  <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition bg-white" />
                  <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-500 bg-white">
                    <option>Select Service</option>
                    <option>Book Writing</option>
                    <option>Book Publishing</option>
                  </select>
                  <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3.5 mt-2 rounded uppercase tracking-wider hover:bg-orange-700 transition shadow-lg shadow-orange-600/20">
                    Submit Your Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST BANNER ================= */}
      <section className="bg-orange-600 py-6 border-b-4 border-orange-700">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-90 text-white font-bold text-xl tracking-tight">
          <span>AMAZON KINDLE</span>
          <span>APPLE BOOKS</span>
          <span className="tracking-widest">kobo</span>
          <span>BARNES & NOBLE</span>
          <span>GOOGLE PLAY</span>
        </div>
      </section>

      {/* ================= INLINE HORIZONTAL FORM ================= */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Sign Up with Penguin Self Publishing Now to Get Our Exclusive Discounts</h2>
          </div>
          <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input type="text" placeholder="Name" required className="w-full md:w-auto flex-grow border-b border-slate-300 p-3 focus:border-orange-600 outline-none bg-transparent" />
            <input type="email" placeholder="Email" required className="w-full md:w-auto flex-grow border-b border-slate-300 p-3 focus:border-orange-600 outline-none bg-transparent" />
            <input type="tel" placeholder="Phone" required className="w-full md:w-auto flex-grow border-b border-slate-300 p-3 focus:border-orange-600 outline-none bg-transparent" />
            <select className="w-full md:w-auto flex-grow border-b border-slate-300 p-3 focus:border-orange-600 outline-none bg-transparent text-slate-500">
              <option>Book Writing</option>
              <option>Publishing</option>
            </select>
            <button type="submit" className="w-full md:w-auto bg-orange-600 text-white px-10 py-3 rounded font-bold hover:bg-orange-700 transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Are You Ready To Publish Or Just Struggling Your Way Out Of A Weird Plot Twist?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We provide an all-inclusive book writing and global publishing service out to completely turning your writing dream into a reality! Get expert help today.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 pb-6">
            {['Cover Design', 'Formatting', 'Manuscript Proofreading', 'Book Publishing', 'Author Biography', 'Book Marketing'].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="text-orange-600" size={18} />
                {feature}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition">Live Chat</button>
          </div>
        </div>
        <div className="relative flex justify-center items-center h-[500px]">
          <div className="absolute right-10 top-0 w-[400px] h-[400px] bg-slate-100 rounded-full -z-10" />
          <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=600&auto=format&fit=crop" alt="Author" className="w-[350px] h-[350px] object-cover rounded-full shadow-2xl border-8 border-white grayscale" />
          <div className="absolute bottom-10 left-10 w-40 h-60 bg-slate-900 shadow-2xl border border-slate-700 flex flex-col justify-between p-4 transform -rotate-6">
             <div className="text-white font-serif text-center text-sm mt-4">THE CHESS MEN</div>
             <div className="text-orange-500 text-[10px] text-center mb-2 uppercase tracking-widest">Peter May</div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Penguin Self Publishing Premium Book Services</h2>
            <p className="text-slate-500 max-w-3xl mx-auto">Penguin Self Publishing provides top quality professional assistance for all your book writing and publishing needs to dominate the market.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Book Writing", icon: <PenTool size={32}/>, desc: "We have an exceptional team of professional book writers who turn your ideas and unwritten thoughts into an engaging manuscript." },
              { title: "Book Editing", icon: <BookOpen size={32}/>, desc: "We perform a thorough evaluation of your manuscript to fix contextual errors, and suggest improvements." },
              { title: "Book Publishing", icon: <LayoutTemplate size={32}/>, desc: "Are you ready to publish your book? Our proven publishing process is the best fit for publishing your book seamlessly." },
              { title: "Book Marketing", icon: <TrendingUp size={32}/>, desc: "An effective marketing strategy is a must-have requirement of a bestselling book. From identifying your target audience to executing PR." }
            ].map((srv, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 text-center group">
                 <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition">
                   {srv.icon}
                 </div>
                 <h3 className="font-bold text-lg text-slate-900 mb-3">{srv.title}</h3>
                 <p className="text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Let us take your book to the next level</h2>
          <div className="inline-block px-4 py-2 bg-orange-50 rounded text-orange-600 font-bold text-sm uppercase tracking-wider">
            Get up to 50% discount on all our services. Hurry up! Limited time offer.
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition">Get A Quote</button>
            <button className="border-2 border-slate-200 text-slate-700 px-8 py-3 rounded font-bold hover:border-slate-400 transition">Live Chat</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition">Call Now</button>
          </div>
        </div>
      </section>

      {/* ================= SPLIT SECTION 2 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Can't Wait For Your Manuscript To Get Published?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We provide an all-inclusive book writing and global publishing service out to completely turning your writing dream into a reality! Get expert help today.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 pb-6">
            {['Cover Design', 'Formatting', 'Manuscript Proofreading', 'Book Publishing', 'Author Biography', 'Book Marketing'].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="text-orange-600" size={18} />
                {feature}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition">Live Chat</button>
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" 
            alt="Book Spines" 
            className="w-full h-[400px] object-cover rounded-xl shadow-2xl" 
          />
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">What Our Clients Say About Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((card) => (
              <div key={card} className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center">
                <h4 className="font-bold text-slate-900 mb-4">Olivia Turner</h4>
                <p className="text-sm text-slate-600 italic mb-8 leading-relaxed">
                  "Working with Penguin Self Publishing was an absolute joy. Their editors really polished my manuscript without losing my voice, and the formatting is flawless."
                </p>
                <div className="w-full border-t border-slate-100 pt-6 space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase">
                    <span>Professionalism</span> 
                    <div className="flex"><Star className="fill-orange-500 text-orange-500" size={14}/><Star className="fill-orange-500 text-orange-500" size={14}/><Star className="fill-orange-500 text-orange-500" size={14}/><Star className="fill-orange-500 text-orange-500" size={14}/><Star className="fill-orange-500 text-orange-500" size={14}/></div>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase">
                    <span>Quality</span> 
                    <div className="flex"><Star className="fill-orange-500 text-orange-500" size={14}/><Star className="fill-orange-500 text-orange-500" size={14}/><Star className="fill-orange-500 text-orange-500" size={14}/><Star className="fill-orange-500 text-orange-500" size={14}/><Star className="fill-orange-500 text-orange-500" size={14}/></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CONTACT FORM ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-slate-100 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Drop Us a Line</h3>
            <p className="text-slate-500 mb-10">Have a question? We would love to hear from you!</p>
            
            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" required className="w-full border-b border-slate-300 p-3 outline-none focus:border-orange-600 bg-transparent transition" />
                <input type="email" placeholder="Email Address" required className="w-full border-b border-slate-300 p-3 outline-none focus:border-orange-600 bg-transparent transition" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Phone Number" required className="w-full border-b border-slate-300 p-3 outline-none focus:border-orange-600 bg-transparent transition" />
                <select className="w-full border-b border-slate-300 p-3 outline-none focus:border-orange-600 bg-transparent text-slate-500 transition">
                  <option>Select Service</option>
                  <option>Book Writing</option>
                  <option>Publishing</option>
                </select>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-orange-600 text-white font-bold py-4 rounded uppercase tracking-wider hover:bg-orange-700 transition shadow-lg shadow-orange-600/20">
                  Submit Now
                </button>
              </div>
            </form>

            <div className="flex flex-wrap justify-center gap-16 mt-12 pt-8 border-t border-slate-100">
              <div className="text-center">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Call Us Now</span>
                <span className="text-lg font-bold text-slate-800">1-800-000-0000</span>
              </div>
              <div className="text-center">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Us</span>
                <span className="text-lg font-bold text-orange-600">info@penguinselfpublishing.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}