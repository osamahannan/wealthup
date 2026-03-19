import Image from 'next/image';
import perinBg from '@/assets/images/Perlin_bg.png';

export default function CTABanner() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-16">
      <div className="max-w-7xl mx-auto relative rounded-[48px] overflow-hidden bg-white/30 border border-white/50">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={perinBg}
            alt="gradient background"
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Left ellipse gradient overlay */}
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 62% 125% at 18% 50%, rgba(74, 144, 226, 0.22) 0%, rgba(74, 144, 226, 0.14) 34%, rgba(74, 144, 226, 0.08) 50%, transparent 68%)',
          }}
        />

        {/* Glass container */}
        <div
          className="relative z-10 rounded-[48px] p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8"
        >
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[16px] md:text-[36px] leading-[1.12] font-semibold text-[#2C5588] mb-3">
              Your Goals Deserve a Plan
            </h2>
            <p className="text-[12px] md:text-[16px] leading-normal text-[#3D5A7F]">
              Start your personalized investment roadmap in minutes.
            </p>
          </div>

          {/* Right CTA button */}
          <button
            className="w-full md:w-auto md:min-w-100 cursor-pointer px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full font-semibold text-sm sm:text-base text-white flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(90deg, #3578C6 0%, #294F7C 100%)',
              boxShadow: '0 12px 32px rgba(52, 120, 198, 0.4), 0 6px 16px rgba(74, 144, 226, 0.25)',
            }}
          >
            Create your investment plan
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
