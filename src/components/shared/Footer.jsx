import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            Care.xyz
          </h3>

          <p className="mt-3 text-sm text-gray-400">
            Trusted babysitting and elderly care services for families.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-medium mb-4">Services</h4>

          <ul className="space-y-2 text-sm">
            <li><Link href="#">Babysitting</Link></li>
            <li><Link href="#">Elderly Care</Link></li>
            <li><Link href="#">Patient Care</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>

          <ul className="space-y-2 text-sm">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-medium mb-4">Legal</h4>

          <ul className="space-y-2 text-sm">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Care.xyz. All rights reserved.
      </div>

    </footer>
  );
}
