import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X, PanelLeft } from "lucide-react";





export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  

 

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setResourcesOpen(false);
        setMoreOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile sidebar on outside click
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
    <div className="fixed top-0 left-0 w-full bg-white shadow-md shadow-slate-200 z-50">
      <nav className="flex items-center justify-between p-2  mx-auto mt-2 max-w-[1400px] ">
        {/* Logo */}
        <Link to="/">
          <img src="/Logo_one-1.png" alt="Vimora Logo" className="h-8 lg:h-12" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-9 items-center text-md text-slate-950 font-inter">
          <li className="hover:text-blue-600">
          <Link to="/#pricing">Pricing</Link>

          </li>

          {/* Resources Dropdown */}
          <li
            className="relative mt-4"
            onMouseEnter={() => {
              if (!isMobile) {
                setResourcesOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                setTimeout(() => setResourcesOpen(false), 100); // slight delay
              }
            }}
          >
            <div className="flex flex-col items-center">
              <button
                onClick={() => isMobile && setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Spacer to prevent hover gap */}
              <div className="h-4 pointer-events-none" />

              {/* Dropdown with smooth animation */}
              <div
                className={`
                  absolute left-1/2 top-full -translate-x-1/2 z-20
                  bg-white border shadow-md rounded-md max-w-[300px] min-w-[200px]
                  flex flex-col divide-y divide-gray-200 p-4
                  transition-all duration-200 ease-out
                  transform ${resourcesOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
                `}
              >
                <Link to="/blogs" className="text-sm text-gray-700 hover:text-blue-600 font-inter">
                  Blogs
                </Link>
              </div>
            </div>
          </li>



          {/* More Dropdown */}
          <li
              className="relative mt-4"
              onMouseEnter={() => !isMobile && setMoreOpen(true)}
              onMouseLeave={() => !isMobile && setTimeout(() => setMoreOpen(false), 100)}
            >
              <div className="flex flex-col items-center">
                <button
                  onClick={() => isMobile && setMoreOpen(!moreOpen)}
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition duration-200 ${moreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Spacer to visually separate without hover gap */}
                <div className="h-4 pointer-events-none" />

                {/* Dropdown with transition */}
                <div
                  className={`
                    absolute left-1/2 top-full -translate-x-1/2 z-20
                    bg-white border shadow-md rounded-md min-w-[300px]
                    flex flex-col divide-y divide-gray-200 p-5
                    transition-all duration-200 ease-out
                    transform ${moreOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
                  `}
                >
                  <Link to="/comparison" className="text-sm text-gray-700 hover:text-blue-600 pb-2 font-inter">
                    Vimora Vs Others
                  </Link>
                  <Link to="/meaning" className="text-sm text-gray-700 hover:text-blue-600 pt-2 font-inter">
                    What does Vimora mean
                  </Link>
                </div>
              </div>
            </li>



          {/* CTA Buttons */}
          <li className="flex items-center space-x-3">
            <button className="bg-blue-500 px-3 py-2 rounded-lg text-white font-semibold text-sm lg:text-md
            hover:bg-blue-700 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
              Get started free
            </button>
            <button className="bg-white px-4 py-2 ring-1 ring-blue-500 rounded-lg text-blue-500 font-semibold text-sm lg:text-md
            hover:text-blue-900 hover:-translate-y-1 transition-transform duration-300 ease-in-out">
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
          className={`fixed top-0 right-0 h-full bg-white shadow-lg transform mt-5 transition-transform duration-300 ease-in-out z-40
            ${menuOpen ? "translate-x-0" : "translate-x-full"} w-2/3`}
          ref={sidebarRef}
        >
          {/* Close Icon */}
          <div className="absolute top-4 left-4">
            <button onClick={() => setMenuOpen(false)}>
              <X className="w-6 h-6  text-slate-700 hover:text-blue-600 transition" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 pt-20 space-y-4 font-inter text-slate-900 text-sm">
            <Link
              to="/#pricing"
              onClick={() => setMenuOpen(false)}
              className="block font-medium hover:text-blue-600"
            >
              Pricing
            </Link>
            <hr className="border-gray-200" />

            <div>
              <button
                className="flex items-center gap-1 font-medium text-slate-700 w-full"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transform transition duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {resourcesOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-3">
                  <Link
                    to="/blogs"
                    onClick={() => setMenuOpen(false)}
                    className="block text-blue-600 font-medium"
                  >
                    Blogs
                  </Link>
                </div>
              )}
            </div>
            <hr className="border-gray-200" />

            <div>
              <button
                className="flex items-center gap-1 font-medium text-slate-700 w-full"
                onClick={() => setMoreOpen(!moreOpen)}
              >
                More
                <ChevronDown
                  className={`w-4 h-4 transform transition duration-200 ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>
              {moreOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-3">
                  <Link
                    to="/comparison"
                    onClick={() => setMenuOpen(false)}
                    className="block text-blue-600 font-medium"
                  >
                    Vimora Vs Others
                  </Link>
                  <hr className="border-gray-200" />
                  <Link
                    to="/meaning"
                    onClick={() => setMenuOpen(false)}
                    className="block text-blue-600 font-medium"
                  >
                    What does Vimora mean
                  </Link>
                </div>
              )}
            </div>
            <hr className="border-gray-200" />

            <div className="space-y-2 pt-2">
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
