"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const leftItems = [
  "RBI Registered NBFC",
  "Zero Collateral",
  "Instant Disbursal",
  "256-bit Encryption",
  "Trusted by 5Mn+",
  "4.8 / 5 App Rating",
  "100% Digital",
  "No Hidden Charges",
  "Flexible Tenure",
  "Digital KYC",
];

const rightItems = [
  "Bank-Grade Security",
  "3-Step Application",
  "₹5 Mn Max Loan",
  "Fair Lending Practices",
  "PAN + Aadhaar Only",
  "10 Min Approval",
  "No Branch Visit",
  "Paperless Process",
  "24/7 Support",
  "Transparent Fees",
];

function VerticalMarquee({ items, direction = "up", className = "" }) {
  const doubled = [...items, ...items];
  const duration = items.length * 3;

  return (
    <div className={`relative overflow-hidden h-full ${className}`}>
      <motion.div
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-3"
      >
        {doubled.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
            key={i}
            className="flex items-center gap-2 px-3 py-2 whitespace-nowrap"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #0B409C, #0B409C)",
              }}
            />
            <span className="text-[11px] font-medium text-slate-500 tracking-wide">
              {item}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const glowRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.transform = `translate(${clientX - 110}px, ${clientY - 110}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className={`relative  flex items-center justify-center pt-16 overflow-hidden ${
        scrolled ? "bg-[#FFF3F3]" : "bg-[#fff] backdrop-blur-sm"
      }`}
    >
      {/* Cursor follow glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none z-0 w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, #6c58f130 0%, transparent 70%)",
          transition: "transform 0.12s ease-out",
          top: 0,
          left: 0,
        }}
      />

      {/* LEFT marquee */}
      <div
        className="absolute left-5 top-0 bottom-0 w-[140px] z-[1] hidden xl:block"
        style={{
          opacity: 0.35,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <VerticalMarquee
          items={leftItems}
          direction="up"
          className="h-full px-3 py-4"
        />
      </div>

      {/* RIGHT marquee */}
      <div
        className="absolute right-8 top-0 bottom-0 w-[140px] z-[1] hidden xl:block"
        style={{
          opacity: 0.35,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <VerticalMarquee
          items={rightItems}
          direction="down"
          className="h-full px-3 py-4"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 text-center max-w-7xl w-full mx-auto px-5 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white border border-[#0B409C] text-[#0B409C] text-[10px] sm:text-xs font-semibold px-4 py-2 rounded-full mb-7 shadow-sm"
        >
          <span className="w-1.5 h-1.5 bg-[#0B409C] rounded-full animate-pulse" />
          RBI Registered NBFC's 100% Digital Lending Partners
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="leading-[1.1] mb-8 text-4xl md:text-6xl font-semibold tracking-tight"
        >
          <span className="text-[#0f172a]">Personal Loans Without the</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #0B409C 0%, #0d9488 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Paperwork.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 leading-relaxed mb-8 max-w-3xl mx-auto text-[15px] md:text-lg"
        >
          Get up to{" "}
          <strong className="text-[#0f172a] font-semibold">₹5 Millions</strong>{" "}
          in your account within 15 minutes. No branch visits, no collateral, no
          guarantor. Just a phone and your PAN card.
        </motion.p>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2.5 mb-8"
        >
          {[
            { icon: <Zap size={13} />, text: "Quick Disbursal" },
            { icon: <ShieldCheck size={13} />, text: "Zero collateral" },
            { icon: <Clock size={13} />, text: "3-step application" },
          ].map((item, index) => (
            <span
              key={item.text}
              className={`flex items-center gap-1.5 bg-white/30 border-r border-r-slate-300 text-slate-600 text-sm font-medium px-3.5 py-2 ${
                index === 2 ? "border-r-0" : ""
              }`}
            >
              <span className="text-[#0B409C]">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Link
            href="/under-maintenance"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-md text-base transition-all duration-300 shadow-sm shadow-[#092c69] bg-[#0B409C] hover:bg-[#032e78] hover:shadow-[#0d2a5c] "
          >
            Apply Now — Free
            <ArrowRight size={17} />
          </Link>
          <Link
            href="#emi-calculator"
            className="inline-flex items-center gap-2 bg-white text-[#0f172a] font-semibold px-8 py-4 rounded-md text-base hover:bg-[#032e78] transition-all duration-300 hover:text-white hover:shadow-[#0d2a5c] shadow-sm"
          >
            Calculate EMI
          </Link>
        </motion.div>

        {/* App Stores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            {
              sub: "Download on the",
              name: "App Store",
              icon: (
                <svg className="w-5 h-5" fill="#0B409C" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.41.74 3.23.77.97-.09 1.87-.78 3.3-.84 1.87.1 3.27.83 4.08 2.1-3.57 2.19-2.98 7.13.72 8.46-.4.98-.89 1.95-1.33 2.39zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
              ),
            },
            {
              sub: "Get it on",
              name: "Google Play",
              icon: (
                <svg className="w-5 h-5" fill="#0B409C" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.28.16.6.17.9.06l12.39-7.16-2.67-2.67-10.62 9.77zm-1.73-20.1C1.17 4.04 1 4.5 1 5.04v13.9c0 .55.17 1 .45 1.38l.07.07 7.78-7.78v-.19L1.52 3.63l-.07.03zm17.42 8.49l-2.46-1.42-2.87 2.87 2.87 2.87 2.49-1.44c.71-.41.71-1.08-.03-1.88zm-15.7 9.3l10.62-6.14-2.67-2.67-7.95 8.81z" />
                </svg>
              ),
            },
          ].map((store) => (
            <Link
              key={store.name}
              href="/under-maintenance"
              className="flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-slate-300 px-4 py-2.5 rounded-md transition-all shadow-sm"
            >
              {store.icon}
              <div>
                <div className="text-[10px] text-slate-400">{store.sub}</div>
                <div className="text-[#0f172a] font-semibold text-sm">
                  {store.name}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute -bottom-px left-0 right-0 z-[3]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
        >
          <path
            d="M0 60L48 51.8C96 43.7 192 27.3 288 20.2C384 13.2 480 15.3 576 20.2C672 25 768 32.5 864 33.8C960 35.2 1056 30.5 1152 25C1248 19.5 1344 13 1392 9.8L1440 6.7V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
