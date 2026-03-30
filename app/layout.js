import "./globals.css";
import { Montserrat, DM_Serif_Display } from "next/font/google";

export const metadata = {
  title: "Zoro.pe – Instant Personal Loans | Unsecured Loans Online",
  description:
    "Get instant unsecured personal loans up to ₹5 Lakhs with Zoro.pe. Quick disbursal, minimal documentation, flexible repayment. Apply now!",
};
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
