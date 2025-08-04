import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { quickLinks } from "@/app/pageLinks";
import { footerLinks } from "@/app/constants";
// import { Logo } from "@/app/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* <img src={Logo} alt="Logo" className="h-10 w-10" /> */}
              <span className="font-bold text-xl">Valuemine Solutions</span>
            </div>
            <p className="text-gray-400 mb-6">
              Powering Nigeria&apos;s future with sustainable solar energy
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, name }) => (
                <li key={name}>
                  <Link href={href} className="text-gray-400 hover:text-white">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((footerLink, index) => (
                <li key={index}>
                  <Link
                    href={footerLink.link}
                    className="text-gray-400 hover:text-white">
                    {footerLink.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on our latest services and
              promotions.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-brand-orange text-gray-800"
              />
              <button
                type="submit"
                className="gradient-bg px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Valuemine Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <Link href="/terms-of-service" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="privacy-policy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
