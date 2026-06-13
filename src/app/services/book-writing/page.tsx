import React from "react";
import { 
  CheckCircle2, Users, BookOpen, PenTool, 
  ChevronLeft, ChevronRight, MessageSquare, Phone, Mail 
} from "lucide-react";

export default function BookWritingPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[600px] flex flex-col justify-center">
        {/* Background Image & Overlay (Book on grass) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">
              BOOK WRITING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Professional Book Writing Services Tailored to Your Genre and Niche
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              At Penguin Self Publishing, we have a highly experienced and expert team, your vision is safe in the hands of our professional book writers. We have a solid process mapping everything from chapter outlining to proofreading perfectly.
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
                <PenTool className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option>Book Writing</option>
                  <option>Book Editing</option>
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

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            We Match You with Professional Book Writing Service Experts
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Committing your thoughts, ideas and dreams to writing is extremely difficult without having any professional assistance in getting to know how to map it out.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Hire our professional book writing services you can never regret hiring us, as there is a whole process, dedicated account managers, quality assurance, and our diverse pool of professional writers mapping it out perfectly!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Live Chat</button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          {/* 3D Book Mockup Dummy */}
          <div className="w-[220px] h-[330px] bg-white shadow-2xl border border-slate-200 transform rotate-12 flex flex-col hover:rotate-0 transition-all duration-500">
             <div className="h-2/3 bg-orange-50 border-b border-orange-100 flex items-center justify-center p-4">
                 <div className="text-center">
                    <span className="block text-orange-600 font-serif font-bold text-xl leading-tight">Give Your<br/>Body a<br/>Pep Talk</span>
                 </div>
             </div>
             <div className="h-1/3 bg-slate-900 text-white flex items-center justify-center">
                 <span className="text-[10px] tracking-widest uppercase">Health & Wellness</span>
             </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT-CENTRIC APPROACH ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Approach is Client-Centric and Bespoke</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Working in a Team</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                At Penguin Self Publishing, we are focused heavily on collaboration. Through establishing constant communication, regular drafts, revisions, feedback processes, and approvals, it's a team effort!
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <PenTool size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Professional Book Writing Service</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Our approach to book writing is extremely dynamic. Depending on your specifications and ideas, we match you up with an expert professional who turns your dreams into a published masterpiece.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white shadow-sm border border-slate-100 text-orange-600 rounded-full flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Flawless Executions</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                Penguin Self Publishing leaves no room for errors. After our writers complete your manuscript, it is reviewed by a team of highly-skilled editors who proofread everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            With our professional book writing services, take your book to the next level
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

      {/* ================= MINI PORTFOLIO ROW ================= */}
      <section className="py-20 bg-slate-400">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Our Portfolio</h2>
          <p className="text-slate-100 text-sm mb-12">A glimpse of our recently published books belonging to multiple genres.</p>
          
          <div className="flex items-center justify-between gap-4">
            <button className="text-white hover:text-orange-400 transition hidden md:block"><ChevronLeft size={40}/></button>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="aspect-[2/3] w-full bg-slate-800 shadow-xl overflow-hidden rounded border border-slate-500/50">
                  <img 
                    src={`https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop&crop=focalpoint&h=600&rnd=${i}`} 
                    alt={`Portfolio Book ${i}`}
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
            <h2 className="text-3xl font-bold text-orange-600">Our Process For Book Writing Services Is Divided In Four Steps</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              {/* Dotted pattern decoration */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#e2e8f0_3px,transparent_3px)] [background-size:16px_16px] -z-10 opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" 
                alt="Writing Process" 
                className="w-full h-[500px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
              />
            </div>

            {/* Right Vertical Steps */}
            <div className="space-y-10">
              
              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">1</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Research And Outlining The Draft</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before jumping straight into the writing process, our experts conduct thorough research on your given topic. Therefore, we shape a rough outline comprising the plot, setting, and characters.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">2</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Writing Original Manuscript</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Once the outline gets your approval, our team starts writing original content. It is extremely crucial to maintain the narrative to resonate with the target audience.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">3</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Editing And Proofreading</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The entire written piece goes through a rigorous checking process to filter out any grammatical errors, missing structure, or typos. This step is pivotal to execute a flawless manuscript.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-7xl font-bold text-slate-200 font-serif leading-none shrink-0 w-16 text-center">4</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Formatting, Typesetting and Design</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    At this stage, your approved manuscript is formatted strictly referring to international publishing standards. We design a cover page, add illustrations, and give it a complete professional look.
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
                    <option>Book Writing</option>
                    <option>Book Editing</option>
                    <option>Publishing</option>
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