import { FaLinkedin, FaGithub } from "react-icons/fa";
import PageTransition from "./PageTransition";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
function Hero({ name, title }) {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col-reverse md:flex-row justify-between items-center w-full gap-12 py-20">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <TypeAnimation
              sequence={[
                "Hello, I'm Shounak.",
                1000,
                "I'm a Software Engineer.",
                1000,
                "I build things for the web.",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-4xl md:text-6xl font-bold text-white"
            />
            <div className="flex gap-4 mt-4">
              <Link
                to="/contact"
                className="bg-[#e05c3a] text-white px-6 py-3 rounded text-sm font-bold"
              >
                Got a project?
              </Link>
              <a
                href="https://drive.google.com/file/d/1xQB-oo9S05B6nTHmcZkIUIm8e_DsxQvX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-6 py-3 rounded text-sm font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                My Resume
              </a>
            </div>
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/shounak-kossambe-613489218"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-[#e05c3a] transition-all duration-300"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/Shounak99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-[#e05c3a] transition-all duration-300"
              >
                <FaGithub size={28} />
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
    </PageTransition>
  );
}
export default Hero;
