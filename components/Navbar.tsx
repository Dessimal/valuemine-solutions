"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { Logo } from "@/app/constants";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { authClient } from "@/app/lib/auth-client";
import { ThemeToggle } from "./ThemeToggle";
import { useRouter } from "next/navigation";
import { UserDropdown } from "./UserDropdown";

export const Navbar = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // console.log("Your session:", session);

  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          setLoggingout(true); // redirect to login page
        },
        onSuccess: () => {
          router.push("/sign-in");
          toast("You just signed out");
          setLoggingout(false);
        },
      },
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
  ];

  // isScrolled ? "bg-black shadow-md py-2" : " py-4"

  return (
    <>
      <nav
        className={cn(
          "fixed flex justify-between items-center w-full  transition-all duration-300 py-4 bg-background"
        )}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4 items-center ">
            <Link href="/" className="flex items-center gap-2">
              <Image
                height={50}
                width={50}
                src={Logo}
                alt="Logo"
                className=" logo-shadow"
              />
              <span className={cn("font-bold text-xl")}>Valuemine</span>
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={cn(
                    "font-medium hover:text-brand-orange transition-colors",
                    isScrolled ? "text-gray-800" : "text-white"
                  )}>
                  {link.name}
                </Link>
              ))}
              {/* {session && (
                <div>
                  {session?.user?.image ? (
                    <FaUser size={24} color="black" />
                  ) : (
                    <>
                      <span className="size-18 p-2 rounded-full bg-blue-700 text-white text-3xl uppercase text-xs mr-4">
                        {session?.user?.name.slice(0, 1)}
                      </span>
                      <Button variant="ghost" onClick={handleSignOut}>
                        sign out
                      </Button>
                    </>
                  )}
                </div>
              )} */}
            </div>
            {/* Mobile Menu Button */}
            {/* <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className={cn(
                  isScrolled ? "text-gray-800" : "text-white",
                  "hover:bg-transparent"
                )}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div> */}
          </div>
          <div className="flex items-center gap-6 border-2">
            <ThemeToggle />
            {session ? (
              <div>
                <UserDropdown />
              </div>
            ) : (
              <div>
                <Link href="/sign-in" className="font-bold text-sm md:text-lg">
                  Sign in
                </Link>
              </div>
            )}
            {/* Mobile Menu */}
            {isMobile && isMenuOpen && (
              <div className="md:hidden bg-white shadow-lg absolute w-full">
                <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className="text-gray-800 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                  <Button className="gradient-bg w-full">Get Started</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export Navbar;
