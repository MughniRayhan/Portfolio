import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Me
        </h2>
        <p className="text-gray-300 text-center mb-12">
          Let’s connect! You can reach me through the details below or send me a message directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:mughnirayhan@gmail.com"
              className="flex items-center gap-4 bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              <FaEnvelope className="text-3xl text-purple-400" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">mughnirayhan@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801234567890"
              className="flex items-center gap-4 bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              <FaPhoneAlt className="text-3xl text-purple-400" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400">+880 1234-567890</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              <FaWhatsapp className="text-3xl text-green-400" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-gray-400">+880 1234-567890</p>
              </div>
            </a>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
