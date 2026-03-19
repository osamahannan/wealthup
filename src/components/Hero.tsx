'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import GoalCard from './GoalCard';
import Slider from './Slider';
import ResultBox from './ResultBox';
import car from '@/assets/images/car.png';
import airplane from '@/assets/images/airplane.png';
import home from '@/assets/images/home.png';
import custom from '@/assets/images/custom.png';
import ellipseBg from '@/assets/images/ellipse_bg.png';

const goals = [
  { name: 'Car', icon: car, image: car, title: 'Buy a car', cta: "Let's get your car", heroWidth: 380, heroHeight: 173, ctaIconWidth: 24 },
  { name: 'Travel', icon: airplane, image: airplane, title: 'Plan your trip', cta: "Let's plan your trip", heroWidth: 360, heroHeight: 173, ctaIconWidth: 24 },
  { name: 'Home', icon: home, image: home, title: 'Buy a home', cta: "Let's get your home", heroWidth: 300, heroHeight: 173, ctaIconWidth: 22 },
  { name: 'Custom', icon: custom, image: custom, title: 'Custom goal', cta: "Let's start planning", heroWidth: 280, heroHeight: 173, ctaIconWidth: 22 },
];

function formatCurrency(value: number): string {
  if (value >= 10000000) {
    const cr = value / 10000000;
    return `₹ ${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(1)}cr`;
  }
  if (value >= 100000) {
    const l = value / 100000;
    return `₹ ${l % 1 === 0 ? l.toFixed(0) : l.toFixed(1)}L`;
  }
  if (value >= 1000) {
    const k = value / 1000;
    return `₹ ${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}k`;
  }
  return `₹ ${value.toLocaleString('en-IN')}`;
}

export default function Hero() {
  const [selectedGoal, setSelectedGoal] = useState('Car');
  const [price, setPrice] = useState(2000000);
  const [years, setYears] = useState(5);

  const goalData = goals.find((g) => g.name === selectedGoal) || goals[0];

  const { lumpSum, monthlySIP } = useMemo(() => {
    const annualRate = 0.12;
    const lump = Math.round(price / Math.pow(1 + annualRate, years));
    const monthlyRate = annualRate / 12;
    const months = years * 12;
    const sip = Math.round((price * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1));
    return { lumpSum: lump, monthlySIP: sip };
  }, [price, years]);

  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-8 lg:pt-25 lg:pb-16">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">

          {/* ── LEFT SECTION ── */}
          <div className="flex flex-col">

            {/* Trust badge */}
            <div className="flex items-center gap-3 mb-8 w-fit px-3 py-0.5 rounded-full" style={{
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(255, 255, 255, 0.9)',
            }}>
              <div className="flex -space-x-2">
                <Image src="/images/profile1.png" alt="User" width={30} height={30} className="rounded-full border-2 border-white" />
                <Image src="/images/profile2.png" alt="User" width={30} height={30} className="rounded-full border-2 border-white" />
                <Image src="/images/profile3.png" alt="User" width={30} height={30} className="rounded-full border-2 border-white" />
              </div>
              <span className="text-sm font-medium text-[#000000] px-4 py-1.5" >
                Trusted by over 2,000 users
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.08] mb-6">
              <span className="text-[#1B3A5C]">Plan your life goals.{' '}</span>
              <span className="text-[#4A90E2]">
                We&apos;ll plan the investments.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-[#5F7A96] mb-10 max-w-[420px] leading-relaxed">
              WealthUp helps you achieve goals through personalised goal based investing.
            </p>

            {/* Goal cards grid */}
            <div className="grid grid-cols-2 gap-4 max-w-[420px]">
              {goals.map((goal) => (
                <GoalCard
                  key={goal.name}
                  icon={goal.icon}
                  label={goal.name}
                  selected={selectedGoal === goal.name}
                  onClick={() => setSelectedGoal(goal.name)}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT SECTION ── */}
          <div className="relative flex flex-col gap-16">

            {/* Calculator card */}
            <div
              className="rounded-[24px] p-7 md:p-8"
              style={{
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '2px solid #4A90E2',
                boxShadow: '0 24px 60px rgba(100, 149, 237, 0.25), 0 8px 20px rgba(100, 149, 237, 0.15)',
              }}
            >
              {/* Card title */}
              <h2 className="text-lg font-bold text-[#294F7C] text-center mb-6">
                {goalData.title}
              </h2>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: sliders + CTA */}
                <div className="flex-1 min-w-0">
                  <Slider
                    label="Car price"
                    value={price}
                    min={500000}
                    max={10000000}
                    step={100000}
                    valueDisplay={formatCurrency(price)}
                    minLabel="₹ 5L"
                    maxLabel="₹ 1cr"
                    onChange={setPrice}
                  />
                  <Slider
                    label="Time to buy"
                    value={years}
                    min={1}
                    max={10}
                    step={1}
                    valueDisplay={`${years} years`}
                    onChange={setYears}
                  />

                  {/* CTA Button */}
                  <button className="hero-cta mt-3 flex items-center gap-2 px-6 py-2 rounded-full text-[#294F7C] font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    style={{
                      background: 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '2px solid #4A90E2',
                      boxShadow: '0 24px 60px rgba(100, 149, 237, 0.25), 0 8px 20px rgba(100, 149, 237, 0.15)',
                    }}
                  >
                    {goalData.cta}
                    <Image
                      src={goalData.icon}
                      alt={`${goalData.name} icon`}
                      width={goalData.ctaIconWidth}
                      height={goalData.ctaIconWidth}
                      className="h-auto object-contain -scale-x-100"
                    />
                  </button>
                </div>

                {/* Right: result boxes */}
                <div className="flex flex-row md:flex-col items-center justify-center gap-3 md:min-w-[140px]">
                  <ResultBox label="Lump Sum" value={formatCurrency(lumpSum)} />
                  <span className="text-xs font-semibold text-[#8FA3B8] uppercase tracking-wider">
                    OR
                  </span>
                  <ResultBox label="Monthly SIP" value={formatCurrency(monthlySIP)} />
                </div>
              </div>
            </div>

            {/* Large goal image */}
            <div className="flex justify-center mt-6 mr-4 transition-all duration-300">
              <div className="relative">
                <Image
                  src={goalData.image}
                  alt={goalData.name}
                  width={goalData.heroWidth}
                  height={goalData.heroHeight}
                  className="object-contain drop-shadow-lg transition-opacity duration-300"
                  priority
                />
                {/* Realistic ground shadow */}
                <Image
                  src={ellipseBg}
                  alt="Ground shadow"
                  width={507}
                  height={50}
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[92%] max-w-[507px] h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
