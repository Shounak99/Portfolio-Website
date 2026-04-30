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
    fetch("https://shounak-portfolio-backend.onrender.com/api/contact", {
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
      <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-white font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-600"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-600"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white font-bold mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-600"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
