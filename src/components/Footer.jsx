import "../app/globals.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="noise flex text-center z-20 shadow-lg w-full px-3 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center py-2">
        <p>© {new Date().getFullYear()} Viola Bergere | All rights reserved</p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/violaberg"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
            aria-label="Viola's GitHub profile"
          >
            <FaGithub className="shadow-lg" size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/viola-bergere/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
            aria-label="Viola's LinkedIn profile"
          >
            <FaLinkedin className="shadow-lg" size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
