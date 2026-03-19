'use client';

import { memo } from 'react';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  valueDisplay: string;
  minLabel?: string;
  maxLabel?: string;
  onChange: (value: number) => void;
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  valueDisplay,
  minLabel,
  maxLabel,
  onChange,
}: SliderProps) {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#5F7A96]">{label}</span>
        <span className="text-sm font-bold text-[#294F7C]">{valueDisplay}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="hero-slider w-full"
        style={{ '--progress': `${progress}%` } as React.CSSProperties}
      />
      {(minLabel || maxLabel) && (
        <div className="flex justify-between mt-1.5">
          <span className="text-[11px] text-[#8FA3B8]">{minLabel}</span>
          <span className="text-[11px] text-[#8FA3B8]">{maxLabel}</span>
        </div>
      )}
    </div>
  );
}

export default memo(Slider);
