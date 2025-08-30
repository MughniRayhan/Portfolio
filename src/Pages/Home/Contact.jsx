import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";
import useAxios from "../../hooks/useAxios";
import {  toast } from 'react-toastify';

export default function Contact() {
    const scrollYProgress = useScroll().scrollYProgress
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { post, loading, error, response } = useAxios("https://portfolio-server-one-psi.vercel.app/api/contact");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await post(formData);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900 text-white overflow-hidden" data-aos="fade-up" data-aos-duration="2000">
     <motion.h2 className="text-3xl text-center md:text-4xl font-bold   relative  w-[20%] mx-auto sm:bg-gradient-to-t sm:from-primary/30 sm:via-gray-400 sm:to-gray-200 sm:bg-clip-text sm:text-transparent mb-3" >
                     Get in Touch
                   
                   <motion.span style={{
                     width: "100%",
                       height: "2px",
                       transformOrigin: "center",
                     scaleX:scrollYProgress
                   }}
                    
                     transition={{ duration: 0.5, ease: "easeInOut" }}
                   className="hidden lg:block absolute left-0 top-11 bg-linear-to-r from-primary to-secondary "
                   >
                   </motion.span>
                   </motion.h2>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 shadow-sm hover:shadow-primary focus:shadow-primary outline-0 transition-all duration-200"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 shadow-sm hover:shadow-primary focus:shadow-primary outline-0 transition-all duration-200"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md bg-gray-800 border border-gray-700 shadow-sm hover:shadow-primary focus:shadow-primary outline-0 transition-all duration-200"
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-transparent hover:border hover:border-primary transition-all duration-300 text-white px-6 py-3 rounded-md"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>


          <div className="flex gap-4 mt-6 text-2xl justify-center">
            <a href="https://github.com/yourusername" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin /></a>
            <a href="mailto:youremail@example.com"><FaEnvelope /></a>
          </div>
        </motion.form>

        {/* Map & Contact Info */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Map */}
          <div className="h-72 rounded-xl overflow-hidden shadow-lg border border-gray-700">
           
           <iframe 
           title="My Location"
           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14475.259566651797!2d91.88062475!3d24.90429495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1756415475842!5m2!1sen!2sbd" 
           width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>

          {/* Address & Phone */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <span>Baruthkhana Point, Sylhet, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary text-xl" />
              <span>+880 1746 423366</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
