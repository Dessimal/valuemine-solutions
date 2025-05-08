
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import Link from 'next/link'
import {Logo} from '@/app/constants'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <>
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
        
          <Image 
            height={50}
            width={50}
            src={Logo}
            alt="Logo" 
            className=" logo-shadow"
          />
          <span className={cn(
            'font-bold text-xl',
            isScrolled ? 'text-gray-800' : 'text-white'
          )}>Valuemine</span>
        </Link>
        

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={cn(
                'font-medium hover:text-brand-orange transition-colors',
                isScrolled ? 'text-gray-800' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
          <Button className="gradient-bg">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className={cn(
              isScrolled ? 'text-gray-800' : 'text-white',
              'hover:bg-transparent'
            )}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-800 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </LInk>
            ))}
            <Button className="gradient-bg w-full">Get Started</Button>
          </div>
        </div>
      )} */}
    </nav>
    </>
  );
};

export default Navbar;
