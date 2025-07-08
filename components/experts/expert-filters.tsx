import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ExpertFiltersProps {
  selectedCategory: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearFilters: () => void;
}

export default function ExpertFilters({
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceChange,
  onClearFilters
}: ExpertFiltersProps) {
  const categories = [
    'All Categories',
    'Pastoral Care',
    'Discipleship',
    'Christian Counseling',
    'Youth Ministry',
    'Spiritual Direction',
    'Prayer Ministry',
    'Missions',
    'Biblical Studies',
    'Women\'s Ministry',
    'Marriage & Family'
  ];

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    onPriceChange([priceRange[0], value]);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </h3>
        <Button variant="ghost" size="sm" onClick={onClearFilters}>
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </div>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Ministry Focus</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category === 'All Categories' ? 'all' : category)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                (category === 'All Categories' && selectedCategory === 'all') ||
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Price Range</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>$0</span>
            <span>${priceRange[1]}/hour</span>
          </div>
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="text-center">
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-600">
              Up to ${priceRange[1]}/hour
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Availability */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Availability</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-900" />
            <span className="ml-2 text-sm text-gray-400">Available Today</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-900" />
            <span className="ml-2 text-sm text-gray-400">This Week</span>
          </label>
        </div>
      </div>
      
      {/* Session Type */}
      <div>
        <h4 className="text-sm font-medium text-gray-300 mb-3">Session Type</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-900" />
            <span className="ml-2 text-sm text-gray-400">Video Call</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-900" />
            <span className="ml-2 text-sm text-gray-400">Chat</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-900" />
            <span className="ml-2 text-sm text-gray-400">In-Person</span>
          </label>
        </div>
      </div>
    </div>
  );
}