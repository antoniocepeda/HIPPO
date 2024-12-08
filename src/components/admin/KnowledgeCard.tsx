import React from 'react';
import { KnowledgeEntry } from '../../types/knowledge';
import { CheckCircle, XCircle } from 'lucide-react';

interface KnowledgeCardProps {
  entry: KnowledgeEntry;
}

export function KnowledgeCard({ entry }: KnowledgeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-mono text-primary-600">KB{String(entry.id).padStart(6, '0')}</span>
          </div>
          <h3 className="text-lg font-semibold text-primary-900">{entry.question}</h3>
          <p className="text-sm text-primary-600">Last updated: {entry.lastUpdated}</p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-primary-800 mb-2">Question</h4>
        <p className="text-primary-700">{entry.question}</p>
      </div>

      <div className="mb-4 bg-primary-50 rounded-lg p-4">
        <h4 className="font-medium text-primary-800 mb-2">Answer</h4>
        <p className="text-primary-700">{entry.answer}</p>
        <div className="mt-3 pt-3 border-t border-primary-100">
          <h5 className="text-sm font-medium text-primary-800 mb-1">Sources</h5>
          <ul className="text-sm text-primary-600">
            {entry.sources.map((source, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                {source}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-primary-100">
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-50 text-primary-700 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-md hover:bg-red-50">
            <XCircle className="w-4 h-4" />
            Delete
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
            <CheckCircle className="w-4 h-4" />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}