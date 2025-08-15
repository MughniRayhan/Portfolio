import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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
              href="mailto:mughnirayhan22@gmail.com"
              className="w-full flex items-center  gap-4 bg-gray-800 py-5 sm:px-5 px-2 rounded-2xl shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <FaEnvelope className="sm:text-3xl text-primary" />
              <div className="w-full ">
                <p className="font-semibold text-sm sm:text-base">Email</p>
                <p className="text-gray-400 w-[80%] text-sm sm:text-base">mughnirayhan22@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801234567890"
              className="flex items-center flex-wrap gap-4 bg-gray-800 py-5 sm:px-5 px-2 rounded-2xl shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <FaPhoneAlt className="sm:text-3xl text-primary" />
              <div>
                <p className="font-semibold text-sm sm:text-base">Phone</p>
                <p className="text-gray-400 text-sm sm:text-base">+880 1746423366</p>
              </div>
            </a>

            
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-primary/30 transition-all duration-300">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:scale-105 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                 style={{
                background: 'linear-gradient(90deg, #276F7A, #79959c)',
                boxShadow: '0 0 2px #276F7A, 0 0 2px #276F7A, 0 0 20px #276F7A'
            }}
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
