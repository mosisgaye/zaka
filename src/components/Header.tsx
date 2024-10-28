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
    <header className="w-full bg-white z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div>
              <Image src="/ZAKA77.png" alt="zaka" width={90} height={75} />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
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
          {['/home', '/athletes', '/services', '/about', '/blog'].map((path, index) => (
            <Link key={index} href={path}>
              <div className="text-gray-700 hover:text-red-600 transition duration-300 relative group">
                <span className="group-hover:underline">{path === '/home' ? 'Accueil' : path.split('/')[1]}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </Link>
          ))}
        </nav>

        {/* Language Selector and Contact Button */}
        <div className="hidden md:flex space-x-4 items-center">
          <select className="border border-gray-300 rounded p-2">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
          <Link href="/contact">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
              Contact
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4">
            {['/home', '/athletes', '/services', '/about', '/blog'].map((path, index) => (
              <li key={index}>
                <Link href={path}>
                  <div className="text-gray-700 hover:text-red-600 transition duration-300">
                    {path === '/home' ? 'Accueil' : path.split('/')[1]}
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <select className="border border-gray-300 rounded p-2 w-full">
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
