'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Plot } from '../../types/Plot';
import PlotGrid from './PlotGrid';

export default function PlotSelectionClient() {
  const [plots, setPlots] = useState<Plot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const characterName = searchParams.get('characterName');

  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchPlots = async () => {
      if (!characterName) {
        setError('Ingen karakter valgt');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/plots?characterName=${encodeURIComponent(characterName)}`);
        if (!response.ok) {
          throw new Error('Kunne ikke hente historier');
        }
        const data = await response.json();
        setPlots(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Der opstod en fejl');
      } finally {
        setLoading(false);
      }
    };

    fetchPlots();
  }, [characterName, NEXT_PUBLIC_API_URL]);

  if (loading) {
    return <div className="text-center">Indlæser historier...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!characterName) {
    return <div className="text-center text-red-500">Ingen karakter valgt</div>;
  }

  return (
    <PlotGrid
      plots={plots}
      characterName={characterName}
    />
  );
} 