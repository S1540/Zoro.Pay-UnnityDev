"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

const criteria = [
  "Indian citizen, 18+ years",
  "Salaried or self-employed",
  "Monthly income ₹15,000+",
  "Serviceable city resident",
  "Valid Aadhaar + PAN card",
];

const loanDetails = [
  { label: "Loan amount", value: "₹50,000 – ₹5,00,000" },
  { label: "Interest rate", value: "From 1.5% / month" },
  { label: "Tenure", value: "3 to 36 months" },
  { label: "Processing fee", value: "Up to 3% of loan" },
  { label: "Disbursal", value: "Within 10 minutes" },
  { label: "Prepayment", value: "After 3 EMIs" },
];

export default function Eligibility() {
  return (
    <section id="eligibility" className="bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-12 items-start">
          {/* LEFT — sticky */}
          <div className=" py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400 mb-4 text-center sm:text-left">
                Who can apply
              </p>
              <h2
                className="text-slate-900 leading-[1.08] mb-4 text-center sm:text-left"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontWeight: 400,
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                }}
              >
                If you earn a salary,
                <br />
                you likely qualify.
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed max-w-md mb-10 text-center sm:text-left">
                Simple and fair eligibility. Most working Indians qualify for a
                Zorope loan — no complicated criteria, no guesswork.
              </p>

              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-4 pb-3 border-b border-slate-200">
                Eligibility criteria
              </p>
              <div className="grid grid-cols-2 gap-2.5 mb-8">
                {criteria.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-[10px] px-3.5 py-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="#0B409C"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="1.5,5 4,7.5 8.5,2.5" />
                      </svg>
                    </div>
                    <span className="text-[12.5px] text-slate-800 font-medium leading-snug">
                      {c}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/under-maintenance">
                <Button
                  name={"Check my eligibility"}
                  py="py-3"
                  px={"px-5"}
                  font={"medium"}
                />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — scrolls normally */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="py-2 sm:py-24 relative z-30 bg-white sm:bg-transparent"
          >
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-4 pb-3 border-b border-slate-200">
              Loan snapshot
            </p>
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-[#0a1628] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-[7px] h-[7px] bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-400">
                    Live rates
                  </span>
                </div>
                <span
                  className="text-white text-[1.1rem]"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                  }}
                >
                  What you can expect
                </span>
              </div>

              <div className="px-6">
                {loanDetails.map((d, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-[11px] border-b border-slate-100 last:border-0"
                  >
                    <span className="text-[12.5px] text-slate-400">
                      {d.label}
                    </span>
                    <span className="text-[13px] text-slate-900 font-semibold">
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mx-6 mb-5 bg-blue-50 border border-blue-100 rounded-lg px-3.5 py-2.5">
                <p className="text-[11.5px] text-blue-700 leading-relaxed">
                  * Final rate and amount depend on your credit profile. All
                  terms shown upfront before you confirm.
                </p>
              </div>
            </div>

            
            <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-4">
                Required documents
              </p>
              {[
                {
                  doc: "Aadhaar Card",
                  note: "For identity + address verification",
                },
                { doc: "PAN Card", note: "For credit check and KYC" },
                { doc: "Bank Statement", note: "Last 3 months, PDF format" },
                {
                  doc: "Salary Slip",
                  note: "Latest 1 month (salaried applicants)",
                },
              ].map((d, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between py-3 border-b border-slate-100 last:border-0"
                >
                  <span className="text-[13px] text-slate-800 font-medium">
                    {d.doc}
                  </span>
                  <span className="text-[12px] text-slate-400 text-right max-w-[180px]">
                    {d.note}
                  </span>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
