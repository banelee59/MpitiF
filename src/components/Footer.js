import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start space-x-0">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p><strong>Phone:</strong> +27 (60) 397-1865 </p>
            <p><strong>After Hours/ Emergency</strong></p>
            <p>(083) 378-4751</p>
            <p><strong>Email:</strong> mpitifunerals@gmail.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/about"
className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/services"
className="hover:text-gray-300">Our Services</Link></li>
              <li><Link to="/contact"
className="hover:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Branches</h3>
            <p><strong>Location: </strong> Erf 48, Fikile Mlomo Street, Mbizana, 4800 (Main branch)</p>
            <p><strong>Location: </strong> Kokstad 98 Main St, 4700</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank"
rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank"
rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank"
rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank"
rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Mpiti Funeral. All
rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

