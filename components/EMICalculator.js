"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [tenure, setTenure] = useState(12);
  const [rate, setRate] = useState(15);

  const r = rate / 10 / 100;
  const emi =
    (loanAmount * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - loanAmount;

  const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

  const circ = 2 * Math.PI * 32;
  const priLen = (loanAmount / totalPayable) * circ;
  const intLen = (totalInterest / totalPayable) * circ;
  const priPct = Math.round((loanAmount / totalPayable) * 100);
  const intPct = Math.round((totalInterest / totalPayable) * 100);

  const sliders = [
    {
      label: "Loan amount",
      display: fmt(loanAmount),
      min: 50000,
      max: 500000,
      step: 10000,
      value: loanAmount,
      onChange: setLoanAmount,
      minLabel: "₹50K",
      maxLabel: "₹5L",
    },
    {
      label: "Tenure",
      display: `${tenure} months`,
      min: 3,
      max: 36,
      step: 3,
      value: tenure,
      onChange: setTenure,
      minLabel: "3 months",
      maxLabel: "36 months",
    },
    {
      label: "Interest rate (per month)",
      display: `${(rate / 10).toFixed(1)}%`,
      min: 15,
      max: 35,
      step: 1,
      value: rate,
      onChange: setRate,
      minLabel: "1.5%",
      maxLabel: "3.5%",
    },
  ];

  return (
    <section id="emi-calculator" className=" bg-[#0a1628]">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto">
        {/* LEFT — white */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white px-8 sm:px-14 py-20 mt-2 mb-2 flex flex-col justify-center rounded-lg"
        >
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-600 mb-3 text-center sm:text-left">
            Plan ahead
          </p>
          <h2
            className="text-slate-900 leading-[1.08] mb-4 text-center sm:text-left"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            What will
            <br />
            your EMI be?
          </h2>
          <p className="text-[13.5px] text-slate-500 leading-relaxed max-w-sm mb-10 text-center sm:text-left">
            Move the sliders to find a loan that fits your budget. No sign-up
            needed.
          </p>

          {sliders.map((s) => (
            <div key={s.label} className="mb-7">
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-[12px] font-semibold text-slate-600 tracking-wide">
                  {s.label}
                </label>
                <span className="text-[13px] font-bold text-blue-600">
                  {s.display}
                </span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={s.value}
                onChange={(e) => s.onChange(Number(e.target.value))}
                className="w-full cursor-pointer accent-blue-600"
                style={{ height: "3px" }}
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1.5">
                <span>{s.minLabel}</span>
                <span>{s.maxLabel}</span>
              </div>
            </div>
          ))}

          <p className="text-[11px] text-slate-400 leading-relaxed">
            * Indicative only. Final rate based on your credit profile.
          </p>
        </motion.div>

        {/* RIGHT — dark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#0a1628] px-8 sm:px-14 py-20 flex flex-col justify-center"
        >
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500 mb-2">
            Monthly EMI
          </p>
          <p
            className="text-white leading-none mb-1"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 400,
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
            }}
          >
            {fmt(emi)}
          </p>
          <p className="text-[11.5px] text-blue-400 font-semibold tracking-[0.1em] uppercase mb-8">
            per month
          </p>

          {/* Donut */}
          <div className="flex items-center gap-5 mb-8">
            <svg
              width="84"
              height="84"
              viewBox="0 0 84 84"
              className="flex-shrink-0"
            >
              <circle
                cx="42"
                cy="42"
                r="32"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="13"
              />
              <circle
                cx="42"
                cy="42"
                r="32"
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="13"
                strokeDasharray={`${intLen} ${circ - intLen}`}
                strokeDashoffset={-priLen}
                transform="rotate(-90 42 42)"
              />
              <circle
                cx="42"
                cy="42"
                r="32"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="13"
                strokeDasharray={`${priLen} ${circ - priLen}`}
                strokeDashoffset={0}
                transform="rotate(-90 42 42)"
              />
            </svg>
            <div className="flex flex-col gap-2.5">
              {[
                { color: "#60a5fa", label: "Principal", pct: `${priPct}%` },
                { color: "#1d4ed8", label: "Interest", pct: `${intPct}%` },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2.5">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: l.color }}
                  />
                  <span className="text-[12px] text-white/40 font-medium">
                    {l.label}
                  </span>
                  <span className="text-[12px] text-white font-semibold ml-3">
                    {l.pct}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Breakdown */}
          <div>
            {[
              {
                label: "Principal amount",
                value: fmt(loanAmount),
                accent: false,
              },
              {
                label: "Total interest",
                value: fmt(totalInterest),
                accent: true,
              },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-center py-[10px] border-b border-white/[0.06]"
              >
                <span className="text-[12px] text-white/38">{row.label}</span>
                <span
                  className={`text-[13px] font-semibold ${row.accent ? "text-blue-400" : "text-white"}`}
                >
                  {row.value}
                </span>
              </div>
            ))}
            <div className="my-4 border-t border-white/[0.08]" />
            <div className="flex justify-between items-center">
              <span className="text-[12px] text-white/38">Total repayment</span>
              <span className="text-[13px] font-semibold text-white">
                {fmt(totalPayable)}
              </span>
            </div>
          </div>

          <Link
            href="/under-maintenance"
            className="mt-10 flex items-center justify-center gap-2 bg-blue-700 hover:bg-[#0a1628] shadow-md hover:shadow-blue-900/60 text-white text-[13px] font-semibold py-3.5 rounded-lg transition-colors tracking-wide duration-300 ease-in-out"
          >
            Apply for this loan
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
