import "../app/globals.css";
import SocialLink from '../components/SocialLink'; 
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="noise flex text-center z-20 shadow-lg w-full px-3 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center py-2">
        <p>© {new Date().getFullYear()} Viola Bergere | All rights reserved</p>
        <div className="flex gap-4 mt-2">
          <SocialLink Icon={FaGithub} url="https://github.com/violaberg" />
          <SocialLink Icon={FaLinkedin} url="https://www.linkedin.com/in/viola-bergere/" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
