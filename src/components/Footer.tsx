import { Facebook, Instagram,  Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 pt-16 pb-8 px-6 mt-9">
  <div className="max-w-7xl mx-auto space-y-16">
    
   

    {/* Middle - Links */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-sm">
      {/* tutorials */}
      <div>
        <h4 className="text-slate-900 font-semibold mb-3">Tutorials</h4>
        <ul className="space-y-2 text-slate-600">
          <li><a href="#" className="hover:underline">How-To's</a></li>
          <li><a href="#" className="hover:underline">YouTube Channel</a></li>
          <li><a href="#" className="hover:underline">Examples</a></li>
          <li><a href="#" className="hover:underline">Documentation</a></li>
        </ul>
      </div>
      {/* about */}
      <div>
        <h4 className="text-slate-900 font-semibold mb-3">About</h4>
        <ul className="space-y-2 text-slate-600">
          <li><a href="#" className="hover:underline">Case Studies</a></li>
          <li><a href="#" className="hover:underline">Community</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Feature Roadmap</a></li>
        </ul>
      </div>
      {/* support */}
      <div>
        <h4 className="text-slate-900 font-semibold mb-3">Support</h4>
        <ul className="space-y-2 text-slate-600">
          <li><a href="#" className="hover:underline">Tutorial Center</a></li>
          <li><a href="#" className="hover:underline">Affiliate Program</a></li>
          <li><a href="#" className="hover:underline">Knowledge Base</a></li>
          <li><a href="#" className="hover:underline">Customer Support</a></li>
          <li><a href="#" className="hover:underline">White Glove Onboarding</a></li>
        </ul>
      </div>
      {/*  Socials */}
      <div>
        <h4 className="text-slate-900 font-semibold mb-3">Join the Community</h4>
        <div className="flex gap-4 mt-2 text-slate-600">
            <a href="#" className="hover:text-slate-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 271"
            className="w-5 h-5 fill-current"
          >
            <path d="M236 0h46l-101 115 118 156h-92l-72-94-82 94H0l108-124L0 0h94l65 85zm-14 244h22L76 26H52z"/>
          </svg>
      </a>

          <a href="#" className="hover:text-slate-900"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-slate-900"><Youtube className="w-5 h-5" /></a>
          <a href="#" className="hover:text-slate-900"><Instagram className="w-5 h-5" /></a>
        </div>
      </div>
    </div>

    {/* Bottom - Copyright */}
    <div className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} All rights reserved
    </div>

  </div>
</footer>
  );
}
