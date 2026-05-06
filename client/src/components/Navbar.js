import { Link } from "react-router-dom";

function Navbar({ name }) {
  return (
    <nav className="bg-[#0d0d0d] border-b border-[#2a2a2a] px-4 md:px-8 py-5 flex justify-between items-center">
      <h2 className="text-[#e05c3a] font-bold tracking-widest uppercase text-sm">
        {name}'s Portfolio
      </h2>
      <ul className="flex gap-8">
        <Link
          to="/"
          className="relative text-[#a0a0a0] hover:text-white text-sm tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e05c3a] after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
        <Link
          to="/experience"
          className="relative text-[#a0a0a0] hover:text-white text-sm tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e05c3a] after:transition-all after:duration-300 hover:after:w-full"
        >
          Experience
        </Link>
        <Link
          to="/skills"
          className="relative text-[#a0a0a0] hover:text-white text-sm tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e05c3a] after:transition-all after:duration-300 hover:after:w-full"
        >
          Skills
        </Link>
        <Link
          to="/about"
          className="relative text-[#a0a0a0] hover:text-white text-sm tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e05c3a] after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="relative text-[#a0a0a0] hover:text-white text-sm tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e05c3a] after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="relative text-[#a0a0a0] hover:text-white text-sm tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e05c3a] after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
