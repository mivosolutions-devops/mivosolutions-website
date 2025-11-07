"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      }`}
    >
      <nav className='container mx-auto px-4 sm:px-6 lg:px-32'>
        <div className='flex items-center justify-between h-20'>
          <Link href='/' className='flex items-center group gap-1.5'>
            <Image
              src='/logos/mivo-light.svg'
              alt='Mivo Solutions Logo'
              width={18}
              height={18}
              className='h-4.5 w-auto'
            />
            <div className='text-2xl font-bold'>
              <span className='text-[#059669]'> Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-[#059669]"
                      : "text-gray-700 hover:text-[#059669]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='w-6 h-6 text-gray-700' />
            ) : (
              <Menu className='w-6 h-6 text-gray-700' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 animate-in slide-in-from-top duration-300'>
            <div className='flex flex-col space-y-2'>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "text-[#059669] bg-green-50"
                        : "text-gray-700 hover:text-[#059669]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
