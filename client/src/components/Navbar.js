function Navbar({ name }) {
  return (
    <nav className="bg-[#0d0d0d] border-b border-[#2a2a2a] px-8 py-5 flex justify-between items-center">
      <h2 className="text-[#c9a84c] font-bold tracking-widest uppercase text-sm">
        {name}'s Portfolio
      </h2>
      <ul className="flex gap-8">
        <li className="text-[#a0a0a0] hover:text-[#c9a84c] cursor-pointer transition-all duration-300 text-sm tracking-wide">
          About
        </li>
        <li className="text-[#a0a0a0] hover:text-[#c9a84c] cursor-pointer transition-all duration-300 text-sm tracking-wide">
          Projects
        </li>
        <li className="text-[#a0a0a0] hover:text-[#c9a84c] cursor-pointer transition-all duration-300 text-sm tracking-wide">
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
