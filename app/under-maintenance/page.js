import Link from "next/link";

export const metadata = {
  title: "Coming Soon – Zoro.pe",
};

export default function UnderMaintenance() {
  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center px-5">
      <div className="text-center max-w-md w-full">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2.5 mb-12">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-green-900/40">
            <span className="text-white font-black text-xl">Z</span>
          </div>
          <span className="text-xl font-extrabold text-white">
            zoro<span className="text-amber-400">.pe</span>
          </span>
        </Link>

        {/* Icon */}
        <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-9 h-9 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
          We're building this
        </h1>
        <p className="text-slate-400 mb-2">
          This page is under maintenance.
        </p>
        <p className="text-slate-600 text-sm mb-10">
          Our team is working hard on it. Check back soon.
        </p>

        {/* Progress */}
        <div className="bg-white/5 rounded-full h-1.5 mb-10 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full w-3/4 rounded-full" />
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
        >
          ← Back to Home
        </Link>

        <p className="text-slate-600 text-xs mt-8">
          Need help?{" "}
          <a href="mailto:support@zoro.pe" className="text-blue-500 hover:text-blue-400">
            support@zoro.pe
          </a>
        </p>
      </div>
    </div>
  );
}
