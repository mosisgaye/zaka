"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-black text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/1.png" alt="zaka" width={220} height={113} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/Accueil">
            <div className="relative group">
              <span className="text-dark-gray hover:text-[#FFD700] transition duration-300">Accueil</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>
          <Link href="/athletes">
            <div className="relative group">
              <span className="text-dark-gray hover:text-[#FFD700] transition duration-300">athletes</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>
          <Link href="/services">
            <div className="relative group">
              <span className="text-dark-gray hover:text-[#FFD700] transition duration-300">services</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>
          <Link href="/about">
            <div className="relative group">
              <span className="text-dark-gray hover:text-[#FFD700] transition duration-300">about</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>
          <Link href="/blog">
            <div className="relative group">
              <span className="text-dark-gray hover:text-[#FFD700] transition duration-300">blog</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>
        </nav>

        {/* Language Selector and Contact Button */}
        <div className="hidden md:flex space-x-4 items-center">
          <select className="border border-[#FFD700] rounded p-2 bg-black text-white hover:border-[#FFD700] transition duration-300">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
          <Link href="/contact">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-[#FFD700] transition duration-300">
              Contact
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t border-light-gray">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/Accueil">
                <div className="text-dark-gray hover:text-[#FFD700] transition duration-300">Accueil</div>
              </Link>
            </li>
            <li>
              <Link href="/athletes">
                <div className="text-dark-gray hover:text-[#FFD700] transition duration-300">athletes</div>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div className="text-dark-gray hover:text-[#FFD700] transition duration-300">services</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="text-dark-gray hover:text-[#FFD700] transition duration-300">about</div>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <div className="text-dark-gray hover:text-[#FFD700] transition duration-300">blog</div>
              </Link>
            </li>
            <li>
              <select className="border border-[#FFD700] bg-black rounded p-2 w-full hover:border-[#FFD700] transition duration-300">
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
