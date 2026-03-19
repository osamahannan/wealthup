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
        'flex items-center gap-6 justify-between p-4 rounded-[16px] transition-all duration-200 cursor-pointer w-[180px] h-[100px]',
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
      <Image src={icon} alt={label} width={label === 'Car' || label === 'Travel' ? 80 : 60} height={60} />
      <span
        className='text-[20px] font-semibold text-[#294F7C]'
      >
        {label}
      </span>
    </button>
  );
}
