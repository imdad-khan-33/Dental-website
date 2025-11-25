import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Group 1.png";
import logo2 from "../../assets/Group2.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`${
        isOpen ? "bg-white" : "bg-[#E6F6FE]"
      } fixed inset-x-0 top-0 z-50 shadow-sm transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ---------- LOGO ---------- */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Uifry logo" className="h-10 w-auto sm:h-12" />
          </Link>

          {/* ---------- DESKTOP NAV (centered) ---------- */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-base lg:text-lg font-medium text-gray-700 hover:text-[#1376F8] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ---------- DESKTOP CTA ---------- */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <img
              src={logo2}
              alt="Logo 2"
              className="h-9 w-9 lg:h-10 lg:w-10 rounded-sm"
            />
            <button className="bg-[#1376F8] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* ---------- MOBILE MENU TOGGLE ---------- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#1376F8] transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE DRAWER ---------- */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* panel */}
          <div className="fixed left-0 top-16 w-full bg-white shadow-xl p-6 flex flex-col animate-slide-down">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-xl font-medium text-gray-700 hover:text-[#1376F8] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <button
              className="mt-8 w-full bg-[#1376F8] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
