import React from 'react';
import { Question } from '../../types/question';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-mono text-primary-600">{question.questionNumber}</span>
            <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-sm">
              {question.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-primary-900">{question.title}</h3>
          <p className="text-sm text-primary-600">{question.timestamp}</p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-primary-800 mb-2">Question</h4>
        <p className="text-primary-700">{question.content}</p>
      </div>

      <div className="mb-4 bg-primary-50 rounded-lg p-4">
        <h4 className="font-medium text-primary-800 mb-2">AI Response</h4>
        <p className="text-primary-700">{question.aiResponse?.answer}</p>
        <div className="mt-3 pt-3 border-t border-primary-100">
          <h5 className="text-sm font-medium text-primary-800 mb-1">Reasoning Path</h5>
          <ul className="text-sm text-primary-600">
            {question.aiResponse?.reasoningPath.map((step, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-primary-100">
        <div className="flex items-center gap-2">
          <textarea
            placeholder="Add admin notes..."
            className="px-3 py-2 border border-primary-200 rounded-md w-96 text-sm"
            rows={1}
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-md hover:bg-red-50">
            <XCircle className="w-4 h-4" />
            Reject
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
            <CheckCircle className="w-4 h-4" />
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}