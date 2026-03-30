"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is the maximum loan amount I can get?",
    a: "You can borrow up to ₹5,00,000 (5 Lakhs) with Zoro.pe. The exact amount approved depends on your income, credit score, and repayment capacity evaluated by our system.",
  },
  {
    q: "How quickly will the money reach my account?",
    a: "Once approved, the loan amount is credited directly to your registered bank account within 10 minutes. The entire journey — from application to disbursal — is 100% digital with no manual steps.",
  },
  {
    q: "What documents do I need to apply?",
    a: "Just three things: your Aadhaar card, PAN card, and last 3 months' bank statement. Everything is submitted digitally. No physical copies, no courier, no branch visit.",
  },
  {
    q: "Do I need to provide any collateral or guarantor?",
    a: "No. Zoro.pe provides 100% unsecured personal loans. You don't need to pledge property, gold, FDs, or involve a guarantor of any kind.",
  },
  {
    q: "What interest rate will I be charged?",
    a: "Our rates start from 1.5% per month (18% per annum). Your actual rate depends on your credit profile, income, and chosen tenure. All charges are shown upfront before you confirm the loan — no surprises.",
  },
  {
    q: "Can I repay early or close my loan before tenure ends?",
    a: "Yes, you can foreclose your loan after completing 3 EMIs. Foreclosure charges may apply as per your loan agreement. The exact terms are clearly mentioned in your sanction letter.",
  },
  {
    q: "Will checking my eligibility affect my CIBIL score?",
    a: "No. Checking your eligibility on Zoro.pe is a soft inquiry and doesn't impact your CIBIL score. A hard credit inquiry only happens at the time of your final loan application.",
  },
  {
    q: "Is Zoro.pe safe? Is it regulated by RBI?",
    a: "Yes. Zoro.pe operates as a registered NBFC under Reserve Bank of India (RBI) guidelines. Your personal data is protected with 256-bit bank-grade encryption, and we follow all RBI fair lending practices.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Left sticky heading */}
          <div className="md:sticky md:top-24 md:self-start text-center md:text-left">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-600 mb-3">
              Got Questions?
            </p>
            <h2
              className="text-slate-900 leading-[1.08] mb-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              }}
            >
              Everything you need
              <br />
              to know.
            </h2>
            <p className="text-[14px] text-slate-500 leading-relaxed max-w-md mb-10">
              Can't find what you're looking for? Reach our support team
              anytime.
            </p>
            <a
              href="mailto:support@zoro.pe"
              className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
            >
              support@zoro.pe →
            </a>
          </div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                  key={i}
                  className={`bg-white rounded-lg border transition-all ${
                    isOpen
                      ? "border-blue-200 shadow-sm shadow-blue-50"
                      : "border-slate-100"
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-[14px] text-slate-800 leading-relaxed font-medium">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 mt-0.5 transition-colors ${isOpen ? "text-blue-600" : "text-slate-400"}`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
