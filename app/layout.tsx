import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stewart Gadgetdrop — Premium Gadgets & Phone Swaps",
  description: "Shop the latest iPhones, Samsung, Google Pixel, accessories and easy phone swap/trade-in deals at Stewart Gadgetdrop.",
  keywords: "phones, gadgets, accessories, phone swap, trade-in, iPhone, Samsung, Google Pixel, Malawi",
  authors: [{ name: "Stewart Gadgetdrop" }],
  openGraph: {
    title: "Stewart Gadgetdrop — Premium Gadgets & Phone Swaps",
    description: "Your trusted destination for premium phones, gadgets, and accessories with easy swap/trade-in deals.",
    url: "https://stewartgadgetdrop.com",
    siteName: "Stewart Gadgetdrop",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}