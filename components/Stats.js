"use client";
import { Users, IndianRupee, Timer, Lock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: IndianRupee,
    value: "₹5 Mn",
    label: "Max Loan Amount",
  },
  {
    icon: Timer,
    value: "15 Mins",
    label: "Disbursal Time",
  },
  {
    icon: Users,
    value: "5 Mn+",
    label: "Customers Served",
  },
  {
    icon: Lock,
    value: "Zero",
    label: "Collateral Required",
  },
];

export default function Stats() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-5 sm:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 rounded-md overflow-hidden border border-slate-100">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-white flex flex-col items-center justify-center gap-3 py-8 px-6 text-center group hover:bg-[#FFF3F3] transition-colors duration-200"
              >
                {/* <div
                  className="w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #059669 0%, #0d9488 100%)",
                  }}
                >
                  <Icon size={18} className="text-white" strokeWidth={2} />
                </div> */}
                <div>
                  <p
                    className="text-2xl sm:text-3xl font-bold text-[#0f172a] leading-none mb-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #0B409C 0%, #0B409D 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-slate-500 text-xs font-medium tracking-wide">
                    {s.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
