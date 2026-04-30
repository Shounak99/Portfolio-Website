function Navbar({ name }) {
  return (
    <nav className="bg-gray-900 text-white flex justify-between p-5">
      <h2>{name}'s Portfolio</h2>
      <ul className="flex gap-6">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
