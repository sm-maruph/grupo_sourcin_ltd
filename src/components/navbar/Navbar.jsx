import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  {
    name: "Services",
    dropdown: [
      { label: "WOVEN SHOWROOM", path: "/services/woven" },
      { label: "KNIT SHOWROOM", path: "/services/knit" },
      { label: "SAMPLE SECTION", path: "/services/sample" },
      { label: "MERCHANDISING", path: "/services/merchandising" },
    ],
  },
  // { name: "Our Clients", path: "/clients" },
  { name: "Compliance & Ethics", path: "/compliance" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const burgerRef = useRef(null);
  const firstLinkRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });
    } else {
      document.body.style.overflow = "";
      burgerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    function onClick(e) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !burgerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <nav className="relative flex items-center justify-between px-4 md:px-36 py-3 bg-primary dark:bg-accent shadow sticky top-0 z-50">
      {/* Left: Logo + Company Name */}
      <div className="flex-1 flex items-center space-x-3 whitespace-nowrap">
        <img
          src="https://kafjvkvzsdkofnzevohc.supabase.co/storage/v1/object/public/gsl/logo/logo.jpeg"
          alt="Company Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-contain"
        />
        <Link
          to="/"
          className="text-lg sm:text-xl md:text-2xl font-bold text-heading dark:text-heading cursor-pointer select-none"
        >
          Grupo Sourcing Ltd
        </Link>
      </div>

      {/* Center: Desktop Nav */}
      <div className="flex-1 hidden md:flex justify-center">
        <ul
          className="flex items-center space-x-6 md:space-x-8 text-heading dark:text-heading flex-nowrap"
          role="menubar"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="group relative cursor-pointer px-3 py-2 rounded-md transition-colors duration-150
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
    whitespace-nowrap hover:text-text-hover
    after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1
    after:block after:h-[2px] after:bg-current after:origin-left after:scale-x-0
    after:transition-transform after:duration-200 after:ease-out
    hover:after:scale-x-100"
              onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(null)}
              onClick={() => handleNavClick(link.name)}
            >
              {link.dropdown ? (
                <div className="flex items-center gap-1">
                  {link.name}
                  <span
                    className={`text-sm transition-transform duration-200 ${
                      dropdownOpen === link.name ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
              ) : (
                <Link to={link.path}>{link.name}</Link>
              )}

              {/* Dropdown (Desktop) */}
              {link.dropdown && dropdownOpen === link.name && (
                <ul className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                  {link.dropdown.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        onClick={handleNavClick}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Theme Toggle + Mobile Menu Button */}
      <div className="flex-1 flex justify-end items-center">
        <div className="hidden md:block mr-3">
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode((m) => !m)}
            className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 p-1"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-yellow-400 dark:bg-gray-900 shadow-md transform transition-transform duration-300 ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          ref={burgerRef}
          className="flex flex-col items-center justify-center md:hidden ml-2 w-10 h-10 p-1 focus:outline-none"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-transform duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 my-1 bg-gray-700 dark:bg-gray-300 rounded transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 w-11/12 sm:w-2/3 max-w-xs h-screen overflow-y-auto bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 flex flex-col box-border
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <ul className="flex flex-col pt-20 px-6 gap-4 text-gray-700 dark:text-gray-300 text-lg">
          {navLinks.map((link) => (
            <li key={link.name} className="flex flex-col">
              <div
                onClick={() =>
                  link.dropdown
                    ? setDropdownOpen(
                        dropdownOpen === link.name ? null : link.name
                      )
                    : handleNavClick(link.name)
                }
                className="flex justify-between items-center px-4 py-3 hover:text-red-500 cursor-pointer"
              >
                {link.dropdown ? (
                  link.name
                ) : (
                  <Link to={link.path} onClick={handleNavClick}>
                    {link.name}
                  </Link>
                )}
                {link.dropdown && (
                  <span className="text-sm">
                    {dropdownOpen === link.name ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {link.dropdown && dropdownOpen === link.name && (
                <ul className="pl-6 pb-2 space-y-2 text-base text-gray-600 dark:text-gray-400">
                  {link.dropdown.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        onClick={handleNavClick}
                        className="hover:text-red-500 block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Theme Toggle in mobile */}
          <li className="mt-2 px-4 py-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-800 dark:text-gray-200">
                Theme
              </span>
              <button
                aria-label="Toggle Dark Mode"
                onClick={() => setDarkMode((m) => !m)}
                className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 p-1"
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-yellow-400 dark:bg-gray-900 shadow-md transform transition-transform duration-300 ${
                    darkMode ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="relative inset-0 z-40 bg-black bg-opacity-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
