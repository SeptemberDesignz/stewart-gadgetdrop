"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Shield, 
  Clock, 
  TrendingUp, 
  Star, 
  Users, 
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle
} from "lucide-react";

// Simple image component with fallback
function AboutImage({ 
  src, 
  alt, 
  fill = false, 
  className = "", 
  fallbackText = "Image",
  width,
  height,
  priority = false
}: { 
  src: string; 
  alt: string; 
  fill?: boolean; 
  className?: string;
  fallbackText?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
        <div className="text-center">
          <span className="text-4xl block mb-2">📱</span>
          <span className="text-xs">{fallbackText}</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      width={width}
      height={height}
      priority={priority}
      onError={() => setError(true)}
      unoptimized
    />
  );
}

export default function AboutPage() {
  const features = [
    {
      icon: Shield,
      title: "100% Genuine Products",
      description: "All our gadgets are authentic with full warranty coverage."
    },
    {
      icon: Clock,
      title: "Fast & Reliable Service",
      description: "We process orders quickly and ensure timely delivery."
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Competitive pricing on all our products and services."
    },
    {
      icon: Star,
      title: "Expert Support",
      description: "Our team is knowledgeable and ready to assist you."
    },
    {
      icon: Users,
      title: "Trusted by Many",
      description: "Hundreds of satisfied customers in Malawi and beyond."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We maintain the highest standards of quality."
    }
  ];

  const team = [
    {
      name: "Stewart Gondwe",
      role: "Founder & CEO",
      description: "Passionate about technology and customer service.",
      image: "/images/about/team/stewart.jpg"
    },
    {
      name: "Sarah Mwale",
      role: "Operations Manager",
      description: "Ensures smooth daily operations and customer satisfaction.",
      image: "/images/about/team/sarah.jpg"
    },
    {
      name: "David Banda",
      role: "Tech Specialist",
      description: "Expert in gadget evaluation and repairs.",
      image: "/images/about/team/david.jpg"
    },
    {
      name: "Grace Phiri",
      role: "Customer Relations",
      description: "Dedicated to providing exceptional customer support.",
      image: "/images/about/team/grace.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <AboutImage
            src="/images/about/hero-bg.jpg"
            alt="Stewart Gadgetdrop Store"
            fill
            className="object-cover"
            fallbackText="Add hero image"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Stewart Gadgetdrop
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your trusted destination for premium gadgets and phone swap deals in Malawi.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Our Story with Image */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Story
                </h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Stewart Gadgetdrop was founded with a simple mission: to make premium gadgets 
                  accessible to everyone in Malawi. We started as a small electronics shop in 
                  Lilongwe and have grown into a trusted destination for phones, tablets, 
                  smartwatches, and accessories.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we serve hundreds of customers across Malawi, offering not just 
                  products but also our popular phone swap/trade-in deals. We believe in 
                  providing genuine products, competitive prices, and exceptional customer service.
                </p>
              </div>
              <div className="relative h-64 lg:h-auto bg-blue-50">
                <AboutImage
                  src="/images/about/store-front.jpg"
                  alt="Stewart Gadgetdrop Store Front"
                  fill
                  className="object-cover"
                  fallbackText="Add store front image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              To provide easy access to premium gadgets and innovative phone swap solutions 
              that help our customers upgrade their technology affordably and conveniently.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              To become the leading destination for gadgets and phone swaps in Africa, 
              known for quality, trust, and innovation in technology retail.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Stewart Gadgetdrop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team with Images */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden bg-blue-100">
                  <AboutImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    fallbackText={member.name.charAt(0)}
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            📁 Add team photos to: <code className="bg-gray-100 px-2 py-1 rounded">public/images/about/team/</code>
          </p>
        </section>

        {/* Store Details with Images */}
        <section className="bg-white rounded-2xl shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Store
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-sm text-gray-500">
                      Lilongwe, Malawi<br />
                      Along Kenyatta Road
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Store Hours</h4>
                    <p className="text-sm text-gray-500">
                      Monday - Saturday<br />
                      8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <p className="text-sm text-gray-500">
                      +265 888 888 888<br />
                      info@stewartgadgetdrop.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto bg-gray-100">
              <AboutImage
                src="/images/about/store/interior.jpg"
                alt="Store Interior"
                fill
                className="object-cover"
                fallbackText="Add store interior image"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Integrity</h4>
            </div>
            <p className="text-sm text-gray-600">
              We build trust through honesty and transparency.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Quality</h4>
            </div>
            <p className="text-sm text-gray-600">
              We deliver only the best products and services.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-gray-900">Customer Focus</h4>
            </div>
            <p className="text-sm text-gray-600">
              Your satisfaction is our number one priority.
            </p>
          </div>
        </section>


      </div>
    </div>
  );
}