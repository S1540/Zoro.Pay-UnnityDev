import Link from "next/link";

const footerLinks = {
  "Our Products": [
    { label: "Personal Loan", href: "/under-maintenance" },
    { label: "Salary Advance", href: "/under-maintenance" },
    { label: "Consumer Durable Loan", href: "/under-maintenance" },
    { label: "EMI Calculator", href: "#emi-calculator" },
    { label: "Check Eligibility", href: "/under-maintenance" },
  ],
  Company: [
    { label: "About Us", href: "/under-maintenance" },
    { label: "Careers", href: "/under-maintenance" },
    { label: "Blog", href: "/under-maintenance" },
    { label: "Press & Media", href: "/under-maintenance" },
    { label: "Investor Relations", href: "/under-maintenance" },
  ],
  Support: [
    { label: "Contact Us", href: "/under-maintenance" },
    { label: "FAQs", href: "#faq" },
    { label: "Grievance Redressal", href: "/under-maintenance" },
    { label: "Track Your Loan", href: "/under-maintenance" },
    { label: "Repayment Options", href: "/under-maintenance" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/under-maintenance" },
    { label: "Terms & Conditions", href: "/under-maintenance" },
    { label: "Fair Practice Code", href: "/under-maintenance" },
    { label: "KYC Policy", href: "/under-maintenance" },
    { label: "Cookie Policy", href: "/under-maintenance" },
  ],
};

const socialLinks = [
  {
    label: "Twitter / X",
    href: "/under-maintenance",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "/under-maintenance",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "/under-maintenance",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "/under-maintenance",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const seoLinkCategories = [
  {
    heading: "Type of Personal Loans",
    links: [
      "Instant Personal Loan",
      "Fast Cash Loan",
      "Emergency Loan",
      "Short Term Loan",
      "Personal Loan for Salaried",
      "Personal Loan for Self Employed",
      "Personal Loan for Women",
      "Personal Loan for Students",
      "Personal Loan Without CIBIL",
      "Small Personal Loan",
      "Urgent Loan",
      "Bullet Loan",
    ],
  },
  {
    heading: "Personal Loans by Amount",
    links: [
      "₹10,000 Personal Loan",
      "₹20,000 Personal Loan",
      "₹50,000 Personal Loan",
      "₹1 Lakh Personal Loan",
      "₹2 Lakh Personal Loan",
      "₹3 Lakh Personal Loan",
      "₹5 Lakh Personal Loan",
      "₹10,000 Instant Loan",
      "₹25,000 Instant Loan",
      "₹50,000 Instant Loan",
    ],
  },
  {
    heading: "Loan for Personal Needs",
    links: [
      "Personal Loan for Travel",
      "Personal Loan for Wedding",
      "Personal Loan for Medical Emergency",
      "Personal Loan for Home Renovation",
      "Personal Loan for Education",
      "Personal Loan for Debt Consolidation",
      "Personal Loan for Shopping",
      "Personal Loan for Car Repair",
      "Personal Loan for Gadgets",
    ],
  },
  {
    heading: "Loans by Location",
    links: [
      "Personal Loan in Delhi",
      "Personal Loan in Mumbai",
      "Personal Loan in Bangalore",
      "Personal Loan in Hyderabad",
      "Personal Loan in Chennai",
      "Personal Loan in Pune",
      "Personal Loan in Kolkata",
      "Personal Loan in Ahmedabad",
      "Personal Loan in Jaipur",
      "Personal Loan in Noida",
      "Personal Loan in Gurugram",
    ],
  },
  {
    heading: "Loan EMI Calculators",
    links: [
      "Personal Loan EMI Calculator",
      "Home Loan EMI Calculator",
      "Car Loan EMI Calculator",
      "Education Loan EMI Calculator",
      "Business Loan EMI Calculator",
      "Bike Loan EMI Calculator",
      "Salary Advance Calculator",
      "Loan Eligibility Calculator",
    ],
  },
  // {
  //   heading: "Bullet Loan",
  //   links: [
  //     "HDFC Bank EMI Calculator",
  //     "SBI EMI Calculator",
  //     "ICICI Bank EMI Calculator",
  //     "Axis Bank EMI Calculator",
  //     "Kotak Mahindra EMI Calculator",
  //     "IndusInd Bank EMI Calculator",
  //     "Yes Bank EMI Calculator",
  //     "Bajaj Finserv EMI Calculator",
  //   ],
  // },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-slate-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/Zorope-apr.png"
                className="h-16 w-auto object-contain"
                alt="Zorope"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-6 max-w-xs">
              India's trusted digital lending platform. Get instant personal
              loans up to ₹5 Lakhs with zero collateral and 100% online process.
            </p>

            {/* App Badges */}
            <div className="flex flex-col gap-2.5 mb-7">
              {[
                {
                  top: "Download on the",
                  bottom: "App Store",
                  icon: (
                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.41.74 3.23.77.97-.09 1.87-.78 3.3-.84 1.87.1 3.27.83 4.08 2.1-3.57 2.19-2.98 7.13.72 8.46-.4.98-.89 1.95-1.33 2.39zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  ),
                },
                {
                  top: "Get it on",
                  bottom: "Google Play",
                  icon: (
                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                      <path d="M3.18 23.76c.28.16.6.17.9.06l12.39-7.16-2.67-2.67-10.62 9.77zm-1.73-20.1C1.17 4.04 1 4.5 1 5.04v13.9c0 .55.17 1 .45 1.38l.07.07 7.78-7.78v-.19L1.52 3.63l-.07.03zm17.42 8.49l-2.46-1.42-2.87 2.87 2.87 2.87 2.49-1.44c.71-.41.71-1.08-.03-1.88zm-15.7 9.3l10.62-6.14-2.67-2.67-7.95 8.81z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <Link
                  key={s.bottom}
                  href="/under-maintenance"
                  className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/8 border border-white/8 px-4 py-2.5 rounded-md transition-all w-fit"
                >
                  <div className="w-6 h-6 rounded-full">{s.icon}</div>
                  <div>
                    <p className="text-[10px] text-slate-500">{s.top}</p>
                    <p className="text-white font-semibold text-sm">
                      {s.bottom}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 bg-white/5 hover:bg-blue-600 border border-white/8 hover:border-blue-600 rounded-md flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 pt-8">
          {/* RBI Disclaimer */}
          <div className="mb-8">
            <p className="text-xs text-slate-600 leading-relaxed">
              <span className="text-slate-500 font-semibold">
                Regulatory Information:{" "}
              </span>
              Aeternum Tech Private Limited is a Non-Banking Financial Company
              (NBFC) registered with the Reserve Bank of India (RBI). CIN:
              U65999MH2024PTC000001. Aeternum Tech Private Limited is not a bank
              and does not accept deposits. Loans are subject to credit
              evaluation, KYC verification, and approval at various lending
              partners. Interest rates, processing fees, and all applicable
              charges are communicated to the borrower before loan disbursement.
              Late repayment may attract penal charges and negatively impact on
              your credit score with credit bureaus like(CIBIL, Experian,
              Equifax, CRIF). Please read all loan-related documents carefully
              before signing. Borrowers are advised to borrow responsibly within
              their repayment capacity.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 md:gap-4">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Aeternum Tech Private Limited. All
              rights reserved
            </p>
            <p className="text-xs text-slate-600">
              Designed and Developed by{" "}
              <a href="https://unnity.in">
                {" "}
                Team
                <strong>Unnity.in</strong>
              </a>
            </p>
            <div className="flex flex-wrap gap-3 md:gap-5">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Cookie Policy",
                "Sitemap",
              ].map((item) => (
                <Link
                  key={item}
                  href="/under-maintenance"
                  className="text-xs text-slate-600 hover:text-blue-400 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SEO Link Grid — KreditBee style */}
      <div className="border-t border-white/5 bg-[#080c10]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
          {seoLinkCategories.map((cat, idx) => (
            <div
              key={cat.heading}
              className={`flex flex-col sm:flex-row gap-2 sm:gap-0 py-4 ${
                idx !== seoLinkCategories.length - 1
                  ? "border-b border-white/5"
                  : ""
              }`}
            >
              {/* Category label */}
              <div className="sm:w-64 flex-shrink-0">
                <span className="text-slate-300 font-semibold text-xs">
                  {cat.heading}
                </span>
              </div>

              <ul className="flex flex-wrap gap-x-0 gap-y-1.5 flex-1">
                {cat.links.map((link, i) => (
                  <li
                    key={link}
                    className="w-1/2 sm:w-1/3 lg:w-1/5 flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    <span className=" h-full w-[1px] bg-slate-600 flex-shrink-0">
                      {" "}
                    </span>
                    <span className="truncate">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
