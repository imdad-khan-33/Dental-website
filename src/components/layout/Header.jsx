import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Group 1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center py-2 sm:py-3 lg:py-4 px-2 sm:px-4 lg:px-8">
      <div
        className={`w-[95%] sm:w-[90%] lg:w-full lg:max-w-[1280px] h-auto sm:h-[70px] lg:h-[80px] rounded-[10px] shadow-sm px-3 sm:px-6 lg:px-8 flex items-center justify-between transition-colors duration-300 ${
          isScrolled ? "bg-white" : "bg-[#E6F6FE]"
        }`}
      >
        {/* ---------- LOGO ---------- */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-7 sm:h-9 lg:h-10 w-auto" />
        </Link>

        {/* ---------- DESKTOP NAV (centered) ---------- */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-4 xl:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm lg:text-base font-medium text-gray-700 hover:text-[#1376F8] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ---------- DESKTOP  ---------- */}
        {/* <div className="hidden lg:flex items-center gap-2 lg:gap-4">
          <Link
            to="/login"
            className="text-sm lg:text-base font-medium text-gray-700 hover:text-[#1376F8] transition-colors px-2 py-1"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#1376F8] text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-medium text-sm lg:text-base hover:bg-blue-700 transition-colors"
          >
            Sign up
          </Link>
        </div> */}

        {/* ---------- TABLET CTA ---------- */}
        {/* <div className="hidden md:flex lg:hidden items-center gap-2">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-[#1376F8] transition-colors px-2 py-1"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#1376F8] text-white px-3 py-1.5 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
          >
            Sign up
          </Link>
        </div> */}

        {/* ---------- MOBILE MENU TOGGLE ---------- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#1376F8] transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ---------- MOBILE & TABLET DRAWER ---------- */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* overlay */}
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

          {/* panel */}
          <div className="fixed left-0 right-0 top-[60px] sm:top-[75px] lg:top-[100px] w-full bg-white shadow-xl p-4 sm:p-6 flex flex-col">
            <nav className="flex flex-col space-y-3 sm:space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-base sm:text-lg font-medium text-gray-700 hover:text-[#1376F8] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* <div className="md:hidden mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-3">
              <Link
                to="/login"
                className="w-full text-center border-2 border-[#1376F8] text-[#1376F8] py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-[#1376F8] hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="w-full text-center bg-[#1376F8] text-white py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
