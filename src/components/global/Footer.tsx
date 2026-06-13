import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center">
              <BookOpen className="text-white" size={20} />
            </div>
            <span className="font-bold text-lg leading-none tracking-tight">PENGUIN</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed pr-4">
            Penguin Self Publishing is a platform that offers professional self publishing, editing, and marketing services to independent authors around the world.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="text-slate-400 space-y-3 text-sm">
            <li><Link href="/services" className="hover:text-orange-500 transition">Book Writing Services</Link></li>
            <li><Link href="/services" className="hover:text-orange-500 transition">Book Editing Services</Link></li>
            <li><Link href="/services" className="hover:text-orange-500 transition">Book Publishing Services</Link></li>
            <li><Link href="/services" className="hover:text-orange-500 transition">Book Marketing Services</Link></li>
            <li><Link href="/services" className="hover:text-orange-500 transition">Audio Book Services</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="text-slate-400 space-y-3 text-sm">
            <li><Link href="/testimonials" className="hover:text-orange-500 transition">Testimonials</Link></li>
            <li><Link href="/about" className="hover:text-orange-500 transition">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-500 transition">Portfolio</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-orange-500 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-lg mb-6">Connect</h4>
           <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for exclusive discounts.</p>
           <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-slate-800 border border-slate-700 text-white rounded p-2 text-sm w-full focus:border-orange-500 outline-none transition" />
              <button className="bg-orange-600 text-white px-4 rounded text-sm font-bold hover:bg-orange-700 transition">Go</button>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>Copyright © {new Date().getFullYear()} Penguin Self Publishing. All Rights Reserved.</p>
        <div className="flex gap-4">
           <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
           <Link href="#" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}