import React from 'react';
import { Question } from '../../types/question';
import { ChevronRight, AlertCircle } from 'lucide-react';

interface QuestionQueueProps {
  title: string;
  description: string;
  questions: Partial<Question>[];
}

export function QuestionQueue({ title, description, questions }: QuestionQueueProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-primary-900">{title}</h2>
        <p className="text-sm text-primary-600">{description}</p>
      </div>
      
      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionReviewCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

function QuestionReviewCard({ question }: { question: Partial<Question> }) {
  return (
    <div className="border border-primary-100 rounded-lg p-4 hover:border-primary-300 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium text-primary-900">{question.title}</h3>
          <p className="text-sm text-primary-600 mt-1">{question.timestamp}</p>
        </div>
        {question.aiResponse && (
          <div className="flex items-center gap-2">
            <span className={`text-sm ${
              question.aiResponse.confidenceScore >= 0.99 
                ? 'text-green-600' 
                : question.aiResponse.confidenceScore >= 0.90
                ? 'text-yellow-600'
                : 'text-red-600'
            }`}>
              {(question.aiResponse.confidenceScore * 100).toFixed(1)}% confident
            </span>
            {question.aiResponse.confidenceScore < 0.99 && (
              <AlertCircle className="w-4 h-4 text-yellow-600" />
            )}
          </div>
        )}
      </div>
      
      <p className="text-sm text-primary-700 mb-3">{question.content}</p>
      
      {question.aiResponse && (
        <div className="bg-primary-50 rounded p-3 mb-3">
          <p className="text-sm text-primary-700">{question.aiResponse.answer}</p>
          <div className="mt-2 text-xs text-primary-600">
            Reasoning: {question.aiResponse.reasoningPath.join(' → ')}
          </div>
        </div>
      )}
      
      <div className="flex justify-end gap-2">
        <button className="px-4 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
          Reject
        </button>
        <button className="px-4 py-1 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-md transition-colors">
          Approve
        </button>
      </div>
    </div>
  );
}