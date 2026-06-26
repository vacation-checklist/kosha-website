import { Link } from 'react-router-dom'
import Hero from "../../components/Hero";
import HowItWorks from "../../components/HowItWorks";
import Features from "../../components/Features";
import CTASection from "../../components/CTASection";

export default function VacationLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="site-header border-b border-cream-dark">
        
      </section>

      <div className="hero-divider"></div>
      <Hero />
       <HowItWorks />
      <Features />
      <CTASection />
    </div>
  );
}
