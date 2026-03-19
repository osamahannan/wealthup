import Image from 'next/image';
import mobileImage from '@/assets/images/mobile.png';
import magnifyingGlassIcon from '@/assets/icons/magnifying_glass.png';
import personChalkboardIcon from '@/assets/icons/person_chalkboard.png';

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: 'Define Your Goal',
    description:
      "Start by defining what you want to achieve whether it's buying a car, travelling, or building long-term wealth. Tell us the goal amount and timeline, and we'll create a personalized investment plan to help you get there.",
  },
  {
    title: 'Setup Your Investment Account',
    description:
      'Complete a simple and secure account setup with quick KYC verification. This allows you to invest seamlessly through regulated platforms and start building your portfolio.',
  },
  {
    title: 'Track Progress & Stay Invested',
    description:
      'Monitor your progress in real-time and receive smart recommendations to stay on course. We keep your investment plan aligned with your evolving financial goals.',
  },
];

function ProgressDots() {
  return (
    <div className="mt-7 flex items-center gap-2.5">
      <span className="h-2.5 w-32 sm:w-52 rounded-full bg-[#315B8F]" />
      <span className="h-2.5 w-6 sm:w-10 rounded-full bg-[#BCD5EE]" />
      <span className="h-2.5 w-6 sm:w-10 rounded-full bg-[#BCD5EE]" />
      <span className="h-2.5 w-6 sm:w-10 rounded-full bg-[#BCD5EE]" />
      <span className="h-2.5 w-6 sm:w-10 rounded-full bg-[#BCD5EE]" />
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[24px] md:text-[36px] leading-[1.1] font-bold text-[#2C5588] text-center mb-3">
          How it Works?
        </h2>
        <p className="text-[16px] md:text-[20px] text-[#315B8F] text-center mb-9 md:mb-10">
          India&apos;s most intelligent investment platform
        </p>

        <div className="space-y-7">
          <div
            className="relative overflow-hidden rounded-[18px] border"
            style={{
              borderColor: '#6FA9E6',
              background: 'rgba(245, 248, 252, 0.78)',
            }}
          >
            <div className="relative z-10 grid md:grid-cols-[1fr_455px] gap-6 md:gap-10">
              <div className="p-6 md:p-7">
                <div className="mb-5 h-13 w-13 rounded-full border border-[#5D94CC] bg-[#BFD9F2] flex items-center justify-center">
                  <Image src={magnifyingGlassIcon} alt="Magnifying glass icon" width={24} height={24} className="h-6 w-6 object-contain" />
                </div>
                <h3 className="text-[20px] md:text-[24px] leading-[1.12] font-semibold text-[#2E578A] mb-3">
                  {steps[0].title}
                </h3>
                <p className="text-[15px] md:text-[20px] leading-[1.35] text-[#2F5A8E] max-w-full sm:max-w-157.5">
                  {steps[0].description}
                </p>
                <ProgressDots />
              </div>

              <div className="relative flex justify-center md:justify-center items-center">
                <div
                  className="pointer-events-none absolute right-0 top-0 hidden h-full w-full rounded-2xl md:block"
                  style={{
                    background: '#CFE6F7',
                    filter: 'blur(24px)',
                    opacity: 0.85,
                  }}
                />
                <Image
                  src={mobileImage}
                  alt="Mobile app preview"
                  width={230}
                  height={300}
                  className="relative z-10 h-55 md:h-62.5 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[18px] border p-6 md:p-7"
            style={{
              borderColor: '#6FA9E6',
              background: 'rgba(245, 248, 252, 0.78)',
            }}
          >
            <div className="relative z-10 grid md:grid-cols-[1fr_455px] gap-6 md:gap-10">
              <div className="relative z-10 max-w-175">
                <div className="mb-5 h-13 w-13 rounded-full border border-[#5D94CC] bg-[#BFD9F2] flex items-center justify-center">
                  <Image src={personChalkboardIcon} alt="Person chalkboard icon" width={24} height={24} className="h-6 w-6 object-contain" />
                </div>
                <h3 className="text-[20px] md:text-[24px] leading-[1.12] font-semibold text-[#2E578A] mb-3">
                  {steps[1].title}
                </h3>
                <p className="text-[15px] md:text-[20px] leading-[1.35] text-[#2F5A8E]">
                  {steps[1].description}
                </p>
              </div>
              <div className="relative flex justify-center md:justify-center items-center">
                <div
                  className="pointer-events-none absolute right-0 top-0 hidden h-full w-full rounded-2xl md:block"
                  style={{
                    background: '#CFE6F7',
                    filter: 'blur(24px)',
                    opacity: 0.85,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
