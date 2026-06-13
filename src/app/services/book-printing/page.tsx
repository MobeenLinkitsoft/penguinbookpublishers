import React from "react";
import { 
  Printer, Package, Layers, Settings, BookCopy, CheckCircle2,
  ChevronLeft, ChevronRight, MessageSquare, Phone, Mail
} from "lucide-react";

export default function BookPrintingPage() {
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
              BOOK PRINTING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Source for Top-Quality Book Printing and Delivery Services.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              We provide authors with complete book printing and publishing services. Get your printed books—from premium hardcovers to crisp paperbacks—delivered right to your doorstep.
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
                <Printer className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option value="printing" selected>Book Printing</option>
                  <option value="publishing">Publishing & Distribution</option>
                  <option value="cover-design">Cover Design</option>
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
          <span className="tracking-tighter font-bold">amazon</span>
        </div>
      </section>

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Your Book is Written, Formatted, And Designed. What's Next?
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Holding a physical copy of your book is the ultimate reward for any author. We provide state-of-the-art Print on Demand (POD) and bulk printing solutions. From high-quality paper stock to perfect binding, we ensure your book feels as premium as it reads.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Whether you need a short run of 50 copies for a local launch or 5,000 copies for worldwide distribution, our fulfillment network guarantees fast, affordable, and flawless delivery.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Live Chat</button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          {/* Physical Book Mockup Representation */}
          <div className="relative w-[320px] h-[350px]">
            {/* Stack of books illusion */}
            <div className="absolute bottom-0 left-4 w-full h-[50px] bg-slate-200 border border-slate-300 rounded shadow-sm transform -translate-y-4 translate-x-4"></div>
            <div className="absolute bottom-0 left-2 w-full h-[50px] bg-slate-100 border border-slate-300 rounded shadow-md transform -translate-y-8 translate-x-2"></div>
            
            {/* Top Book */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-slate-800 rounded shadow-2xl border-l-4 border-slate-700 transform -translate-y-12 overflow-hidden flex flex-col justify-between">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-full border-t border-b border-orange-500/50 py-4 backdrop-blur-sm bg-slate-900/40">
                  <h3 className="font-serif text-white font-black text-3xl uppercase tracking-widest drop-shadow-lg">Printed<br/>Edition</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3-COLUMN APPROACH SECTION ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">Our Approach</p>
            <h2 className="text-3xl font-bold text-slate-900 uppercase">Standard And Custom Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Binding and Paper Types</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Select from perfect binding (paperback), case laminate (hardcover), or dust jackets. Choose cream or white paper for fiction, or premium glossy stock for children's books and photography.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <Settings size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Customization Options</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Stand out on the shelves with custom trim sizes, matte or glossy cover finishes, foil stamping, embossing, and specialized interior color printing to match your exact vision.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <Package size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Short Run & Bulk Orders</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                No minimum order requirements. Print exactly what you need. Leverage Print on Demand (POD) for ongoing sales, or order in bulk to reduce cost-per-unit for your personal inventory.
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
            Call us right now. Bring your digital manuscript into the physical world!
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
          <p className="text-slate-100 text-sm mb-12">A glimpse of our recently printed and distributed books belonging to multiple genres.</p>
          
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
                <div key={i} className="aspect-[2/3] w-full bg-slate-800 shadow-xl overflow-hidden rounded border border-slate-500/50">
                  <img 
                    src={`https://images.unsplash.com/photo-${imgId}?q=80&w=400&auto=format&fit=crop&crop=focalpoint&h=600`} 
                    alt={`Printed Book Portfolio ${i}`}
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
                src="https://images.unsplash.com/photo-1606214174585-fd10f68115bf?q=80&w=800&auto=format&fit=crop" 
                alt="Printing Press Process" 
                className="w-full h-[500px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl grayscale-[20%]"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-10">
              
              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">1</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Printing Consultation & Specs</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We finalize the physical attributes of your book. You select the trim size, paper weight, binding type (paperback vs. hardcover), and cover finish (matte vs. glossy).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">2</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Proofing & Sample Copy</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before mass printing, we run a digital or physical proof. This ensures the bleeds are correct, the colors print accurately, and the text margins are perfect.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">3</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Mass Printing & Quality Check</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Once approved, your book hits the press. Our production managers conduct rigorous quality assurance checks to ensure every single copy meets our pristine standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">4</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Packaging & Worldwide Delivery</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The final books are securely boxed to prevent damage. We ship directly to your doorstep, your publisher, or straight to global distribution warehouses.
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
                    <option>Book Printing</option>
                    <option>Distribution</option>
                    <option>Formatting</option>
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