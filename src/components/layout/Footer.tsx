import Image from 'next/image';
import logo from '@/assets/images/wealthup_logo.png';

export default function Footer() {
  return (
    <footer className="w-full px-6 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={logo}
                alt="Wealthup Logo"
                width={40}
                height={40}
                className="h-9 sm:h-10 w-auto"
              />
              <span className="text-xl sm:text-2xl font-bold text-white">WealthUp</span>
            </div>
            <p className="text-gray-400">
              Building wealth systematically for your life goals
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mutual Funds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Gold</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Insurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fixed Deposits</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2026 WealthUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
