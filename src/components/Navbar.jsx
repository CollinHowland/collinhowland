import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="font-bold text-lg">Collin Howland</div>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/fun">Fun</Link></li>
        </ul>
        {/* Hamburger button */}
        <button
          className="md:hidden ml-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
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
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4">
          <li><Link to="/" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link to="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
          <li><Link to="/fun" onClick={() => setOpen(false)}>Fun</Link></li>
        </ul>
      )}
    </nav>
  );
}