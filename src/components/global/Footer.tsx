import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 border-t-[6px] border-orange-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image
                src="/Image/logo.png"
                alt="Penguin Book Publishers Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight">
                PENGUIN
              </span>
              <span className="text-slate-400 text-[9px] tracking-widest uppercase mt-1">
                Book Publishers
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed pr-4">
            Penguin Book Publishers is a platform that offers professional
            self-publishing, editing, and marketing services to independent
            authors around the world.
          </p>

          {/* Trustpilot Logo */}
          <div className="pt-2">
            <img
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg"
              alt="Trustpilot"
              className="h-8 object-contain"
            />
          </div>
        </div>

        {/* Column 2: Comprehensive Services */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
          <ul className="text-slate-400 space-y-2.5 text-sm">
            <li>
              <Link
                href="/services/book-writing"
                className="hover:text-orange-500 transition"
              >
                Book Writing
              </Link>
            </li>
            <li>
              <Link
                href="/services/ebook-writing"
                className="hover:text-orange-500 transition"
              >
                eBook Writing & Publishing
              </Link>
            </li>
            <li>
              <Link
                href="/services/proofreading"
                className="hover:text-orange-500 transition"
              >
                Book Editing & Proofreading
              </Link>
            </li>
            <li>
              <Link
                href="/services/cover-design"
                className="hover:text-orange-500 transition"
              >
                Book Cover Design
              </Link>
            </li>
            <li>
              <Link
                href="/services/book-illustration"
                className="hover:text-orange-500 transition"
              >
                Book Illustrations
              </Link>
            </li>
            <li>
              <Link
                href="/services/book-printing"
                className="hover:text-orange-500 transition"
              >
                Book Printing
              </Link>
            </li>
            <li>
              <Link
                href="/services/book-marketing"
                className="hover:text-orange-500 transition"
              >
                Book Marketing
              </Link>
            </li>
            <li>
              <Link
                href="/services/authors-website"
                className="hover:text-orange-500 transition"
              >
                Author's Website
              </Link>
            </li>
            <li>
              <Link
                href="/services/amazon-publishing"
                className="hover:text-orange-500 transition"
              >
                Amazon Publishing
              </Link>
            </li>
            <li>
              <Link
                href="/services/article-writing"
                className="hover:text-orange-500 transition"
              >
                Article Writing
              </Link>
            </li>
            <li>
              <Link
                href="/services/book-trailer"
                className="hover:text-orange-500 transition"
              >
                Book Trailer Services
              </Link>
            </li>
            <li>
              <Link
                href="/services/kindle-vella"
                className="hover:text-orange-500 transition"
              >
                Kindle Vella
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Useful Links (Replaced Company) */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Useful Links</h4>
          <ul className="text-slate-400 space-y-2.5 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-orange-500 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="hover:text-orange-500 transition"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-orange-500 transition"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Contact */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Connect</h4>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            Subscribe to our newsletter for exclusive publishing discounts and
            tips.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="bg-slate-800 border border-slate-700 text-white rounded p-3 text-sm w-full focus:border-orange-500 outline-none transition"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-5 rounded text-sm font-bold hover:bg-orange-700 transition"
            >
              Go
            </button>
          </form>

          {/* Direct Contact Info */}
          <div className="mt-8 space-y-2 text-sm text-slate-400">
            <p className="flex items-center gap-2">
              <span className="font-bold text-orange-500">Phone:</span> +1 646 344 0382
            </p>
            <p className="flex items-center gap-2">
              <span className="font-bold text-orange-500">Email:</span>{" "}
              info@penguinbookpublishers.net
            </p>
          </div>

          {/* Secure Payments Badge */}
          <div className="mt-6 border border-slate-700 rounded-lg p-3 bg-slate-800/50 inline-block w-full">
            <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <span className="w-1.5 h-2.5 bg-orange-500 rounded-sm"></span>{" "}
              Secure Payment By
            </div>
            <div className="flex gap-2">
              <Image
                src="/Logos/visa.png"
                alt="Penguin Book Publishers Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/Logos/master.jpg"
                alt="Penguin Book Publishers Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/Logos/wire.png"
                alt="Penguin Book Publishers Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/Logos/ae.png"
                alt="Penguin Book Publishers Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <Image
                src="/Logos/dis.png"
                alt="Penguin Book Publishers Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/2560px-Former_Visa_%28company%29_logo.svg.png" alt="Visa" className="h-5 bg-white rounded px-1 py-0.5 object-contain" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5 bg-white rounded px-1 py-0.5 object-contain" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Discover_Card_logo.svg/1200px-Discover_Card_logo.svg.png" alt="Discover" className="h-5 bg-white rounded px-1 py-0.5 object-contain" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="h-5 bg-white rounded px-1 py-0.5 object-contain" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col justify-center items-center text-slate-500 text-sm text-center">
        <p>
          Copyright © {new Date().getFullYear()} Penguin Book Publishers. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
