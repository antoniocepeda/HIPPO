import { Question, LabCategory } from '../shared/types/question';

function generateQuestionNumber(id: number): string {
  return `Q${String(id).padStart(6, '0')}`;
}

export const needsReviewQuestions: Question[] = [
  {
    id: 1,
    questionNumber: generateQuestionNumber(1),
    title: "What do elevated ALT levels indicate?",
    content: "My ALT levels are 45 U/L. Is this concerning?",
    category: 'Chemistry',
    status: "admin_review",
    timestamp: "10 minutes ago",
    aiResponse: {
      answer: "Elevated ALT levels may indicate liver inflammation or damage. While 45 U/L is only slightly above the typical range (7-40 U/L), it's not severely elevated. This mild elevation could be temporary and due to recent exercise, certain medications, or dietary changes. However, it's worth monitoring with follow-up testing.",
      category: 'Chemistry',
      reasoningPath: ["Analyzed ALT reference range", "Considered patient context", "Evaluated severity level", "Assessed common causes"],
    }
  },
  {
    id: 2,
    questionNumber: generateQuestionNumber(2),
    title: "Understanding complex CBC results",
    content: "Multiple values outside normal range in my CBC: WBC 11.2, RBC 4.1, Platelets 450. What does this mean?",
    category: 'Hematology',
    status: "admin_review",
    timestamp: "1 hour ago",
    aiResponse: {
      answer: "Your CBC shows mild elevations in WBC and platelets, with slightly low RBC. This pattern could suggest an inflammatory response or infection. The elevated WBC (normal range 4.5-11.0) indicates your immune system is active. Platelets are also high (normal 150-400), which can occur with inflammation.",
      category: 'Hematology',
      reasoningPath: ["Evaluated CBC components", "Cross-referenced ranges", "Analyzed pattern correlation", "Considered systemic implications"],
    }
  },
  {
    id: 3,
    questionNumber: generateQuestionNumber(3),
    title: "Interpreting Blood Culture Results",
    content: "My blood culture shows growth of Staphylococcus epidermidis. Is this serious?",
    category: 'Microbiology',
    status: "admin_review",
    timestamp: "2 hours ago",
    aiResponse: {
      answer: "S. epidermidis is typically a skin contaminant rather than a true pathogen. However, in certain contexts (like having implanted medical devices), it can cause infection. The clinical significance depends on your symptoms and medical history.",
      category: 'Microbiology',
      reasoningPath: ["Identified organism", "Assessed pathogenicity", "Considered clinical context"],
    }
  },
  {
    id: 4,
    questionNumber: generateQuestionNumber(4),
    title: "COVID-19 PCR Test Results",
    content: "My COVID PCR test shows Ct value of 32. What does this mean?",
    category: 'Molecular Diagnostics',
    status: "admin_review",
    timestamp: "3 hours ago",
    aiResponse: {
      answer: "A Ct (cycle threshold) value of 32 indicates a positive but relatively low viral load. Higher Ct values (>35) might indicate very low viral loads or residual RNA. This result suggests you were infected but might be near the end of the infectious period.",
      category: 'Molecular Diagnostics',
      reasoningPath: ["Analyzed Ct value", "Interpreted viral load", "Assessed infectivity implications"],
    }
  },
  {
    id: 5,
    questionNumber: generateQuestionNumber(5),
    title: "Abnormal ANA Test Results",
    content: "My ANA test is positive with a 1:320 titer. What could this indicate?",
    category: 'Immunology',
    status: "admin_review",
    timestamp: "4 hours ago",
    aiResponse: {
      answer: "A positive ANA with 1:320 titer suggests possible autoimmune activity. While this titer is significant, ANA results must be interpreted alongside clinical symptoms and other autoimmune markers. Some healthy individuals can have positive ANA results.",
      category: 'Immunology',
      reasoningPath: ["Evaluated titer level", "Considered autoimmune implications", "Assessed clinical significance"],
    }
  }
];