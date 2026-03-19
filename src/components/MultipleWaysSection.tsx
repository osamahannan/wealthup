import Image, { StaticImageData } from 'next/image';
import arrowTrendUpIcon from '@/assets/icons/arrow-trend-up.png';
import fileIcon from '@/assets/icons/file.png';
import briefcaseIcon from '@/assets/icons/briefcase.png';

type Option = {
  title: string;
  description: string;
  icon: StaticImageData;
  active?: boolean;
};

const options: Option[] = [
  {
    title: 'Mutual Funds',
    icon: arrowTrendUpIcon,
    description:
      'Professionally managed portfolios designed to grow your wealth over the long term. Diversified across sectors and asset classes to balance risk and returns.',
    active: true,
  },
  {
    title: 'Bonds',
    icon: fileIcon,
    description:
      'Stable income-generating investments for predictable and steady returns. Ideal for investors seeking lower volatility and consistent cash flow.',
  },
  {
    title: 'Invoice Discounting',
    icon: briefcaseIcon,
    description:
      'Access short-term investment opportunities backed by verified business invoices. Earn attractive returns while supporting real business transactions.',
  },
];

function TileIcon({ icon, alt }: { icon: StaticImageData; alt: string }) {
  return <Image src={icon} alt={alt} width={20} height={20} className="h-5 w-5 object-contain" />;
}

export default function MultipleWaysSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] sm:text-[34px] md:text-[50px] leading-[1.1] font-bold text-[#294F7C] text-center mb-3">
          Multiple ways to grow your wealth
        </h2>
        <p className="text-sm sm:text-base md:text-[36px] text-[#355E90] text-center mb-10 sm:mb-14 md:mb-16">
          Diversified investment options selected and optimized by WealthUp.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-32 mb-14 sm:mb-20">
          {options.map((option) => (
            <button
              key={option.title}
              className="relative h-22 w-44 sm:h-25 sm:w-50 transition-transform duration-300 hover:-translate-y-1"
              style={{
                transform: 'perspective(900px) rotate(-26deg) skew(6deg, 6deg)',
                transformStyle: 'preserve-3d',
              }}
              type="button"
            >
              <span
                className="absolute inset-0 rounded-[20px]"
                style={{
                  transform: 'translate(-5px, 6px) translateZ(-1px)',
                  background: option.active
                    ? 'linear-gradient(145deg, rgba(36, 69, 108, 0.95) 0%, rgba(30, 58, 93, 0.9) 100%)'
                    : '',
                  border: '1.5px solid rgba(74, 144, 226, 0.85)',
                  boxShadow: '0 10px 25px rgba(33, 72, 116, 0.22)',
                }}
              />

              <span
                className="absolute inset-0 rounded-[20px]"
                style={{
                  background: option.active
                    ? 'linear-gradient(145deg, #3D628F 0%, #2E537E 100%)'
                    : 'rgba(245, 250, 255, 0.55)',
                  border: '1.5px solid #4A90E2',
                  boxShadow: option.active
                    ? '0 12px 24px rgba(32, 73, 120, 0.3), inset 0 1px 0 rgba(255,255,255,0.12)'
                    : '0 10px 22px rgba(74, 144, 226, 0.16), inset 0 1px 0 rgba(255,255,255,0.62)',
                  backdropFilter: 'blur(3px)',
                  WebkitBackdropFilter: 'blur(3px)',
                }}
              />

              <div className="transform translate-z-5 flex items-center gap-3 sm:gap-4 pl-4 sm:pl-6">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#E5F1FF] border border-[#4A90E2] flex items-center justify-center shadow-[0_5px_14px_rgba(74,144,226,0.25)]">
                  <TileIcon icon={option.icon} alt={`${option.title} icon`} />
                </div>
                <p
                  className="text-[16px] sm:text-[20px] max-w-20 sm:max-w-25 leading-[1.05] font-semibold text-center"
                  style={{ color: option.active ? '#FFFFFF' : '#2F5C93', textShadow: option.active ? '0 1px 2px rgba(0,0,0,0.18)' : 'none' }}
                >
                  {option.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="rounded-[22px] border border-[#4A90E2] overflow-hidden flex flex-col lg:flex-row">
          {options.map((option) => (
            <article
              key={`details-${option.title}`}
              className="flex-1 p-8 md:p-9"
              style={{
                background: option.active
                  ? 'linear-gradient(160deg, #3F648F 0%, #375A84 100%)'
                  : 'rgba(245, 250, 255, 0.38)',
              }}
            >
              <div className="flex items-center gap-4 mb-7">
                <span
                  className="h-10 w-10 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: option.active ? 'rgba(255, 255, 255, 0.85)' : '#4A90E2',
                    background: option.active ? 'rgba(255, 255, 255, 0.14)' : 'rgba(229, 241, 255, 0.7)',
                  }}
                >
                  <TileIcon icon={option.icon} alt={`${option.title} icon`} />
                </span>
                <h3 className="text-[20px] md:text-[20px] leading-[1.1] font-semibold" style={{ color: option.active ? '#F4FAFF' : '#2F5C93' }}>
                  {option.title}
                </h3>
              </div>
              <p className="text-[16px] leading-[1.28]" style={{ color: option.active ? '#E8F3FF' : '#355E90' }}>
                {option.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
