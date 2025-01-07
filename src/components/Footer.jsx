import "../app/globals.css";

export default function Footer() {
  return (
    <footer className="noise shadow-lg w-full py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Viola’s Portfolio. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/violaberg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:darkText transition"
          >
            GitHub
          <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/viola-bergere/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:darkText transition"
          >
            LinkedIn
          <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
