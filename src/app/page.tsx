import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BackedBySection from '@/components/BackedBySection';
import MultipleWaysSection from '@/components/MultipleWaysSection';
import WhyWealthGrowsSection from '@/components/WhyWealthGrowsSection';
import CTABanner from '@/components/CTABanner';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BackedBySection />
        <MultipleWaysSection />
        <WhyWealthGrowsSection />
        <CTABanner />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
