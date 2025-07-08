import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md shadow-slate-200 z-50">
      <nav className="flex items-center justify-between p-4 mx-12 mt-5">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Vimora Logo" className="h-9" />
        </div>

        {/* Navigation */}
        <ul className="flex space-x-9 items-center text-md text-slate-950 font-inter">
          {/* Pricing */}
          <li className="hover:text-blue-600">
            <Link to="/pricing">Pricing</Link>
          </li>

          {/* Resources Dropdown */}
          <li className="relative group">
            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 stroke-[2] text-blue-950 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <div className="absolute left-1/2 top-full -translate-x-1/2 w-6 h-4 z-10 pointer-events-auto" />
            <div
              className="absolute left-1/2 top-full -translate-x-1/2 mt-4 z-20 pointer-events-none
                         opacity-0 scale-95 translate-y-2
                         group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                         group-hover:pointer-events-auto transition-all duration-300 ease-out"
            >
              <div className="bg-white border shadow-md p-5 rounded-md max-w-[300px] min-w-[200px] flex flex-col divide-y divide-gray-200">
                <Link
                  to="/about"
                  className="text-sm text-gray-700 hover:text-blue-600 pb-2 font-inter"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </li>

          {/* More Dropdown */}
          <li className="relative group">
            <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <span>More</span>
              <ChevronDown className="w-4 h-4 stroke-[2] text-blue-950 transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <div className="absolute left-1/2 top-full -translate-x-1/2 w-6 h-4 z-10 pointer-events-auto" />
            <div
              className="absolute left-1/2 top-full -translate-x-1/2 mt-4 z-20 pointer-events-none
                         opacity-0 scale-95 translate-y-2
                         group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                         group-hover:pointer-events-auto transition-all duration-300 ease-out"
            >
              <div className="bg-white border shadow-md p-5 rounded-md min-w-[300px] flex flex-col divide-y divide-gray-200">
                <Link
                  to="/about"
                  className="text-sm text-gray-700 hover:text-blue-600 pb-2 font-inter"
                >
                  Vimora Vs HDphotoHub vs Spiro vs Aryeo - which is for you
                </Link>
                <Link
                  to="/careers"
                  className="text-sm text-gray-700 hover:text-blue-600 pt-2 font-inter"
                >
                  What does Vimora mean
                </Link>
              </div>
            </div>
          </li>

          {/* CTA Buttons */}
          <li>
            <button className="bg-blue-500 px-3 py-2 rounded-lg text-white font-semibold">
              Get started free
            </button>
          </li>
          <li>
            <button className="bg-white px-4 py-2 ring-1 ring-blue-500 rounded-lg text-blue-500 font-semibold">
              My account
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
