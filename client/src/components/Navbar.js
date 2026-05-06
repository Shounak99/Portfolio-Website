function Navbar({ name }) {
  return (
    <nav className="bg-[#0d0d0d] border-b border-[#2a2a2a] px-4 md:px-8 py-5 flex justify-between items-center">
      <h2 className="text-[#e05c3a] font-bold tracking-widest uppercase text-sm">
        {name}'s Portfolio
      </h2>
      <ul className="flex gap-8">
        <a
          href="#about"
          className="text-[#a0a0a0] hover:text-[#e05c3a] cursor-pointer transition-all duration-300 text-sm tracking-wide"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-[#a0a0a0] hover:text-[#e05c3a] cursor-pointer transition-all duration-300 text-sm tracking-wide"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-[#a0a0a0] hover:text-[#e05c3a] cursor-pointer transition-all duration-300 text-sm tracking-wide"
        >
          Contact
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
