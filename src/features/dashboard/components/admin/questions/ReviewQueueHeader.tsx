import React from 'react';
import { Search, LayoutGrid, List } from 'lucide-react';
import { LabCategory } from '../../../../../shared/types/question';
import { StickyHeader } from '../../../../../shared/components/layout/StickyHeader';

interface ReviewQueueHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterCategory: LabCategory | 'all';
  setFilterCategory: (category: LabCategory | 'all') => void;
  sortField: 'timestamp' | 'category';
  setSortField: (field: 'timestamp' | 'category') => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  labCategories: LabCategory[];
}

export function ReviewQueueHeader({
  searchQuery,
  setSearchQuery,
  filterCategory,
  setFilterCategory,
  sortField,
  setSortField,
  viewMode,
  setViewMode,
  labCategories
}: ReviewQueueHeaderProps) {
  const handleCategoryClick = (category: LabCategory) => {
    setFilterCategory(filterCategory === category ? 'all' : category);
  };

  return (
    <StickyHeader>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary-900 dark:text-primary-100">Review Queue</h1>
            <p className="text-primary-600 dark:text-primary-400">Review and moderate AI-generated responses</p>
          </div>
          <div className="flex gap-2">
            <button
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200'
                  : 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-800'
              }`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200'
                  : 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-800'
              }`}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400 dark:text-primary-500" />
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-2 border border-primary-200 dark:border-primary-700/50 bg-white dark:bg-primary-800/30 text-primary-900 dark:text-primary-100 rounded-md placeholder-primary-400 dark:placeholder-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {labCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap ${
                  filterCategory === category
                    ? 'bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200'
                    : 'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </StickyHeader>
  );
}