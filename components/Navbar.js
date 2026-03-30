"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md shadow-blue-200">
              <span className="text-white font-black text-xl leading-none">
                Z
              </span>
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              zoro<span className="text-amber-500">.pe</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/under-maintenance"
              className="text-sm font-semibold text-blue-700 hover:text-green-800"
            >
              Log in
            </Link>
            <Link
              href="/under-maintenance"
              className="bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm shadow-blue-200 hover:bg-[#0a1628] hover:shadow-blue-900/60 duration-300 ease-in-out"
            >
              Apply Now →
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
            className="block mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now →
          </Link>
        </div>
      )}
    </nav>
  );
}
