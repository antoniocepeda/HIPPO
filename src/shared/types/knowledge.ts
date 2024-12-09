export interface KnowledgeEntry {
  id: number;
  question: string;
  answer: string;
  lastUpdated: string;
  sources: string[];
  tags: string[];
}