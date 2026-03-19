import { Header, Footer } from '@/components/layout';
import {
  Hero,
  BackedBySection,
  MultipleWaysSection,
  WhyWealthGrowsSection,
  CTABanner,
  HowItWorksSection,
} from '@/features/home/sections';

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
