"use client";

import { useState } from "react";
import ExpertsList from "@/components/experts/experts-list";
import ExpertFilters from "@/components/experts/expert-filters";
import FeaturedExperts from "@/components/experts/featured-experts";
import HowItWorks from "@/components/experts/how-it-works";
import SearchBar from "@/components/experts/search-bar";
import { ExpertType, expertData } from "@/data/experts-data";

export default function TalkToExperts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter experts based on selected criteria
  const filteredExperts = expertData.filter((expert) => {
    // Filter by category
    const categoryMatch = 
      selectedCategory === "all" || 
      expert.categories.includes(selectedCategory);
    
    // Filter by price range
    const priceMatch = 
      expert.pricePerHour >= priceRange[0] && 
      expert.pricePerHour <= priceRange[1];
    
    // Filter by search query
    const searchMatch = 
      searchQuery === "" ||
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      expert.categories.some(category =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return categoryMatch && priceMatch && searchMatch;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setPriceRange([0, 200]);
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] opacity-5 bg-center bg-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Connect with Trusted
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Spiritual Mentors
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Meet prayerful mentors, pastors, and discipleship coaches ready to guide your walk with Christ through personalized spiritual direction.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <SearchBar 
              onSearch={handleSearch}
              onFilterToggle={() => setShowFilters(!showFilters)}
            />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto pt-6 border-t border-gray-800">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">500+</span>
              <span className="text-sm text-gray-400">Spiritual Mentors</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</span>
              <span className="text-sm text-gray-400">Prayer Support</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">15k+</span>
              <span className="text-sm text-gray-400">Mentorship Sessions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">4.8/5</span>
              <span className="text-sm text-gray-400">User Rating</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Experts Section */}
      <FeaturedExperts />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Main Content - Experts Listing */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with Filters */}
            <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <ExpertFilters 
                selectedCategory={selectedCategory}
                priceRange={priceRange}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
                onClearFilters={handleClearFilters}
              />
            </div>
            
            {/* Experts List */}
            <div className="lg:w-3/4">
              <ExpertsList experts={filteredExperts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}