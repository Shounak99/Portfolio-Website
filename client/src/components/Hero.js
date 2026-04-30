function Hero({ name, title }) {
  return (
    <section className="px-8 py-32 max-w-4xl mx-auto">
      <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">
        PORTFOLIO
      </p>

      <h1 className="text-6xl font-bold text-white mb-4 leading-tight">
        {name}
      </h1>
      <p className="text-[#a0a0a0] text-xl tracking-wide">{title}</p>
    </section>
  );
}
export default Hero;
