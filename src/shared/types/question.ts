export type LabCategory = 'Microbiology' | 'Chemistry' | 'Hematology' | 'Immunology' | 'Molecular Diagnostics';

export interface Question {
  id: number;
  questionNumber: string;
  title: string;
  content: string;
  category: LabCategory;
  status: 'pending' | 'ai_review' | 'admin_review' | 'approved' | 'rejected';
  timestamp: string;
  aiResponse?: {
    answer: string;
    category: LabCategory;
    reasoningPath: string[];
    sources?: string[];
  };
  adminNotes?: string;
}