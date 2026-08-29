"use client";

import Link from "next/link";
import { ArrowRight, Phone, Smartphone, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

export default function SwapDeals() {
  const brands = [
    { name: "Apple", color: "bg-gray-800" },
    { name: "Samsung", color: "bg-blue-600" },
    { name: "Google", color: "bg-green-600" },
    { name: "Xiaomi", color: "bg-orange-500" },
    { name: "Tecno", color: "bg-red-500" },
    { name: "Infinix", color: "bg-purple-600" },
  ];

  const steps = [
    {
      icon: Phone,
      title: "Choose Your Current Phone",
      description: "Select your current device brand and model"
    },
    {
      icon: Smartphone,
      title: "Pick Your Upgrade",
      description: "Choose the phone you want to upgrade to"
    },
    {
      icon: TrendingUp,
      title: "Get Your Estimate",
      description: "We'll calculate the estimated top-up amount"
    },
    {
      icon: CheckCircle,
      title: "Complete Your Swap",
      description: "Visit our store for final inspection and confirmation"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔄 POPULAR SERVICE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SWAP YOUR PHONE.
            <span className="block text-blue-600">UPGRADE TODAY.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bring your current phone and upgrade to another device by paying the difference.
            Fast, fair, and transparent valuations.
          </p>
        </div>

        {/* Main Swap Deal Card */}
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            
            {/* Left: Current Phone */}
            <div className="p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">CURRENT PHONE</span>
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Trade In</span>
              </div>
              <div className="bg-gray-100 rounded-xl h-32 flex items-center justify-center mb-4">
                <Phone className="w-16 h-16 text-gray-400" />
                <span className="ml-3 text-sm text-gray-500">Your Phone</span>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Estimated Value</p>
                <p className="text-2xl font-bold text-gray-900">MWK 650,000</p>
              </div>
            </div>

            {/* Center: Arrow + Text */}
            <div className="p-8 lg:p-10 flex items-center justify-center bg-blue-50 border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <ArrowRight className="w-10 h-10 text-blue-600 rotate-90 lg:rotate-0" />
                </div>
                <p className="text-sm font-semibold text-gray-700">PAY THE</p>
                <p className="text-2xl font-bold text-blue-600">DIFFERENCE</p>
                <div className="mt-3 bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-sm text-gray-500">Estimated Top-Up</span>
                  <p className="text-xl font-bold text-gray-900">MWK 350,000</p>
                </div>
              </div>
            </div>

            {/* Right: Upgrade Phone */}
            <div className="p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">UPGRADE TO</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">New</span>
              </div>
              <div className="bg-gray-100 rounded-xl h-32 flex items-center justify-center mb-4">
                <Smartphone className="w-16 h-16 text-blue-500" />
                <span className="ml-3 text-sm text-blue-600 font-medium">iPhone 15 Pro</span>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold text-gray-900">MWK 1,000,000</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="p-6 bg-gray-50 border-t border-gray-200 text-center">
            <Link
              href="/swap"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Swap</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-gray-400 mt-3">
              *Final valuation depends on physical inspection and store approval
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            How Swap Deals Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supported Brands */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            We Accept All Major Brands
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span
                key={brand.name}
                className={`${brand.color} text-white px-6 py-3 rounded-xl font-medium shadow-sm`}
              >
                {brand.name}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            And many more brands — contact us for a specific valuation
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span>100% Genuine Products</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span>Fast &amp; Fair Valuation</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
            <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span>Best Upgrade Deals</span>
          </div>
        </div>
      </div>
    </section>
  );
}