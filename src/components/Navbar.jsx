import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed z-[99] w-full h-[80px] px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6 md:py-8 font-['Neue_Montreal'] flex justify-between items-center text-black bg-white">
        <div className="logo">
          <img src="/logo.svg" alt="logo" className="h-8 sm:h-10 md:h-12" />
        </div>

        <div className="links hidden md:flex gap-4 sm:gap-6 lg:gap-10">
          {["Services", "Our Work", "About Us", "Insight", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className={`text-base sm:text-lg md:text-xl capitalize font-light hover:underline ${
                  index === 4 ? "lg:ml-32" : ""
                }`}
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl sm:text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu ${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:hidden fixed top-[80px] left-0 w-full bg-white text-black flex-col items-center gap-4 py-4 sm:py-6 z-[98]`}
      >
        {["Services", "Our Work", "About Us", "Insight", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              className="text-lg sm:text-xl capitalize font-light hover:underline"
              onClick={toggleMobileMenu}
            >
              {item}
            </a>
          )
        )}
      </div>
    </>
  );
}

export default Navbar;
