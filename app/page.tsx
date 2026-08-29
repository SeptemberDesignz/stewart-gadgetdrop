import SwapDeals from "./components/SwapDeals";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              YOUR NEXT GADGET
              <span className="block heading-gradient">STARTS HERE</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
              Stewart Gadgetdrop — Your trusted destination for premium phones, 
              gadgets, and accessories with easy swap/trade-in deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg">
                Shop Now
              </button>
              <button className="btn-secondary text-lg">
                Swap Your Phone
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SWAP DEALS - Main Feature */}
      <SwapDeals />

      {/* FEATURED PRODUCTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Featured Products</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            Check out our most popular gadgets
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="card p-4">
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Product Image</span>
                </div>
                <h3 className="font-semibold text-gray-900">iPhone 15 Pro</h3>
                <p className="text-sm text-gray-500">Apple</p>
                <div className="mt-2">
                  <span className="text-xl font-bold text-gray-900">MWK 1,250,000</span>
                  <span className="ml-2 text-sm text-gray-400 line-through">MWK 1,350,000</span>
                </div>
                <button className="mt-3 w-full btn-primary text-sm py-2">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}