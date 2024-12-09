import React from 'react';
import { KnowledgeEntry } from '../../types/knowledge';
import { BaseListItem } from '../layout/BaseListItem';

interface KnowledgeListItemProps {
  entry: KnowledgeEntry;
}

export function KnowledgeListItem({ entry }: KnowledgeListItemProps) {
  const actions = (
    <>
      <button className="px-3 py-1.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
        Delete
      </button>
      <button className="px-3 py-1.5 text-sm bg-purple-600 dark:bg-purple-700 text-white hover:bg-purple-700 dark:hover:bg-purple-600 rounded-md transition-colors">
        Edit
      </button>
    </>
  );

  return (
    <BaseListItem
      identifier={`KB${String(entry.id).padStart(6, '0')}`}
      title={entry.question}
      timestamp={`Last updated: ${entry.lastUpdated}`}
      actions={actions}
    />
  );
}