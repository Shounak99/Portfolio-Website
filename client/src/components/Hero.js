function Hero({ name, title }) {
  return (
    <section className="min-h-screen flex items-center bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-8 flex flex-col-reverse md:flex-row justify-between items-center w-full gap-12 py-20">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          <p className="text-4xl md:text-6xl font-bold text-white">
            Hello<span className="text-[#e05c3a]">.</span>
          </p>
          <p className="text-lg md:text-xl text-[#a0a0a0]">I'm Shounak</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white">Software Engineer</h1>
          <div className="flex gap-4 mt-4">
            <a
              href="#contact"
              className="bg-[#e05c3a] text-white px-6 py-3 rounded text-sm font-bold"
            >
              Got a project?
            </a>
            <a
              href="https://drive.google.com/file/d/1xQB-oo9S05B6nTHmcZkIUIm8e_DsxQvX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded text-sm font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              My Resume
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <img
            className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover object-top border-4 border-[#e05c3a]"
            src="/profile.jpg"
            alt="Shounak"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
