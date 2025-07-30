"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useEffect } from 'react';
import { initPreline } from '../preline';


const Header = () => {

    useEffect(() => {
    initPreline();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-neutral-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black dark:text-white">
          AstroBrand
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white dark:bg-neutral-900 border-t md:border-none md:static md:w-auto md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0 md:gap-6">
            <li>
              <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-800 dark:text-white hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/location" className="text-gray-800 dark:text-white hover:text-blue-600">
                Location
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
