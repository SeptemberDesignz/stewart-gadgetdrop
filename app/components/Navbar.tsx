"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Phone,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Phones", href: "/phones" },
    { name: "Accessories", href: "/accessories" },
    { name: "Swap Deals", href: "/swap" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">
          
          {/* Logo - Left Side - LARGER */}
          <Link href="/" className="flex items-center space-x-4 flex-shrink-0 group">
            <div className="relative w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0">
              <Image
                src="/images/logo/logo.png"
                alt="Stewart Gadgetdrop Logo"
                fill
                className="object-contain rounded-xl"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <span class="text-white font-bold text-4xl lg:text-5xl tracking-tight">SG</span>
                    </div>`;
                  }
                }}
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Stewart <span className="text-blue-600">Gadgetdrop</span>
              </span>
              <span className="block text-sm text-gray-400 font-medium tracking-wider uppercase">Premium Gadgets</span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Center */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-200 group"
              >
                {link.name}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </div>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
            {/* Search - Desktop */}
            <button 
              className="hidden sm:flex p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link 
              href="/wishlist" 
              className="p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg shadow-red-500/25">
                0
              </span>
            </Link>

            {/* Cart - With Dynamic Count */}
            <Link 
              href="/cart" 
              className="p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[10px] font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center shadow-lg shadow-blue-600/25">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link 
              href="/account" 
              className="hidden sm:flex p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/265888888888" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide Down */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-100/80 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="border-t border-gray-100/80 my-3"></div>
          
          <Link
            href="/account"
            className="flex items-center px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <User className="w-5 h-5 mr-3" />
            My Account
          </Link>
          
          <Link
            href="/cart"
            className="flex items-center px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart className="w-5 h-5 mr-3" />
            Cart ({cartCount})
          </Link>
          
          <a
            href="https://wa.me/265888888888"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-3 text-base font-medium text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="w-5 h-5 mr-3" />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}