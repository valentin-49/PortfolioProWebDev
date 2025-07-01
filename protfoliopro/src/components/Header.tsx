"use client";
import React, { useState } from 'react';

export default function Header() {
  // Hauteur du header en pixels
  const headerOffset = 96;
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false); // Ferme le menu mobile après clic
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#121417] bg-opacity-90 backdrop-blur-md z-50 shadow-md h-24">
      <nav className="max-w-6xl mx-auto flex justify-between items-center h-full px-6 text-gray-300">
        <div className="text-xl font-bold cursor-pointer select-none">
          Valentin Bouet - Développeur web
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a
              href="#projets"
              onClick={(e) => handleScroll(e, 'projets')}
              className="hover:text-pink-500 transition"
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#cv"
              onClick={(e) => handleScroll(e, 'cv')}
              className="hover:text-pink-500 transition"
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="hover:text-pink-500 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Bouton burger mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-pink-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#121417] bg-opacity-95 backdrop-blur-md shadow-md">
          <ul className="flex flex-col gap-6 py-6 px-8 text-gray-300 font-semibold">
            <li>
              <a
                href="#projets"
                onClick={(e) => handleScroll(e, 'projets')}
                className="block hover:text-pink-500 transition"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#cv"
                onClick={(e) => handleScroll(e, 'cv')}
                className="block hover:text-pink-500 transition"
              >
                CV
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="block hover:text-pink-500 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
