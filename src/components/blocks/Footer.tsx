import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Branding</a></li>
              <li><a href="#" className="hover:underline">Design</a></li>
              <li><a href="#" className="hover:underline">Marketing</a></li>
              <li><a href="#" className="hover:underline">Advertisement</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Press kit</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms of use</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Cookie policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 space-y-4 md:space-y-0">
          <div className="flex items-center gap-3">
            <span className="text-lg">#</span>
            <div>
              <p className="font-medium">ACME Industries Ltd.</p>
              <p className="text-sm text-gray-400">
                Providing reliable tech since 1992
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
