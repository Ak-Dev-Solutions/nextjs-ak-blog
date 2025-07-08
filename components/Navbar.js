"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

// For nav links (underline on hover)
const navLinkClass =
  "relative font-semibold text-sm hover:text-primary transition-all after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Add scoped CSS for explosive effect */}
      <style jsx>{`
        .explosive-text {
          display: inline-block;
          position: relative;
          font-size: 1.5rem;
          font-weight: 700;
          color: inherit;
          transition: transform 0.3s ease-out;
        }

        .explosive-text:hover {
          transform: scale(1.1);
        }

        .explosive-text:hover::before,
        .explosive-text:hover::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: burst 0.8s ease-out forwards;
        }

        .explosive-text:hover::before {
          background: radial-gradient(circle, gba(0, 184, 255, 0.8), transparent);
          z-index: -1;
        }

        .explosive-text:hover::after {
          background: radial-gradient(circle, rgba(157, 0, 255, 0.8), transparent);
          z-index: -2;
        }

        @keyframes burst {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>

      <nav className="sticky top-0 z-50 p-4 border-b bg-background/50 backdrop-blur">
        <div className="container flex items-center justify-between mx-auto">
          {/* Exploding logo */}
          <Link href="/" legacyBehavior>
            <a className="explosive-text">Ak&#39;s Blog</a>
          </Link>

          {/* Desktop Nav */}
          <div className="items-center hidden gap-6 md:flex">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>

            {/* Theme Switch */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-muted"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <div className="flex gap-2 ml-2">
              <Button variant="outline">Login</Button>
              <Button variant="outline">Signup</Button>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>AK Blog</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 mt-6">
                  <Link href="/" className={navLinkClass}>
                    Home
                  </Link>
                  <Link href="/about" className={navLinkClass}>
                    About
                  </Link>
                  <Link href="/blog" className={navLinkClass}>
                    Blog
                  </Link>
                  <Link href="/contact" className={navLinkClass}>
                    Contact
                  </Link>

                  {/* Mobile Theme Toggle */}
                  {mounted && (
                    <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="flex items-center gap-2 p-2 mt-2 border rounded-md w-fit"
                    >
                      {theme === "dark" ? (
                        <Sun size={16} />
                      ) : (
                        <Moon size={16} />
                      )}
                      <span className="text-sm">
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                      </span>
                    </button>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline">Login</Button>
                    <Button variant="outline">Signup</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
