export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function estimateReadingTime(rawMarkdown: string): string {
  const words = rawMarkdown.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min`;
}

export function normalizeCategory(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
