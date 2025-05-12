'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        absolute
        top-4
        left-4
        p-2
        rounded-full
        bg-white/70
        dark:bg-gray-900/70
        backdrop-blur-sm
        border
        border-purple-100
        dark:border-purple-800
        text-purple-700
        dark:text-purple-300
        hover:scale-105
        active:scale-95
        active:opacity-90
        transition-transform
        z-50
      "
      aria-label="Go back"
    >
      <ArrowLeftIcon className="h-5 w-5" />
    </button>
  );
} 