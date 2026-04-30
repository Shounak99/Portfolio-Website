import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 px-8  max-w-4xl mx-auto">
      <h2 className="text-white text-2xl font-bold mb-4 text-center">
        About Me
      </h2>
      <p className="text-lg text-gray-400 mb-4">
        I'm a developer who loves building things for the web.
      </p>

      {showMore && (
        <p className="text-lg text-gray-400 mb-4">
          I enjoy learning new technologies and solving real-world problems with
          code.
        </p>
      )}

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </section>
  );
}

export default About;
