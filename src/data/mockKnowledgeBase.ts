import { KnowledgeEntry } from '../types/knowledge';

export const mockKnowledgeBase: KnowledgeEntry[] = [
  {
    id: 1,
    question: 'What are normal ALT levels?',
    answer: 'Normal ALT levels typically range from 7-56 U/L for males and 7-45 U/L for females. Variations may occur based on the laboratory and testing methods used. Elevated levels might indicate liver stress or damage.',
    lastUpdated: '2024-03-15',
    sources: ['American Liver Foundation', 'Mayo Clinic Laboratory Reference'],
    tags: ['liver', 'enzymes', 'ALT', 'hepatic function']
  },
  {
    id: 2,
    question: 'How to interpret cholesterol ratios?',
    answer: 'Total cholesterol to HDL ratio should ideally be below 5:1, with optimal levels being closer to 3.5:1. A lower ratio indicates better cardiovascular health. The ratio is calculated by dividing total cholesterol by HDL cholesterol.',
    lastUpdated: '2024-03-14',
    sources: ['American Heart Association', 'National Lipid Association'],
    tags: ['lipids', 'cardiovascular', 'cholesterol', 'HDL', 'ratios']
  },
  {
    id: 3,
    question: 'What is the significance of high MCV?',
    answer: 'An elevated Mean Corpuscular Volume (MCV) indicates macrocytosis, where red blood cells are larger than normal. Common causes include vitamin B12 deficiency, folate deficiency, liver disease, or certain medications. Normal range is typically 80-100 femtoliters.',
    lastUpdated: '2024-03-13',
    sources: ['American Society of Hematology', 'Clinical Laboratory Standards'],
    tags: ['CBC', 'RBC indices', 'anemia', 'macrocytosis']
  },
  {
    id: 4,
    question: 'How to interpret gram stain results?',
    answer: 'Gram staining differentiates bacteria into gram-positive (purple) and gram-negative (pink) based on cell wall composition. Gram-positive bacteria have thick peptidoglycan layers, while gram-negative have thin layers with outer membranes. Shape and arrangement also provide crucial diagnostic information.',
    lastUpdated: '2024-03-12',
    sources: ['Clinical Microbiology Reviews', 'ASM Guidelines'],
    tags: ['bacteria', 'microscopy', 'staining', 'identification']
  },
  {
    id: 5,
    question: 'What do elevated ANA titers indicate?',
    answer: 'Antinuclear Antibody (ANA) titers above 1:80 suggest possible autoimmune activity. Higher titers (>1:320) are more strongly associated with autoimmune conditions like SLE. Pattern type provides additional diagnostic information. False positives can occur.',
    lastUpdated: '2024-03-11',
    sources: ['American College of Rheumatology', 'Clinical Immunology Society'],
    tags: ['autoimmune', 'lupus', 'antibodies', 'rheumatology']
  }
];