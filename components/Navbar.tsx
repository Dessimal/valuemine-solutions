// Navbar.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { Logo, navLinks } from "@/app/constants";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { authClient } from "@/app/lib/auth-client";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname, useRouter } from "next/navigation";
import { UserDropdown } from "./UserDropdown";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "@/hooks/use-dimensions";
import { toast } from "sonner";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, toggleOpen] = useCycle(false, true);

  const pathname = usePathname();

  // We will now use window dimensions for the sidebar, not a ref on the nav.
  // The 'containerRef' will still be for the motion.nav if you need its dimensions for other reasons,
  // but not for the sidebar's clipPath.
  const containerRef = useRef(null); // Keep for potential other uses on the nav itself

  const sidebarRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const navigationRef = useRef(null);
  // State to store window dimensions for the sidebar's clipPath
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    updateWindowDimensions();

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowDimensions);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []); // Run once on mount and on resize

  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [loggingout, setLoggingout] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          setLoggingout(true);
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

  // Updated sidebar variants to use windowDimensions
  const sidebar = {
    open: {
      clipPath: `circle(${windowDimensions.height * 2 + 200}px at 10px 10px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: "circle(20px at 160px 32px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target) &&
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        toggleOpen(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleOpen]);

  return (
    <>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        ref={containerRef} // Keep ref on nav if needed for other styling/dimensions
        className={cn(
          "fixed bg-background z-[10000] top-0 flex justify-between items-center w-full transition-all duration-300 p-4",
          isScrolled ? "shadow-md" : ""
        )}>
        <div className="container max-w-5xl mx-auto flex justify-between items-center relative">
          <div className="flex space-x-8 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                height={32}
                width={32}
                src={Logo}
                alt="Logo"
                className="logo-shadow"
              />
              <span className={cn("font-bold text-xl")}>Valuemine</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  href={path}
                  className={cn(
                    " hover:text-brand-orange transition-colors",
                    pathname === path
                      ? "gradient-text font-bold"
                      : "font-medium"
                  )}>
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 mr-16 md:m-0">
            <ThemeToggle />
            {session ? (
              <UserDropdown />
            ) : (
              <Link
                href="/sign-in"
                className=" hover:text-amber-500 cursor-pointer">
                Sign in
              </Link>
            )}
          </div>
        </div>
        {/* The MenuToggle is kept here for visibility within the Navbar */}
      </motion.nav>

      {/* The full-screen sidebar container */}
      {isMobile && (
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={windowDimensions.height} // Pass window height as custom prop
          className="fixed inset-0 z-[99999] pointer-events-none" // Use inset-0 for full screen, lower z-index than toggle
        >
          <motion.div
            ref={sidebarRef}
            className="absolute top-0 right-0 bottom-0 w-[200px] bg-gray-900 pointer-events-auto " // Sidebar background, make sure it's wide enough
            variants={sidebar}
          />
          <Navigation
            ref={navigationRef}
            className={cn(
              "absolute top-[100px] right-0 w-[200px] p-[25px] pointer-events-auto z-[100]",
              !isOpen ? "hidden" : ""
            )} // Position Navigation within the sidebar
            toggleOpen={toggleOpen}
          />
        </motion.div>
      )}
      {isMobile && (
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="fixed top-5 right-7 z-[1000000]"
          ref={toggleButtonRef}>
          <MenuToggle
            toggle={() => toggleOpen()}
            className="" // Ensure it's very high z-index
          />
        </motion.div>
      )}
    </>
  );
};
