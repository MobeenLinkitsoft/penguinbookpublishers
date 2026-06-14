"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import QuoteModal from "@/components/global/QuoteModal";
import { Crisp } from "crisp-sdk-web";

export default function TestimonialsPage() {
  const trustLogos = Array.from({ length: 14 }).map(
    (_, i) => `/Logos/log${i + 1}.png`,
  );

  // Double the array so the infinite scroll animation is completely seamless
  const seamlessLogos = [...trustLogos, ...trustLogos];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [visibleCount, setVisibleCount] = useState(10);

  // 50 custom-tailored, realistic testimonials covering all your services
  const testimonials = [
    {
      name: "Rose O Sullivan",
      review:
        "Penguin Book Publishers is a great place to get your book written. They have experienced ghostwriters on board who actually walk extra miles to fulfill your expectations. I have worked with them and got truly impressed.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Brian Payne",
      review:
        "I can highly recommend Penguin Book Publishers as a fantastic company with really helpful people. Their Book Printing service delivered crisp, beautiful hardcovers right on time. I could not have self-published without them.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Thomas Parker",
      review:
        "This has been a delightful experience. The Amazon Publishing team took care of all the backend KDP formatting and category research. Direct to the point, and great timing. Special thanks for making this come true.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "John Selby",
      review:
        "Penguin has been wonderful in editing my book. They caught so many structural issues I had completely missed. They are working in a very timely and responsive way. A BIG THUMBS UP for the proofreading team!",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Stella Vance",
      review:
        "When I was struggling to publish my first eBook, I had no idea of the difficulties involved. The eBook Writing & Publishing team handled everything from formatting to upload. Highly Recommended!",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Stephen Hendry",
      review:
        "The Book Trailer they produced for my fantasy novel was absolutely cinematic! It boosted my pre-orders by 30%. Trust me, call these people if you want top-tier marketing visuals.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Amanda Higgins",
      review:
        "Their web development team built me an absolutely stunning Author Website. It integrates my blog, my book links, and a newsletter capture form seamlessly. It looks so professional.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Marcus Thorne",
      review:
        "I hired them for Book Marketing, and the ROI has been incredible. Their targeted Amazon Ads and social media push got my thriller into the top 100 in its category within a week.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Evelyn Carter",
      review:
        "The children's Book Illustrations they created for my story are breathtaking. The artist perfectly captured the whimsical tone I wanted. The colors pop beautifully on the printed page.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Derek Lawson",
      review:
        "Kindle Vella was a totally new platform for me. Their episodic writers helped me format my story into perfect bite-sized chapters with great cliffhangers. I'm already seeing great token royalties.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Sarah Jenkins",
      review:
        "The Book Cover Design team blew me away. They gave me four initial concepts, and they were all so good I had a hard time choosing. The final cover looks right at home on a bookstore shelf.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Robert Hughes",
      review:
        "I needed high-quality Article Writing to boost my author blog's SEO. They deliver consistent, well-researched, and perfectly optimized posts every single month.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Linda Meyers",
      review:
        "From the initial ghostwriting draft to the final Book Printing, Penguin Book Publishers held my hand through the entire process. My memoirs are beautifully bound and the paper quality is top-notch.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Jameson Clarke",
      review:
        "I was overwhelmed by Amazon KDP's requirements. Their Amazon Publishing experts formatted my manuscript perfectly, bypassing all the errors I was getting on my own.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Chloe Evans",
      review:
        "Their Proofreading team has an eagle eye. They caught typos and grammatical inconsistencies that three other beta readers missed. Worth every penny for the peace of mind.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "William Foster",
      review:
        "The Book Trailer service is a game changer. I posted the 60-second video they made on Facebook and it got thousands of views and drove massive traffic to my Amazon page.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Natalie Brooks",
      review:
        "I didn't have time to manage my online presence. They built my Author Website and now handle my monthly Article Writing. My organic traffic has tripled in four months.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "George Hamilton",
      review:
        "The Book Marketing campaign they ran for my sci-fi novel was aggressive and effective. They really understand how to target the right audience using Facebook and Amazon ads.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Fiona Gallagher",
      review:
        "I had a rough draft that needed a lot of love. The Book Editing team did a structural edit that completely fixed my pacing issues without losing my unique voice.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Victor Chen",
      review:
        "Publishing on Kindle Vella seemed daunting, but their team mapped out the episodes perfectly. Their formatting and strategic tags helped me gain a loyal following fast.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Diana Ross",
      review:
        "The Book Cover Design I received was phenomenal. It totally captured the dark, moody vibe of my mystery novel. It looks incredibly professional next to traditionally published books.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Arthur Pendelton",
      review:
        "Their eBook Writing & Publishing service is flawless. They took my rough notes and turned them into a polished, 40,000-word business guide. Uploading to Apple Books and Kindle was seamless.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Sophie Bennett",
      review:
        "I absolutely love the Book Illustrations they did for my middle-grade novel. The characters are so expressive. The artist was very patient with my revision requests.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Harrison Ford",
      review:
        "If you need bulk Book Printing, look no further. I ordered 500 paperbacks for a local signing event, and they arrived early, shrink-wrapped, and in pristine condition.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Isabella Martinez",
      review:
        "Their Article Writing service has completely transformed my blog. The SEO optimization is spot on, and the content is genuinely engaging, not just keyword-stuffed fluff.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Ethan Wright",
      review:
        "I utilized their Amazon Publishing and Marketing services together. The synergy was incredible. My book launched to a #1 New Release badge in two different categories.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Mia Thompson",
      review:
        "I was nervous about hiring a ghostwriter, but the Book Writing team at Penguin completely nailed my tone. Reading the final manuscript felt like reading my own thoughts.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Oliver Scott",
      review:
        "The Author Website they designed for me is sleek, fast, and mobile-friendly. I've sold more signed copies directly through the site in one month than I did all last year.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Charlotte King",
      review:
        "Their Book Trailer production is Hollywood quality. The voiceover, the music, the motion graphics—everything came together to make an epic promotional tool.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Daniel Baker",
      review:
        "I had a great experience with their Proofreading service. Quick turnaround, professional tracking of changes, and extremely thorough corrections.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Grace Wilson",
      review:
        "Publishing a serialized story on Kindle Vella requires a specific rhythm. Their episodic writers helped me restructure my chapters to maximize reader retention.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Lucas Adams",
      review:
        "Their Book Cover Design team understood my vision immediately. The typography and imagery blend perfectly. I constantly get compliments on how great the cover looks.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Avery Lewis",
      review:
        "I used their eBook Publishing service for my poetry collection. The formatting was impeccable—no weird line breaks or spacing issues on any e-reader device.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Henry Mitchell",
      review:
        "The Book Marketing team provided a comprehensive plan. From Goodreads giveaways to Amazon PPC, they handled the heavy lifting so I could focus on writing my sequel.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Lily Campbell",
      review:
        "The custom Book Illustrations brought my fantasy world to life. The concept art for the environments was so detailed and rich. A truly talented art department.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Jack Roberts",
      review:
        "I highly recommend their Article Writing services for thought leadership. The ghostwritten pieces they've done for my LinkedIn have generated massive B2B leads.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Zoey Carter",
      review:
        "The Book Printing quality is phenomenal. I opted for case laminate hardcovers with glossy pages, and the final product feels like a premium textbook.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Samuel Perez",
      review:
        "They took all the headache out of Amazon Publishing. They handled the ISBNs, the categories, the backend keywords, and the pricing strategy. So stress-free.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Nora White",
      review:
        "The Author Website they built includes a beautiful portfolio grid for all my titles. It's incredibly easy for me to update whenever I release a new book.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Levi Harris",
      review:
        "A fantastic Book Trailer service. I wasn't sure how to condense a 300-page thriller into a one-minute video, but their scriptwriters and editors pulled it off perfectly.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Mila Clark",
      review:
        "Their developmental Editing service completely saved my plot. They pointed out character inconsistencies I was blind to. My book is 100x better because of them.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Isaac Ramirez",
      review:
        "The Kindle Vella formatting service is super convenient. They chopped up my existing novel into perfect episodic chunks and handled the weekly uploading schedule for me.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Eleanor Green",
      review:
        "My Book Cover Design went from amateur to professional overnight. The designers know exactly what visual tropes work for specific genres to drive clicks.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Julian Nelson",
      review:
        "I've used their Book Writing team for three different projects now. The ghostwriters are professional, communicative, and incredibly fast without sacrificing quality.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Hazel Baker",
      review:
        "Their Book Marketing strategies are rooted in data. They showed me exactly where my ad spend was going and adjusted the campaigns weekly to lower my cost-per-click.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Wyatt Hill",
      review:
        "The Article Writing team provides me with weekly SEO content for my author site. It keeps my readers engaged between book launches and brings in new organic traffic.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Stella Moore",
      review:
        "I was blown away by the Book Illustrations. They provided character turnarounds and sketches before committing to final colors, ensuring I was happy every step of the way.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Gabriel Allen",
      review:
        "Their Book Printing logistics are solid. They shipped 200 copies directly to my distributor and another 50 to my house, all arriving right on schedule.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Aurora Young",
      review:
        "The Amazon Publishing team really understands the algorithm. With their optimized blurb and A+ content design, my conversion rate on Amazon has skyrocketed.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
    {
      name: "Leo King",
      review:
        "From designing my Author Website to producing my Book Trailer, Penguin Book Publishers has been my go-to agency. They are a true one-stop-shop for serious authors.",
      metrics: ["Communication", "Quality of Work", "Delivery", "Support"],
    },
  ];

  // Derive the currently visible subset of testimonials
  const visibleTestimonials = testimonials.slice(0, visibleCount);

  // Handler to load 10 more items
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[450px] flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <p className="text-white text-sm font-bold uppercase tracking-widest mb-2">
            What Our Clients Say
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Testimonials
          </h1>
        </div>
      </section>

      {/* ================= AUTO-MOVING LOGO SLIDER ================= */}
      <section className="bg-orange-600 py-6 border-b border-orange-700 shadow-inner overflow-hidden">
        {/* Inline styles for the infinite marquee animation */}
        <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 30s linear infinite;
                  display: flex;
                  width: max-content;
                }
                .animate-marquee:hover {
                  animation-play-state: paused;
                }
              `}</style>

        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-16 pr-12 md:pr-16 opacity-90">
              {seamlessLogos.map((logoUrl, index) => (
                <div
                  key={index}
                  className="relative h-10 w-28 md:w-32 shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={logoUrl}
                    alt={`Partner Logo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 112px, 128px"
                    className="object-contain brightness-0 invert"
                    /* Note: 'brightness-0 invert' turns logos solid white. Remove this class if you want their original colors! */
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS GRID ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-grow flex flex-col items-center text-center">
                <h4 className="font-bold text-slate-900 mb-4 italic text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="w-full border-t border-slate-100 pt-6 space-y-3 mt-auto">
                {testimonial.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-[11px] font-bold text-slate-500 uppercase tracking-wider"
                  >
                    <span>{metric}</span>
                    <div className="flex gap-0.5">
                      <Star
                        className="fill-orange-500 text-orange-500"
                        size={14}
                      />
                      <Star
                        className="fill-orange-500 text-orange-500"
                        size={14}
                      />
                      <Star
                        className="fill-orange-500 text-orange-500"
                        size={14}
                      />
                      <Star
                        className="fill-orange-500 text-orange-500"
                        size={14}
                      />
                      <Star
                        className="fill-orange-500 text-orange-500"
                        size={14}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= LOAD MORE BUTTON ================= */}
        {visibleCount < testimonials.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="bg-slate-900 text-white px-10 py-4 rounded font-bold hover:bg-orange-600 transition-all duration-300 shadow-md uppercase tracking-widest text-sm flex items-center gap-2"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </section>

      {/* ================= MIDDLE CTA BANNER ================= */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Let us take your book to the next level
          </h2>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">
            We help bring your ideas to life in the form of a sedulously written
            and published book
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition shadow-md">
              +1 646 344 0382
            </button>
            <button
              onClick={() => Crisp.chat.open()}
              className="border-2 border-slate-800 text-slate-900 px-8 py-3 rounded font-bold hover:bg-slate-800 hover:text-white transition"
            >
              Live Chat
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition shadow-md"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTACT FORM SECTION ================= */}
     <section className="py-20 relative bg-white">
           <div className="max-w-5xl mx-auto px-6">
             <div className="text-center mb-10 space-y-2">
               <h2 className="text-2xl font-bold text-slate-900">
                 Drop Us A Line
               </h2>
               <p className="text-orange-600 font-bold text-sm uppercase tracking-wide">
                 Fill out your details below and we'll get back to you shortly.
               </p>
             </div>
   
             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_0_50px_-12px_rgba(234,88,12,0.15)] border border-orange-100 max-w-4xl mx-auto relative z-10">
               <form
                 action="https://api.web3forms.com/submit"
                 method="POST"
                 className="flex flex-col gap-6"
               >
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-6">
                     <input
                       type="hidden"
                       name="access_key"
                       value="75a6dce0-fd56-4a07-8fdf-96b1af7c5da2"
                     />
   
                     <input
                       type="text"
                       placeholder="Name"
                       required
                       name="name"
                       className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                     />
                     <input
                       type="email"
                       placeholder="Email"
                       name="email"
                       required
                       className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                     />
                     <select
                       name="service"
                       className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-500 bg-white appearance-none"
                     >
                       <option value="" disabled selected>
                         Select Service
                       </option>
                       <option value="book-writing">Book Writing</option>
                       <option value="ebook-writing">
                         eBook Writing & Publishing
                       </option>
                       <option value="book-editing">
                         Book Editing & Proofreading
                       </option>
                       <option value="cover-design">Book Cover Design</option>
                       <option value="book-illustrations">
                         Book Illustrations
                       </option>
                       <option value="book-printing">Book Printing</option>
                       <option value="book-marketing">Book Marketing</option>
                       <option value="authors-website">Author's Website</option>
                       <option value="amazon-publishing">Amazon Publishing</option>
                       <option value="article-writing">Article Writing</option>
                       <option value="book-trailer">Book Trailer Services</option>
                       <option value="kindle-vella">Kindle Vella</option>
                     </select>
                   </div>
                   <div className="flex flex-col gap-6">
                     <input
                       type="tel"
                       name="tel"
                       placeholder="Phone Number"
                       required
                       className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white"
                     />
                     <textarea
                       placeholder="Message"
                       required
                       name="message"
                       className="w-full border border-orange-200 rounded-md p-3.5 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition text-slate-700 bg-white flex-grow min-h-[120px] resize-none"
                     ></textarea>
                   </div>
                 </div>
                 <button
                   type="submit"
                   className="w-full bg-orange-600 text-white font-bold py-4 rounded-md uppercase tracking-wider hover:bg-orange-700 transition shadow-md"
                 >
                   Submit
                 </button>
               </form>
             </div>
   
             {/* Contact Info Cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
               <div className="text-center space-y-3">
                 <h4 className="font-bold text-slate-900">Discuss Your Project</h4>
                 <button
                   onClick={() => Crisp.chat.open()}
                   className="w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white"
                 >
                   Live Chat
                 </button>
               </div>
               <div className="text-center space-y-3">
                 <h4 className="font-bold text-slate-900">Make a Call</h4>
                 <a
                   href="tel:+1 646 344 0382"
                   className="block w-full border border-orange-400 text-orange-600 font-medium py-3 px-4 rounded-md hover:bg-orange-50 transition bg-white"
                 >
                   +1 646 344 0382
                 </a>
               </div>
               <div className="text-center space-y-3">
                 <h4 className="font-bold text-slate-900">Send us Email</h4>
                 <a
                   href="mailto:info@penguinbookpublishers.net"
                   className="block w-full border border-orange-400 text-orange-600 font-medium py-3 px-2 rounded-md hover:bg-orange-50 transition bg-white text-sm md:text-base"
                 >
                   info@penguinbookpublishers.net
                 </a>
               </div>
             </div>
           </div>
         </section>
    </div>
  );
}
