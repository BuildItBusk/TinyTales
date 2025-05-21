'use client';

import { useEffect, useState } from 'react';
import ContentLayout from '../components/ContentLayout';
import Title from '../components/Title';
import CharacterSelectionIntro from './components/CharacterSelectionIntro';
import CharacterGrid from './components/CharacterGrid';
import PageLayout from '../components/PageLayout';
import BackButton from '../components/BackButton';
import { Character } from '../types/Character';
import { useRouter } from 'next/navigation';

export default function CharacterSelection() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/characters`);
        if (!response.ok) {
          throw new Error('Kunne ikke hente karakterer');
        }
        const data = await response.json();
        setCharacters(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Der opstod en fejl');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleCharacterSelect = (characterId: string) => {
    const selectedCharacter = characters.find(c => c.id === characterId);
    if (selectedCharacter) {
      const encodedName = encodeURIComponent(selectedCharacter.name.trim());
      router.push(`/plots?characterName=${encodedName}`);
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <ContentLayout>
          <div className="text-center">Indlæser karakterer...</div>
        </ContentLayout>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <ContentLayout>
          <div className="text-center text-red-500">{error}</div>
        </ContentLayout>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <BackButton />
      <ContentLayout>
        <Title text="Vælg din fortæller" />

        <CharacterSelectionIntro />

        <CharacterGrid
          characters={characters}
          onSelect={handleCharacterSelect}
        />
      </ContentLayout>
    </PageLayout>
  );
} 