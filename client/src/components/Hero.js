function Hero({ name, title }) {
  return (
    <section className="bg-gray-800 text-center p-20">
      <h1 className="text-5xl text-gray-400 font-bold">{name}</h1>
      <h2 className="text2xl text-gray-300 font-bold">{title}</h2>
    </section>
  );
}
export default Hero;
