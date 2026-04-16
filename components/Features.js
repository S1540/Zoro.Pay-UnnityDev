"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  FileCheck,
  CalendarClock,
  Lock,
  DollarSign,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";
import Button from "./Button";

const features = [
  {
    icon: Zap,
    title: "Instant disbursal",
    desc: "Money in your account within 15 minutes of approval. No manual processing delays.",
    wide: true,
  },
  {
    icon: ShieldCheck,
    title: "No collateral",
    desc: "Fully unsecured loans. No property, gold, or guarantor needed.",
    wide: true,
  },
  {
    icon: FileCheck,
    title: "Minimal docs",
    desc: "Just Aadhaar + PAN (100% digital).",
    wide: false,
  },
  {
    icon: Lock,
    title: "Bank-grade security",
    desc: "256-bit encryption on all your data and transactions.",
    wide: false,
  },
  {
    icon: DollarSign,
    title: "Transparent fees",
    desc: "No hidden charges. No surprises. See your exact EMI before you apply.",
    wide: false,
  },
  {
    icon: Clock,
    title: "RBI compliant",
    desc: "Fully regulated and operating under Reserve Bank of India Lending guidelines.",
    wide: false,
  },
  {
    icon: Phone,
    title: "24/7 support",
    desc: "Real humans ready to help you — anytime.",
    wide: false,
  },
];

export default function Features() {
  return (
    <section
      className="py-24 bg-[#FFF3F3]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');`}</style> */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-between items-end gap-6 mb-12"
        >
          <div className="w-full sm:w-auto text-center sm:text-left">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-4">
              Why Zorope
            </p>
            <h2
              className="text-slate-900 leading-[1.1] text-4xl sm:text-6xl"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
              }}
            >
              Built different.
              <br />
              For real people.
            </h2>
          </div>
          <Link href="/under-maintenance">
            <Button
              name={"Apply now"}
              px={"px-4"}
              py={"py-2"}
              font={"medium"}
            />
          </Link>
        </motion.div>
        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`bg-white border border-slate-200 hover:border-slate-400 hover:bg-[#FFF3F3] hover:shadow- rounded-md p-5 flex flex-col gap-3 transition-all duration-200 ${
                  f.wide ? "col-span-2" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon
                    size={18}
                    className="text-[#0B409C]"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-slate-900 mb-1.5 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-light">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
