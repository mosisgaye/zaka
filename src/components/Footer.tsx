// components/Footer.tsx
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Section Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/1.png" alt="zaka AGENCY" width={220} height={113} />
        </div>

        {/* Section Réseaux sociaux */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition duration-300">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition duration-300">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Section Contact */}
        <div className="flex flex-col items-center md:items-end space-y-1">
          <h3 className="font-bold">Contactez-nous</h3>
          <a href="https://www.zaka77.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline transition duration-300">www.zaka77.com</a>
          <a href="mailto:info@zaka77.com" className="text-sm text-gold hover:underline transition duration-300">info@zaka77.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
