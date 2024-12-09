import React, { useState } from 'react';
import { KnowledgeBaseHeader } from './KnowledgeBaseHeader';
import { ContentCard } from "../../../../../shared/components/content/ContentCard";
import { KnowledgeListItem } from "../../../../../shared/components/knowledge/KnowledgeListItem";
import { mockKnowledgeBase } from "../../../../../data/mockKnowledgeBase";
import { LabCategory } from "../../../../../shared/types/question";

const labCategories: LabCategory[] = [
  'Microbiology',
  'Chemistry',
  'Hematology',
  'Immunology',
  'Molecular Diagnostics'
];

export function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortField, setSortField] = useState<'lastUpdated'>('lastUpdated');
  const [filterCategory, setFilterCategory] = useState<LabCategory | 'all'>('all');

  const filteredEntries = mockKnowledgeBase.filter(entry => {
    const matchesSearch = 
      entry.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  const sortedEntries = [...filteredEntries].sort((a, b) => {
    return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
  });

  return (
    <div className="min-h-screen bg-primary-50 dark:bg-primary-900">
      <KnowledgeBaseHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortField={sortField}
        setSortField={setSortField}
        viewMode={viewMode}
        setViewMode={setViewMode}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        labCategories={labCategories}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className={viewMode === 'grid' ? 'grid gap-6' : 'space-y-2'}>
          {sortedEntries.map((entry) => (
            viewMode === 'grid' ? (
              <ContentCard
                key={entry.id}
                item={entry}
                variant="knowledge"
                onPrimaryAction={() => console.log('Edit:', entry.id)}
                onSecondaryAction={() => console.log('Delete:', entry.id)}
              />
            ) : (
              <KnowledgeListItem key={entry.id} entry={entry} />
            )
          ))}
        </div>
      </div>
    </div>
  );
}