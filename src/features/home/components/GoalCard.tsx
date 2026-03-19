'use client';

import { memo } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import clsx from 'clsx';

interface GoalCardProps {
  icon: string | StaticImageData;
  label: string;
  selected: boolean;
  onClick: () => void;
}

function GoalCard({ icon, label, selected, onClick }: GoalCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center gap-3 sm:gap-4 justify-start p-3 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer w-full sm:w-45 h-24 sm:h-25',
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
      <Image src={icon} alt={label} width={label === 'Car' || label === 'Travel' ? 58 : 46} height={46} className="object-contain shrink-0" />
      <span
        className="min-w-0 truncate text-base sm:text-[18px] font-semibold text-[#294F7C]"
      >
        {label}
      </span>
    </button>
  );
}

export default memo(GoalCard);
