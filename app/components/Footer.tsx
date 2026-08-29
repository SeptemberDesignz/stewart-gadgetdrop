import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  Clock,
  Globe,
  Share2,
  MessageCircle,
  Video,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Phones", href: "/phones" },
    { name: "Accessories", href: "/accessories" },
    { name: "Swap Deals", href: "/swap" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Delivery Information", href: "/delivery" },
    { name: "Returns Policy", href: "/returns" },
    { name: "Swap Information", href: "/swap" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Globe, href: "https://facebook.com/stewartgadgetdrop" },
    { name: "Instagram", icon: Share2, href: "https://instagram.com/stewartgadgetdrop" },
    { name: "Twitter", icon: MessageCircle, href: "https://twitter.com/stewartgadgetdrop" },
    { name: "YouTube", icon: Video, href: "https://youtube.com/stewartgadgetdrop" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  Stewart <span className="text-blue-400">Gadgetdrop</span>
                </span>
                <p className="text-xs text-gray-500">Premium Gadgets Store</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Your trusted destination for premium phones, gadgets, and accessories. 
              We also offer easy phone swap/trade-in deals to help you upgrade.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Customer Support</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+265 888 888 888</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">info@stewartgadgetdrop.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Lilongwe, Malawi</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Mon-Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-medium text-sm mb-3">Subscribe to our newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We&apos;ll never share your email with anyone else.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <p>
              &copy; {currentYear} <span className="text-white">Stewart Gadgetdrop</span>. 
              All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-2 sm:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span>|</span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-gray-400">Online</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}