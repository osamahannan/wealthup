import Image from 'next/image';
import logo from '@/assets/images/wealthup_logo.png';

export default function Header() {
  return (
    <header className="w-full py-4 sm:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Wealthup Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Login pill button */}
        <button
          className="px-6 sm:px-9 py-2 sm:py-2.5 rounded-full text-sm font-semibold text-[#294F7C] cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(160deg, rgba(241, 249, 255, 0.72) 0%, rgba(213, 232, 248, 0.68) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.85)',
            boxShadow: '0 3px 6px #3483e2, inset 0 1px 0 #FFFFFF',
          }}
        >
          Login
        </button>
      </div>
    </header>
  );
}
