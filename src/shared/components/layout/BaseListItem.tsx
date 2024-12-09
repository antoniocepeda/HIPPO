import React from 'react';
import { BaseCard } from './BaseCard';

interface BaseListItemProps {
  identifier: string;
  title: string;
  timestamp: string;
  tags?: React.ReactNode;
  actions: React.ReactNode;
}

export function BaseListItem({ identifier, title, timestamp, tags, actions }: BaseListItemProps) {
  return (
    <BaseCard isListItem>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-mono text-purple-600 dark:text-purple-400">{identifier}</span>
            {tags}
          </div>
          <h3 className="font-medium text-primary-900 dark:text-primary-100">{title}</h3>
          <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">{timestamp}</p>
        </div>
        <div className="flex items-center gap-2">
          {actions}
        </div>
      </div>
    </BaseCard>
  );
}
