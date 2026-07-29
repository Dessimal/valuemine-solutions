"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { authClient } from "@/app/lib/auth-client";
import { Logo } from "@/app/constants";
import { ThemeToggle } from "./ThemeToggle";
import { UserDropdown } from "./UserDropdown";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { navLinks } from "@/app/pageLinks";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const { data: session } = authClient.useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen || !isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideDrawer = drawerRef.current?.contains(target);
      const clickedToggle = toggleButtonRef.current?.contains(target);

      if (!clickedInsideDrawer && !clickedToggle) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMobile]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 z-[10000] w-full border-b border-slate-200/70 transition-all duration-300",
          isScrolled
            ? "bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-white/80 backdrop-blur",
        )}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              height={32}
              width={32}
              src={Logo}
              alt="Logo"
              className="logo-shadow"
            />
            <span className="text-lg font-bold text-slate-900">Valuemine</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={cn(
                  "transition-colors hover:text-amber-500",
                  pathname === path
                    ? "font-bold text-amber-600"
                    : "font-medium text-slate-700",
                )}>
                {name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            {session ? (
              <div className="hidden sm:block">
                <UserDropdown />
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="hidden rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block">
                Sign in
              </Link>
            )}

            {isMobile && (
              <div ref={toggleButtonRef}>
                <MenuToggle
                  toggle={() => setIsOpen((prev) => !prev)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-800 shadow-sm"
                />
              </div>
            )}
          </div>
        </div>
      </motion.nav>

      {isMobile && (
        <>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, pointerEvents: "auto" },
              closed: { opacity: 0, pointerEvents: "none" },
            }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99998] bg-slate-950/60 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          />

          <motion.aside
            ref={drawerRef}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { x: 0, opacity: 1 },
              closed: { x: "100%", opacity: 0 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed right-0 top-0 z-[99999] flex h-full w-[82vw] max-w-[320px] flex-col border-l border-slate-800 bg-slate-950/95 p-4 shadow-2xl md:hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Image
                  height={24}
                  width={24}
                  src={Logo}
                  alt="Logo"
                  className="logo-shadow"
                />
                <span className="text-base font-semibold text-white">
                  Valuemine
                </span>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-full border border-white/10 bg-white/10 p-2 text-white">
                <MenuToggle
                  toggle={closeMenu}
                  className="flex h-5 w-5 items-center justify-center"
                />
              </button>
            </div>

            <div className="mt-5 flex-1">
              <Navigation className="space-y-4" toggleOpen={closeMenu} />
            </div>

            <div className="mt-4 border-t border-white/10 pt-4">
              {session ? (
                <div className="rounded-2xl bg-white/10 p-3">
                  <UserDropdown />
                </div>
              ) : (
                <Link
                  href="/sign-in"
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950">
                  Sign in
                </Link>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </>
  );
};
