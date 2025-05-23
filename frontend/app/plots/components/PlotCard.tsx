'use client';

import { Plot } from '../../types/Plot';
import { useRouter } from 'next/navigation';

type PlotCardProps = Plot & {
  characterName: string;
};

export default function PlotCard({ id, title, description, emoji, characterName }: PlotCardProps) {
  const router = useRouter();

  const handleSelect = () => {
    router.push(`/story?characterName=${encodeURIComponent(characterName)}&plotId=${encodeURIComponent(id)}`);
  };

  return (
    <button
      onClick={handleSelect}
      className="
        flex items-start gap-4
        p-6
        rounded-2xl
        bg-white/70
        dark:bg-gray-900/70
        backdrop-blur-sm
        border
        border-purple-100
        dark:border-purple-800
        hover:scale-105
        active:scale-95
        active:opacity-90
        transition-transform
        text-left
        w-full
      "
    >
      <span className="text-4xl">{emoji}</span>
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-purple-800 dark:text-purple-200">
          {title}
        </h2>
        <p className="text-purple-700 dark:text-purple-300">
          {description}
        </p>
      </div>
    </button>
  );
} 