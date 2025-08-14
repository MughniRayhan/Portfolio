export default function Footer() {
  return (
    <footer className=" text-gray-300 text-sm py-4 bg-primary" >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Mughni Rayhan. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/MughniRayhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mughni-rayhan-1aa587317/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mughnirayhan22@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
