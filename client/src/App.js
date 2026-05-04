import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <Navbar name="Shounak Kossambe" />
      <Hero name="Shounak Kossambe" title="Software Engineer" />
      <Projects />
      <Skills />
      <Experience />
      <Blog />
      <About />
      <Contact />
    </div>
  );
}

export default App;
