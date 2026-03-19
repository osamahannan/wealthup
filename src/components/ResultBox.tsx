interface ResultBoxProps {
  label: string;
  value: string;
}

export default function ResultBox({ label, value }: ResultBoxProps) {
  return (
    <div
      className="rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-center w-full min-w-0 sm:min-w-45"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.7) 0%, rgba(240,245,252,0.5) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '2px solid #4A90E2',
        boxShadow:
          '0 8px 24px rgba(100, 149, 237, 0.1), inset 0 1px 3px rgba(100, 149, 237, 0.08)',
      }}
    >
      <div className="text-xs font-medium text-[#5F7A96] mb-1">{label}</div>
      <div className="text-lg sm:text-xl font-bold text-[#1B3A5C]">{value}</div>
    </div>
  );
}
