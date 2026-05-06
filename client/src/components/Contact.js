import { useState } from "react";
import PageTransition from "./PageTransition";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Here you would typically send formData to your backend server
    fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending contact form:", error);
        alert(
          "There was an error sending your message. Please try again later.",
        );
        setStatus("error");
      });
  };

  return (
    <>
      {status && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8 max-w-sm w-full text-center">
            {status === "sending" && (
              <>
                <p className="text-white mb-4">Sending your message...</p>
                <div className="w-full bg-[#2a2a2a] rounded-full h-1">
                  <div className="bg-[#e05c3a] h-1 rounded-full animate-pulse w-3/4" />
                </div>
              </>
            )}
            {status === "success" && (
              <>
                <p className="text-green-400 text-xl mb-2">✓ Message Sent!</p>
                <p className="text-[#a0a0a0] text-sm mb-6">
                  I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="border border-[#e05c3a] text-[#e05c3a] px-6 py-2 text-sm rounded"
                >
                  Close
                </button>
              </>
            )}
            {status === "error" && (
              <>
                <p className="text-red-400 text-xl mb-2">✗ Failed to send</p>
                <p className="text-[#a0a0a0] text-sm mb-6">Please try again.</p>
                <button
                  onClick={() => setStatus(null)}
                  className="border border-[#e05c3a] text-[#e05c3a] px-6 py-2 text-sm rounded"
                >
                  Try Again
                </button>
              </>
            )}
          </div>
        </div>
      )}
      <PageTransition>
        <section id="contact" className="max-w-2xl mx-auto py-16 px-4 md:px-8">
          <p className="text-[#e05c3a] text-xs tracking-widest uppercase mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                className="text-[#a0a0a0] text-xs tracking-widest uppercase mb-2 block"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                className="bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#e05c3a] text-white rounded p-3 w-full mb-4 outline-none transition-all duration-300"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="text-[#a0a0a0] text-xs tracking-widest uppercase mb-2 block"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#e05c3a] text-white rounded p-3 w-full mb-4 outline-none transition-all duration-300"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="text-[#a0a0a0] text-xs tracking-widest uppercase mb-2 block"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                className="bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#e05c3a] text-white rounded p-3 w-full mb-4 outline-none transition-all duration-300"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="border border-[#e05c3a] text-[#e05c3a] hover:bg-[#e05c3a] hover:text-black px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 mt-4"
            >
              Send Message
            </button>
          </form>
        </section>
      </PageTransition>
    </>
  );
}

export default Contact;
