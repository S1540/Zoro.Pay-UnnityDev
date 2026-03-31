"use client";
import { Users, IndianRupee, Timer, Lock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: IndianRupee,
    value: "₹5 Lakhs",
    label: "Max Loan Amount",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Timer,
    value: "15 Mins",
    label: "Disbursal Time",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Users,
    value: "5 Lakh+",
    label: "Customers Served",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Lock,
    value: "Zero",
    label: "Collateral Required",
    color: "text-orange-600 bg-orange-50",
  },
];

export default function Stats() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-5 sm:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-center text-center justify-center gap-4 p-2 md:p-5 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div
                  className={`max-w-12 max-h-12 ${s.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Icon />
                </div>
                <div>
                  <p className="text-sm md:text-2xl font-extrabold text-slate-900 font-serif">
                    {s.value}
                  </p>
                  <p className="text-slate-500 text-xs font-medium mt-0.5">
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
