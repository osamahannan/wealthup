export default function WhyWealthGrowsSection() {
  const features = [
    {
      title: 'Handpicked Investments',
    },
    {
      title: 'Capitalizing on Opportunities',
    },
    {
      title: 'Optimized for Tax Efficiency',
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] leading-[1.08] font-bold text-[#2C5588] text-center mb-4">
          Why Your Wealth Grows Faster With WealthUp
        </h2>
        <p className="max-w-[811px] text-[13px] sm:text-[14px] md:text-[20px] leading-[1.26] text-[#315B8F] text-center max-w-270 mx-auto mb-10 md:mb-14">
          A smarter investment approach combining expert-curated opportunities, dynamic portfolio adjustments, and tax-efficient strategies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-9">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative h-72.5 md:h-85 rounded-[22px] overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.23)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1.3px solid rgba(255, 255, 255, 0.7)',
                boxShadow: '0 16px 40px rgba(75, 124, 178, 0.18), inset 0 1px 0 rgba(255,255,255,0.35)',
              }}
            >
              <div
                className="absolute top-0 left-4.25 right-4.25 h-23 z-0 rounded-bl-[18px] rounded-br-[18px]"
                style={{
                  background: 'linear-gradient(170deg, rgba(67, 101, 145, 0.92) 0%, rgba(54, 86, 128, 0.95) 100%)',
                  filter: 'blur(3px)',
                  WebkitFilter: 'blur(3px)',
                }}
              />

              <div className="absolute top-0 left-0 right-0 h-23 z-10 flex items-center justify-center">
                <h3 className="text-[14px] md:text-[20px] leading-[1.12] font-semibold text-[#F4F8FE]">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
