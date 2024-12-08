import React from 'react';
import { Search, LayoutGrid, List } from 'lucide-react';
import { LabCategory } from '../../types/question';

interface KnowledgeBaseHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortField: 'lastUpdated';
  setSortField: (field: 'lastUpdated') => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  filterCategory: LabCategory | 'all';
  setFilterCategory: (category: LabCategory | 'all') => void;
  labCategories: LabCategory[];
}

export function KnowledgeBaseHeader({
  searchQuery,
  setSearchQuery,
  sortField,
  setSortField,
  viewMode,
  setViewMode,
  filterCategory,
  setFilterCategory,
  labCategories
}: KnowledgeBaseHeaderProps) {
  const handleCategoryClick = (category: LabCategory) => {
    setFilterCategory(filterCategory === category ? 'all' : category);
  };

  return (
    <div className="bg-white border-b border-primary-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary-900">Q&A Knowledge Base</h1>
              <p className="text-primary-600">Manage and update the AI's knowledge foundation</p>
            </div>
            <div className="flex gap-2">
              <button
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  viewMode === 'list'
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-400" />
              <input
                type="text"
                placeholder="Search knowledge base..."
                className="w-full pl-10 pr-4 py-2 border border-primary-200 rounded-md"
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
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}