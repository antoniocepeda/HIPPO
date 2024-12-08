import React from 'react';
import { Question } from '../../types/question';

interface QuestionListItemProps {
  question: Question;
}

export function QuestionListItem({ question }: QuestionListItemProps) {
  return (
    <div className="bg-white border border-primary-100 rounded-lg p-4 hover:border-primary-300 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-mono text-primary-600">{question.questionNumber}</span>
            <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-sm">
              {question.category}
            </span>
          </div>
          <h3 className="font-medium text-primary-900">{question.title}</h3>
          <p className="text-sm text-primary-600 mt-1">{question.timestamp}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
            Reject
          </button>
          <button className="px-3 py-1.5 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-md transition-colors">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}