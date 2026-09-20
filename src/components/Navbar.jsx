import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Technologies", "#technologies"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#eef1f5] bg-white/95 backdrop-blur">
      <div className="site-width relative flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#334155] md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <a
          href="#home"
          className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0"
        >
          <img src={logo} alt="Dev Stack" className="h-7 w-auto sm:h-8" />
        </a>

        <nav className="hidden items-center gap-7 text-[12px] font-medium text-[#64748b] md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:text-[#d81b7e]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href=""
            className="text-[11px] font-medium text-[#475569] sm:text-[12px]"
          >
            Sign In
          </a>
          <a
            href=""
            className="brand-fill rounded-full px-3 py-2 text-[11px] font-semibold text-white sm:px-5 sm:text-[12px]"
          >
            Sign Up
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#eef1f5] bg-white md:hidden">
          <nav className="site-width flex flex-col py-2">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="border-b border-[#f4f6f8] py-3 text-sm text-[#475569] last:border-0"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
