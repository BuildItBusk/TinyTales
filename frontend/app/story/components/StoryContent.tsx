'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Title from '../../components/Title';

export default function StoryContent() {
  const [story, setStory] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const characterName = searchParams.get('characterName');
  const plotId = searchParams.get('plotId');

  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const generateStory = async () => {
      if (!characterName || !plotId) {
        setError('Manglende information');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/stories/generate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            characterName,
            plotId
          })
        });

        if (!response.ok) {
          throw new Error('Kunne ikke generere historie');
        }

        const data = await response.text();
        // Replace escaped newlines with actual newlines and handle other escape sequences
        const formattedStory = data
          .replace(/\\n/g, '\n')
          .replace(/\\"/g, '"')
          .replace(/\\'/g, "'")
          .replace(/\\\\/g, '\\');
        setStory(formattedStory);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Der opstod en fejl');
      } finally {
        setLoading(false);
      }
    };

    generateStory();
  }, [characterName, plotId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
        <div className="text-center space-y-2">
          <p className="text-lg text-purple-800 dark:text-purple-200">
            Genererer historie...
          </p>
          <p className="text-sm text-purple-600 dark:text-purple-400">
            Dette kan tage et øjeblik, mens vi skriver en magisk historie
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <>
      <Title text={`${characterName}'s historie`} />

      <div className="
        mt-8
        p-6
        rounded-2xl
        bg-white/70
        dark:bg-gray-900/70
        backdrop-blur-sm
        border
        border-purple-100
        dark:border-purple-800
        text-lg
        text-purple-900
        dark:text-purple-100
        leading-relaxed
        whitespace-pre-wrap
        font-serif
      ">
        {story}
      </div>
    </>
  );
} 