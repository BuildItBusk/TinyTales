'use client';

import { PlayIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function StartButton() {
  const router = useRouter();

  return (
    <div className="hover:scale-105 transition-transform duration-300">
      <button
        type="button"
        className="
          flex items-center gap-3 w-full max-w-xs mx-auto
          px-6 py-4
          rounded-full
          bg-gradient-to-r from-purple-500 to-pink-800
          shadow-lg
          text-white text-xl font-semibold
          backdrop-blur-sm
          active:scale-95 active:opacity-90
          transition-transform
        "
        onClick={() => router.push('/characters')}
      >
        <span className="flex items-center justify-center bg-white/20 rounded-full p-2">
          <PlayIcon className="h-6 w-6 text-white" />
        </span>
        Lad os komme i gang
      </button>
    </div>
  );
} 