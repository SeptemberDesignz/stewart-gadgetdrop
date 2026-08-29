"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Share2, 
  Check,
  Minus,
  Plus
} from "lucide-react";
import { useCart } from "../../context/CartContext";

// Sample product data (same as shop page)
const allProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Phones",
    price: 1250000,
    oldPrice: 1350000,
    rating: 4.8,
    reviews: 124,
    image: "/images/products/iphone-15-pro.jpg",
    inStock: true,
    isNew: true,
    isBestSeller: true,
    discount: 7,
    description: "The iPhone 15 Pro features a titanium design, A17 Pro chip, and a powerful camera system. Experience the ultimate smartphone experience.",
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A17 Pro chip",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      battery: "Up to 23 hours video playback",
      os: "iOS 17",
    },
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Phones",
    price: 1150000,
    oldPrice: 1250000,
    rating: 4.7,
    reviews: 98,
    image: "/images/products/samsung-s24.jpg",
    inStock: true,
    isNew: true,
    isBestSeller: false,
    discount: 8,
    description: "The Galaxy S24 Ultra features a 200MP camera, S Pen, and AI-powered features. The ultimate Android experience.",
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main + 12MP Ultra Wide + 10MP Telephoto",
      battery: "5000mAh",
      os: "Android 14",
    },
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    storage: ["256GB", "512GB", "1TB"],
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "Phones",
    price: 950000,
    oldPrice: 1050000,
    rating: 4.6,
    reviews: 76,
    image: "/images/products/pixel-8-pro.jpg",
    inStock: true,
    isNew: false,
    isBestSeller: false,
    discount: 10,
    description: "The Pixel 8 Pro features Google's Tensor G3 chip, pro-level camera, and AI-powered features.",
    specs: {
      display: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      camera: "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
      battery: "5050mAh",
      os: "Android 14",
    },
    colors: ["Obsidian", "Porcelain", "Bay"],
    storage: ["128GB", "256GB", "512GB"],
  },
  {
    id: 4,
    name: "Apple AirPods Pro 2",
    brand: "Apple",
    category: "Earbuds",
    price: 350000,
    oldPrice: 400000,
    rating: 4.5,
    reviews: 210,
    image: "/images/products/airpods-pro.jpg",
    inStock: true,
    isNew: true,
    isBestSeller: true,
    discount: 12,
    description: "The AirPods Pro 2 feature active noise cancellation, adaptive audio, and USB-C charging.",
    specs: {
      type: "In-Ear",
      connectivity: "Bluetooth 5.3",
      battery: "Up to 6 hours",
      noiseCancellation: "Active",
      charging: "USB-C, MagSafe",
    },
    colors: ["White"],
    storage: ["Standard"],
  },
  {
    id: 5,
    name: "Samsung Galaxy Watch 6",
    brand: "Samsung",
    category: "Smartwatches",
    price: 450000,
    oldPrice: 500000,
    rating: 4.4,
    reviews: 56,
    image: "/images/products/galaxy-watch.jpg",
    inStock: true,
    isNew: false,
    isBestSeller: false,
    discount: 10,
    description: "The Galaxy Watch 6 features fitness tracking, sleep coaching, and a rotating bezel.",
    specs: {
      display: "1.5-inch Super AMOLED",
      processor: "Exynos W930",
      battery: "425mAh",
      os: "Wear OS 4",
      fitness: "Heart rate, GPS, Body composition",
    },
    colors: ["Black", "Silver", "Gold"],
    storage: ["16GB"],
  },
  {
    id: 6,
    name: "Xiaomi Power Bank 20000mAh",
    brand: "Xiaomi",
    category: "Accessories",
    price: 85000,
    oldPrice: 100000,
    rating: 4.3,
    reviews: 45,
    image: "/images/products/power-bank.jpg",
    inStock: true,
    isNew: false,
    isBestSeller: false,
    discount: 15,
    description: "The Xiaomi Power Bank features 20000mAh capacity, 33W fast charging, and USB-C.",
    specs: {
      capacity: "20000mAh",
      ports: "2x USB-A, 1x USB-C",
      fastCharging: "33W",
      batteryType: "Li-Polymer",
      weight: "340g",
    },
    colors: ["Silver"],
    storage: ["Standard"],
  },
];

const relatedProducts = (productId: number, category: string) => {
  return allProducts
    .filter(p => p.id !== productId && p.category === category)
    .slice(0, 4);
};

export default function ProductPage() {
  const { addToCart } = useCart();
  const params = useParams();
  const id = parseInt(params.id as string);
  const product = allProducts.find(p => p.id === id);
  
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-500">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/shop" className="btn-primary inline-block mt-4">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = relatedProducts(product.id, product.category);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      quantity: quantity,
      image: product.image,
      storage: selectedStorage || product.storage[0],
      color: selectedColor || product.colors[0],
    });
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-blue-600">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            
            {/* Left: Product Image */}
            <div>
              <div className="bg-gray-100 rounded-2xl h-80 md:h-96 flex items-center justify-center relative">
                <span className="text-4xl">📱</span>
                <span className="absolute bottom-4 text-sm text-gray-500">{product.name}</span>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400 border-2 border-transparent hover:border-blue-400 cursor-pointer">
                    📱
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                    {product.name}
                  </h1>
                </div>
                <button
                  onClick={() => setIsWishlist(!isWishlist)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Heart className={`w-6 h-6 ${isWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900 ml-1">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500 text-sm">{product.reviews} reviews</span>
                <span className="text-gray-400">|</span>
                <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Price */}
              <div className="mt-4">
                <span className="text-3xl font-bold text-gray-900">
                  MWK {product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span className="ml-3 text-lg text-gray-400 line-through">
                    MWK {product.oldPrice.toLocaleString()}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="ml-3 text-sm font-semibold text-green-600">
                    Save {product.discount}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Storage Options */}
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Storage</p>
                <div className="flex flex-wrap gap-2">
                  {product.storage.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedStorage === storage
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Options */}
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Color</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedColor === color
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6 flex items-center gap-4">
                <p className="text-sm font-medium text-gray-700">Quantity</p>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </button>
                <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200">
                  Buy Now
                </button>
              </div>

              {/* Share */}
              <div className="mt-4 flex items-center gap-3">
                <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex items-center border-b border-gray-100 py-3">
                <span className="text-sm text-gray-500 w-32 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="text-sm text-gray-900 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-gray-100 h-32 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-500">{product.brand}</p>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      MWK {product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}