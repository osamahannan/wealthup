'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import clsx from 'clsx';

interface GoalCardProps {
  icon: string | StaticImageData;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function GoalCard({ icon, label, selected, onClick }: GoalCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center gap-4 sm:gap-6 justify-between p-3 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer w-full sm:w-45 h-24 sm:h-25',
        selected
          ? 'scale-[1.02]'
          : 'hover:scale-[1.01]'
      )}
      style={{
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: selected
          ? '1.5px solid #4A90E2'
          : '1.5px solid rgba(255, 255, 255, 0.9)',
        boxShadow: selected
          ? '0 12px 36px rgba(100, 149, 237, 0.18)'
          : '0 8px 28px rgba(100, 149, 237, 0.08)',
      }}
    >
      <Image src={icon} alt={label} width={label === 'Car' || label === 'Travel' ? 72 : 56} height={56} className="h-12 sm:h-14 w-auto object-contain" />
      <span
        className="text-base sm:text-[20px] font-semibold text-[#294F7C]"
      >
        {label}
      </span>
    </button>
  );
}
