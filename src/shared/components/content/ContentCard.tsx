import React from 'react';
import { Question } from '../../types/question';
import { KnowledgeEntry } from '../../types/knowledge';
import { XCircle, CheckCircle } from 'lucide-react';
import { BaseCard } from '../layout/BaseCard';

type ContentCardProps = {
  item: Question | KnowledgeEntry;
  variant: 'question' | 'knowledge';
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onNotesChange?: (notes: string) => void;
};

export function ContentCard({ 
  item, 
  variant,
  onPrimaryAction,
  onSecondaryAction,
  onNotesChange
}: ContentCardProps) {
  const isQuestion = variant === 'question';
  const question = isQuestion ? item as Question : null;
  const knowledge = !isQuestion ? item as KnowledgeEntry : null;

  // Common data
  const identifier = isQuestion 
    ? (question?.questionNumber || '') 
    : `KB${String(knowledge?.id || '').padStart(6, '0')}`;
  const title = isQuestion ? question?.title : knowledge?.question;
  const content = isQuestion ? question?.content : knowledge?.question;
  const answer = isQuestion ? question?.aiResponse?.answer : knowledge?.answer;
  const timestamp = isQuestion ? question?.timestamp : `Last updated: ${knowledge?.lastUpdated}`;

  // Button text
  const primaryButtonText = isQuestion ? 'Approve' : 'Edit';
  const secondaryButtonText = isQuestion ? 'Reject' : 'Delete';

  return (
    <BaseCard>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-mono text-slate-600 dark:text-primary-300">
              {identifier}
            </span>
            {isQuestion && question?.category && (
              <span className="px-2 py-1 bg-slate-100 dark:bg-primary-700/30 text-slate-700 dark:text-primary-300 rounded-md text-sm">
                {question.category}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-primary-300">{timestamp}</p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-primary-800 dark:text-primary-200 mb-2">Question</h4>
        <p className="text-primary-700 dark:text-primary-300">{content}</p>
      </div>

      <div className="mb-4 bg-slate-50 dark:bg-primary-700/20 rounded-lg p-4">
        <h4 className="font-medium text-primary-800 dark:text-primary-200 mb-2">
          {isQuestion ? 'AI Response' : 'Answer'}
        </h4>
        <p className="text-primary-700 dark:text-primary-300">{answer}</p>
        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-primary-600/30">
          <h5 className="text-sm font-medium text-primary-800 dark:text-primary-200 mb-1">
            {isQuestion ? 'Reasoning Path' : 'Sources'}
          </h5>
          <ul className="text-sm text-slate-600 dark:text-primary-300">
            {isQuestion 
              ? question?.aiResponse?.reasoningPath.map((step, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-primary-400" />
                  {step}
                </li>
              ))
              : knowledge?.sources.map((source, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-primary-400" />
                  {source}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-primary-600/30">
        <div className="flex items-center gap-2">
          {isQuestion ? (
            <textarea
              placeholder="Add admin notes..."
              className="px-3 py-2 border border-slate-200 dark:border-primary-600/30 bg-white/50 dark:bg-primary-700/30 text-primary-900 dark:text-primary-100 rounded-md w-96 text-sm"
              rows={1}
              onChange={(e) => onNotesChange?.(e.target.value)}
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {knowledge?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-slate-100 dark:bg-primary-700/30 text-slate-700 dark:text-primary-300 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <button 
            onClick={onSecondaryAction}
            className="flex items-center gap-2 px-4 py-2 border border-red-200 dark:border-red-700/30 text-red-600 dark:text-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <XCircle className="w-4 h-4" />
            {secondaryButtonText}
          </button>
          <button 
            onClick={onPrimaryAction}
            className="flex items-center gap-2 px-4 py-2 bg-slate-600 dark:bg-primary-600 text-white rounded-md hover:bg-slate-700 dark:hover:bg-primary-700"
          >
            <CheckCircle className="w-4 h-4" />
            {primaryButtonText}
          </button>
        </div>
      </div>
    </BaseCard>
  );
}
