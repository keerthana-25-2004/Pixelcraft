import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("⚠ Please fill all the required fields.");
      return;
    }

    alert("✅ Message sent successfully!");

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="bg-purple-100 text-purple-600 px-5 py-2 rounded-full font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-5 text-gray-900">
            Let's <span className="text-purple-600">Work Together</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Have a project in mind? We'd love to hear from you and help bring your ideas to life.
          </p>

        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h3>

            <p className="text-gray-600 leading-7 mb-8">
              Whether you need a website, UI/UX design, branding,
              or digital marketing, our team is ready to help.
            </p>

            <div className="space-y-5">

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300">

                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-purple-600 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Chennai, Tamil Nadu</p>
                </div>

              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300">

                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaEnvelope className="text-purple-600 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">hello@pixelcraft.com</p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300">

                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaPhoneAlt className="text-purple-600 text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-5 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-6 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 resize-none transition-all"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;