import React from "react";
import { 
  Monitor, Smartphone, ShoppingCart, Search, Code, CheckCircle2,
  ChevronLeft, ChevronRight, MessageSquare, Phone, Mail
} from "lucide-react";

export default function AuthorWebsitePage() {
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
              AUTHOR WEBSITE DESIGN
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Give Your Readers An Engaging Online Experience.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Your readers look forward to hearing from you. Don't let them down. A professional author website is your digital home—the central hub to showcase your portfolio, sell books directly, and grow your mailing list.
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
                <Monitor className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option value="author-website" selected>Author Website Design</option>
                  <option value="ecommerce">E-Commerce Integration</option>
                  <option value="landing-page">Book Launch Landing Page</option>
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
          <span className="tracking-tighter">amazon</span>
          <span className="tracking-tight">iBooks</span>
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 (Browser Mockup) ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Your Digital Home: A Platform Built for Authors
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Social media platforms come and go, but your website belongs entirely to you. We design intuitive, fast, and stunning websites tailored to showcase your bibliography, feature your biography, and capture reader emails.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Our web development team ensures your site is fully optimized for search engines (SEO) so fans can easily find you. Whether you need a simple landing page for your debut novel or a complex e-commerce store to sell signed copies directly, we build it flawlessly.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Live Chat</button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Custom Web Browser Mockup */}
          <div className="w-[450px] h-[300px] bg-slate-100 rounded-lg shadow-2xl border border-slate-300 overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-500">
             {/* Browser Header */}
             <div className="h-8 bg-slate-200 border-b border-slate-300 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 h-4 w-48 bg-white rounded-sm"></div>
             </div>
             {/* Browser Body (The "Website") */}
             <div className="flex-grow bg-white flex flex-col relative overflow-hidden">
                {/* Hero area of the mockup site */}
                <div className="h-1/2 w-full bg-slate-800 flex items-center justify-between px-6">
                   <div className="space-y-2 w-1/2">
                      <div className="w-3/4 h-3 bg-slate-600 rounded"></div>
                      <div className="w-full h-2 bg-slate-700 rounded"></div>
                      <div className="w-1/2 h-4 bg-orange-500 rounded mt-4"></div>
                   </div>
                   {/* Book cover in the mockup */}
                   <div className="w-16 h-24 bg-gradient-to-tr from-orange-400 to-rose-600 border-2 border-white shadow-lg transform -translate-y-2 rotate-6"></div>
                </div>
                {/* Content area of the mockup site */}
                <div className="h-1/2 w-full p-4 flex gap-4">
                   <div className="w-1/3 h-full bg-slate-100 rounded"></div>
                   <div className="w-1/3 h-full bg-slate-100 rounded"></div>
                   <div className="w-1/3 h-full bg-slate-100 rounded"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= 3-COLUMN APPROACH SECTION ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">Features That Empower</p>
            <h2 className="text-3xl font-bold text-slate-900 uppercase">Built for Readers, Designed for Sales</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <Smartphone size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Responsive & Mobile First</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Over 60% of web traffic comes from mobile devices. We ensure your website looks stunning and functions perfectly on smartphones, tablets, and massive desktop monitors alike.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <ShoppingCart size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">E-Commerce Integration</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Stop losing royalties to third-party retailers. We can integrate secure payment gateways so you can sell physical books, digital downloads, and merchandise directly to your fans.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <Search size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">SEO & Lead Generation</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                We optimize your site for search engines and integrate tools like Mailchimp or ConvertKit. Capture reader emails effortlessly to build a loyal fanbase for your next book launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Let us take your online presence to the next level
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
            Call us right now. Build a digital hub that turns casual visitors into super fans!
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
          <p className="text-slate-100 text-sm mb-12">A glimpse of the custom websites we've launched for independent and best-selling authors.</p>
          
          <div className="flex items-center justify-between gap-4">
            <button className="text-white hover:text-orange-400 transition hidden md:block"><ChevronLeft size={40}/></button>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
              {[
                "1498050108023-c5249f4df085", 
                "1481482257002-039c0148167c", 
                "1522881451255-f5504fc81102", 
                "1507721999472-8ed4421c4af2", 
                "1555421689-d68471e189f2"
              ].map((imgId, i) => (
                <div key={i} className="aspect-[2/3] w-full bg-slate-800 shadow-xl overflow-hidden rounded border border-slate-500/50 relative group">
                  <img 
                    src={`https://images.unsplash.com/photo-${imgId}?q=80&w=400&auto=format&fit=crop&crop=top&h=600`} 
                    alt={`Author Website Portfolio ${i}`}
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 cursor-pointer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-900/90 text-white text-[10px] uppercase tracking-widest font-bold py-2 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    View Website
                  </div>
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
            <h2 className="text-3xl font-bold text-orange-600">Our Web Design Process</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#e2e8f0_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                alt="Web Development Process" 
                className="w-full h-[500px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-10">
              
              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">1</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Discovery & Wireframing</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We start by discussing your brand, genre, and goals. We map out the site architecture (sitemap) and create wireframes to determine exactly where your books, bio, and lead captures will sit.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">2</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">UI/UX Design Mockups</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our designers craft beautiful, high-fidelity visual mockups using your book covers and professional typography to establish a stunning, cohesive visual identity for your author brand.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">3</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Development & Integration</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Once approved, our developers bring the design to life using modern, fast code. We integrate your blog, secure your e-commerce shop, and hook up your email marketing platforms.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">4</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Testing, SEO & Launch</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We test the site across all devices and browsers, apply robust on-page SEO so readers can find you on Google, and finally, push your new digital home live to the world.
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
                    <option>Author Website Design</option>
                    <option>E-Commerce Setup</option>
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