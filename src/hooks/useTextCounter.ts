export interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
}

const WORDS_PER_MINUTE = 200;

export function useTextCounter(text: string): TextStats {
  const trimmed = text.trim();

  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;

  const words = trimmed ? trimmed.split(/\s+/).length : 0;

  const sentences = trimmed
    ? trimmed.split(/[.!?]+/).filter(Boolean).length
    : 0;

  const paragraphs = trimmed
    ? trimmed.split(/\n\s*\n/).filter(Boolean).length
    : 0;

  const readingTime = Math.ceil(words / WORDS_PER_MINUTE);

  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    readingTime,
  };
}
