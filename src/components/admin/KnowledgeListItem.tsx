import React from 'react';
import { KnowledgeEntry } from '../../types/knowledge';

interface KnowledgeListItemProps {
  entry: KnowledgeEntry;
}

export function KnowledgeListItem({ entry }: KnowledgeListItemProps) {
  return (
    <div className="bg-white border border-primary-100 rounded-lg p-4 hover:border-primary-300 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-mono text-primary-600">KB{String(entry.id).padStart(6, '0')}</span>
          </div>
          <h3 className="font-medium text-primary-900">{entry.question}</h3>
          <p className="text-sm text-primary-600 mt-1">Last updated: {entry.lastUpdated}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors">
            Delete
          </button>
          <button className="px-3 py-1.5 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded-md transition-colors">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}