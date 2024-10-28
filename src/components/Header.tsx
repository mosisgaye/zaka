'use client'

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white z-50 ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div>
              <Image src="/zaka.png" alt="zaka" width={90} height={75}/>
            </div>
          </Link>
        </div>

        {/* Language Selector */}
      

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
          <Link href="/home">
            <div className="text-gray-700 hover:text-gray-900">Accueil</div>
          </Link>
          <Link href="/athletes">
            <div className="text-gray-700 hover:text-gray-900">Nos athlètes</div>
          </Link>
          <Link href="/services">
            <div className="text-gray-700 hover:text-gray-900">Nos services</div>
          </Link>
          <Link href="/about">
            <div className="text-gray-700 hover:text-gray-900">A propos de nous</div>
          </Link>
          <Link href="/blog">
            <div className="text-gray-700 hover:text-gray-900">Blog</div>
          </Link>
        </nav>


      <div className="hidden md:block">
          <select className="border border-gray-300 rounded p-2">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/home">
                <div className="text-gray-700 hover:text-gray-900">Accueil</div>
              </Link>
            </li>
            <li>
              <Link href="/athletes">
                <div className="text-gray-700 hover:text-gray-900">Nos athlètes</div>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div className="text-gray-700 hover:text-gray-900">Nos services</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="text-gray-700 hover:text-gray-900">A propos de nous</div>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <div className="text-gray-700 hover:text-gray-900">Blog</div>
              </Link>
            </li>
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
