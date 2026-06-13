import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  // Structured data for the testimonial cards to keep the code clean
  const testimonials = [
    {
      name: "Rose O Sullivan",
      review: "Penguin Self Publishing is a great place to get your book written. They have experienced writers on board who actually walk extra miles to fulfill your expectations. I have worked with them and got truly impressed.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"]
    },
    {
      name: "Brian Payne",
      review: "I can highly recommend Penguin Self Publishing as a fantastic company with really helpful people that deliver great results on time. I could not have self published without them. Thank you Penguin Self Publishing.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"]
    },
    {
      name: "Thomas Parker",
      review: "This has been a delightful publishing experience, it is as someone is talking like you and thinking the same way, direct to the point, and great timing. Special thanks for making this come true in a short period of time and thorough work.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"]
    },
    {
      name: "John Selby",
      review: "Penguin Self Publishing has been wonderful in editing my book. They are working in a very timely and responsive way. I really like working with them and have already recommended them to several other people. A BIG THUMBS UP!",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"]
    },
    {
      name: "Stella Vance",
      review: "When I was struggling to publish my first book, I had no idea of the difficulties involved. But when I got in touch with Penguin Self Publishing, my book was published in a few period with their expertise. Highly Recommended!",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"]
    },
    {
      name: "Stephen Hendry",
      review: "Penguin Self Publishing, I have made a friend for life. It's one thing to call a man like a writer, but if you want all the bells and whistles in a completed writing. Trust me call these people! Thanks a lot for making my dream come true.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"]
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[450px] flex flex-col justify-center">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        {/* Hero Content (pt-24 to account for absolute navbar) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">
            What Our Clients Say
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Testimonials
          </h1>
        </div>
      </section>

      {/* ================= TRUST LOGO BANNER ================= */}
      <section className="bg-orange-600 py-6 border-b border-orange-700 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 text-white font-bold text-xl md:text-2xl opacity-90">
          <span className="flex items-center gap-2"><span className="text-sm">GET IT ON</span> Google Play</span>
          <span className="tracking-tighter font-serif">Scribd.</span>
          <span className="font-serif text-lg border border-white px-2 py-1">hachette BOOK GROUP</span>
          <span className="font-serif text-lg italic">HarperCollinsPublishers</span>
          <span className="uppercase text-sm border-l-2 border-white pl-2 leading-tight">Penguin<br/>Random<br/>House</span>
        </div>
      </section>

      {/* ================= TESTIMONIALS GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              
              <div className="flex-grow flex flex-col items-center text-center">
                <h4 className="font-bold text-slate-900 mb-4 italic text-lg">{testimonial.name}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  "{testimonial.review}"
                </p>
              </div>
              
              <div className="w-full border-t border-slate-100 pt-6 space-y-3 mt-auto">
                {testimonial.metrics.map((metric, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <span>{metric}</span> 
                    <div className="flex gap-0.5">
                      <Star className="fill-orange-500 text-orange-500" size={14}/>
                      <Star className="fill-orange-500 text-orange-500" size={14}/>
                      <Star className="fill-orange-500 text-orange-500" size={14}/>
                      <Star className="fill-orange-500 text-orange-500" size={14}/>
                      <Star className="fill-orange-500 text-orange-500" size={14}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let us take your book to the next level</h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
            We help bring your ideas to life in the form of a sedulously written and published book
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition shadow-md">(661) 460-8454</button>
            <button className="border-2 border-slate-800 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-800 hover:text-white transition">Live Chat</button>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition shadow-md">Get A Quote</button>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTACT FORM SECTION ================= */}
      <section className="py-24 relative bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Section Titles */}
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Drop Us A Line</h2>
            <p className="text-orange-600 font-bold text-sm uppercase tracking-wide">Fill out your details below and we'll get back to you shortly.</p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-orange-100 max-w-4xl mx-auto relative z-10">
            <form className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required 
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white" 
                  />
                  <select className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-500 bg-white appearance-none">
                    <option>Book Writing</option>
                    <option>Book Editing</option>
                    <option>Publishing</option>
                  </select>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white" 
                  />
                  <textarea 
                    placeholder="Message" 
                    required 
                    className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white flex-grow min-h-[120px] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-orange-600 text-white font-bold py-4 rounded-md uppercase tracking-wider hover:bg-orange-700 transition shadow-md mt-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
              <button className="w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white shadow-sm">
                Live Chat
              </button>
            </div>

            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Make a Call</h4>
              <a href="tel:6614608454" className="block w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white shadow-sm">
                (661) 460-8454
              </a>
            </div>

            <div className="text-center space-y-3">
              <h4 className="font-bold text-slate-900">Send us Email</h4>
              <a href="mailto:info@penguinselfpublishing.com" className="block w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white text-sm md:text-base shadow-sm">
                info@penguinselfpublishing.com
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}