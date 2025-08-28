import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/fun", label: "Fun" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const containerRef = useRef(null);
  const linkRefs = useRef([]);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  // Update underline position on route change or resize
  useEffect(() => {
    const idx = navLinks.findIndex(link => link.to === location.pathname);
    if (idx !== -1 && linkRefs.current[idx]) {
      const linkEl = linkRefs.current[idx];
      const containerEl = containerRef.current;
      const linkRect = linkEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      setUnderline({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    }
  }, [location.pathname]);

  // Update on window resize
  useEffect(() => {
    const handleResize = () => {
      const idx = navLinks.findIndex(link => link.to === location.pathname);
      if (idx !== -1 && linkRefs.current[idx]) {
        const linkEl = linkRefs.current[idx];
        const containerEl = containerRef.current;
        const linkRect = linkEl.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();
        setUnderline({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  return (
    <nav className="bg-charcoal-gray w-full">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/Name on the left */}
        <div className="font-ui text-xl tracking-tight text-bourbon-barrel flex items-center gap-2 mr-8">
          <span className="text-bourbon-barrel text-2xl">🥃</span>
          Collin Howland
        </div>
        {/* Desktop menu */}
        <div className="relative hidden md:block flex-1">
          {/* Centered nav links */}
          <ul
            className="flex gap-12 justify-center flex-1 relative"
            ref={containerRef}
          >
            {navLinks.map((link, idx) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  ref={el => (linkRefs.current[idx] = el)}
                  className={`px-1 pb-0.5 font-ui transition-colors
            ${location.pathname === link.to
                      ? "text-bourbon-barrel"
                      : "text-oatmeal hover:text-bourbon-barrel"
                    }
          `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* Animated underline */}
            <span
              className="absolute bottom-0 h-[2.5px] rounded transition-all duration-300"
              style={{
                left: underline.left,
                width: underline.width,
                background: "var(--tw-color-bourbon-barrel, #7B4B2A)",
              }}
            />
          </ul>
        </div>
        {/* Hamburger button */}
        <button
          className="md:hidden ml-2 text-oatmeal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-charcoal-gray">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block py-2 font-ui ${location.pathname === link.to
                  ? "text-bourbon-barrel"
                  : "text-oatmeal hover:text-bourbon-barrel"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}