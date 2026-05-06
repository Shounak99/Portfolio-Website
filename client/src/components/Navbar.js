import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/experience", label: "Experience" },
    { to: "/skills", label: "Skills" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const linkClass =
    "relative text-[#a0a0a0] hover:text-white text-sm tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e05c3a] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="bg-[#0d0d0d] border-b border-[#2a2a2a] px-8 py-5">
      <div className="flex justify-between items-center">
        <h2 className="text-[#e05c3a] font-bold tracking-widest uppercase text-sm">
          {name}
        </h2>
        {/* Hamburger - mobile only */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 pt-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
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

export default Navbar;
