import React from 'react';
import { Question } from '../../types/question';
import { BaseListItem } from '../layout/BaseListItem';

interface QuestionListItemProps {
  question: Question;
}

export function QuestionListItem({ question }: QuestionListItemProps) {
  const tags = (
    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-sm">
      {question.category}
    </span>
  );

  const actions = (
    <>
      <button className="px-3 py-1.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
        Reject
      </button>
      <button className="px-3 py-1.5 text-sm bg-purple-600 dark:bg-purple-700 text-white hover:bg-purple-700 dark:hover:bg-purple-600 rounded-md transition-colors">
        Approve
      </button>
    </>
  );

  return (
    <BaseListItem
      identifier={question.questionNumber}
      title={question.title}
      timestamp={question.timestamp}
      tags={tags}
      actions={actions}
    />
  );
}