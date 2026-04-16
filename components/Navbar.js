"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Personal Loan", href: "/under-maintenance" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Eligibility", href: "#eligibility" },
    { label: "About Us", href: "/under-maintenance" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "/under-maintenance" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        scrolled ? "bg-[#FFF3F3] shadow-md" : "bg-[#fff] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/Zorope-apr.png"
              className="h-16 w-auto object-contain scale-110"
              alt="Zorope"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-green-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/under-maintenance"
              className="text-sm font-semibold text-slate-600 hover:text-green-800"
            >
              Log in
            </Link>
            <Link href="/under-maintenance">
              <Button
                name="Apply Now"
                py={"py-2"}
                px={"px-4"}
                font={"medium"}
              />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-1.5 text-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 pb-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/under-maintenance"
            className="block mt-4 text-center bg-[#0B409C] hover:bg-[#032e78] text-white font-semibold py-3 rounded-xl"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now →
          </Link>
        </div>
      )}
    </nav>
  );
}
