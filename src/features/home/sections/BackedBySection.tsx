import Image from 'next/image';
import irdaiLogo from '@/assets/images/irdai.png';
import govLoginImg from '@/assets/images/gov-login-img.png';
import startupIndiaLogo from '@/assets/images/startupindia.png';
import nvidiaLogo from '@/assets/images/Nvidia_logo.png';
import razorpayLogo from '@/assets/images/razorpay.png';
import amfiLogo from '@/assets/images/amfi.png';
import wadhwaniLogo from '@/assets/images/Wadhwanifoundation.png';

export default function BackedBySection() {
  const backers = [
    { name: 'Registered Agent', logo: irdaiLogo },
    { name: 'DPIIT Startup India', logo: govLoginImg },
    { name: 'Startup India', logo: startupIndiaLogo },
    { name: 'NVIDIA', logo: nvidiaLogo },
    { name: 'Razorpay', logo: razorpayLogo },
    { name: 'AMFI', logo: amfiLogo },
    { name: 'Wadhwani Foundation', logo: wadhwaniLogo },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-8 lg:pt-25 lg:pb-16">
      <div
        className="rounded-[22px] px-5 sm:px-8 lg:px-12 py-6"
        style={{
          background: 'rgba(255, 255, 255, 0.28)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.55)',
          boxShadow: '0 10px 32px rgba(80, 130, 180, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
        }}
      >
        <h2 className="text-center text-[16px] leading-none font-bold text-[#294F7C] mb-5">
          Backed By
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-x-6 gap-y-5 items-center justify-items-center">
          {backers.map((backer) => (
            <div key={backer.name} className="transition-all duration-200 opacity-85 hover:opacity-100">
              <Image
                src={backer.logo}
                alt={backer.name}
                width={148}
                height={58}
                className="object-contain h-9.5 w-auto sm:h-11"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
