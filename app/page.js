import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Eligibility from "@/components/Eligibility";
import EMICalculator from "@/components/EMICalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Eligibility />
      <EMICalculator />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
