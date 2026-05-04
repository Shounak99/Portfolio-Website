import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        alert(data.message);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending contact form:", error);
        alert(
          "There was an error sending your message. Please try again later.",
        );
      });
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto py-16 px-8">
      <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-4">
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
            className="bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c] text-white rounded p-3 w-full mb-4 outline-none transition-all duration-300"
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
            className="bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c] text-white rounded p-3 w-full mb-4 outline-none transition-all duration-300"
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
            className="bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c] text-white rounded p-3 w-full mb-4 outline-none transition-all duration-300"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 mt-4"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
