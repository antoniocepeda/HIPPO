/**
 * Formats a date string or timestamp into a human-readable format
 */
export const formatDate = (date: string | number | Date): string => {
  const d = new Date(date);
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
    Math.floor((d.getTime() - Date.now()) / (1000 * 60)),
    'minutes'
  );
};

/**
 * Formats a question number with leading zeros
 */
export const formatQuestionNumber = (id: number): string => {
  return `Q${String(id).padStart(6, '0')}`;
};

/**
 * Truncates text to a specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
