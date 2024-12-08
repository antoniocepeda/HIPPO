import { Question } from '../types/question';
import { KnowledgeEntry } from '../types/knowledge';

export interface ApiResponse<T> {
  data: T;
  error?: string;
  status: number;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
  get: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      const data = await response.json();
      return {
        data,
        status: response.status,
      };
    } catch (error) {
      return {
        data: null as T,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        status: 500,
      };
    }
  },

  post: async <T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return {
        data,
        status: response.status,
      };
    } catch (error) {
      return {
        data: null as T,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        status: 500,
      };
    }
  },
};

// Question-related API calls
export const questionApi = {
  submitQuestion: (question: string, userInfo: unknown) => 
    api.post<{ success: boolean }>('/questions', { question, userInfo }),
  
  getQuestions: () => 
    api.get<Question[]>('/questions'),
  
  reviewQuestion: (questionId: number, approved: boolean) =>
    api.post<{ success: boolean }>(`/questions/${questionId}/review`, { approved }),
};

// Knowledge base API calls
export const knowledgeApi = {
  getEntries: () => 
    api.get<KnowledgeEntry[]>('/knowledge'),
  
  createEntry: (entry: Omit<KnowledgeEntry, 'id'>) =>
    api.post<KnowledgeEntry>('/knowledge', entry),
};
