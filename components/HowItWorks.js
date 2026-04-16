"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    tag: "Start here",
    title: "Fill a quick form",
    desc: "Answer a few basic questions — name, income, loan amount. Takes under 5 minutes. No paperwork, no branch visit.",
    active: true,
  },
  {
    num: "02",
    tag: "Automated",
    title: "Instant KYC verification",
    desc: "We verify your Aadhaar, PAN and bank statement in real-time through our AI-powered system. No human delay.",
    active: false,
  },
  {
    num: "03",
    tag: "Done",
    title: "Money in your account",
    desc: "Approved? Funds hit your bank account within 10 minutes. No waiting, no follow-up calls.",
    active: false,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400 mb-4">
              Simple process
            </p>
            <h2
              className="text-4xl sm:text-6xl text-slate-900 leading-[1.08] mb-5"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
              }}
            >
              Three steps.
              <br />
              <em className="text-[#0B409C] not-italic">Under 15 minutes.</em>
            </h2>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-6 max-w-md font-light mx-auto lg:mx-0">
              We've removed every unnecessary step from the loan process. No
              bank visits. No physical documents. No waiting days for approval.
            </p>
            <div className="flex items-start gap-3 bg-slate-50 border-l-2 border-[#0B409C] pl-4 pr-4 py-3 rounded-r-lg max-w-md mx-auto lg:mx-0">
              <p className="text-[13px] text-slate-500 leading-relaxed text-left">
                "Got my loan in 8 minutes flat. Couldn't believe it was real." —{" "}
                <span className="text-slate-800 font-medium">Rahul, Delhi</span>
              </p>
            </div>
          </motion.div>

          {/* Right Steps */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="pt-1"
          >
            {steps.map((step, i) => (
              <div key={i} className="flex gap-0">
                <div className="flex flex-col items-center w-[72px] flex-shrink-0">
                  <div
                    className={`w-[52px] h-[52px] rounded-full flex items-center justify-center border flex-shrink-0 ${
                      step.active
                        ? "bg-[#0a1628] border-[#0a1628]"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <span
                      className={`text-[22px] leading-none ${
                        step.active ? "text-white" : "text-slate-400"
                      }`}
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontWeight: 400,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 my-1.5 min-h-[40px]" />
                  )}
                </div>

                <div
                  className={`pl-5 ${i < steps.length - 1 ? "pb-10" : "pb-0"}`}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="w-[5px] h-[5px] bg-[#0B409C] rounded-full" />
                    <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#0B409C]">
                      {step.tag}
                    </span>
                  </div>
                  <h3
                    className="text-[1.45rem] text-slate-900 mb-2 leading-tight"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontWeight: 400,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-[1.75] font-light max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
