import React, { useState } from 'react';
import { AdminNav } from "@/components/dashboard/shared/layout/AdminNav";
import { Question, LabCategory } from "@/types/question";
import { ReviewQueueHeader } from './ReviewQueueHeader';
import { needsReviewQuestions } from "@/data/mockQuestions";
import { QuestionCard } from "@/components/dashboard/shared/questions/QuestionCard";
import { QuestionListItem } from "@/components/dashboard/shared/questions/QuestionListItem";

const labCategories: LabCategory[] = [
  'Microbiology',
  'Chemistry',
  'Hematology',
  'Immunology',
  'Molecular Diagnostics'
];

export function ReviewQueue() {
  const [sortField, setSortField] = useState<'timestamp' | 'category'>('timestamp');
  const [filterCategory, setFilterCategory] = useState<LabCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredQuestions = needsReviewQuestions.filter(question => {
    if (filterCategory !== 'all' && question.category !== filterCategory) return false;
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      return (
        question.title?.toLowerCase().includes(searchLower) ||
        question.content?.toLowerCase().includes(searchLower) ||
        question.questionNumber.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    if (sortField === 'category') {
      return a.category.localeCompare(b.category);
    }
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
    <div className="min-h-screen bg-primary-50">
      <AdminNav />
      <ReviewQueueHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortField={sortField}
        setSortField={setSortField}
        viewMode={viewMode}
        setViewMode={setViewMode}
        labCategories={labCategories}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className={viewMode === 'grid' ? 'grid gap-6' : 'space-y-2'}>
          {sortedQuestions.map((question) => (
            viewMode === 'grid' ? (
              <QuestionCard key={question.id} question={question} />
            ) : (
              <QuestionListItem key={question.id} question={question} />
            )
          ))}
        </div>
      </div>
    </div>
  );
}