import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 pt-16 pb-8 px-6 mt-9">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top - Email Form */}
        <div className="text-center mb-48">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-9">
            Try VIMORA For Free
          </h2>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md bg-white text-slate-800 placeholder-slate-500 border border-slate-400 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 w-64 rounded-md hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Middle - Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Tutorials</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#">Resources</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Examples</a></li>
              <li><a href="#">Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Feature Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#">Tutorial Center</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Knowledge Base</a></li>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">White Glove Onboarding</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Join the Community</h4>
            <div className="flex gap-4 mt-2 text-slate-600">
              <a href="#" className="hover:text-slate-900"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-slate-900"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-slate-900"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="hover:text-slate-900"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © 2025 All rights reserved
        </div>
      </div>
    </footer>
  );
}
