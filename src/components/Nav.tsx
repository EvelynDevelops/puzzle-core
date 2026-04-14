"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Coach", href: "#coach" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0c0c0b]/95 backdrop-blur-md border-b border-[#222220]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark />
          <span className="text-[#f0ede8] font-bold tracking-[0.14em] text-sm uppercase select-none">
            Puzzle Core
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={navHref(link.href)}
              className="text-[#a8a8a5] hover:text-[#f0ede8] text-sm transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={navHref("#contact")}
          className="hidden md:inline-flex items-center h-10 px-6 bg-[#c8a97e] text-[#0c0c0b] text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#dfc49a] transition-colors duration-200"
        >
          Book a Call
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#0c0c0b] border-t border-[#222220] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={navHref(link.href)}
              onClick={() => setMenuOpen(false)}
              className="text-[#f0ede8] text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={navHref("#contact")}
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center h-12 px-6 bg-[#c8a97e] text-[#0c0c0b] text-xs font-bold tracking-[0.12em] uppercase mt-2"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}

function LogoMark() {
  return (
    <div className="relative w-[26px] h-[26px] shrink-0">
      <div className="absolute top-0 left-0 w-[11px] h-[11px] border border-[#c8a97e]" />
      <div className="absolute top-0 right-0 w-[11px] h-[11px] border border-[#c8a97e]" />
      <div className="absolute bottom-0 left-0 w-[11px] h-[11px] border border-[#c8a97e]" />
      <div className="absolute bottom-0 right-0 w-[11px] h-[11px] bg-[#c8a97e]" />
    </div>
  );
}
