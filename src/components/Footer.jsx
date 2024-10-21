import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import footerLogo from "../assets/footer-logo.png"; // Adjust based on your project structure

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Navigation Links */}
        <div className="flex flex-col space-y-4">
          <img src={footerLogo} alt="Logo" className="w-36 mb-3" />
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-white">Subscribe to our Newsletter</h3>
          <p className="text-gray-400">Get the latest updates, offers, and news delivered to your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-black font-semibold px-6 py-2 rounded-r-md hover:bg-yellow-500 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaTwitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaInstagram size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto mt-10 border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li>
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
