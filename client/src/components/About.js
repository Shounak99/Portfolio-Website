import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 px-8  max-w-4xl mx-auto">
      <p className="text-3xl font-bold text-white mb-6">ABOUT ME</p>
      <h2 className="text-white text-2xl font-bold mb-4 text-center">
        About Me
      </h2>
      <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
        I'm a developer who loves building things for the web.
      </p>

      {showMore && (
        <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
          I enjoy learning new technologies and solving real-world problems with
          code.
        </p>
      )}

      <button
        className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 mt-4"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </section>
  );
}

export default About;
