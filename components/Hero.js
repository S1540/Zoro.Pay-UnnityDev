"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#0a1628] min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/25 text-blue-400 text-xs font-semibold px-4 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
              RBI Registered NBFC · 100% Digital
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Personal Loans
              <br />
              <span className="text-blue-400">Without the</span>
              <br />
              <span className="text-blue-400">Paperwork.</span>
            </h1>

            <p className="text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Get up to{" "}
              <strong className="text-white font-semibold">₹5 Lakhs</strong> in
              your account within 10 minutes. No branch visits, no collateral,
              no guarantor. Just a phone and your PAN card.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              {[
                { icon: <Zap size={13} />, text: "Disbursal in 10 mins" },
                { icon: <ShieldCheck size={13} />, text: "Zero collateral" },
                { icon: <Clock size={13} />, text: "3-step application" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="flex items-center gap-1.5 bg-white/8 border border-white/10 text-slate-300 text-xs font-medium px-3.5 py-2 rounded-full"
                >
                  <span className="text-blue-400">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <Link
                href="/under-maintenance"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-[#0a1628] text-white font-bold px-8 py-4 rounded-lg text-base transition-all shadow-lg hover:shadow-blue-900/60 duration-300 ease-in-out"
              >
                Apply Now — Free
                <ArrowRight size={17} />
              </Link>
              <Link
                href="#emi-calculator"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/8 transition-all"
              >
                Calculate EMI
              </Link>
            </div>

            {/* App Stores */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                {
                  sub: "Download on the",
                  name: "App Store",
                  icon: (
                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.41.74 3.23.77.97-.09 1.87-.78 3.3-.84 1.87.1 3.27.83 4.08 2.1-3.57 2.19-2.98 7.13.72 8.46-.4.98-.89 1.95-1.33 2.39zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  ),
                },
                {
                  sub: "Get it on",
                  name: "Google Play",
                  icon: (
                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                      <path d="M3.18 23.76c.28.16.6.17.9.06l12.39-7.16-2.67-2.67-10.62 9.77zm-1.73-20.1C1.17 4.04 1 4.5 1 5.04v13.9c0 .55.17 1 .45 1.38l.07.07 7.78-7.78v-.19L1.52 3.63l-.07.03zm17.42 8.49l-2.46-1.42-2.87 2.87 2.87 2.87 2.49-1.44c.71-.41.71-1.08-.03-1.88zm-15.7 9.3l10.62-6.14-2.67-2.67-7.95 8.81z" />
                    </svg>
                  ),
                },
              ].map((store) => (
                <Link
                  key={store.name}
                  href="/under-maintenance"
                  className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2.5 rounded-lg transition-all"
                >
                  {store.icon}
                  <div>
                    <div className="text-[10px] text-slate-400">
                      {store.sub}
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {store.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right — Phone */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
              <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] p-2 shadow-2xl border border-white/10 w-[260px]">
                <div className="bg-[#0a1628] rounded-[1.5rem] p-4 min-h-[500px]">
                  {/* Status bar */}
                  <div className="flex justify-between text-slate-600 text-[10px] mb-5">
                    <span>9:41</span>
                    <span>●●● WiFi 100%</span>
                  </div>
                  {/* App Logo */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-black text-sm">Z</span>
                    </div>
                    <span className="text-white font-bold text-sm">
                      zoro<span className="text-amber-400">.pe</span>
                    </span>
                  </div>
                  <p className="text-slate-500 text-[10px] mb-5">
                    Your Loan, Your Way
                  </p>

                  {/* Loan Card */}
                  <div className="bg-gradient-to-br from-blue-600 to-green-800 rounded-lg p-4 mb-3 shadow-lg shadow-green-900/50">
                    <p className="text-blue-200 text-[10px] font-medium mb-1">
                      Approved Amount
                    </p>
                    <p className="text-white text-3xl font-black">₹2,50,000</p>
                    <div className="flex justify-between mt-3 pt-3 border-t border-blue-500/30">
                      <div>
                        <p className="text-blue-200 text-[9px]">EMI / month</p>
                        <p className="text-white font-bold text-sm">₹22,500</p>
                      </div>
                      <div>
                        <p className="text-blue-200 text-[9px]">Tenure</p>
                        <p className="text-white font-bold text-sm">
                          12 months
                        </p>
                      </div>
                      <div>
                        <p className="text-blue-200 text-[9px]">Rate</p>
                        <p className="text-white font-bold text-sm">1.5%</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="bg-white/5 rounded-lg p-3 mb-3">
                    <div className="flex justify-between text-[10px] mb-2">
                      <span className="text-slate-400">
                        Application Progress
                      </span>
                      <span className="text-blue-400 font-bold">75%</span>
                    </div>
                    <div className="bg-slate-700 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full w-3/4 rounded-full" />
                    </div>
                  </div>

                  <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg text-sm">
                    Complete Application →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute -bottom-px left-0 right-0">
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
