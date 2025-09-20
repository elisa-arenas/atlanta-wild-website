import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "The Team", path: "/team" },
    { name: "Our Sponsors", path: "/sponsors" },
    { name: "Recent Wild News", path: "/news" },
    { name: "About United Grid League", path: "/about-league" },
    { name: "Contact Us", path: "/contact" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black shadow-lg shadow-[#C8102E]/20 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white hover:text-[#C8102E] transition-colors duration-200">
              <span className="text-2xl font-black tracking-wider" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '2px 2px 4px rgba(200, 16, 46, 0.3)'
              }}>ATLANTA WILD</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-[#C8102E] hover:text-white hover:shadow-lg hover:shadow-[#C8102E]/30 transform hover:scale-105 ${
                    location.pathname === item.path
                      ? "bg-[#C8102E] text-white shadow-lg shadow-[#C8102E]/30"
                      : "text-white hover:text-white"
                  }`}
                  style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#C8102E] transition-colors duration-300 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu - slide out */}
        <div 
          className={`md:hidden fixed inset-y-0 left-0 transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } w-64 bg-black shadow-2xl transition-transform duration-300 ease-in-out z-[9999]`}
        >
          <div className="flex items-center justify-between p-4 border-b border-[#C8102E]/30">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className="text-white hover:text-[#C8102E] transition-colors duration-200"
            >
              <span className="text-xl font-black tracking-wider" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '2px 2px 4px rgba(200, 16, 46, 0.3)'
              }}>ATLANTA WILD</span>
            </Link>
            <button 
              onClick={closeMobileMenu}
              className="text-white hover:text-[#C8102E] transition-colors duration-300 p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="mt-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMobileMenu}
                className={`block px-6 py-4 font-semibold transition-all duration-300 hover:bg-[#C8102E] hover:text-white border-l-4 border-transparent hover:border-white ${
                  location.pathname === item.path
                    ? "bg-[#C8102E] text-white border-l-4 border-white"
                    : "text-white hover:text-white"
                }`}
                style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.5px' }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[9998]"
            onClick={closeMobileMenu}
          ></div>
        )}
      </div>
    </nav>
  );
}