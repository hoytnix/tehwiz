/**
 * Calculates estimated word count and reading time in minutes.
 * Standard adult reading speed is approximately 200 - 225 words per minute.
 */
export function calculateReadingStats(content: string, wpm = 200): { wordCount: number; readingTime: number } {
  if (!content) {
    return { wordCount: 0, readingTime: 1 };
  }

  // Strip code blocks and markdown symbols roughly to calculate readable words
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, '') // remove code blocks from word calculation or count them lightly
    .replace(/[#*`_~>[\]()]/g, ' ')
    .trim();

  const words = cleanContent.split(/\s+/).filter(Boolean).length;
  // Account for code block comprehension time if present
  const codeBlocksCount = (content.match(/```/g) || []).length / 2;
  const extraMinutes = Math.floor(codeBlocksCount * 0.5);

  const readingTime = Math.max(1, Math.ceil(words / wpm) + extraMinutes);
  return { wordCount: words, readingTime };
}

/**
 * Formats the remaining reading time based on total reading time and scroll ratio.
 * Medium-style progress indicator behavior:
 * - 0% scrolled: full reading time
 * - Progressing: X min left
 * - Last minute: < 1 min left
 * - Scrolled to bottom: Finished
 */
export function formatRemainingTime(
  totalMinutes: number,
  scrollRatio: number
): {
  minutesLeft: number;
  label: string;
  isComplete: boolean;
} {
  const clampedRatio = Math.max(0, Math.min(1, scrollRatio));

  if (clampedRatio >= 0.95) {
    return {
      minutesLeft: 0,
      label: 'Finished reading',
      isComplete: true
    };
  }

  // Calculate remaining fractional minutes based on how much is left
  const remainingMinutes = Math.ceil(totalMinutes * (1 - clampedRatio));

  if (remainingMinutes <= 1 || clampedRatio > 0.8) {
    return {
      minutesLeft: 1,
      label: '< 1 min left',
      isComplete: false
    };
  }

  return {
    minutesLeft: remainingMinutes,
    label: `${remainingMinutes} min left`,
    isComplete: false
  };
}
