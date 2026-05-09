import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="flex space-x-8">
            <a href="https://github.com/Aravinth7708" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/aravinthrajan-k-819664290?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:aravinthrajan9095@gmail.com" className="hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="Email">
              <Mail size={28} />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
