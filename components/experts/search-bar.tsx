import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterToggle?: () => void;
}

export default function SearchBar({ onSearch, onFilterToggle }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Real-time search
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl overflow-hidden focus-within:border-purple-500 transition-colors">
        <div className="pl-4">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for spiritual mentors, specialties, or topics..."
          className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        {onFilterToggle && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onFilterToggle}
            className="mr-2"
          >
            <Filter className="h-4 w-4" />
          </Button>
        )}
        <Button type="submit" size="sm" className="m-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          Search
        </Button>
      </div>
    </form>
  );
}