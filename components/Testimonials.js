"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Building2, Lock, ShieldCheck } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    role: "IT Professional",
    text: "Applied during lunch break. Money hit my account before I finished eating. 8 minutes from form to funds — I've never seen anything like this.",
    rating: 5,
    initials: "RS",
    color: "#185FA5",
  },
  {
    name: "Priya Mehta",
    location: "Mumbai",
    role: "Marketing Manager",
    text: "Transparent fees, no hidden charges, and support answered on the first ring. Zoro.pe is the real deal — I was skeptical but now I'm a believer.",
    rating: 5,
    initials: "PM",
    color: "#185FA5",
  },
  {
    name: "Arjun Nair",
    location: "Bengaluru",
    role: "Freelance Designer",
    text: "Banks always rejected me as a freelancer. Zoro.pe looked at my bank statements instead. Got ₹1.5 Lakhs within the hour. Life-changing.",
    rating: 5,
    initials: "AN",
    color: "#7c3aed",
  },
  {
    name: "Sneha Gupta",
    location: "Hyderabad",
    role: "Teacher",
    text: "The EMI calculator helped me plan before I even applied. I knew exactly what I was getting into — that transparency made me trust them completely.",
    rating: 4,
    initials: "SG",
    color: "#e11d48",
  },
];

const trustBadges = [
  {
    icon: <Building2 size={16} className="text-blue-600" />,
    text: "RBI Registered NBFC",
  },
  {
    icon: <Lock size={16} className="text-blue-600" />,
    text: "256-bit Encryption",
  },
  {
    icon: <Star size={16} className="text-amber-400 fill-amber-400" />,
    text: "4.8 / 5 App Rating",
  },
  {
    icon: <ShieldCheck size={16} className="text-blue-600" />,
    text: "ISO 27001 Certified",
  },
];

function StarRow({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < rating
              ? "text-amber-400 fill-amber-400"
              : "text-slate-200 fill-slate-200"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-between items-end gap-6 mb-14"
        >
          <div className="max-w-md w-full text-center sm:text-left mx-auto sm:mx-0">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-600 mb-3">
              Real people
            </p>
            <h2
              className="text-slate-900 leading-[1.08]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Don't take our
              <br />
              word for it.
            </h2>
          </div>

          {/* Rating pill */}
          <div className="hidden sm:flex items-center gap-3 bg-amber-50 border border-amber-200/80 rounded-xl px-5 py-3">
            <span
              className="text-amber-900 leading-none"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "2rem",
                fontWeight: 400,
              }}
            >
              4.8
            </span>
            <div className="flex-col gap-1">
              <StarRow rating={5} />
              <span className="text-[11px] font-semibold text-amber-800 tracking-wide">
                50,000+ reviews
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-14"
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 hover:border-blue-200 hover:shadow-[0_0_0_3px_#dbeafe] transition-all duration-200"
            >
              <StarRow rating={r.rating} />

              <p className="text-[13px] text-slate-600 leading-[1.75] font-normal flex-1">
                <span
                  className="text-blue-200 mr-0.5"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.4rem",
                    lineHeight: 0,
                    position: "relative",
                    top: "6px",
                  }}
                >
                  "
                </span>
                {r.text}
              </p>

              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 tracking-wide"
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-slate-900">
                    {r.name}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {r.role} · {r.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trust row */}
        <div className="flex justify-center gap-8 pt-5 border-t border-slate-100 overflow-x-auto">
          {trustBadges.map((b) => (
            <div key={b.text} className="flex items-center gap-2.5 text-nowrap">
              <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0">
                {b.icon}
              </div>
              <span className="text-[12.5px] font-semibold text-slate-500">
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
