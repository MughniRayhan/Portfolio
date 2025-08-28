import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-4" >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <div>
           <Link to="/" className='sm:text-xl font-bold accent-gradient outline-0'>
      <span>&lt;</span>Mughni
      <span > / </span>Rayhan
      <span>&gt;</span>
    </Link>
        </div>
        <p className="text-gray-500">© {new Date().getFullYear()} Mughni Rayhan. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com/MughniRayhan" target="_blank" className="hover:text-white transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mughni-rayhan-1aa587317/" target="_blank" className="hover:text-white transition">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:mughnirayhan22@gmail.com" className="hover:text-white transition">
              <FaEnvelope size={24} />
            </a>
        </div>
      </div>
    </footer>
  );
}
