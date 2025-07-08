import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown,  X,  PanelLeft } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm shadow-slate-200 z-50">
      <nav className="flex items-center justify-between p-4 mx-2 sm:mx-12 mt-2 sm:mt-4">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Vimora Logo" className=" h-7 sm:h-9" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-9 items-center text-md text-slate-950 font-inter">
          <li className="hover:text-blue-600">
            <Link to="/pricing">Pricing</Link>
          </li>

          {/* Resources Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setResourcesOpen(!resourcesOpen);
                setMoreOpen(false);
              }}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-4 h-4 transform transition duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {resourcesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 z-20 bg-white border shadow-md p-5 rounded-md max-w-[300px] min-w-[200px] flex flex-col divide-y divide-gray-200">
                <Link to="/about" className="text-sm text-gray-700 hover:text-blue-600 pb-2 font-inter">
                  Blogs
                </Link>
              </div>
            )}
          </li>

          {/* More Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setMoreOpen(!moreOpen);
                setResourcesOpen(false);
              }}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <span>More</span>
              <ChevronDown
                className={`w-4 h-4 transform transition duration-200 ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>
            {moreOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 z-20 bg-white border shadow-md p-5 rounded-md min-w-[300px] flex flex-col divide-y divide-gray-200">
                <Link to="/about" className="text-sm text-gray-700 hover:text-blue-600 pb-2 font-inter">
                  Vimora Vs Others
                </Link>
                <Link to="/careers" className="text-sm text-gray-700 hover:text-blue-600 pt-2 font-inter">
                  What does Vimora mean
                </Link>
              </div>
            )}
          </li>

          {/* CTA Buttons Closer Together */}
          <li className="flex items-center space-x-3">
            <button className="bg-blue-500 px-3 py-2 rounded-lg text-white font-semibold">
              Get started free
            </button>
            <button className="bg-white px-4 py-2 ring-1 ring-blue-500 rounded-lg text-blue-500 font-semibold">
              My account
            </button>
          </li>
        </ul>

        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <PanelLeft className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${menuOpen ? "translate-x-0" : "translate-x-full"} w-2/3`}
        ref={sidebarRef}
      >
        <div className="p-6 pt-20 space-y-6 font-inter text-slate-900">
          <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Pricing
          </Link>

          <div>
            <p className="font-semibold text-slate-600">Resources</p>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block ml-3 mt-1 text-sm hover:text-blue-600">
              Blogs
            </Link>
          </div>

          <div>
            <p className="font-semibold text-slate-600">More</p>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block ml-3 mt-1 text-sm hover:text-blue-600">
              Vimora Vs Others
            </Link>
            <Link to="/careers" onClick={() => setMenuOpen(false)} className="block ml-3 mt-1 text-sm hover:text-blue-600">
              What does Vimora mean
            </Link>
          </div>

          <div className="space-y-3 pt-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full bg-blue-500 px-3 py-2 rounded-lg text-white font-semibold"
            >
              Get started free
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full bg-white px-4 py-2 ring-1 ring-blue-500 rounded-lg text-blue-500 font-semibold"
            >
              My account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
