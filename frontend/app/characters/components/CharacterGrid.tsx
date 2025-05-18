'use client';

import CharacterCard from './CharacterCard';
import { Character } from '../../types/Character';

type CharacterGridProps = {
  characters: Character[];
  onSelect: (id: string) => void;
};

export default function CharacterGrid({ characters, onSelect }: CharacterGridProps) {
  return (
    <div className="grid gap-6 max-w-2xl mx-auto w-full">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          {...character}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
} 