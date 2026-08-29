"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  X, 
  Star, 
  Heart,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "../context/CartContext";

// Sample product data
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
  },
  {
    id: 7,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "Phones",
    price: 1450000,
    oldPrice: 1550000,
    rating: 4.9,
    reviews: 89,
    image: "/images/products/iphone-15-pro-max.jpg",
    inStock: false,
    isNew: true,
    isBestSeller: true,
    discount: 6,
  },
  {
    id: 8,
    name: "Samsung Galaxy Buds 2",
    brand: "Samsung",
    category: "Earbuds",
    price: 200000,
    oldPrice: 250000,
    rating: 4.2,
    reviews: 34,
    image: "/images/products/galaxy-buds.jpg",
    inStock: true,
    isNew: false,
    isBestSeller: false,
    discount: 20,
  },
];

const categories = ["All", "Phones", "Earbuds", "Smartwatches", "Accessories", "Tablets", "Chargers"];
const brands = ["All", "Apple", "Samsung", "Google", "Xiaomi", "Tecno", "Infinix"];
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating", value: "rating" },
  { label: "Popularity", value: "popularity" },
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Filter products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "popularity":
          return b.reviews - a.reviews;
        default:
          return b.id - a.id; // newest
      }
    });

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      quantity: 1,
      image: product.image,
      storage: "Standard",
      color: "Standard",
    });
    // Show feedback
    const btn = document.getElementById(`add-btn-${product.id}`);
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span class="flex items-center justify-center gap-2">✓ Added!</span>';
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shop</h1>
            <p className="text-gray-500 text-sm">
              {filteredProducts.length} products found
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Filter Toggle - Mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Filters Sidebar */}
          <div className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4 lg:hidden">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Brand</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedBrand === brand
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">MWK</span>
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  />
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedBrand("All");
                  setPriceRange({ min: 0, max: 2000000 });
                  setSearchQuery("");
                }}
                className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort & Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-500">Sort by:</label>
                <select
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </div>
            ) : (
              /* Product Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Product Image */}
                    <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">📱 {product.name}</span>
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {product.discount > 0 && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            -{product.discount}%
                          </span>
                        )}
                        {product.isNew && (
                          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                            NEW
                          </span>
                        )}
                        {product.isBestSeller && (
                          <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                            ⭐ Bestseller
                          </span>
                        )}
                      </div>

                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            wishlist.includes(product.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-400"
                          }`}
                        />
                      </button>

                      {/* Out of Stock Overlay */}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="bg-white text-gray-900 font-bold px-4 py-2 rounded-lg text-sm">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
                          <Link href={`/product/${product.id}`}>
                            <h3 className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-1">
                              {product.name}
                            </h3>
                          </Link>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-1">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                      </div>

                      {/* Price */}
                      <div className="mt-2">
                        <span className="text-xl font-bold text-gray-900">
                          MWK {product.price.toLocaleString()}
                        </span>
                        {product.oldPrice && (
                          <span className="ml-2 text-sm text-gray-400 line-through">
                            MWK {product.oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        id={`add-btn-${product.id}`}
                        onClick={() => handleAddToCart(product)}
                        className={`mt-3 w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
                          product.inStock
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}