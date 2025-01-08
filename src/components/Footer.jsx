import "../app/globals.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="noise fixed z-20 shadow-lg w-full py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p>
          © {new Date().getFullYear()} Viola Bergere | All rights reserved
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/violaberg"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
          >
          <FaGithub className="shadow-lg" size={28}/>
          </a>
          <a
            href="https://www.linkedin.com/in/viola-bergere/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-110"
          >
          <FaLinkedin className="shadow-lg" size={28}/>
          </a>
        </div>
      </div>
    </footer>
  );
}
