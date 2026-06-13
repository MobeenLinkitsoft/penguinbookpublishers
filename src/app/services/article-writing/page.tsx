import React from "react";
import { 
  FileText, Search, List, PenTool, Edit3, LayoutTemplate, CheckCircle2,
  ThumbsUp, ThumbsDown, Target, TrendingUp, ChevronRight,
  MessageSquare, Phone, Mail, Award
} from "lucide-react";

export default function ArticleWritingPage() {
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
              ARTICLE WRITING SERVICES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              High-Quality Article Writing Services to Boost Your Digital Presence.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Engage your readers, build authority in your niche, and drive organic traffic to your website with expertly crafted, SEO-optimized articles and blog posts written by industry specialists.
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
                <FileText className="text-orange-300" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started!</h3>
              
              <form className="space-y-4">
                <input type="text" placeholder="Full Name *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="email" placeholder="Email Address *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <input type="tel" placeholder="Phone Number *" required className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition bg-white" />
                <select className="w-full border border-slate-200 rounded p-3 text-sm focus:border-orange-500 outline-none transition text-slate-500 bg-white">
                  <option>Select Service</option>
                  <option value="article-writing" selected>Article Writing</option>
                  <option value="blog-writing">Blog Management</option>
                  <option value="seo-content">SEO Content Creation</option>
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

      {/* ================= INTRO SPLIT SECTION ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Why Hire Article Writing Services?
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            In the digital age, content is king. Whether you are an author trying to build a readership, or a business aiming to dominate search engine results, publishing consistent, high-quality articles is essential. 
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "Boost Search Engine Rankings (SEO)",
              "Establish Industry Authority",
              "Engage and Retain your Audience",
              "Drive Conversions and Book Sales"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="text-orange-600" size={20} /> {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition uppercase tracking-wider text-sm">Get A Quote</button>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center h-[400px]">
          <div className="relative w-full max-w-[450px]">
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-orange-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop" 
              alt="Content Writing" 
              className="w-full h-[350px] object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* ================= 6-GRID PROCESS SECTION ================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 uppercase">Penguin Self Publishing Follows a Strict Article Writing Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm">We ensure every piece of content meets rigorous standards of quality, originality, and engagement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Search size={24}/>, title: "1. Niche Research", desc: "We conduct deep dives into your industry to ensure factual accuracy and uncover trending topics." },
              { icon: <List size={24}/>, title: "2. Strategic Outlining", desc: "Crafting a logical structure with clear headings to ensure readability and maximum SEO benefits." },
              { icon: <PenTool size={24}/>, title: "3. Expert Drafting", desc: "Our native-speaking writers create engaging, original content that mirrors your brand's unique voice." },
              { icon: <Edit3 size={24}/>, title: "4. Editorial Review", desc: "Rigorous proofreading and copy-editing to eliminate all grammatical errors and improve flow." },
              { icon: <Target size={24}/>, title: "5. SEO Optimization", desc: "Strategic placement of primary and secondary keywords, meta tags, and internal link planning." },
              { icon: <LayoutTemplate size={24}/>, title: "6. Final Formatting", desc: "We format the article for web readability, utilizing bullet points, bold text, and optimal paragraph lengths." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3-COLUMN FACTS SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Facts About Article Writing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-3">
              <h3 className="font-bold text-orange-600 text-xl">Engagement Drives Sales</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Companies and authors who publish 16+ articles a month generate 4.5x more leads than those who publish 4 or fewer.</p>
            </div>
            <div className="text-center space-y-3 border-x-0 md:border-x border-slate-200 px-4">
              <h3 className="font-bold text-orange-600 text-xl">SEO is Mandatory</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Search engines favor fresh, high-quality content. Consistently updating your blog is the fastest way to rank on the first page of Google.</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="font-bold text-orange-600 text-xl">Long-Form Wins</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Articles exceeding 1,500 words generate significantly more social shares, backlinks, and sustained organic traffic over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALTERNATING FEATURE BLOCKS ================= */}
      <section className="py-12 bg-slate-50">
        
        {/* Block 1 (Image Left, Text Right) */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[350px] w-full hidden md:block">
            <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop" alt="Perfect Articles" className="w-full h-full object-cover rounded-xl shadow-lg" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Perfect Articles To Publish For Your Audience</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your readers have unique expectations. We don't write generic filler. We craft purposeful content designed to educate, entertain, and convert. Every article is a strategic asset for your brand.
            </p>
          </div>
        </div>

        {/* Block 2 (Text Left, Image Right) */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4 order-last lg:order-first">
            <h3 className="text-2xl font-bold text-slate-900">Value & Focus</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminate fluff. Our writers focus on delivering high-density value in every paragraph. By answering your audience's most pressing questions, we position you as an undisputed authority in your field.
            </p>
          </div>
          <div className="relative h-[350px] w-full hidden md:block">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" alt="Value and Focus" className="w-full h-full object-cover rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Block 3 (Image Left, Text Right) */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[350px] w-full hidden md:block">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Call to Action" className="w-full h-full object-cover rounded-xl shadow-lg" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Call To Action</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              An article without a goal is a missed opportunity. We seamlessly weave compelling Calls-to-Action (CTAs) into the narrative, guiding readers to subscribe to your newsletter or purchase your book.
            </p>
          </div>
        </div>

        {/* Block 4 (Text Left, Image Right) */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4 order-last lg:order-first">
            <h3 className="text-2xl font-bold text-slate-900">The Bottom Line</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Outsourcing your article writing saves you hundreds of hours, allowing you to focus on your core business or drafting your next big novel, while we keep your audience consistently engaged.
            </p>
          </div>
          <div className="relative h-[350px] w-full hidden md:block">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Bottom Line" className="w-full h-full object-cover rounded-xl shadow-lg" />
          </div>
        </div>

      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Let us take your content strategy to the next level
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
            Call us right now to discuss your custom content marketing plan!
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

      {/* ================= PROS & CONS SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Pros & Cons of Article Writing Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Pros Column */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-emerald-500">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <ThumbsUp className="text-emerald-500" size={32} />
                <h3 className="text-2xl font-bold text-slate-900">The Pros</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Award className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">Professional Quality</h4>
                    <p className="text-sm text-slate-600 mt-1">Access to elite writers ensures polished, error-free, and highly engaging content.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <TrendingUp className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">SEO Expertise</h4>
                    <p className="text-sm text-slate-600 mt-1">Writers understand keyword density and metadata, driving organic traffic to your site.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">Time Efficiency</h4>
                    <p className="text-sm text-slate-600 mt-1">Frees up your schedule, allowing you to focus entirely on your core business or writing your next book.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Cons Column */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-rose-500">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <ThumbsDown className="text-rose-500" size={32} />
                <h3 className="text-2xl font-bold text-slate-900">The Cons</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <ChevronRight className="text-rose-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">Financial Investment</h4>
                    <p className="text-sm text-slate-600 mt-1">High-quality content requires a budget. It is an investment rather than a free DIY endeavor.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ChevronRight className="text-rose-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">Finding the Right Voice</h4>
                    <p className="text-sm text-slate-600 mt-1">It may take a draft or two for the writer to perfectly capture your unique personal tone.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <ChevronRight className="text-rose-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-800">Communication Required</h4>
                    <p className="text-sm text-slate-600 mt-1">You must provide clear briefs and outlines; vague instructions lead to generic content.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CONTACT FORM SECTION ================= */}
      <section className="py-24 relative bg-white border-t border-slate-100">
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
                    <option>Article Writing</option>
                    <option>Blog Management</option>
                    <option>SEO Copywriting</option>
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