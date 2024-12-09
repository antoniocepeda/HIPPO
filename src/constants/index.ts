import { LabCategory } from '../shared/types/question';

export const LAB_CATEGORIES: LabCategory[] = [
  'Microbiology',
  'Chemistry',
  'Hematology',
  'Immunology',
  'Molecular Diagnostics'
];

export const QUESTION_STATUS = {
  PENDING: 'pending',
  ADMIN_REVIEW: 'admin_review',
  APPROVED: 'approved',
  REJECTED: 'rejected',
} as const;

export const ROUTES = {
  HOME: '/',
  ADMIN: {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin/dashboard',
    REVIEW: '/admin/review',
    KNOWLEDGE_BASE: '/admin/knowledge-base',
  },
} as const;
