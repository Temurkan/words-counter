import { useState } from "react";
import { useTextCounter } from "../hooks/useTextCounter";

const TextCounter = () => {
  const [text, setText] = useState("");
  const stats = useTextCounter(text);

  return (
    <section
      className="max-w-3xl mx-auto p-6"
      aria-label="Word and character counter"
    >
      <h1 className="text-2xl font-bold mb-4">Word & Character Counter</h1>

      <textarea
        aria-label="Text input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full h-48 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
      />

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
        <Stat label="Words" value={stats.words} />
        <Stat label="Characters" value={stats.characters} />
        <Stat label="No spaces" value={stats.charactersNoSpaces} />
        <Stat label="Sentences" value={stats.sentences} />
        <Stat label="Paragraphs" value={stats.paragraphs} />
        <Stat label="Reading time" value={`${stats.readingTime} min`} />
      </div>
    </section>
  );
};

const Stat = ({ label, value }: { label: string; value: number | string }) => (
  <div className="bg-gray-100 rounded-xl p-4 text-center">
    <div className="text-xl font-semibold">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default TextCounter;
